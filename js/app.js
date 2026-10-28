import { getLang, setLang, t, getData } from './i18n.js';
import { load, save, newChar } from './state.js';
import { roll } from './roller.js';
import { esc } from './util.js';
import { sheetView, strugglesView, bondsView, movesView, STATS } from './views.js';

const $ = s => document.querySelector(s);
let db = load(), tab = 'sheet', dlgMode = null;
const cur = () => db.chars.find(c => c.id === db.current);
const persist = () => save(db);

function syncHeader() {
  const ui = t(), lang = getLang();
  document.title = ui.pageTitle;
  document.documentElement.lang = lang;
  $('#topNav')?.setAttribute('aria-label', ui.navAria);
  $('#charSelect')?.setAttribute('aria-label', ui.selectAria);
  if ($('#btnNew')) $('#btnNew').textContent = ui.newBtn;
  if ($('#btnImport')) $('#btnImport').textContent = ui.importBtn;
  if ($('#exportChar')) $('#exportChar').textContent = ui.exportBtn;
  if ($('#delChar')) $('#delChar').textContent = ui.delBtn;
  if ($('#langSwitch')) $('#langSwitch').setAttribute('aria-label', ui.langAria);
  document.querySelectorAll('[data-lang-flag]').forEach(el => {
    el.classList.toggle('active', el.dataset.langFlag === lang);
  });
}

function render() {
  syncHeader();
  const ui = t(), { CLASSES } = getData();
  const c = cur(), sel = $('#charSelect');
  sel.innerHTML = db.chars.map(x => `<option value="${x.id}" ${x.id === db.current ? 'selected' : ''}>${esc(x.marks['f.name'] || ui.unnamed)} — ${esc(CLASSES[x.classId].title)}</option>`).join('');
  $('#delChar').disabled = $('#exportChar').disabled = !c;
  if (!c) { $('#app').innerHTML = `<div class="paper welcome"><h1>Dungeon World 2</h1><p class="tagline">${esc(ui.noChar)}</p><button data-act="new">${esc(ui.createChar)}</button></div>`; return; }
  const view = { sheet: sheetView, struggles: strugglesView, bonds: bondsView, moves: movesView }[tab](c);
  $('#app').innerHTML = `<div class="tabs" role="tablist">${ui.tabs.map(([id, n]) => `<button class="tab" role="tab" aria-selected="${id === tab}" data-tab="${id}">${esc(n)}</button>`).join('')}</div>${view}`;
}

function chooseClass() {
  const ui = t(), { CLASSES } = getData(), d = $('#dlg');
  dlgMode = 'class';
  d.innerHTML = `<h2>${esc(ui.chooseClass)}</h2><div class="classes">${Object.values(CLASSES).map(k => `<button class="klass" data-class="${k.id}"><b>${esc(k.title)}</b><span>${esc(k.tagline)}</span></button>`).join('')}</div><button class="ghost" data-act="close">${esc(ui.cancel)}</button>`;
  if (!d.open) d.showModal();
}

function showConfirmDel() {
  const ui = t(), d = $('#dlg');
  dlgMode = 'del';
  d.innerHTML = `<h3>${esc(ui.confirmDel)}</h3><div class="dlg-actions"><button class="ghost" data-act="close">${esc(ui.cancel)}</button><button data-act="confirm-del">${esc(ui.confirmBtn)}</button></div>`;
  if (!d.open) d.showModal();
}

function showNotice(msg) {
  const ui = t(), d = $('#dlg');
  dlgMode = 'notice';
  d.innerHTML = `<h3>${esc(msg)}</h3><div class="dlg-actions"><button data-act="close">${esc(ui.close)}</button></div>`;
  if (!d.open) d.showModal();
}

