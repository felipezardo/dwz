const KEY = 'dw2.characters.v2';
export const load = () => { try { return JSON.parse(localStorage.getItem(KEY)) || { chars: [], current: null }; } catch { return { chars: [], current: null }; } };
let saveTimer, pending = null;
const flush = () => { if (!pending) return; try { localStorage.setItem(KEY, JSON.stringify(pending)); } catch { /* cota cheia */ } pending = null; };
export const save = db => { pending = db; clearTimeout(saveTimer); saveTimer = setTimeout(flush, 150); };
addEventListener('pagehide', flush); addEventListener('visibilitychange', () => { if (document.hidden) flush(); });
export function newChar(cls) {
  const marks = { 'f.hp': cls.maxHp, 'f.level': 1 };
  const broke = /^(?:Broke|Falido)((?:\s*☐)+)/.exec(cls.treasure.track);          // "mark all boxes after Broke"
  for (let i = 0; i < (broke ? broke[1].split('☐').length - 1 : 0); i++) marks[`tt.${i}`] = true;
  if (cls.deity) { marks['deity.d.0'] = marks['deity.d.1'] = true; }
  return { id: crypto.randomUUID(), classId: cls.id, struggle: null, bonds: [], marks };
}
