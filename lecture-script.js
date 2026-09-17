(() => {
  'use strict';
  const form = document.querySelector('#script-search-form');
  if (!form) return;
  const query = document.querySelector('#script-query');
  const scope = document.querySelector('#script-scope');
  const status = document.querySelector('#script-search-status');
  const results = document.querySelector('#script-search-results');
  const list = document.querySelector('#script-results-list');
  const resultNav = document.querySelector('.script-result-nav');
  const position = document.querySelector('#script-result-position');
  const previous = document.querySelector('#script-result-prev');
  const next = document.querySelector('#script-result-next');
  const chapters = [...document.querySelectorAll('.script-chapter')];
  const parts = [...document.querySelectorAll('.script-part')];
  const normal = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/ł/g, 'l').replace(/Ł/g, 'L').toLocaleLowerCase('pl').replace(/\s+/g, ' ').trim();
  const corpus = [...document.querySelectorAll('.script-fragment')].map(element => {
    const chapter = element.closest('.script-chapter');
    const part = element.closest('.script-part');
    const text = element.querySelector('.script-prose').textContent.replace(/\s+/g, ' ').trim();
    return {element, chapter, part, session: element.dataset.session, text, normalized: normal(text),
      label: element.querySelector('.script-fragment-label').textContent,
      heading: part.querySelector('h3').textContent,
      chapterLabel: chapter.querySelector('.script-chapter-number').textContent};
  });
  let matches = corpus;
  let activeIndex = -1;
  let timer;
  let filtering = false;

  function hasToken(text, token) {
    if (token.length > 2) return text.includes(token);
    // Short queries such as AI must not match the middle of Polish words.
    const escaped = token.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return new RegExp(`(^|[^a-z0-9])${escaped}(?=$|[^a-z0-9])`, 'u').test(text);
  }

  function updatePosition() {
    position.textContent = activeIndex >= 0 ? `${activeIndex + 1} / ${matches.length}` : `${matches.length} wyników`;
    previous.disabled = activeIndex <= 0;
    next.disabled = !matches.length || activeIndex >= matches.length - 1;
  }

  function jump(index) {
    if (index < 0 || index >= matches.length) return;
    activeIndex = index;
    const element = matches[index].element;
    const url = new URL(location.href);
    url.hash = element.id;
    history.replaceState(null, '', url);
    element.scrollIntoView({block: 'start', behavior: 'instant'});
    element.focus({preventScroll: true});
    updatePosition();
  }

  function snippet(item, tokens) {
    let first = tokens.length ? item.normalized.indexOf(tokens[0]) : 0;
    if (first < 0) first = 0;
    // Normalizing accents preserves most character positions; the snippet is
    // context only and never used to modify or highlight the source prose.
    const start = Math.max(0, first - 55);
    const end = Math.min(item.text.length, start + 170);
    return `${start ? '…' : ''}${item.text.slice(start, end)}${end < item.text.length ? '…' : ''}`;
  }

  function renderResults(tokens) {
    const items = document.createDocumentFragment();
    matches.forEach((item, index) => {
      const row = document.createElement('li');
      const link = document.createElement('a');
      link.href = `#${item.element.id}`;
      const context = document.createElement('span');
      context.className = 'script-result-context';
      context.textContent = `${item.chapterLabel} · ${item.heading} · ${item.label}`;
      const excerpt = document.createElement('span');
      excerpt.className = 'script-result-snippet';
      excerpt.textContent = snippet(item, tokens);
      link.append(context, excerpt);
      link.addEventListener('click', event => { event.preventDefault(); jump(index); });
      row.append(link);
      items.append(row);
    });
    list.replaceChildren(items);
  }

  function apply({writeUrl = true} = {}) {
    const tokens = normal(query.value).split(' ').filter(Boolean);
    const session = scope.value;
    filtering = tokens.length > 0 || session !== '';
    matches = corpus.filter(item => (!session || item.session === session) && tokens.every(token => hasToken(item.normalized, token)));
    const visible = new Set(matches.map(item => item.element));
    corpus.forEach(item => {
      item.element.hidden = !visible.has(item.element);
      item.element.querySelector('.script-search-return').hidden = !filtering;
    });
    parts.forEach(part => { part.hidden = ![...part.querySelectorAll('.script-fragment')].some(element => !element.hidden); });
    chapters.forEach(chapter => { chapter.hidden = ![...chapter.querySelectorAll('.script-part')].some(part => !part.hidden); });
    const sessionCount = new Set(matches.map(item => item.session)).size;
    status.hidden = false;
    status.textContent = filtering
      ? (matches.length ? `Znaleziono ${matches.length} fragmentów w ${sessionCount} sesjach. Poniżej widać pasujące fragmenty.` : 'Brak pasujących fragmentów. Zmień słowa albo wybierz cały skrypt.')
      : `Cały skrypt: ${corpus.length} fragmentów, 12 sesji.`;
    results.hidden = !filtering || !matches.length;
    resultNav.hidden = !filtering || !matches.length;
    activeIndex = -1;
    if (filtering) renderResults(tokens); else list.replaceChildren();
    updatePosition();
    if (writeUrl) {
      const url = new URL(location.href);
      if (query.value.trim()) url.searchParams.set('q', query.value.trim()); else url.searchParams.delete('q');
      if (session) url.searchParams.set('sesja', session); else url.searchParams.delete('sesja');
      history.replaceState(null, '', url);
    }
  }

  function reset() {
    clearTimeout(timer);
    query.value = '';
    scope.value = '';
    apply();
  }

  query.addEventListener('input', () => {
    clearTimeout(timer);
    timer = setTimeout(() => apply(), 140);
  });
  scope.addEventListener('change', () => { clearTimeout(timer); apply(); });
  form.addEventListener('submit', event => {
    event.preventDefault();
    clearTimeout(timer);
    apply();
    if (matches.length && filtering) jump(0);
  });
  document.querySelector('#script-search-clear').addEventListener('click', () => { reset(); query.focus(); });
  previous.addEventListener('click', () => jump(activeIndex - 1));
  next.addEventListener('click', () => jump(activeIndex + 1));
  document.querySelectorAll('.script-toc a').forEach(link => {
    link.addEventListener('click', () => {
      const chapter = document.querySelector(link.getAttribute('href'));
      if (chapter?.hidden || filtering) reset();
    });
  });
  document.querySelectorAll('.script-search-return').forEach(link => {
    link.addEventListener('click', () => setTimeout(() => query.focus({preventScroll: true}), 0));
  });
  window.addEventListener('popstate', () => {
    const url = new URL(location.href);
    query.value = url.searchParams.get('q') || '';
    scope.value = url.searchParams.get('sesja') || '';
    apply({writeUrl: false});
  });
  const url = new URL(location.href);
  query.value = url.searchParams.get('q') || '';
  const requestedSession = url.searchParams.get('sesja');
  scope.value = [...scope.options].some(option => option.value === requestedSession) ? requestedSession : '';
  form.hidden = false;
  document.querySelector('.script-nojs').hidden = true;
  apply({writeUrl: false});
  const initial = matches.findIndex(item => `#${item.element.id}` === location.hash);
  if (initial >= 0 && filtering) requestAnimationFrame(() => jump(initial));
})();
