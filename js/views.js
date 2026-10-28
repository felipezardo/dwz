import { t, getData } from './i18n.js';
import { esc, box, circles, line, rich, para, paras, widgets } from './util.js';

export const STATS = ['str', 'dex', 'int', 'wis', 'cha'];
const CONDS = ['Exhausted', 'Frightened', 'Angry', 'Distracted', 'Insecure'];
const HEART = '<svg viewBox="0 0 100 92" aria-hidden="true"><path d="M50 88C8 55 2 30 24 16c14-8 26 2 26 12 0-10 12-20 26-12 22 14 16 39-26 72Z"/></svg>';
const SHIELD = '<svg viewBox="0 0 100 100" aria-hidden="true"><path d="M8 8h84v44c0 24-20 36-42 44C28 88 8 76 8 52Z"/></svg>';

/* ---------- Ficha (playbook) ---------- */
export function sheetView(c) {
  const ui = t(), { CLASSES, STRUGGLES, BONDS } = getData();
  const k = CLASSES[c.classId], m = c.marks;
  const origins = k.origins.map(o => {
    const lbl = o.label || o.key;
    return `<p class="org"><b>${esc(lbl)}:</b> ${esc(o.prefix)} ${line(`o.${o.key}`, m, lbl)}<small>${esc(o.hint)}</small></p>`;
  }).join('');
  const rels = Array.from({ length: k.relationshipSlots }, (_, i) =>
    `<div class="rel">${line(`rel.${i}.pc`, m, ui.pcName)}${line(`rel.${i}.r`, m, ui.relationship)}<span class="depth">${circles(`rel.${i}.d`, 3, m)}<small>${esc(ui.depth)}</small></span></div>`).join('');
  const sm = k.startingMove;
  const deity = k.deity ? `<div class="rel deity">${line('deity.name', m, ui.deityName)}${line('deity.rel', m, ui.relationship)}<span class="depth">${circles('deity.d', 3, m)}<small>${esc(ui.depth)}</small></span></div>` : '';
  const eq = k.equipment.map((g, gi) => `<p class="gt">${esc(g.title)}</p>` + g.rows.map((row, ri) => row.length > 1
    ? `<div class="eqrow">${row.map((o, oi) => `<span class="eq">${box(`eq.${gi}.${ri}.${oi}.c`, m, '', `data-grp="eq${gi}.${ri}"`)}<span>${rich(o, `eq.${gi}.${ri}.${oi}.t`, m)}</span></span>`).join('')}</div>`
    : `<div class="eq">${box(`eq.${gi}.${ri}.0.c`, m, '', g.exclusive ? `data-grp="eq${gi}"` : '')}<span>${rich(row[0], `eq.${gi}.${ri}.0.t`, m)}</span></div>`).join('')).join('');
  const adv = k.advancements.map((a, ai) => `<p class="advt">${esc(a.title)}</p>` + a.options.map((o, oi) =>
    `<div class="adv">${o.boxes ? Array.from({ length: o.boxes }, (_, b) => box(`adv.${ai}.${oi}.${b}`, m)).join('') : '<span class="dia">◆</span>'}<span>${rich(o.text, `adv.${ai}.${oi}.t`, m)}</span></div>`).join('')).join('');
  const stats = STATS.map(s => {
    const lbl = ui.stats[s];
    return `<div class="stat"><button class="statlbl" data-roll="${s}" title="${esc(ui.rollStatTitle(lbl))}">${esc(lbl)}</button><input type="number" data-k="s.${s}" value="${esc(m['s.' + s] ?? '')}" aria-label="${esc(lbl)}"></div>`;
  }).join('');
  const conds = CONDS.map(n => `<label class="cond">${box(`c.${n}`, m, 'circ')}<i>${esc(ui.conds[n])}</i></label>`).join('');
  return `<div class="paper sheet">
  <section class="col"><h1>${esc(k.title)}</h1><p class="tagline">${esc(k.tagline)}</p>
    <h2>${esc(ui.origins)}</h2>${origins}<h2>${esc(ui.relationships)}</h2>${rels}
    <h2 class="sm">${esc(ui.relExamples)}</h2><p class="ex">${esc(k.relationshipExamples)}</p>
    <h2 class="sm">${esc(ui.treasureTrack)}</h2><p class="tt">${rich(k.treasure.track, 'tt', m)}</p><p class="ex">${esc(k.treasure.note)}</p>
    ${k.spellEffects ? `<h2 class="sm">${esc(ui.spellEffects)}</h2><p class="ex">${esc(k.spellEffects.join(' ')).replace(/(Craft|Law|Light|Nature|Travel|Ofício|Lei|Luz|Natureza|Viagem):/g, '<b>$1:</b>')}</p>` : ''}
    <h2 class="sm">${esc(ui.notes)}</h2><textarea data-k="notes" rows="5" aria-label="${esc(ui.notes)}">${esc(m.notes ?? '')}</textarea></section>
  <section class="col"><h2>${esc(ui.startingMove)}</h2><h3 class="mvname">${esc(sm.name)}</h3>${paras(sm.body, 'sm', m)}${deity}${widgets(sm.widgets, 'sm', m)}
    <h2>${esc(ui.eqAndApp)}</h2>${eq}</section>
  <section class="col"><div class="id"><label>${line('f.name', m, ui.name, 'big')}<small>${esc(ui.name)}</small></label><label>${line('f.pron', m, ui.pronouns)}<small>${esc(ui.andPronouns)}</small></label>
    <p class="ex">${esc(k.nameExamples)}</p></div>
    <div class="lvl"><label><b>${esc(ui.level)}</b> <input type="number" class="ln" min="1" data-k="f.level" value="${esc(m['f.level'] ?? 1)}"></label><span class="xp"><b>XP</b> ${circles('f.xp', 5, m)}</span></div>
    <h2>${esc(ui.statsAndHp)}</h2><p class="ex">${esc(k.statRule)}</p>
    <div class="vitals"><div class="heart">${HEART}<input type="number" data-k="f.hp" value="${esc(m['f.hp'] ?? '')}" aria-label="${esc(ui.hp)}"><small>${esc(ui.hp)}</small></div>${stats}</div>
    <div class="vitals low"><div class="shield">${SHIELD}<input type="number" data-k="f.armor" value="${esc(m['f.armor'] ?? '')}" aria-label="${esc(ui.armor)}"><small>${esc(ui.armor)}</small></div><div class="conds">${conds}</div></div>
    <h2>${esc(ui.advancements)}</h2>${adv}</section></div>
  <div class="paper paths"><h1 class="pg">${esc(ui.pathsTitle(k.title))}</h1><div class="pcols">${k.paths.map((p, pi) => `
    <article class="path"><header>${box(`pa.${pi}`, m)}<div><h3>${esc(p.name)}</h3><p class="tagline">${esc(p.tagline)}</p></div></header>
    ${p.moves.map((mv, mi) => `<div class="pmove ${mv.first ? 'first' : ''}"><h4>${mv.first ? '<span class="chk" aria-hidden="true"></span>' : box(`pa.${pi}.${mi}`, m)}<span>${esc(mv.name)}</span></h4>${paras(mv.body, `pa.${pi}.${mi}`, m)}${widgets(mv.widgets, `pa.${pi}.${mi}`, m)}</div>`).join('')}
    ${widgets(p.widgets, `pa.${pi}`, m)}</article>`).join('')}</div></div>
  <div class="paper picked"><h1 class="pg">${esc(ui.struggleAndBonds)}</h1><div class="pcols">
    <div><h2>${esc(ui.struggle)}</h2>${c.struggle ? struggleCard(STRUGGLES.find(s => s.id === c.struggle), m) : `<p class="empty">${esc(ui.emptyStruggle)}</p>`}</div>
    <div class="span2"><h2>${esc(ui.bonds)}</h2><div class="pcols two">${c.bonds.length ? c.bonds.map(id => bondCard(BONDS.find(b => b.id === id), m)).join('') : `<p class="empty">${esc(ui.emptyBonds)}</p>`}</div></div></div></div>`;
}

