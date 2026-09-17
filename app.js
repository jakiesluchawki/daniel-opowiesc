(() => {
  'use strict';
  const body = document.body;
  const chapters = [...document.querySelectorAll('.chapter')];
  if (!chapters.length) return;
  const get = id => document.getElementById(id);
  const modeButton = get('reading-mode');
  const previousButton = get('previous');
  const nextButton = get('next');
  const count = get('page-count');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const initialHash = location.hash.slice(1);
  let current = Math.max(0, chapters.findIndex(c => c.id === initialHash));
  let reading = new URLSearchParams(location.search).get('tryb') === 'czytanie';
  body.classList.add('enhanced');
  function updateNavigation() {
    count.textContent = `${String(current + 1).padStart(2, '0')} / ${String(chapters.length).padStart(2, '0')}`;
    previousButton.disabled = current === 0;
    nextButton.disabled = current === chapters.length - 1;
    nextButton.querySelector('span').textContent = current === chapters.length - 1 ? 'Koniec' : 'Dalej';
    document.querySelectorAll('[data-chapter]').forEach(el => {
      const n = Number(el.dataset.chapter);
      el.setAttribute('aria-current', String(n === current));
      el.classList.toggle('visited', n < current);
    });
  }
  function showChapter(index, {focus = false, scroll = false, history = true} = {}) {
    current = Math.max(0, Math.min(chapters.length - 1, index));
    chapters.forEach((c, i) => c.classList.toggle('current', i === current));
    chapters.slice(current, current + 2).forEach(c => {
      c.querySelector(reading ? '.chapter-art img' : '.slide-scene img').loading = 'eager';
    });
    body.dataset.mood = chapters[current].dataset.mood;
    updateNavigation();
    if (history) window.history.replaceState(null, '', `${location.pathname}${location.search}#${chapters[current].id}`);
    if (scroll) window.scrollTo({top: 0, behavior: 'instant'});
    if (focus) chapters[current].querySelector('h1,h2').focus({preventScroll: true});
  }
  function setReading(value, initial = false) {
    document.querySelectorAll('#collection-menu[open]').forEach(menu => menu.open = false);
    reading = value;
    body.classList.toggle('reading', reading);
    modeButton.setAttribute('aria-pressed', String(reading));
    modeButton.textContent = reading ? 'Tryb slajdów' : 'Czytaj całość';
    const params = new URLSearchParams(location.search);
    if (reading) params.set('tryb', 'czytanie'); else params.delete('tryb');
    const query = params.size ? `?${params}` : '';
    if (!initial) history.replaceState(null, '', `${location.pathname}${query}#${chapters[current].id}`);
    if (reading) {
      if (!initial) chapters[current].scrollIntoView({behavior: 'instant', block: 'start'});
    } else {
      showChapter(current, {scroll: !initial, history: !initial});
    }
  }
  modeButton.addEventListener('click', () => {
    if (reading) {
      const nearest = chapters.reduce((best, c, i) => Math.abs(c.getBoundingClientRect().top - 90) < best.distance ? {index: i, distance: Math.abs(c.getBoundingClientRect().top - 90)} : best, {index: current, distance: Infinity});
      current = nearest.index;
    }
    setReading(!reading);
  });
  previousButton.addEventListener('click', () => showChapter(current - 1, {focus: true, scroll: true}));
  nextButton.addEventListener('click', () => showChapter(current + 1, {focus: true, scroll: true}));
  document.querySelectorAll('[data-chapter]').forEach(el => el.addEventListener('click', event => {
    event.preventDefault();
    const index = Number(el.dataset.chapter);
    document.querySelectorAll('.header-nav details').forEach(d => d.open = false);
    if (reading) {
      current = index;
      updateNavigation();
      history.replaceState(null, '', `${location.pathname}${location.search}#${chapters[index].id}`);
      chapters[index].scrollIntoView({behavior: reducedMotion.matches ? 'instant' : 'smooth'});
    } else showChapter(index, {focus: true, scroll: true});
  }));
  document.addEventListener('keydown', event => {
    if (reading || document.querySelector('#collection-menu[open]') || event.altKey || event.ctrlKey || event.metaKey || /^(INPUT|TEXTAREA|SELECT|BUTTON|SUMMARY|A)$/.test(event.target.tagName)) return;
    if (event.key === 'ArrowRight' || event.code === 'Space') { event.preventDefault(); showChapter(current + 1, {focus: true, scroll: true}); }
    if (event.key === 'ArrowLeft') { event.preventDefault(); showChapter(current - 1, {focus: true, scroll: true}); }
  });
  let touch = null;
  document.querySelector('main').addEventListener('touchstart', e => {
    if (e.touches.length === 1) touch = {x: e.touches[0].clientX, y: e.touches[0].clientY};
  }, {passive: true});
  document.querySelector('main').addEventListener('touchend', e => {
    if (!touch || reading || document.querySelector('#collection-menu[open]') || !e.changedTouches[0]) return;
    const dx = e.changedTouches[0].clientX - touch.x;
    const dy = e.changedTouches[0].clientY - touch.y;
    touch = null;
    if (Math.abs(dx) > 85 && Math.abs(dy) < 45 && !getSelection().toString()) showChapter(current + (dx < 0 ? 1 : -1), {scroll: true});
  }, {passive: true});
  window.addEventListener('hashchange', () => {
    const n = chapters.findIndex(c => c.id === location.hash.slice(1));
    if (n >= 0 && !reading) showChapter(n, {history: false});
  });
  setReading(reading, true);
  if (reading) {
    showChapter(current, {history: false});
    if (initialHash) requestAnimationFrame(() => chapters[current].scrollIntoView({behavior: 'instant'}));
  }
})();
