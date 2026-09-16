(() => {
  'use strict';
  const body = document.body;
  const chapters = [...document.querySelectorAll('.chapter')];
  if (!chapters.length) return;
  const get = id => document.getElementById(id);
  const modeButton = get('reading-mode');
  const pauseButton = get('pause');
  const revealButton = get('reveal');
  const previousButton = get('previous');
  const nextButton = get('next');
  const paceSelect = get('pace');
  const count = get('page-count');
  const revealState = get('reveal-state');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let current = Math.max(0, chapters.findIndex(c => c.id === location.hash.slice(1)));
  let reading = new URLSearchParams(location.search).get('tryb') === 'czytanie';
  let timer = null;
  let deadline = 0;
  let remaining = 0;
  let paused = false;
  let revealed = 1;
  let pace = '190';
  try { pace = localStorage.getItem('daniel-pace') || '190'; } catch (_) {}
  if (!['140', '190', '280', 'instant'].includes(pace)) pace = '190';
  if (reducedMotion.matches) pace = 'instant';
  paceSelect.value = pace;
  body.classList.add('enhanced');

  function paragraphs() { return [...chapters[current].querySelectorAll('.prose > p')]; }
  function clearTimer() { if (timer !== null) clearTimeout(timer); timer = null; }
  function wordDelay(p) {
    const words = p.textContent.trim().split(/\s+/).length;
    return Math.max(2500, Math.min(18000, words * 60000 / Number(pace) + 500));
  }
  function updatePacing() {
    const complete = revealed >= paragraphs().length;
    pauseButton.disabled = complete || reading || pace === 'instant';
    pauseButton.textContent = paused ? 'Wznów' : 'Wstrzymaj';
    pauseButton.setAttribute('aria-pressed', String(paused));
    revealButton.disabled = complete;
    revealButton.textContent = complete ? 'Cały rozdział' : 'Pokaż cały rozdział';
    revealState.textContent = complete ? 'Czytaj w swoim tempie' : paused ? 'Odsłanianie wstrzymane' : 'Tekst odsłania się spokojnie';
  }
  function revealParagraph(p) {
    p.classList.remove('unrevealed');
    p.removeAttribute('aria-hidden');
  }
  function schedule(delay) {
    clearTimer();
    remaining = delay;
    if (reading || paused || document.hidden || revealed >= paragraphs().length) return;
    deadline = performance.now() + delay;
    timer = setTimeout(() => {
      timer = null;
      const ps = paragraphs();
      if (ps[revealed]) revealParagraph(ps[revealed++]);
      updatePacing();
      if (revealed < ps.length) schedule(wordDelay(ps[revealed - 1]));
    }, delay);
  }
  function revealAll() {
    clearTimer();
    paragraphs().forEach(revealParagraph);
    revealed = paragraphs().length;
    paused = false;
    updatePacing();
  }
  function prepareChapter() {
    clearTimer();
    paused = false;
    const ps = paragraphs();
    revealed = reading || pace === 'instant' ? ps.length : 1;
    ps.forEach((p, i) => {
      p.classList.toggle('unrevealed', i >= revealed);
      if (i >= revealed) p.setAttribute('aria-hidden', 'true');
      else p.removeAttribute('aria-hidden');
    });
    updatePacing();
    if (revealed < ps.length) schedule(wordDelay(ps[0]));
  }
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
    body.dataset.mood = chapters[current].dataset.mood;
    updateNavigation();
    prepareChapter();
    if (history) window.history.replaceState(null, '', `${location.pathname}${location.search}#${chapters[current].id}`);
    if (scroll) window.scrollTo({top: 0, behavior: 'instant'});
    if (focus) chapters[current].querySelector('h1,h2').focus({preventScroll: true});
  }
  function setReading(value, initial = false) {
    reading = value;
    body.classList.toggle('reading', reading);
    modeButton.setAttribute('aria-pressed', String(reading));
    modeButton.textContent = reading ? 'Tryb slajdów' : 'Czytaj całość';
    const params = new URLSearchParams(location.search);
    if (reading) params.set('tryb', 'czytanie'); else params.delete('tryb');
    const query = params.size ? `?${params}` : '';
    history.replaceState(null, '', `${location.pathname}${query}#${chapters[current].id}`);
    if (reading) {
      clearTimer();
      chapters.forEach(c => c.querySelectorAll('.prose > p').forEach(revealParagraph));
      if (!initial) chapters[current].scrollIntoView({behavior: 'instant', block: 'start'});
    } else {
      showChapter(current, {scroll: !initial});
    }
  }
  modeButton.addEventListener('click', () => {
    if (reading) {
      const nearest = chapters.reduce((best, c, i) => Math.abs(c.getBoundingClientRect().top - 90) < best.distance ? {index: i, distance: Math.abs(c.getBoundingClientRect().top - 90)} : best, {index: current, distance: Infinity});
      current = nearest.index;
    }
    setReading(!reading);
  });
  pauseButton.addEventListener('click', () => {
    if (!paused) { remaining = Math.max(0, deadline - performance.now()); clearTimer(); paused = true; }
    else { paused = false; schedule(remaining || 1000); }
    updatePacing();
  });
  revealButton.addEventListener('click', revealAll);
  previousButton.addEventListener('click', () => showChapter(current - 1, {focus: true, scroll: true}));
  nextButton.addEventListener('click', () => showChapter(current + 1, {focus: true, scroll: true}));
  paceSelect.addEventListener('change', () => {
    pace = paceSelect.value;
    try { localStorage.setItem('daniel-pace', pace); } catch (_) {}
    if (pace === 'instant') revealAll();
    else if (revealed < paragraphs().length) schedule(wordDelay(paragraphs()[Math.max(0, revealed - 1)]));
    updatePacing();
  });
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
    if (reading || event.altKey || event.ctrlKey || event.metaKey || /^(INPUT|TEXTAREA|SELECT|BUTTON|SUMMARY|A)$/.test(event.target.tagName)) return;
    if (event.key === 'ArrowRight') { event.preventDefault(); showChapter(current + 1, {focus: true, scroll: true}); }
    if (event.key === 'ArrowLeft') { event.preventDefault(); showChapter(current - 1, {focus: true, scroll: true}); }
    if (event.key === ' ') { event.preventDefault(); revealAll(); }
  });
  let touch = null;
  document.querySelector('main').addEventListener('touchstart', e => {
    if (e.touches.length === 1) touch = {x: e.touches[0].clientX, y: e.touches[0].clientY};
  }, {passive: true});
  document.querySelector('main').addEventListener('touchend', e => {
    if (!touch || reading || !e.changedTouches[0]) return;
    const dx = e.changedTouches[0].clientX - touch.x;
    const dy = e.changedTouches[0].clientY - touch.y;
    touch = null;
    if (Math.abs(dx) > 85 && Math.abs(dy) < 45 && !getSelection().toString()) showChapter(current + (dx < 0 ? 1 : -1), {scroll: true});
  }, {passive: true});
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && timer !== null) { remaining = Math.max(0, deadline - performance.now()); clearTimer(); }
    else if (!document.hidden && !paused && !reading && revealed < paragraphs().length) schedule(remaining || 1000);
  });
  window.addEventListener('hashchange', () => {
    const n = chapters.findIndex(c => c.id === location.hash.slice(1));
    if (n >= 0 && !reading) showChapter(n, {history: false});
  });
  reducedMotion.addEventListener('change', event => {
    if (event.matches) { pace = 'instant'; paceSelect.value = pace; revealAll(); }
  });
  setReading(reading, true);
  if (reading) { showChapter(current, {history: false}); requestAnimationFrame(() => chapters[current].scrollIntoView({behavior: 'instant'})); }
})();