/* ---------- Struggles ---------- */
export const struggleCard = (s, m, pick = false, c) => {
  const ui = t();
  return `<article class="card"><header>${pick ? `<input type="checkbox" class="bx" data-pick="struggle" value="${s.id}" ${c.struggle === s.id ? 'checked' : ''} aria-label="${esc(ui.revealAria)} ${esc(s.name)}">` : ''}<h3>${esc(s.name)}</h3></header>
  <p class="tagline">${esc(s.tagline)}</p>${paras(s.body, `st.${s.id}`, m)}${widgets(s.widgets, `st.${s.id}`, m)}</article>`;
};
export const strugglesView = c => {
  const ui = t(), { STRUGGLES, STRUGGLES_INTRO } = getData();
  return `<div class="paper"><h1 class="pg">${esc(ui.strugglesHeading)}</h1><div class="intro">${STRUGGLES_INTRO.map((txt, i) => para(txt, `si.${i}`, c.marks)).join('')}</div>
  <div class="pcols">${STRUGGLES.map(s => struggleCard(s, c.marks, true, c)).join('')}</div></div>`;
};

/* ---------- Bonds ---------- */
const FIELD = /^(Your Cause|Shared Interest|Sua Causa|Interesse Comum):\s*((?:e\.g\.|ex\.).*)?$/;
export const bondCard = (b, m, pick = false, c) => {
  const ui = t();
  return `<article class="card"><header>${pick ? `<input type="checkbox" class="bx" data-pick="bond" value="${b.id}" ${c.bonds.includes(b.id) ? 'checked' : ''} aria-label="${esc(ui.forgeAria)} ${esc(b.name)}">` : ''}<h3>${esc(b.name)}</h3></header>
  <p class="tagline">${esc(b.tagline)}</p>${b.pre.map((txt, i) => { const f = FIELD.exec(txt); return f ? `<p class="org"><b>${f[1]}:</b> ${line(`bd.${b.id}.f${i}`, m, f[1])}<small>${esc(f[2] || '')}</small></p>` : para(txt, `bd.${b.id}.pre${i}`, m); }).join('')}
  ${b.moves.map((mv, mi) => `<div class="pmove ${mv.first ? 'first got' : ''}"><h4>${mv.first ? '<span class="chk on" aria-hidden="true"></span>' : box(`bd.${b.id}.m${mi}`, m)}<span>${esc(mv.name)}</span></h4>${paras(mv.body, `bd.${b.id}.m${mi}`, m)}</div>`).join('')}</article>`;
};
export const bondsView = c => {
  const ui = t(), { BONDS, BONDS_INTRO } = getData();
  return `<div class="paper"><h1 class="pg">${esc(ui.bondsHeading)}</h1><div class="intro">${BONDS_INTRO.map((txt, i) => para(txt, `bi.${i}`, c.marks)).join('')}</div>
  <div class="pcols">${BONDS.map(b => bondCard(b, c.marks, true, c)).join('')}</div></div>`;
};

