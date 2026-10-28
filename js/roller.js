import { t } from './i18n.js';

const d6 = () => 1 + Math.floor(Math.random() * 6);
const PIPS = { 1: [4], 2: [0, 8], 3: [0, 4, 8], 4: [0, 2, 6, 8], 5: [0, 2, 4, 6, 8], 6: [0, 2, 3, 5, 6, 8] };
const face = n => `<div class="pips">${Array.from({ length: 9 }, (_, i) => `<i class="${PIPS[n].includes(i) ? 'on' : ''}"></i>`).join('')}</div>`;
const tier = tot => {
  const ui = t();
  return tot >= 10 ? [ui.tierHit, 'hit'] : tot >= 7 ? [ui.tierMid, 'mid'] : [ui.tierMiss, 'miss'];
};
const history = [];
export function roll(label, mod, extra = 0, plain = false) {
  const ui = t();
  const box = document.getElementById('roller'); box.hidden = false; box.className = 'roller';
  const m = mod + extra, sign = v => (v >= 0 ? '+' : '') + v;
  box.innerHTML = `<button class="x" aria-label="${ui.close}">×</button><h3>${label} <small>${sign(m)}</small></h3>
    <div class="dice"><div class="die spin">${face(6)}</div><div class="die spin">${face(1)}</div></div>
    <div class="total">…</div><div class="out"></div><ol class="hist">${history.map(h => `<li class="${h.c}">${h.l}: ${h.t}</li>`).join('')}</ol>`;
  const dice = [...box.querySelectorAll('.die')];
  const tick = setInterval(() => dice.forEach(d => d.innerHTML = face(d6())), 80);
  setTimeout(() => {
    clearInterval(tick);
    const r = [d6(), d6()], total = r[0] + r[1] + m, [txt, cls] = tier(total);
    dice.forEach((d, i) => { d.innerHTML = face(r[i]); d.classList.remove('spin'); d.classList.add('land'); });
    box.querySelector('.total').textContent = `${r[0]} + ${r[1]} ${sign(m)} = ${total}`;
    const out = box.querySelector('.out'); out.className = `out ${cls}`; out.textContent = txt;
    box.classList.add(cls);
    history.unshift({ l: label, t: total, c: cls }); history.length = Math.min(history.length, 5);
  }, 1000);
  box.querySelector('.x').onclick = () => box.hidden = true;
}
