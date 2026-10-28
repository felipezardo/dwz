#!/usr/bin/env python3
"""Gera js/data/*.js a partir dos PDFs oficiais (texto 100% do material original).
Uso: python3 tools/extract.py <pasta_dos_pdfs>   (requer poppler: pdftotext)"""
import subprocess, re, sys, json, os
from collections import Counter
from xml.etree import ElementTree as ET

SRC = sys.argv[1] if len(sys.argv) > 1 else '.'
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'js', 'data')

def raw_lines(pdf, page, sub=False):
    x = subprocess.run(['pdftotext', '-f', str(page), '-l', str(page), '-bbox-layout', os.path.join(SRC, pdf), '-'],
                       capture_output=True, text=True).stdout
    x = re.sub(r'<!DOCTYPE[^>]*>', '', x); x = re.sub(r'xmlns="[^"]*"', '', x)
    out = []
    for l in ET.fromstring(x).iter('line'):
        W = list(l.iter('word')); ws = [w.text for w in W]
        if sub and len(W) > 1 and ws[0] in ('☐', '☑') and float(W[1].get('xMin')) - float(W[0].get('xMax')) < 2.3: ws[0] = '▢'  # caixa colada ao texto = sub-opção
        out.append((float(l.get('xMin')), float(l.get('yMin')), ' '.join(ws), float(l.get('xMax'))))
    return out

def column(x): return 0 if x < 270 else 1 if x < 510 else 2

WIDGET_FIELD = {'Creature', 'Quarry', 'Condition', 'quest', 'Liege', 'Fate Die', 'Weapon Name', 'Appearance', 'Deity’s Name Relationship Depth'}
def widget(t):
    if t in WIDGET_FIELD: return {'type': 'field', 'label': t}
    m = re.match(r'^([A-Za-z’ ]{3,14}?)\s+(O{1,6})(\d?)$', t)
    if m and m.group(1).strip().lower() not in ('o',): return {'type': 'circles', 'label': m.group(1).strip().title() if m.group(1).isupper() else m.group(1).strip(), 'n': len(m.group(2))}
    m = re.match(r'^(O{3,6})\s+([A-Za-z]+)\d?$', t)
    if m: return {'type': 'circles', 'label': m.group(2), 'n': len(m.group(1))}
    m = re.match(r'^(Lifeforce)\s+((?:☐\s*)+)$', t)
    if m: return {'type': 'circles', 'label': 'Lifeforce', 'n': m.group(2).count('☐')}
    return None

def tidy(s):
    s = re.sub(r'✴\s+', '✴', s); s = re.sub(r'\s+([;,.:!?)])', r'\1', s); s = re.sub(r'\(\s+', '(', s)
    return s.strip()

def paragraphs(lines, headings=(), force=(), single=False):
    """lines [(x,y,t)] de uma coluna -> lista de itens: str (parágrafo) | dict (widget)."""
    lines = sorted(lines, key=lambda a: a[1])
    xs = sorted(l[3] for l in lines); right = xs[int(len(xs) * .85)] if xs else 0
    gaps = Counter(round(b[1] - a[1]) for a, b in zip(lines, lines[1:]) if abs(a[0] - b[0]) < 3 and 7 <= b[1] - a[1] < 14)
    lead = gaps.most_common(1)[0][0] if gaps else 10
    items, cur, px, py, pxm = [], None, 0, 0, 0
    hs = {h.lower() for h in headings}
    for x, y, t, xm in lines:
        t = t.strip()
        if not t or re.fullmatch(r'\d', t): continue
        w = widget(t)
        if w: 
            if cur is not None: items.append(cur); cur = None
            items.append(w); continue
        is_h = t.lower() in hs
        new = (cur is None or (single and cur[0] in '☐☑▢') or is_h or cur.lower() in hs or t[0] in '◆☐☑▢' or any(re.match(f, t) for f in force)
               or (x <= px + 5 and (pxm < right - 40 or y - py > lead * 1.45)))
        if new:
            if cur is not None: items.append(cur)
            cur, px = t, x
        else: cur += ' ' + t
        py, pxm = y, xm
    if cur is not None: items.append(cur)
    return [tidy(i) if isinstance(i, str) else i for i in items]

def page_items(pdf, page, headings=(), force=(), skip=(), sub=False):
    L = [l for l in raw_lines(pdf, page, sub) if l[2].strip() not in skip]
    out = []
    for c in range(3): out += paragraphs([l for l in L if column(l[0]) == c], headings, force)
    return out

def clean(s): return re.sub(r'\s+', ' ', s).strip()

