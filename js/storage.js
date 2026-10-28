const KEY = 'dw2.characters.v1';
export const load = () => { try { return JSON.parse(localStorage.getItem(KEY)) || { chars: [], current: null }; } catch { return { chars: [], current: null }; } };
export const save = (db) => localStorage.setItem(KEY, JSON.stringify(db));
export const newChar = (classId, cls) => ({
  id: crypto.randomUUID(), classId, name: '', pronouns: '', level: 1, xp: 0,
  hp: cls.hp, stats: { ...cls.stats }, conds: {}, origins: {}, struggle: null, bonds: [], notes: ''
});
