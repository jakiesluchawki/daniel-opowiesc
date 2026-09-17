(() => {
  'use strict';
  const header = document.querySelector('.site-header');
  const menu = header?.querySelector('.collection-menu');
  if (!menu) return;
  const summary = menu.querySelector('summary');
  const details = [...header.querySelectorAll('details')];
  details.forEach(item => item.addEventListener('toggle', () => {
    if (item.open) details.forEach(other => { if (other !== item) other.open = false; });
  }));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.open) {
      event.preventDefault();
      menu.open = false;
      summary.focus({preventScroll: true});
    }
  });
  document.addEventListener('click', event => {
    if (menu.open && !menu.contains(event.target)) menu.open = false;
  });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { menu.open = false; }));
})();