# ---------- Classes ----------
HEAD = ['Origins', 'Relationships', 'Relationship Examples', 'Treasure Track & Wealth', 'Starting Move', 'Equipment & Appearance',
        'Name', 'Stats & HP', 'Advancements', 'Notes', 'Example Spell Effects']
SKIP_SHEET = {'Level', 'XP', 'Level XP', '& Pronouns', 'Name & Pronouns', 'PC’s Name', 'Relationship', 'Depth', 'Treasure Track & Wealth'} 
CLASSES = ['barbarian', 'bard', 'cleric', 'druid', 'fighter', 'paladin', 'ranger', 'rogue', 'wizard']

def parse_sheet(page):
    L = raw_lines('Character_Sheets.pdf', page)
    pcs = sum(1 for l in L if l[2].strip() == 'PC’s Name'); deity = any(l[2].strip() == 'Deity’s Name' for l in L)
    L = [l for l in L if not re.match(r'^(HP STR DEX INT WIS CHA|Armor Exhausted.*|Level XP|Level|XP|Name & Pronouns|& Pronouns|PC’s Name|Relationship|Depth|Deity’s Name|((Armor|Exhausted|Frightened|Angry|Distracted|Insecure|HP|STR|DEX|INT|WIS|CHA) ?)+)$', l[2].strip())]
    items = []
    for c in range(3): items += paragraphs([l for l in L if column(l[0]) == c], HEAD, ['^(Ancestry|Community|Background):', r'^e\.g\.'])
    sec, S, extra = None, {}, {}
    for it in items:
        if isinstance(it, str) and it.lower() in {h.lower() for h in HEAD}:
            sec = [h for h in HEAD if h.lower() == it.lower()][0]; S.setdefault(sec, []); continue
        if sec is None: S.setdefault('top', []).append(it)
        else: S[sec].append(it)
    top = [t for t in S['top'] if isinstance(t, str)]
    d = {'title': top[0], 'tagline': top[1], 'relationshipSlots': pcs, 'deity': deity}
    org = []
    P = [p for p in S['Origins'] if isinstance(p, str)]
    for i, p in enumerate(P):
        m = re.match(r'^(Ancestry|Community|Background):\s*(.*)$', p)
        if m: org.append({'key': m.group(1), 'prefix': m.group(2), 'hint': P[i + 1] if i + 1 < len(P) else ''})
    d['origins'] = org
    d['relationshipExamples'] = ' '.join(p for p in S.get('Relationship Examples', []) if isinstance(p, str))
    t = [p for p in S['Treasure Track & Wealth'] if isinstance(p, str)]
    d['treasure'] = {'track': t[0], 'note': t[1] if len(t) > 1 else ''}
    if 'Example Spell Effects' in S: d['spellEffects'] = [p for p in S['Example Spell Effects'] if isinstance(p, str)]
    sm = S['Starting Move']
    nm = sm[0]; fields = []
    if nm.lower().endswith(' liege'): nm = nm[:-6]; fields.append('Liege')
    d['startingMove'] = {'name': nm.title() if nm.isupper() else nm, 'body': [p for p in sm[1:] if isinstance(p, str)],
                         'widgets': [p for p in sm[1:] if isinstance(p, dict)]}
    if fields: d['startingMove']['widgets'].append({'type': 'field', 'label': 'Liege'})
    groups, g = [], None
    for p in [p for p in S['Equipment & Appearance'] if isinstance(p, str)]:
        if p.startswith('☐'):
            opts = [clean(o) for o in re.split(r'☐', p) if o.strip()]
            g['rows'].append(opts) if g['row'] else g['rows'].extend([[o] for o in opts])
        else:
            g = {'title': p, 'rows': [], 'row': 'appearance' in p}; groups.append(g)
    d['equipment'] = [{'title': x['title'], 'rows': x['rows'], 'exclusive': x['row'] or not x['title'].startswith('Choose two')} for x in groups]
    st = ' '.join(p for p in S['Stats & HP'] if isinstance(p, str))
    d['statRule'] = st; d['maxHp'] = int(re.search(r'max hp is (\d+)', st, re.I).group(1))
    nmx = [p for p in S['Name'] if isinstance(p, str) and p.startswith('e.g.')]
    d['nameExamples'] = nmx[0] if nmx else ''
    adv = []
    for p in [p for p in S['Advancements'] if isinstance(p, str)]:
        m = re.match(r'^((?:☐\s*)+)(.*)$', p)
        if m: adv[-1]['options'].append({'boxes': m.group(1).count('☐'), 'text': clean(m.group(2))})
        elif p.startswith('◆'): adv[-1]['options'].append({'boxes': 0, 'text': clean(p[1:])})
        else: adv.append({'title': p, 'options': []})
    d['advancements'] = adv
    return d

