import { getLang, setLang, t, getData } from './i18n.js';
import { load, save, newChar } from './state.js';
import { roll } from './roller.js';
import { esc } from './util.js';
import { sheetView, strugglesView, bondsView, movesView, homeView, portrait, STATS } from './views.js';

const $ = s => document.querySelector(s);
let db = load(), tab = 'sheet', dlgMode = null;
const cur = () => db.chars.find(c => c.id === db.current);
const persist = () => save(db);

/* ---------- Rotas: #/ (início) e #/c/<id> (ficha) ---------- */
const hashId = () => (/^#\/c\/(.+)$/.exec(location.hash) || [])[1] || null;
const go = id => { const h = id ? `#/c/${id}` : '#/'; if (location.hash === h) route(); else location.hash = h; };
function route() {
  const id = hashId();
  db.current = db.chars.some(c => c.id === id) ? id : null;
  if (id && !db.current) history.replaceState(null, '', '#/');
  tab = 'sheet'; render(); window.scrollTo({ top: 0 });
}
window.addEventListener('hashchange', route);

function syncHeader(home) {
  const ui = t(), lang = getLang();
  document.title = ui.pageTitle;
  document.documentElement.lang = lang;
  $('#topNav')?.setAttribute('aria-label', ui.navAria);
  $('#btnHome').textContent = ui.home;
  $('#exportChar').textContent = ui.exportBtn;
  $('#delChar').textContent = ui.delBtn;
  $('#langSwitch')?.setAttribute('aria-label', ui.langAria);
  $('#btnHome').hidden = $('#exportChar').hidden = $('#delChar').hidden = home;
  document.body.classList.toggle('is-home', home);
  document.querySelectorAll('[data-lang-flag]').forEach(el => el.classList.toggle('active', el.dataset.langFlag === lang));
}

function render() {
  const c = cur(), ui = t();
  syncHeader(!c);
  if (!c) { $('#app').innerHTML = homeView(db.chars); return; }
  const view = { sheet: sheetView, struggles: strugglesView, bonds: bondsView, moves: movesView }[tab](c);
  $('#app').innerHTML = `<div class="tabs" role="tablist">${ui.tabs.map(([id, n]) => `<button class="tab" role="tab" aria-selected="${id === tab}" data-tab="${id}">${esc(n)}</button>`).join('')}</div>${view}`;
}

/* ---------- Diálogos ---------- */
function openDlg(mode, html) { const d = $('#dlg'); dlgMode = mode; d.innerHTML = html; if (!d.open) d.showModal(); }
function closeDlg() { $('#dlg').close(); dlgMode = null; }
function chooseClass() {
  const ui = t(), { CLASSES } = getData();
  openDlg('class', `<h2>${esc(ui.chooseClass)}</h2><div class="classes">${Object.values(CLASSES).map(k => `<button class="klass" data-class="${k.id}"><b>${esc(k.title)}</b><span>${esc(k.tagline)}</span></button>`).join('')}</div><button class="ghost" data-act="close">${esc(ui.cancel)}</button>`);
}
const showConfirmDel = () => { const ui = t(); openDlg('del', `<h3>${esc(ui.confirmDel)}</h3><div class="dlg-actions"><button class="ghost" data-act="close">${esc(ui.cancel)}</button><button data-act="confirm-del">${esc(ui.confirmBtn)}</button></div>`); };
const showNotice = msg => { const ui = t(); openDlg('notice', `<h3>${esc(msg)}</h3><div class="dlg-actions"><button data-act="close">${esc(ui.close)}</button></div>`); };
function showPhotoLink() {
  const ui = t();
  openDlg('photo', `<form id="photoForm"><h3>${esc(ui.photoLinkTitle)}</h3><p class="ex">${esc(ui.photoLinkHint)}</p><input type="url" class="ln" id="photoUrl" placeholder="https://…" required autocomplete="off" aria-label="${esc(ui.photoLinkTitle)}">
    <div class="dlg-actions"><button type="button" class="ghost" data-act="close">${esc(ui.cancel)}</button><button type="submit">${esc(ui.photoApply)}</button></div></form>`);
  setTimeout(() => $('#photoUrl')?.focus(), 50);
}

/* ---------- Foto do personagem ---------- */
const loadImg = src => new Promise((ok, bad) => { const i = new Image(); i.onload = () => ok(i); i.onerror = bad; i.referrerPolicy = 'no-referrer'; i.src = src; });
async function shrink(file, max = 480) {            // reduz para caber no localStorage
  const url = URL.createObjectURL(file);
  try {
    const i = await loadImg(url), r = Math.min(1, max / Math.max(i.width, i.height));
    const cv = Object.assign(document.createElement('canvas'), { width: Math.round(i.width * r), height: Math.round(i.height * r) });
    const x = cv.getContext('2d'); x.fillStyle = '#fff'; x.fillRect(0, 0, cv.width, cv.height); x.drawImage(i, 0, 0, cv.width, cv.height);
    return cv.toDataURL('image/jpeg', .85);
  } finally { URL.revokeObjectURL(url); }
}
function setPhoto(c, value) {
  if (value) c.photo = value; else delete c.photo;
  c.updated = Date.now(); persist();
  const p = document.querySelector('.portrait'); if (p) p.outerHTML = portrait(c);
}

/* ---------- Eventos ---------- */
document.addEventListener('click', e => {
  const c = cur(), { CLASSES } = getData(), ui = t();
  const tEl = e.target.closest('[data-tab],[data-roll],[data-move],[data-class],[data-act]');
  if (!tEl) return;
  const act = tEl.dataset.act;
  if (act === 'lang') {
    const flag = e.target.closest('[data-lang-flag]')?.dataset.langFlag, cl = getLang();
    setLang(flag && flag !== cl ? flag : (cl === 'pt-BR' ? 'en-US' : 'pt-BR'));
    render();
    if ($('#dlg').open) ({ class: chooseClass, del: showConfirmDel, photo: showPhotoLink }[dlgMode] || closeDlg)();
    return;
  }
  if (tEl.dataset.tab) { tab = tEl.dataset.tab; render(); window.scrollTo({ top: 0 }); }
  else if (tEl.dataset.class) { const n = newChar(CLASSES[tEl.dataset.class]); n.updated = Date.now(); db.chars.push(n); closeDlg(); persist(); go(n.id); }
  else if (act === 'new') chooseClass();
  else if (act === 'home') go(null);
  else if (act === 'close') closeDlg();
  else if (act === 'del' && c) showConfirmDel();
  else if (act === 'confirm-del' && c) { db.chars = db.chars.filter(x => x !== c); closeDlg(); persist(); go(null); }
  else if (act === 'export' && c) { const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([JSON.stringify(c, null, 1)], { type: 'application/json' })); a.download = `${c.marks['f.name'] || ui.exportDefaultName}.dw2.json`; a.click(); }
  else if (act === 'import') $('#file').click();
  else if (act === 'photo-up' && c) $('#photoFile').click();
  else if (act === 'photo-link' && c) showPhotoLink();
  else if (act === 'photo-del' && c) setPhoto(c, null);
  else if (tEl.dataset.roll && c) roll(ui.stats[tEl.dataset.roll] || tEl.dataset.roll.toUpperCase(), +c.marks['s.' + tEl.dataset.roll] || 0, +($('#extraMod')?.value) || 0);
  else if (tEl.dataset.move && c) {
    const s = tEl.dataset.stat, name = tEl.closest('.card').querySelector('h3').firstChild.textContent.trim();
    const mod = s === 'nothing' ? 0 : s === 'lore' ? +tEl.closest('.rolls').querySelector('.yes').value || 0 : +c.marks['s.' + s] || 0;
    roll(`${name}${STATS.includes(s) ? ' +' + ui.stats[s] : ''}`, mod, +($('#extraMod')?.value) || 0);
  }
});
document.addEventListener('keydown', e => { if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('.pframe')) { e.preventDefault(); $('#photoFile').click(); } });
document.addEventListener('error', e => { if (e.target.matches?.('.pframe img, .ph img')) e.target.remove(); }, true);   // imagem quebrada -> silhueta

