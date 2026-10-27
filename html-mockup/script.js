'use strict';

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

// Display preference is the only persisted visitor state.
const themeButton = $('.theme-toggle');
function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const dark = theme === 'dark';
  themeButton.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} mode`);
  themeButton.setAttribute('aria-pressed', String(dark));
}
try { setTheme(localStorage.getItem('felix-theme') === 'dark' ? 'dark' : 'light'); } catch { setTheme('light'); }
themeButton.addEventListener('click', () => {
  const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  setTheme(theme);
  try { localStorage.setItem('felix-theme', theme); } catch { /* Private browsing can disable storage. */ }
});

const dropdowns = $$('.dropdown-toggle');
function closeMenus() {
  dropdowns.forEach(button => {
    button.setAttribute('aria-expanded', 'false');
    document.getElementById(button.getAttribute('aria-controls')).hidden = true;
  });
  $('.site-header').classList.remove('menu-is-open');
}
dropdowns.forEach(button => button.addEventListener('click', () => {
  const open = button.getAttribute('aria-expanded') !== 'true';
  closeMenus();
  if (open) {
    button.setAttribute('aria-expanded', 'true');
    document.getElementById(button.getAttribute('aria-controls')).hidden = false;
    $('.site-header').classList.add('menu-is-open');
  }
}));
document.addEventListener('click', event => { if (!event.target.closest('.site-header')) closeMenus(); });
$('.site-header').addEventListener('focusout', event => {
  if (event.relatedTarget && !$('.site-header').contains(event.relatedTarget)) closeMenus();
});
const mobileButton = $('.mobile-toggle');
const mobileNav = $('#mobile-nav');
function closeMobile() {
  mobileNav.hidden = true;
  mobileButton.setAttribute('aria-expanded', 'false');
  mobileButton.setAttribute('aria-label', 'Open navigation');
}
mobileButton.addEventListener('click', () => {
  const open = mobileNav.hidden;
  mobileNav.hidden = !open;
  mobileButton.setAttribute('aria-expanded', String(open));
  mobileButton.setAttribute('aria-label', `${open ? 'Close' : 'Open'} navigation`);
});
$$('.site-header a').forEach(link => link.addEventListener('click', () => { closeMenus(); closeMobile(); }));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    const activeToggle = dropdowns.find(button => button.getAttribute('aria-expanded') === 'true');
    closeMenus();
    if (!mobileNav.hidden) { closeMobile(); mobileButton.focus(); }
    else activeToggle?.focus();
  }
});
window.matchMedia('(max-width: 900px)').addEventListener('change', () => { closeMenus(); closeMobile(); });

// Keep the automatic carousel quiet; announce only deliberate navigation.
const hero = $('.hero');
const slides = $$('.hero-slide');
const dots = $$('.slide-dots button');
let currentSlide = 0;
let heroTimer;
function showSlide(index, announce = false) {
  currentSlide = (index + slides.length) % slides.length;
  slides.forEach((slide, i) => {
    const active = i === currentSlide;
    slide.classList.toggle('is-active', active);
    slide.inert = !active;
    slide.setAttribute('aria-hidden', String(!active));
    dots[i].classList.toggle('is-active', active);
    if (active) dots[i].setAttribute('aria-current', 'true');
    else dots[i].removeAttribute('aria-current');
  });
  if (announce) $('.slide-status').textContent = `Slide ${currentSlide + 1} of ${slides.length}: ${$('h1,h2', slides[currentSlide]).textContent}`;
}
function restartCarousel() {
  clearInterval(heroTimer);
  if (!reducedMotion.matches && !document.hidden && !hero.matches(':hover') && !hero.contains(document.activeElement)) {
    heroTimer = setInterval(() => showSlide(currentSlide + 1), 7000);
  }
}
function advanceSlide(index) { showSlide(index, true); restartCarousel(); }
$('.previous').addEventListener('click', () => advanceSlide(currentSlide - 1));
$('.next').addEventListener('click', () => advanceSlide(currentSlide + 1));
dots.forEach((dot, i) => dot.addEventListener('click', () => advanceSlide(i)));
hero.addEventListener('keydown', event => {
  if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
    event.preventDefault();
    advanceSlide(currentSlide + (event.key === 'ArrowRight' ? 1 : -1));
  }
});
hero.addEventListener('mouseenter', () => clearInterval(heroTimer));
hero.addEventListener('mouseleave', restartCarousel);
hero.addEventListener('focusin', () => clearInterval(heroTimer));
hero.addEventListener('focusout', () => requestAnimationFrame(restartCarousel));
document.addEventListener('visibilitychange', restartCarousel);
reducedMotion.addEventListener('change', restartCarousel);
restartCarousel();

const track = $('.partner-track');
const duplicate = $('.partner-group').cloneNode(true);
duplicate.setAttribute('aria-hidden', 'true');
$$('img', duplicate).forEach(img => img.alt = '');
track.append(duplicate);

$$('[data-service]').forEach(link => link.addEventListener('click', () => {
  const service = document.getElementById(link.dataset.service);
  if (service) service.open = true;
}));
function filterProjects(filter) {
  $$('.project-filters button').forEach(button => {
    const active = button.dataset.filter === filter;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  $$('.project').forEach(project => {
    project.hidden = filter !== 'all' && !project.dataset.category.split(' ').includes(filter);
  });
}
$$('[data-filter]').forEach(button => button.addEventListener('click', () => filterProjects(button.dataset.filter)));
$$('[data-project-filter]').forEach(link => link.addEventListener('click', () => filterProjects(link.dataset.projectFilter)));

function openDialog(id) {
  closeMenus(); closeMobile();
  document.getElementById(id).showModal();
  document.body.classList.add('modal-open');
}
$$('[data-open]').forEach(button => button.addEventListener('click', () => openDialog(button.dataset.open)));
$$('dialog').forEach(dialog => {
  $('.close-dialog', dialog).addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) {
    const box = dialog.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
  }});
  dialog.addEventListener('close', () => document.body.classList.remove('modal-open'));
});
$('.copy-email').addEventListener('click', async event => {
  const button = event.currentTarget;
  try {
    await navigator.clipboard.writeText('info@felixbd.com');
    button.textContent = 'Email copied ✓';
    $('.copy-status').textContent = 'Email address copied.';
  } catch {
    $('.copy-status').classList.remove('sr-only');
    $('.copy-status').textContent = 'Please select and copy info@felixbd.com.';
  }
});

const searchItems = [
  ...$$('.service-list details').map(item => ({title: $('h3', item).textContent, type: 'Solution', href: `#${item.id}`, service: item.id, keywords: $('.service-description',item).textContent})),
  ...$$('.project').map(item => ({title: $('h3',item).textContent, type: 'Project', href: '#projects', category: item.dataset.category.split(' ')[0], keywords: item.textContent})),
  {title:'About Felix Controls Limited',type:'Company',href:'#about',keywords:'engineering company profile'},
  {title:'Contact our team',type:'Contact',href:'#contact',keywords:'phone email address Dhaka'},
];
function renderSearch() {
  const query = $('#site-search').value.trim().toLowerCase();
  const matches = searchItems.filter(item => `${item.title} ${item.keywords}`.toLowerCase().includes(query));
  const results = $('.search-results');
  results.replaceChildren();
  if (!matches.length) { const message = document.createElement('p'); message.textContent = 'No results found. Try “HVAC”, “lighting” or “metro”.'; results.append(message); }
  matches.forEach(item => {
    const link = document.createElement('a'); link.href = item.href;
    const title = document.createElement('span'); title.textContent = item.title;
    const type = document.createElement('small'); type.textContent = item.type;
    link.append(title,type);
    link.addEventListener('click', () => {
      if (item.service) document.getElementById(item.service).open = true;
      if (item.category) filterProjects(item.category);
      $('#search-dialog').close();
    });
    results.append(link);
  });
}
$('.search-toggle').addEventListener('click', () => { renderSearch(); openDialog('search-dialog'); $('#site-search').focus(); });
$('#site-search').addEventListener('input', renderSearch);