def parse_paths(page, name):
    L = [l for l in raw_lines('Character_Sheets.pdf', page, True) if not l[2].strip().endswith(' Paths')]
    items = page_items('Character_Sheets.pdf', page) if False else []
    for c in range(3): items += paragraphs([l for l in L if column(l[0]) == c], single=True)
    H = []
    for it in items:
        if isinstance(it, str) and it.startswith('▢') and H: H[-1]['body'].append(it)
        elif isinstance(it, str) and it.startswith('Mark one as active') and H and H[-1]['name'] == 'The Planar Spheres':
            H.pop(); H[-1]['body'] += ['☐ The Planar Spheres', it]
        elif isinstance(it, str) and re.match(r'^[☐☑] ', it) and it.count('☐') + it.count('☑') == 1:
            nm, wd = clean(it[2:]), []
            m0 = re.match(r'^(.*?)\s+(Condition|Creature|Quarry|quest|Liege|Fate Die)$', nm)
            if m0: nm = m0.group(1); wd = [{'type': 'field', 'label': m0.group(2)}]
            m = re.match(r'^(.*?)\s+(\w+)\s+(O{1,6})$', nm)
            if m: nm = m.group(1); wd += [{'type': 'circles', 'label': m.group(2), 'n': len(m.group(3))}]
            H.append({'mark': it[0], 'name': nm, 'body': [], 'widgets': wd})
        elif H:
            (H[-1]['widgets'] if isinstance(it, dict) else H[-1]['body']).append(it)
    M = []
    for h in H:  # cabeçalhos sem corpo são sub-opções (☐) do move anterior
        if M and not h['body'] and not h['widgets'] and h['mark'] == '☐':
            M[-1]['body'].append('☐ ' + h['name'])
        else: M.append(h)
    H = M
    paths = []
    for i, h in enumerate(H):
        nxt = H[i + 1] if i + 1 < len(H) else None
        if h['mark'] == '☐' and nxt and nxt['mark'] == '☑':
            paths.append({'name': h['name'], 'tagline': ' '.join(h['body']), 'moves': [], 'widgets': h['widgets']})
        elif paths:
            paths[-1]['moves'].append({'name': h['name'], 'first': h['mark'] == '☑', 'body': h['body'], 'widgets': h['widgets']})
    return paths

# ---------- Moves ----------
CORE = ['Aid a PC', 'Cast a Spell', 'Defy Danger', 'Sense Motive', 'Sneak Past', 'Spout Lore', 'Unearth Secrets', 'Comfort or Support',
        'Pull Strings', 'Trade Blows', 'Damage Dice Size', 'End the Session', 'Face Death', 'Level Up', 'Reach Your Limit', 'Make Camp',
        'Perform a Ritual', 'Undertake a Perilous Journey', 'Magnitude']
def parse_moves():
    out, cur, section = [], None, 'Core Moves'
    for pg in (2, 3):
        L = [l for l in raw_lines('Move_Reference.pdf', pg)]
        for c in range(3):
            col = sorted([(x, y, re.sub(r'^Extra Moves\s+', '', t), xm) for x, y, t, xm in L if column(x) == c], key=lambda a: a[1])
            col = [l for l in col if l[2] not in ('Core Moves', 'Extra Moves')]
            for it in paragraphs(col, [], [r'^Mag \d', r'^mag \d']):
                m = None
                for n in CORE:
                    mm = re.match(rf'^{re.escape(n)}(?: ?\((.*)\))?$', it, re.I) if isinstance(it, str) else None
                    if mm: m = (n, mm.group(1)); break
                if m: cur = {'name': m[0] + (' (Mag)' if m[0] == 'Magnitude' else ''), 'stat': m[1], 'body': []}; out.append(cur)
                elif isinstance(it, str) and cur: cur['body'].append(it)
    for m in out: m['id'] = re.sub(r'[^a-z]+', '-', m['name'].lower()).strip('-'); m['group'] = 'Core Moves' if CORE.index(m['name'].replace(' (Mag)', '')) < 10 else 'Extra Moves'
    ch = []
    for it in page_items('Character_Sheets.pdf', 22):
        ch.append(it)
    i = next((k for k, v in enumerate(ch) if isinstance(v, str) and v.lower() == 'changing classes'), None)
    return out, ([x for x in ch[i + 1:] if isinstance(x, str)] if i is not None else [])

