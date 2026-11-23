'use strict';
(() => {
  const popup = document.querySelector('#reply-popup');
  const body = document.querySelector('#reply-body');
  const closeButton = document.querySelector('#reply-close');
  const cache = new Map();
  let anchor, pinned = false, timer, sequence = 0;
  function place() {
    if (!anchor || popup.hidden) return;
    const r = anchor.getBoundingClientRect(), width = popup.offsetWidth, height = popup.offsetHeight;
    popup.style.left = Math.max(8, Math.min(r.left, innerWidth - width - 8)) + 'px';
    const below = r.bottom + 6;
    popup.style.top = Math.max(8, Math.min(below + height > innerHeight && r.top > height + 6 ?
      r.top - height - 6 : below, innerHeight - height - 8)) + 'px';
  }
  function close(restore = false) {
    clearTimeout(timer);
    const old = anchor;
    anchor = undefined;
    pinned = false;
    sequence++;
    popup.hidden = true;
    if (restore) old?.focus();
  }
  function delay() {
    clearTimeout(timer);
    if (!pinned) timer = setTimeout(() => close(), 220);
  }
  async function reply(keyword) {
    if (!cache.has(keyword)) {
      const task = (async () => {
        const res = await fetch('responses/' + encodeURIComponent(keyword + '.md'), {credentials:'omit', redirect:'error'});
        if (!res.ok) throw new Error('Response unavailable');
        const raw = await res.text();
        const lines = raw.replace(/\r\n/g, '\n').replace(/\n$/, '').split('\n');
        const plain = (s, max) => s && s.trim() === s && Array.from(s).length <= max &&
          !/[<>\p{Cc}\p{Cf}]|https?:|www\.|mailto:|javascript:/iu.test(s);
        if (raw.length > 8192 || lines.length !== 3 || lines[1] !== '' || !plain(lines[0],128) || !plain(lines[2],255)) throw new Error('Invalid response');
        return [lines[0], lines[2]];
      })();
      cache.set(keyword,task);
      task.catch(() => cache.delete(keyword));
    }
    return cache.get(keyword);
  }
  async function open(button, pin) {
    if (pinned && !pin) return;
    clearTimeout(timer);
    if (anchor === button && !pin) return;
    anchor = button;
    pinned = pin;
    const current = ++sequence;
    body.textContent = 'Loading response…';
    popup.hidden = false;
    place();
    if (pin) closeButton.focus({preventScroll:true});
    try {
      const lines = await reply(button.dataset.keyword);
      if (current !== sequence) return;
      body.replaceChildren(...lines.map(line => {
        const p = document.createElement('p');
        p.textContent = line;
        return p;
      }));
    } catch {
      if (current !== sequence) return;
      body.textContent = 'Response currently unavailable.';
    }
    place();
  }
  for (const button of document.querySelectorAll('.preview-keyword')) {
    button.addEventListener('pointerenter', e => { if(e.pointerType === 'mouse') open(button,false); });
    button.addEventListener('pointerleave', delay);
    button.addEventListener('click', () => open(button,true));
  }
  popup.addEventListener('pointerenter', () => clearTimeout(timer));
  popup.addEventListener('pointerleave', delay);
  closeButton.addEventListener('click', () => close(true));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !popup.hidden) close(pinned); });
  document.addEventListener('click', e => { if (!popup.hidden && !popup.contains(e.target) && !e.target.closest('.preview-keyword')) close(); });
  addEventListener('resize',place);
  addEventListener('scroll',place,{passive:true});
})();