/* ---------- Moves ---------- */
const ROLLS = { 'defy-danger': STATS, 'sense-motive': ['wis'], 'sneak-past': ['dex'], 'unearth-secrets': ['int'], 'pull-strings': ['cha'], 'trade-blows': ['str', 'dex'], 'cast-a-spell': STATS, 'face-death': ['nothing'], 'spout-lore': ['lore'] };
export const movesView = c => {
  const ui = t(), { MOVES, CHANGING_CLASSES } = getData();
  const card = mv => `<article class="card"><header><h3>${esc(mv.name)}${mv.stat ? ` <small>${esc(mv.stat)}</small>` : ''}</h3></header>${paras(mv.body, `mv.${mv.id}`, c.marks)}
    ${ROLLS[mv.id] ? `<div class="rolls">${mv.id === 'spout-lore' ? `<label>${ui.yesLabel} <input type="number" min="0" max="3" value="0" class="yes ln"></label><button data-move="spout-lore" data-stat="lore">${esc(ui.roll2d6)}</button>` : ROLLS[mv.id].map(s => `<button data-move="${mv.id}" data-stat="${s}">${s === 'nothing' ? esc(ui.roll2d6NoStat) : '+' + esc(ui.stats[s])}</button>`).join('')}</div>` : ''}</article>`;
  const grp = (g, title) => `<h2 class="grp">${esc(title)}</h2><div class="pcols">${MOVES.filter(x => x.group === g).map(card).join('')}</div>`;
  return `<div class="paper"><h1 class="pg">${esc(ui.moveRef)}</h1><p class="bar">${esc(ui.extraMod)} <input type="number" class="ln" id="extraMod" value="0" aria-label="${esc(ui.extraModAria)}"></p>${grp('Core Moves', ui.coreMoves)}${grp('Extra Moves', ui.extraMoves)}
  <h2 class="grp">${esc(ui.changingClasses)}</h2><article class="card wide">${CHANGING_CLASSES.map(txt => `<p>${esc(txt)}</p>`).join('')}</article></div>`;
};