# ---------- Struggles ----------
STR = ['Betrayed', 'Disillusioned', 'Amnesia', 'Coward', 'Caretaker', 'Dark Whisperer', 'Lost Heritage', 'Folk Hero', 'Doomed', 'Ominous Dreams',
       'Forbidden Romance', 'Innocent', 'Loner', 'Hunted', 'Indebted', 'Reformed', 'Renowned', 'Traumatized', 'Secret Identity', 'Vengeful', 'Pariah', 'Treasure Obsession']
EFF = re.compile(r'^([A-Z][\w’\' &-]*?) ?(\([+-]\))+')
def parse_entries(pdf, pages, names, mark=''):
    intro, ents, cur, eff = [], [], None, None
    for pg in pages:
        for it in page_items(pdf, pg, names, skip={'Struggles', 'Bonds', 'Fame'}):
            if isinstance(it, str) and re.fullmatch(r'\d', it): continue
            if isinstance(it, str) and (mark + it) in [mark + n for n in names] or (isinstance(it, str) and mark and it[:2] == mark + ' ' and it[2:].strip() in names):
                n = it[2:].strip() if mark and it.startswith(mark) else it
                cur = {'name': n, 'id': re.sub(r'[^a-z]+', '-', n.lower()).strip('-'), 'body': [], 'widgets': []}; ents.append(cur); eff = None
            elif cur is None: 
                if isinstance(it, str): intro.append(it)
            elif isinstance(it, dict): cur['widgets'].append(it)
            else: cur['body'].append(it)
    key = names.index
    ents.sort(key=lambda e: key(e['name']))
    return intro, ents

def parse_struggles():
    intro, ents = parse_entries('Struggles.pdf', (2, 3, 4), STR)
    for e in ents:
        b = e.pop('body'); e['tagline'] = b[0]; e['body'] = b[1:]
        for w in e['widgets']:
            pass
    return intro, ents

BOND = ['Champions', 'Comrades in Arms', 'Romantic Partners', 'Enthusiasts', 'Siblings', 'Rivals', 'Mystical Vessel', 'Student & Teacher']
def parse_bonds():
    intro, ents = parse_entries('Bonds.pdf', (2, 3), BOND, '☐')
    for e in ents:
        b = e.pop('body'); e['tagline'] = b[0]; moves, pre = [], []
        for p in b[1:]:
            m = re.match(r'^([☐☑]) (.*)$', p)
            if m and p.count('☐') + p.count('☑') == 1: moves.append({'name': clean(m.group(2)), 'first': m.group(1) == '☑', 'body': []})
            elif moves: moves[-1]['body'].append(p)
            else: pre.append(p)
        e['pre'] = pre; e['moves'] = moves
    return intro, ents

def w(name, var, data):
    with open(os.path.join(OUT, name), 'w', encoding='utf-8') as f:
        f.write(f'// GERADO por tools/extract.py a partir dos PDFs oficiais. Não edite à mão.\nexport const {var} = {json.dumps(data, ensure_ascii=False, indent=1)};\n')

if __name__ == '__main__':
    os.makedirs(OUT, exist_ok=True)
    cl = {}
    for i, k in enumerate(CLASSES):
        d = parse_sheet(2 + 2 * i); d['id'] = k; d['paths'] = parse_paths(3 + 2 * i, k); cl[k] = d
    w('classes.js', 'CLASSES', cl)
    mv, chg = parse_moves(); w('moves.js', 'MOVES', mv); w('moves.js.tmp', 'x', 0); os.remove(os.path.join(OUT, 'moves.js.tmp'))
    with open(os.path.join(OUT, 'moves.js'), 'a', encoding='utf-8') as f: f.write(f'export const CHANGING_CLASSES = {json.dumps(chg, ensure_ascii=False, indent=1)};\n')
    si, s = parse_struggles(); w('struggles.js', 'STRUGGLES', s)
    with open(os.path.join(OUT, 'struggles.js'), 'a', encoding='utf-8') as f: f.write(f'export const STRUGGLES_INTRO = {json.dumps(si, ensure_ascii=False, indent=1)};\n')
    bi, b = parse_bonds(); w('bonds.js', 'BONDS', b)
    with open(os.path.join(OUT, 'bonds.js'), 'a', encoding='utf-8') as f: f.write(f'export const BONDS_INTRO = {json.dumps(bi, ensure_ascii=False, indent=1)};\n')
    print({k: (len(v['paths']), [len(p['moves']) for p in v['paths']]) for k, v in cl.items()}, len(mv), len(s), len(b))
