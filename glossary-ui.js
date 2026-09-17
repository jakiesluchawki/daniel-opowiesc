(() => {
  'use strict';
  const form = document.getElementById('glossary-search');
  if (!form) return;
  const query = form.elements.query;
  const kind = form.elements.kind;
  const session = form.elements.session;
  const status = document.getElementById('glossary-results');
  const empty = document.getElementById('glossary-empty');
  const normalise = value => value.toLocaleLowerCase('pl').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/ł/g, 'l');
  const entries = [...document.querySelectorAll('.glossary-entry')].map(element => ({element, text: normalise(element.textContent), kind: element.dataset.kind, sessions: element.dataset.sessions.split(' ')}));
  const indexLinks = [...document.querySelectorAll('.glossary-index a')];
  const groups = [...document.querySelectorAll('.glossary-index-group')];
  const initialGroups = new Map(groups.map(group => [group, group.open]));
  let timer;
  function apply() {
    const words = normalise(query.value.trim()).split(/\s+/).filter(Boolean);
    const filtering = words.length || kind.value || session.value;
    const visible = new Set();
    entries.forEach(row => {
      const match = (!kind.value || row.kind === kind.value) && (!session.value || row.sessions.includes(session.value)) && words.every(word => row.text.includes(word));
      row.element.hidden = !match;
      if (match) visible.add(row.element.id);
    });
    indexLinks.forEach(link => {link.hidden = !visible.has(link.hash.slice(1));});
    groups.forEach(group => {
      const count = [...group.querySelectorAll('a')].filter(link => !link.hidden).length;
      group.hidden = !count;
      group.querySelector('.glossary-index-count').textContent = count;
      group.open = filtering ? count > 0 : initialGroups.get(group);
    });
    document.querySelectorAll('.glossary-column').forEach(column => {column.hidden = !column.querySelector('.glossary-entry:not([hidden])');});
    empty.hidden = visible.size > 0;
    status.textContent = filtering ? `Wyniki: ${visible.size} z ${entries.length}.` : `${entries.length} wpisów · rozwiń dział lub wyszukaj słowo, autora i dzieło.`;
  }
  form.hidden = false;
  query.addEventListener('input', () => {clearTimeout(timer);timer = setTimeout(apply, 120);});
  kind.addEventListener('change', apply);
  session.addEventListener('change', apply);
  form.addEventListener('submit', event => {event.preventDefault();clearTimeout(timer);apply();});
  form.addEventListener('reset', () => {clearTimeout(timer);requestAnimationFrame(() => {apply();query.focus({preventScroll: true});});});
  function revealHash() {
    let id;
    try {id = decodeURIComponent(location.hash.slice(1));} catch {return;}
    const target = document.getElementById(id);
    if (!target || !target.closest('.glossary-column')) return;
    if (target.hidden || target.closest('[hidden]')) {
      clearTimeout(timer);
      query.value = kind.value = session.value = '';
      apply();
      document.fonts.ready.then(() => requestAnimationFrame(() => requestAnimationFrame(() => {
        if (location.hash.slice(1) === id) target.scrollIntoView({block:'start',behavior:'instant'});
      })));
    }
  }
  window.addEventListener('hashchange', revealHash);
  apply();
  revealHash();
})();
