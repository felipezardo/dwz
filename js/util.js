export const esc = (s = '') => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
export const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

/** Controles de ficha: tudo é guardado em char.marks[chave]. */
export const box = (k, m, cls = '', attrs = '') => `<input type="checkbox" class="bx ${cls}" data-k="${k}" ${m[k] ? 'checked' : ''} ${attrs}>`;
export const circles = (k, n, m) => Array.from({ length: n }, (_, i) => box(`${k}.${i}`, m, 'circ')).join('');
export const line = (k, m, ph = '', cls = '') => `<input type="text" class="ln ${cls}" data-k="${k}" value="${esc(m[k] ?? '')}" placeholder="${esc(ph)}" aria-label="${esc(ph || k)}">`;

const TOKEN = /([☐☑▢])|(\bO{1,6}\b(?=\s+(?:uses?|usos?)\b))|(_{4,})|(✴(?:(?:On|on) a|(?:Com|com|Em|em)(?: um)?) [^\s,;:.]+)|(#[a-zà-ú-]+)|\b(dmg|dano|hp|pv|xp|adv|vant|dis|desv|mag|str|for|dex|des|int|wis|sab|cha|car)\b/g;
/** Texto do material original -> HTML com caixas, círculos, campos e destaques. */
export function rich(text, scope, m) {
  let n = 0;
  return esc(text).replace(TOKEN, (all, bx, uses, blank, tier, tag, sc) => {
    if (bx) return box(`${scope}.${n++}`, m, bx === '▢' ? 'sub' : '');
    if (uses) return `<span class="uses">${circles(`${scope}.${n++}`, uses.length, m)}</span>`;
    if (blank) return line(`${scope}.${n++}`, m, '', 'blank');
    if (tier) return `<span class="tier ${/10\+|12\+/.test(tier) ? 'hit' : /7/.test(tier) ? 'mid' : 'miss'}">${tier}</span>`;
    if (tag) return `<span class="tag">${tag}</span>`;
    return `<span class="sc">${sc}</span>`;
  });
}
const EFF = /^([A-ZÀ-Ú][\wÀ-ÿ’' &-]*?) ?((?:\([+-]\))+)/;
export function para(text, scope, m) {
  let html = rich(text, scope, m), cls = '';
  if (text.startsWith('◆')) cls = 'bul';
  else if (text.startsWith('▢') || text.startsWith('☐')) cls = 'opt';
  else if (/^(Questions|Perguntas):/.test(text)) html = html.replace(/^(Questions|Perguntas):/, '<b>$1:</b>');
  else { const mm = EFF.exec(text); if (mm) html = html.replace(esc(mm[0]), s => `<b class="eff">${s}</b>`); }
  return `<p class="${cls}">${html}</p>`;
}
export const paras = (list, scope, m) => list.map((t, i) => para(t, `${scope}.p${i}`, m)).join('');
export function widgets(list = [], scope, m) {
  return list.map((w, i) => w.type === 'circles'
    ? `<div class="wdg"><b>${esc(w.label)}</b> ${circles(`${scope}.w${i}`, w.n, m)}</div>`
    : `<label class="wdg fld">${line(`${scope}.w${i}`, m, w.label)}<small>${esc(w.label.replace('Deity’s Name Relationship Depth', 'Deity’s Name'))}</small></label>`).join('');
}
