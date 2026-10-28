import { CLASSES_EN, CLASSES_PT } from './data/classes.js';
import { STRUGGLES_EN, STRUGGLES_INTRO_EN, STRUGGLES_PT, STRUGGLES_INTRO_PT } from './data/struggles.js';
import { BONDS_EN, BONDS_INTRO_EN, BONDS_PT, BONDS_INTRO_PT } from './data/bonds.js';
import { MOVES_EN, CHANGING_CLASSES_EN, MOVES_PT, CHANGING_CLASSES_PT } from './data/moves.js';

const LANG_KEY = 'dw2.lang';
let currentLang = 'pt-BR';
try {
  const saved = localStorage.getItem(LANG_KEY);
  if (saved === 'en-US' || saved === 'pt-BR') currentLang = saved;
} catch {}

export const getLang = () => currentLang;
export function setLang(lang) {
  currentLang = lang === 'en-US' ? 'en-US' : 'pt-BR';
  try { localStorage.setItem(LANG_KEY, currentLang); } catch {}
  document.documentElement.lang = currentLang;
}

export const UI = {
  'pt-BR': {
    pageTitle: 'Dungeon World 2 — Fichas',
    navAria: 'Personagens',
    selectAria: 'Personagem salvo',
    newBtn: 'Novo',
    importBtn: 'Importar',
    exportBtn: 'Exportar',
    delBtn: 'Excluir',
    langAria: 'Alternar idioma (EN-US / PT-BR)',
    unnamed: 'Sem nome',
    noChar: 'Nenhum personagem ainda.',
    createChar: 'Criar personagem',
    chooseClass: 'Escolha a classe',
    cancel: 'Cancelar',
    confirmDel: 'Excluir este personagem?',
    confirmBtn: 'Excluir',
    invalidFile: 'Arquivo inválido.',
    close: 'Fechar',
    exportDefaultName: 'personagem',
    tabs: [['sheet', 'Ficha'], ['struggles', 'Provações'], ['bonds', 'Vínculos'], ['moves', 'Movimentos']],
    stats: { str: 'FOR', dex: 'DES', int: 'INT', wis: 'SAB', cha: 'CAR' },
    conds: { Exhausted: 'Exausto', Frightened: 'Assustado', Angry: 'Irritado', Distracted: 'Distraído', Insecure: 'Inseguro' },
    rollStatTitle: s => `Rolar 2d6 + ${s}`,
    origins: 'Origens',
    relationships: 'Relacionamentos',
    pcName: 'Nome do PJ',
    relationship: 'Relacionamento',
    depth: 'Profundidade',
    relExamples: 'Exemplos de Relacionamento',
    treasureTrack: 'Trilha de Tesouro & Riqueza',
    spellEffects: 'Exemplos de Efeitos de Feitiço',
    notes: 'Notas',
    startingMove: 'Movimento Inicial',
    deityName: 'Nome da Divindade',
    eqAndApp: 'Equipamento & Aparência',
    name: 'Nome',
    pronouns: 'Pronomes',
    andPronouns: '& Pronomes',
    level: 'Nível',
    statsAndHp: 'Atributos & PV',
    hp: 'PV',
    armor: 'Armadura',
    advancements: 'Avanços',
    pathsTitle: title => `Trilhas d${title.startsWith('A ') ? 'a' : 'o'} ${title.replace(/^(O|A) /, '')}`,
    struggleAndBonds: 'Provação & Vínculos',
    struggle: 'Provação',
    emptyStruggle: 'Nenhuma Provação marcada. Escolha uma na aba Provações.',
    bonds: 'Vínculos',
    emptyBonds: 'Nenhum Vínculo marcado. Escolha na aba Vínculos.',
    strugglesHeading: 'Provações',
    revealAria: 'Revelar',
    bondsHeading: 'Vínculos',
    forgeAria: 'Forjar',
    moveRef: 'Referência de Movimentos',
    extraMod: 'Modificador extra nas rolagens',
    extraModAria: 'Modificador extra',
    coreMoves: 'Movimentos Básicos',
    extraMoves: 'Movimentos Extras',
    changingClasses: 'Mudando de Classe',
    yesLabel: '“Sim”',
    roll2d6: 'Rolar 2d6',
    roll2d6NoStat: 'Rolar 2d6 (sem Atributo)',
    tierHit: '10+  Sucesso total',
    tierMid: '7-9  Sucesso parcial',
    tierMiss: '6-  Falha — marque 1 XP e o MJ faz um Movimento'
  },
  'en-US': {
    pageTitle: 'Dungeon World 2 — Character Sheets',
    navAria: 'Characters',
    selectAria: 'Saved character',
    newBtn: 'New',
    importBtn: 'Import',
    exportBtn: 'Export',
    delBtn: 'Delete',
    langAria: 'Toggle language (EN-US / PT-BR)',
    unnamed: 'Unnamed',
    noChar: 'No characters yet.',
    createChar: 'Create character',
    chooseClass: 'Choose a class',
    cancel: 'Cancel',
    confirmDel: 'Delete this character?',
    confirmBtn: 'Delete',
    invalidFile: 'Invalid file.',
    close: 'Close',
    exportDefaultName: 'character',
    tabs: [['sheet', 'Sheet'], ['struggles', 'Struggles'], ['bonds', 'Bonds'], ['moves', 'Moves']],
    stats: { str: 'STR', dex: 'DEX', int: 'INT', wis: 'WIS', cha: 'CHA' },
    conds: { Exhausted: 'Exhausted', Frightened: 'Frightened', Angry: 'Angry', Distracted: 'Distracted', Insecure: 'Insecure' },
    rollStatTitle: s => `Roll 2d6 + ${s}`,
    origins: 'Origins',
    relationships: 'Relationships',
    pcName: 'PC’s Name',
    relationship: 'Relationship',
    depth: 'Depth',
    relExamples: 'Relationship Examples',
    treasureTrack: 'Treasure Track & Wealth',
    spellEffects: 'Example Spell Effects',
    notes: 'Notes',
    startingMove: 'Starting Move',
    deityName: 'Deity’s Name',
    eqAndApp: 'Equipment & Appearance',
    name: 'Name',
    pronouns: 'Pronouns',
    andPronouns: '& Pronouns',
    level: 'Level',
    statsAndHp: 'Stats & HP',
    hp: 'HP',
    armor: 'Armor',
    advancements: 'Advancements',
    pathsTitle: title => `${title.replace('The ', '')} Paths`,
    struggleAndBonds: 'Struggle & Bonds',
    struggle: 'Struggle',
    emptyStruggle: 'No Struggle marked. Choose one in the Struggles tab.',
    bonds: 'Bonds',
    emptyBonds: 'No Bond marked. Choose in the Bonds tab.',
    strugglesHeading: 'Struggles',
    revealAria: 'Reveal',
    bondsHeading: 'Bonds',
    forgeAria: 'Forge',
    moveRef: 'Move Reference',
    extraMod: 'Extra roll modifier',
    extraModAria: 'Extra modifier',
    coreMoves: 'Core Moves',
    extraMoves: 'Extra Moves',
    changingClasses: 'Changing Classes',
    yesLabel: '“Yes”',
    roll2d6: 'Roll 2d6',
    roll2d6NoStat: 'Roll 2d6 (no Stat)',
    tierHit: '10+  Full Success',
    tierMid: '7-9  Partial Success',
    tierMiss: '6-  Miss — mark 1 XP and the GM makes a Move'
  }
};

export const t = () => UI[currentLang];
export const getData = () => currentLang === 'en-US'
  ? { CLASSES: CLASSES_EN, STRUGGLES: STRUGGLES_EN, STRUGGLES_INTRO: STRUGGLES_INTRO_EN, BONDS: BONDS_EN, BONDS_INTRO: BONDS_INTRO_EN, MOVES: MOVES_EN, CHANGING_CLASSES: CHANGING_CLASSES_EN }
  : { CLASSES: CLASSES_PT, STRUGGLES: STRUGGLES_PT, STRUGGLES_INTRO: STRUGGLES_INTRO_PT, BONDS: BONDS_PT, BONDS_INTRO: BONDS_INTRO_PT, MOVES: MOVES_PT, CHANGING_CLASSES: CHANGING_CLASSES_PT };
