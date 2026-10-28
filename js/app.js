import { CLASSES } from './data/classes.js';
import { load, save, newChar } from './state.js';
import { roll } from './roller.js';
import { esc } from './util.js';
import { sheetView, strugglesView, bondsView, movesView, STATS } from './views.js';

const $ = s => document.querySelector(s);
let db = load(), tab = 'sheet';
const cur = () => db.chars.find(c => c.id === db.current);
const TABS = [['sheet', 'Ficha'], ['struggles', 'Struggles'], ['bonds', 'Bonds'], ['moves', 'Moves']];
const persist = () => save(db);

function render() {
  const c = cur(), sel = $('#charSelect');
  sel.innerHTML = db.chars.map(x => `<option value="${x.id}" ${x.id === db.current ? 'selected' : ''}>${esc(x.marks['f.name'] || 'Sem nome')} — ${esc(CLASSES[x.classId].title)}</option>`).join('');
  $('#delChar').disabled = $('#exportChar').disabled = !c;
  if (!c) { $('#app').innerHTML = `<div class="paper welcome"><h1>Dungeon World 2</h1><p class="tagline">Nenhum personagem ainda.</p><button data-act="new">Criar personagem</button></div>`; return; }
  const view = { sheet: sheetView, struggles: strugglesView, bonds: bondsView, moves: movesView }[tab](c);
  $('#app').innerHTML = `<div class="tabs" role="tablist">${TABS.map(([id, n]) => `<button class="tab" role="tab" aria-selected="${id === tab}" data-tab="${id}">${n}</button>`).join('')}</div>${view}`;
}

function chooseClass() {
  const d = $('#dlg');
  d.innerHTML = `<h2>Escolha a classe</h2><div class="classes">${Object.values(CLASSES).map(k => `<button class="klass" data-class="${k.id}"><b>${esc(k.title)}</b><span>${esc(k.tagline)}</span></button>`).join('')}</div><button class="ghost" data-act="close">Cancelar</button>`;
  d.showModal();
}

document.addEventListener('click', e => {
  const c = cur(), t = e.target.closest('[data-tab],[data-roll],[data-move],[data-class],[data-act]');
  if (!t) return;
  if (t.dataset.tab) { tab = t.dataset.tab; render(); window.scrollTo({ top: 0 }); }
  else if (t.dataset.class) { const n = newChar(CLASSES[t.dataset.class]); db.chars.push(n); db.current = n.id; tab = 'sheet'; $('#dlg').close(); persist(); render(); }
  else if (t.dataset.act === 'new') chooseClass();
  else if (t.dataset.act === 'close') $('#dlg').close();
  else if (t.dataset.act === 'del' && c && confirm('Excluir este personagem?')) { db.chars = db.chars.filter(x => x !== c); db.current = db.chars[0]?.id ?? null; persist(); render(); }
  else if (t.dataset.act === 'export' && c) { const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([JSON.stringify(c, null, 1)], { type: 'application/json' })); a.download = `${c.marks['f.name'] || 'personagem'}.dw2.json`; a.click(); }
  else if (t.dataset.act === 'import') $('#file').click();
  else if (t.dataset.roll && c) roll(t.dataset.roll.toUpperCase(), +c.marks['s.' + t.dataset.roll] || 0, +($('#extraMod')?.value) || 0);
  else if (t.dataset.move && c) {
    const s = t.dataset.stat, name = t.closest('.card').querySelector('h3').firstChild.textContent.trim();
    const mod = s === 'nothing' ? 0 : s === 'lore' ? +t.closest('.rolls').querySelector('.yes').value || 0 : +c.marks['s.' + s] || 0;
    roll(`${name}${STATS.includes(s) ? ' +' + s.toUpperCase() : ''}`, mod, +($('#extraMod')?.value) || 0);
  }
});

document.addEventListener('input', e => {
  const t = e.target, c = cur();
  if (!c) return;
  if (t.dataset.pick) {
    if (t.dataset.pick === 'struggle') c.struggle = t.checked ? t.value : null;
    else c.bonds = t.checked ? [...c.bonds, t.value] : c.bonds.filter(x => x !== t.value);
    persist(); return render();
  }
  if (!t.dataset.k) return;
  c.marks[t.dataset.k] = t.type === 'checkbox' ? t.checked : t.value;
  if (t.type === 'checkbox' && t.checked && t.dataset.grp)       // escolha única dentro do grupo
    document.querySelectorAll(`[data-grp="${t.dataset.grp}"]`).forEach(o => { if (o !== t && o.checked) { o.checked = false; c.marks[o.dataset.k] = false; } });
  if (t.dataset.k === 'f.name') $('#charSelect').selectedOptions[0].textContent = `${t.value || 'Sem nome'} — ${CLASSES[c.classId].title}`;
  persist();
});

$('#charSelect').addEventListener('change', e => { db.current = e.target.value; persist(); render(); });
$('#file').addEventListener('change', async e => {
  try { const c = JSON.parse(await e.target.files[0].text()); if (!CLASSES[c.classId]) throw 0; c.id = crypto.randomUUID(); db.chars.push(c); db.current = c.id; persist(); render(); }
  catch { alert('Arquivo inválido.'); }
  e.target.value = '';
});
render();