const backTop = $('.back-top');
let scrollQueued = false;
function updateScroll() {
  const available = document.documentElement.scrollHeight - window.innerHeight;
  $('.scroll-progress').style.transform = `scaleX(${available > 0 ? Math.min(1, window.scrollY / available) : 0})`;
  backTop.hidden = window.scrollY < 550;
  scrollQueued = false;
}
window.addEventListener('scroll', () => {
  if (!scrollQueued) { requestAnimationFrame(updateScroll); scrollQueued = true; }
}, {passive:true});
window.addEventListener('resize', updateScroll);
backTop.addEventListener('click', () => { scrollToSection(0); $('.brand').focus({preventScroll:true}); });
updateScroll();
$('#year').textContent = new Date().getFullYear();


// Give section links a short, deliberate deceleration; leave wheel and touch scrolling native.
let sectionScrollFrame = 0;
function cancelSectionScroll() {
  cancelAnimationFrame(sectionScrollFrame);
  sectionScrollFrame = 0;
}
function scrollToSection(destination) {
  cancelSectionScroll();
  const maximum = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
  const target = Math.max(0, Math.min(maximum, destination));
  const start = window.scrollY;
  const distance = target - start;
  if (reducedMotion.matches || Math.abs(distance) < 2) {
    window.scrollTo({top:target, behavior:'instant'});
    return;
  }
  const duration = Math.min(640, 280 + Math.abs(distance) * 0.16);
  const started = performance.now();
  function step(now) {
    const progress = Math.min(1, (now - started) / duration);
    const eased = 1 - Math.pow(1 - progress, 4);
    window.scrollTo({top:start + distance * eased, behavior:'instant'});
    sectionScrollFrame = progress < 1 ? requestAnimationFrame(step) : 0;
  }
  sectionScrollFrame = requestAnimationFrame(step);
}
document.addEventListener('click', event => {
  const link = event.target.closest('a[href^="#"]');
  if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const hash = link.getAttribute('href');
  const target = hash === '#' ? null : document.getElementById(decodeURIComponent(hash.slice(1)));
  if (hash !== '#' && !target) return;
  event.preventDefault();
  const offset = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
  const top = target ? window.scrollY + target.getBoundingClientRect().top - offset : 0;
  if (window.location.hash !== hash) history.pushState(null, '', hash);
  scrollToSection(top);
  if (link.classList.contains('skip-link')) {
    target.setAttribute('tabindex', '-1');
    target.focus({preventScroll:true});
  }
});
window.addEventListener('wheel', cancelSectionScroll, {passive:true});
window.addEventListener('touchstart', cancelSectionScroll, {passive:true});
window.addEventListener('keydown', event => {
  if (['ArrowUp','ArrowDown','PageUp','PageDown','Home','End',' '].includes(event.key)) cancelSectionScroll();
});
reducedMotion.addEventListener('change', cancelSectionScroll);

// Reveal project photography with a clean crop wipe, without fading whole sections.
if ('IntersectionObserver' in window && !reducedMotion.matches) {
  const imageReveals = new Set();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      observer.unobserve(entry.target);
      if (reducedMotion.matches) return;
      const reveal = entry.target.animate([
        {clipPath:'inset(0 0 100% 0)'},
        {clipPath:'inset(0 0 0 0)'}
      ], {duration:640, easing:'cubic-bezier(.22,1,.36,1)'});
      imageReveals.add(reveal);
      reveal.finished.then(() => imageReveals.delete(reveal), () => imageReveals.delete(reveal));
    });
  }, {threshold:0.12});
  $$('.project-image').forEach(image => observer.observe(image));
  function finishImageReveals() { imageReveals.forEach(animation => animation.cancel()); }
  reducedMotion.addEventListener('change', () => { if (reducedMotion.matches) finishImageReveals(); });
  window.addEventListener('beforeprint', finishImageReveals);
}
