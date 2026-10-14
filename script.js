'use strict';

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
const mobile = window.matchMedia('(max-width: 720px)');

function setMenu(open, restoreFocus = false) {
  if (!menuButton || !navigation) return;
  navigation.classList.toggle('is-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.querySelector('.menu-label').textContent = open ? 'Close' : 'Menu';
  if (restoreFocus) menuButton.focus();
}

if (menuButton && navigation) {
  document.body.classList.add('menu-enhanced');
  menuButton.hidden = !mobile.matches;
  menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
  navigation.addEventListener('click', event => {
    if (event.target.closest('a')) setMenu(false);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') setMenu(false, true);
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('.header')) setMenu(false);
  });
  mobile.addEventListener('change', event => {
    menuButton.hidden = !event.matches;
    setMenu(false);
  });
}

const views = {
  full: { box: '0 0 800 600', label: 'Full view', number: '01', dog: true },
  base: { box: '100 280 580 280', label: 'Structured base detail', number: '02', dog: false },
  straps: { box: '130 90 510 280', label: 'Headrest strap detail', number: '03', dog: false }
};
const illustration = document.querySelector('#product-illustration');
const caption = document.querySelector('#view-caption');
const productPhotograph = document.querySelector('#product-photograph');
const viewButtons = [...document.querySelectorAll('[data-view]')];
viewButtons.forEach(button => {
  button.addEventListener('click', () => {
    const view = views[button.dataset.view];
    if (!view || !illustration || !caption) return;
    illustration.setAttribute('viewBox', view.box);
    illustration.setAttribute('aria-label', view.label + ' — original concept illustration, not a product photograph');
    illustration.toggleAttribute('hidden', view.dog);
    if (productPhotograph) productPhotograph.hidden = !view.dog;
    caption.textContent = view.label + (view.dog ? ' · AI-generated product concept' : ' · Original construction study');
    document.querySelector('.visual-counter').textContent = view.number + ' / 03';
    viewButtons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  });
});

// The demo deliberately has no collection endpoint or stored email addresses.
const waitlist = document.querySelector('#waitlist-form');
if (waitlist) waitlist.addEventListener('submit', event => {
  event.preventDefault();
  document.querySelector('#waitlist-status').textContent = 'Registration is not connected. Your email has not been sent or saved.';
});
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.06 });
  document.querySelectorAll('.problem-intro, .feature-list article, .step-grid article, .lifestyle-copy').forEach(element => {
    element.classList.add('reveal-ready');
    observer.observe(element);
  });
}