document.addEventListener('click', e => {
  const c = cur(), { CLASSES } = getData(), ui = t();
  const flagEl = e.target.closest('[data-lang-flag]');
  const tEl = e.target.closest('[data-tab],[data-roll],[data-move],[data-class],[data-act]');
  if (!tEl) return;
  if (tEl.dataset.act === 'lang') {
    const next = flagEl ? flagEl.dataset.langFlag : (getLang() === 'pt-BR' ? 'en-US' : 'pt-BR');
    setLang(next === getLang() ? (getLang() === 'pt-BR' ? 'en-US' : 'pt-BR') : next);
    render();
    if ($('#dlg').open && dlgMode === 'class') chooseClass();
    else if ($('#dlg').open && dlgMode === 'del') showConfirmDel();
    return;
  }
  if (tEl.dataset.tab) { tab = tEl.dataset.tab; render(); window.scrollTo({ top: 0 }); }
  else if (tEl.dataset.class) { const n = newChar(CLASSES[tEl.dataset.class]); db.chars.push(n); db.current = n.id; tab = 'sheet'; $('#dlg').close(); dlgMode = null; persist(); render(); }
  else if (tEl.dataset.act === 'new') chooseClass();
  else if (tEl.dataset.act === 'close') { $('#dlg').close(); dlgMode = null; }
  else if (tEl.dataset.act === 'del' && c) showConfirmDel();
  else if (tEl.dataset.act === 'confirm-del' && c) { db.chars = db.chars.filter(x => x !== c); db.current = db.chars[0]?.id ?? null; $('#dlg').close(); dlgMode = null; persist(); render(); }
  else if (tEl.dataset.act === 'export' && c) { const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([JSON.stringify(c, null, 1)], { type: 'application/json' })); a.download = `${c.marks['f.name'] || ui.exportDefaultName}.dw2.json`; a.click(); }
  else if (tEl.dataset.act === 'import') $('#file').click();
  else if (tEl.dataset.roll && c) roll(ui.stats[tEl.dataset.roll] || tEl.dataset.roll.toUpperCase(), +c.marks['s.' + tEl.dataset.roll] || 0, +($('#extraMod')?.value) || 0);
  else if (tEl.dataset.move && c) {
    const s = tEl.dataset.stat, name = tEl.closest('.card').querySelector('h3').firstChild.textContent.trim();
    const mod = s === 'nothing' ? 0 : s === 'lore' ? +tEl.closest('.rolls').querySelector('.yes').value || 0 : +c.marks['s.' + s] || 0;
    roll(`${name}${STATS.includes(s) ? ' +' + ui.stats[s] : ''}`, mod, +($('#extraMod')?.value) || 0);
  }
});

document.addEventListener('input', e => {
  const tEl = e.target, c = cur(), { CLASSES } = getData(), ui = t();
  if (!c) return;
  if (tEl.dataset.pick) {
    if (tEl.dataset.pick === 'struggle') c.struggle = tEl.checked ? tEl.value : null;
    else c.bonds = tEl.checked ? [...c.bonds, tEl.value] : c.bonds.filter(x => x !== tEl.value);
    persist(); return render();
  }
  if (!tEl.dataset.k) return;
  c.marks[tEl.dataset.k] = tEl.type === 'checkbox' ? tEl.checked : tEl.value;
  if (tEl.type === 'checkbox' && tEl.checked && tEl.dataset.grp)       // escolha única dentro do grupo
    document.querySelectorAll(`[data-grp="${tEl.dataset.grp}"]`).forEach(o => { if (o !== tEl && o.checked) { o.checked = false; c.marks[o.dataset.k] = false; } });
  if (tEl.dataset.k === 'f.name') $('#charSelect').selectedOptions[0].textContent = `${tEl.value || ui.unnamed} — ${CLASSES[c.classId].title}`;
  persist();
});

$('#charSelect').addEventListener('change', e => { db.current = e.target.value; persist(); render(); });
$('#file').addEventListener('change', async e => {
  const { CLASSES } = getData(), ui = t();
  try { const c = JSON.parse(await e.target.files[0].text()); if (!CLASSES[c.classId]) throw 0; c.id = crypto.randomUUID(); db.chars.push(c); db.current = c.id; persist(); render(); }
  catch { showNotice(ui.invalidFile); }
  e.target.value = '';
});
render();
