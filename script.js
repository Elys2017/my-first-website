'use strict';
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
const mobile = window.matchMedia('(max-width: 720px)');
function setMenu(open, restoreFocus = false) {
  navigation.classList.toggle('is-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.firstChild.textContent = open ? 'Close ' : 'Menu ';
  if (restoreFocus) menuButton.focus();
}
if (menuButton && navigation) {
  document.body.classList.add('menu-enhanced');
  menuButton.hidden = !mobile.matches;
  menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
  navigation.addEventListener('click', event => { if (event.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') setMenu(false, true); });
  document.addEventListener('click', event => { if (!event.target.closest('.header')) setMenu(false); });
  mobile.addEventListener('change', event => { menuButton.hidden = !event.matches; setMenu(false); });
}
const views = {
  full: { box: '0 0 800 600', label: 'Full concept view' },
  base: { box: '100 280 580 280', label: 'Rigid base concept detail' },
  straps: { box: '130 90 510 280', label: 'Headrest strap concept detail' }
};
document.querySelectorAll('[data-view]').forEach(button => {
  button.addEventListener('click', () => {
    const view = views[button.dataset.view];
    if (!view) return;
    document.querySelector('#product-illustration').setAttribute('viewBox', view.box);
    document.querySelector('#product-illustration').setAttribute('aria-label', view.label + ' — placeholder illustration');
    document.querySelector('#view-caption').textContent = view.label + ' · Placeholder illustration';
    document.querySelectorAll('[data-view]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  });
});
// Deliberately disconnected. Never imply an email was registered.
document.querySelector('#waitlist-form').addEventListener('submit', event => {
  event.preventDefault();
  document.querySelector('#waitlist-status').textContent = 'Registration is not connected. Your email has not been sent or saved.';
});
document.querySelector('#year').textContent = new Date().getFullYear();
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } });
  }, { threshold: 0.08 });
  document.querySelectorAll('.section > div, .section-heading, .steps article').forEach(element => { element.classList.add('reveal-ready'); observer.observe(element); });
}