document.addEventListener('input', e => {
  const tEl = e.target, c = cur();
  if (!c) return;
  if (tEl.dataset.pick) {
    if (tEl.dataset.pick === 'struggle') c.struggle = tEl.checked ? tEl.value : null;
    else c.bonds = tEl.checked ? [...c.bonds, tEl.value] : c.bonds.filter(x => x !== tEl.value);
    c.updated = Date.now(); persist(); return render();
  }
  if (!tEl.dataset.k) return;
  c.marks[tEl.dataset.k] = tEl.type === 'checkbox' ? tEl.checked : tEl.value;
  if (tEl.type === 'checkbox' && tEl.checked && tEl.dataset.grp)       // escolha única dentro do grupo
    document.querySelectorAll(`[data-grp="${tEl.dataset.grp}"]`).forEach(o => { if (o !== tEl && o.checked) { o.checked = false; c.marks[o.dataset.k] = false; } });
  c.updated = Date.now(); persist();
});

document.addEventListener('submit', async e => {
  if (e.target.id !== 'photoForm') return;
  e.preventDefault();
  const c = cur(), url = $('#photoUrl').value.trim();
  try { await loadImg(url); setPhoto(c, url); closeDlg(); } catch { showNotice(t().photoError); }
});
$('#photoFile').addEventListener('change', async e => {
  const f = e.target.files[0], c = cur(); e.target.value = '';
  if (!f || !c) return;
  try { setPhoto(c, await shrink(f)); } catch { showNotice(t().photoError); }
});
$('#file').addEventListener('change', async e => {
  const { CLASSES } = getData(), ui = t();
  try { const c = JSON.parse(await e.target.files[0].text()); if (!CLASSES[c.classId]) throw 0; c.id = crypto.randomUUID(); c.updated = Date.now(); db.chars.push(c); persist(); go(c.id); }
  catch { showNotice(ui.invalidFile); }
  e.target.value = '';
});
route();
