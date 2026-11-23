'use strict';
(() => {
  const popup = document.querySelector('#reply-popup');
  const body = document.querySelector('#reply-body');
  const closeButton = document.querySelector('#reply-close');
  const fake = globalThis.RightToReplyPreview;
  const cache = new Map();
  let anchor, pinned = false, timer, sequence = 0;
  function shuffled(items) {
    const result = [...items];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }
  function place() {
    if (!anchor || popup.hidden) return;
    const r = anchor.getBoundingClientRect();
    const below = r.bottom + 6;
    const roomBelow = Math.max(0, innerHeight - 8 - below);
    const roomAbove = Math.max(0, r.top - 14);
    const limit = Math.min(innerHeight * .72, 520);
    // Never place the overlay over its trigger: a hover must not intercept
    // the click that pins the popup. Scroll replies inside the available space.
    const above = Math.min(popup.scrollHeight + 4, limit) > roomBelow && roomAbove > roomBelow;
    const room = above ? roomAbove : roomBelow;
    popup.style.maxHeight = Math.min(limit, room) + 'px';
    const width = popup.offsetWidth, height = popup.offsetHeight;
    popup.style.left = Math.max(8, Math.min(r.left, innerWidth - width - 8)) + 'px';
    popup.style.top = Math.max(8, Math.min(above ? r.top - height - 6 : below, innerHeight - height - 8)) + 'px';
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
    if (!pinned) timer = setTimeout(() => close(), 250);
  }
  async function replies(keyword) {
    if (fake) return fake[keyword] ?? [];
    if (!cache.has(keyword)) {
      const task = (async () => {
        const res = await fetch('responses/' + encodeURIComponent(keyword + '.md'), {credentials:'omit', redirect:'error'});
        if (!res.ok) throw new Error('Response unavailable');
        const raw = await res.text();
        const lines = raw.replace(/\r\n/g, '\n').replace(/\n$/, '').split('\n');
        const plain = (s, max) => s && s.trim() === s && Array.from(s).length <= max &&
          !/[<>\p{Cc}\p{Cf}]|https?:|www\.|mailto:|javascript:/iu.test(s);
        if (raw.length > 8192 || lines.length !== 3 || lines[1] !== '' || !plain(lines[0],128) || !plain(lines[2],255)) throw new Error('Invalid response');
        return [{name:'Example Party',color:'#000000',short:lines[0],long:lines[2]}];
      })();
      cache.set(keyword,task);
      task.catch(() => cache.delete(keyword));
    }
    return cache.get(keyword);
  }
  function row(party, index) {
    const item = document.createElement('div');
    item.className = 'reply-item';
    item.style.setProperty('--party-color', party.color);
    const short = document.createElement('button');
    short.type = 'button';
    short.className = 'reply-short';
    short.setAttribute('aria-expanded','false');
    const sentence = document.createElement('span');
    sentence.textContent = party.short;
    const chevron = document.createElement('span');
    chevron.className = 'reply-chevron';
    chevron.setAttribute('aria-hidden','true');
    short.append(sentence, chevron);
    const detail = document.createElement('div');
    detail.className = 'reply-detail';
    detail.hidden = true;
    detail.id = 'reply-detail-' + sequence + '-' + index;
    short.setAttribute('aria-controls',detail.id);
    const name = document.createElement('strong');
    name.textContent = party.name;
    const description = document.createElement('p');
    description.textContent = party.long;
    detail.append(name, description);
    short.addEventListener('click', () => {
      pinned = true;
      clearTimeout(timer);
      detail.hidden = !detail.hidden;
      short.setAttribute('aria-expanded', String(!detail.hidden));
      place();
    });
    item.append(short,detail);
    return item;
  }
  async function open(button, pin) {
    if (pinned && !pin) return;
    clearTimeout(timer);
    if (anchor === button && !popup.hidden) {
      if (pin) {
        pinned = true;
        (body.querySelector('.reply-short') ?? closeButton).focus({preventScroll:true});
      }
      return;
    }
    anchor = button;
    pinned = pin;
    const current = ++sequence;
    body.textContent = 'Loading responses…';
    popup.hidden = false;
    place();
    if (pin) closeButton.focus({preventScroll:true});
    try {
      const matches = shuffled(await replies(button.dataset.keyword));
      if (current !== sequence) return;
      body.replaceChildren(...matches.map(row));
      if (!matches.length) body.textContent = 'Response currently unavailable.';
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
