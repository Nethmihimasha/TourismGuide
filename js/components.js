/* Shared UI components: navbar, footer, counters, helpers */

function getBasePath() {
  const path = window.location.pathname;
  return path.includes('/pages/') ? '../' : '';
}

function resolveHref(href) {
  const base = getBasePath();
  if (base === '../') {
    if (href === 'index.html') return '../index.html';
    if (href.startsWith('pages/')) return href.replace('pages/', '');
  }
  return base + href;
}

function renderStars(count) {
  return Array.from({ length: count }, () =>
    '<svg class="star" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>'
  ).join('');
}

function sectionLabel(text) {
  return `
    <div class="section-label">
      <div class="section-label__line"></div>
      <span class="section-label__text">${text}</span>
      <div class="section-label__line"></div>
    </div>`;
}

function renderNavbar(currentPage) {
  const base = getBasePath();
  const nav = document.getElementById('navbar');
  if (!nav) return;

  const links = NAV_LINKS.map(link => {
    const href = resolveHref(link.href);
    const isActive = link.page === currentPage ? ' active' : '';
    return `<a href="${href}" class="navbar__link${isActive}">${link.label}</a>`;
  }).join('');

  const mobileLinks = NAV_LINKS.map(link => {
    const href = resolveHref(link.href);
    const isActive = link.page === currentPage ? ' active' : '';
    return `<a href="${href}" class="navbar__mobile-link${isActive}">${link.label}</a>`;
  }).join('');

  const contactHref = resolveHref('pages/contact.html');

  nav.innerHTML = `
    <div class="container navbar__inner">
      <a href="${resolveHref('index.html')}" class="navbar__logo">
        <span class="navbar__logo-accent">Explore</span><span class="navbar__logo-text"> Sri Lanka</span>
      </a>
      <nav class="navbar__links">${links}</nav>
      <button class="navbar__toggle" id="nav-toggle" aria-label="Toggle menu">
        <svg class="navbar__toggle-icon" id="nav-icon-menu" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
        </svg>
        <svg class="navbar__toggle-icon" id="nav-icon-close" style="display:none" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </div>
    <div class="navbar__mobile" id="nav-mobile">
      ${mobileLinks}
      <div class="navbar__mobile-cta">
        <a href="${contactHref}" class="btn btn--primary btn--full btn--sm">Plan My Trip</a>
      </div>
    </div>`;

  initMobileNav();
}

function renderFooter() {
  const footer = document.getElementById('footer');
  if (!footer) return;

  const base = getBasePath();
  const link = (href, label) => `<a href="${resolveHref(href)}" class="footer__link">${label}</a>`;

  footer.innerHTML = `
    <div class="container">
      <div class="footer__grid">
        <div>
          <div class="navbar__logo mb-4">
            <span class="navbar__logo-accent">Explore</span><span class="navbar__logo-text"> Sri Lanka</span>
          </div>
          <p class="footer__text">Your gateway to discovering the paradise of the Indian Ocean. Professional tour guidance for unforgettable Sri Lanka experiences.</p>
          <div class="footer__social">
            <a href="#" class="footer__social-link" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="#" class="footer__social-link" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" class="footer__social-link" aria-label="YouTube">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.13C5.12 19.56 12 19.56 12 19.56s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white"/></svg>
            </a>
          </div>
        </div>
        <div>
          <h4 class="footer__heading">Quick Links</h4>
          ${link('index.html', 'Home')}
          ${link('pages/about.html', 'About Sri Lanka')}
          ${link('pages/destinations.html', 'Destinations')}
          ${link('pages/packages.html', 'Packages')}
        </div>
        <div>
          <h4 class="footer__heading">Explore</h4>
          ${link('pages/hotels.html', 'Hotels')}
          ${link('pages/food-culture.html', 'Food & Culture')}
          ${link('pages/gallery.html', 'Gallery')}
          ${link('pages/blog.html', 'Blog')}
          ${link('pages/contact.html', 'Contact')}
        </div>
        <div>
          <h4 class="footer__heading">Contact Us</h4>
          <div class="footer__contact-item">
            <svg class="footer__contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>42 Galle Road, Colombo 03, Sri Lanka</span>
          </div>
          <div class="footer__contact-item">
            <svg class="footer__contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <span>+94 11 234 5678</span>
          </div>
          <div class="footer__contact-item">
            <svg class="footer__contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            <span>info@exploresl.lk</span>
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <p class="footer__copyright">&copy; 2026 ExploreSL. All rights reserved. Group 04 — Interactive Design.</p>
        <p class="footer__copyright">Designed with love for Sri Lanka Tourism</p>
      </div>
    </div>`;
}

function initMobileNav() {
  const toggle = document.getElementById('nav-toggle');
  const mobile = document.getElementById('nav-mobile');
  const iconMenu = document.getElementById('nav-icon-menu');
  const iconClose = document.getElementById('nav-icon-close');
  if (!toggle || !mobile) return;

  toggle.addEventListener('click', () => {
    const isOpen = mobile.classList.toggle('open');
    iconMenu.style.display = isOpen ? 'none' : 'block';
    iconClose.style.display = isOpen ? 'block' : 'none';
  });
}

function initAnimatedCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting || entry.target.dataset.started) return;
      entry.target.dataset.started = 'true';
      const target = parseInt(entry.target.dataset.counter, 10);
      const suffix = entry.target.dataset.suffix || '';
      let current = 0;
      const step = target / 60;
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          entry.target.textContent = target.toLocaleString() + suffix;
          clearInterval(timer);
        } else {
          entry.target.textContent = Math.floor(current).toLocaleString() + suffix;
        }
      }, 25);
    });
  }, { threshold: 0.3 });

  counters.forEach(el => observer.observe(el));
}

function initScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
}

function initFilterBar(containerId, onFilter) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-pill');
    if (!btn) return;
    container.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    onFilter(btn.dataset.filter);
  });
}

function renderTags(items) {
  return items.map(t => `<span class="tag">${t}</span>`).join('');
}

function renderDestCard(d) {
  return `
    <article class="card dest-card fade-in" style="display: flex; flex-direction: column;">
      <div class="card__image-wrap">
        <img src="${d.img}" alt="${d.name}" class="card__image" loading="lazy">
        <span class="card__badge" style="background:var(--color-primary)">${d.cat}</span>
        <div class="dest-card__rating">
          <svg class="star" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          ${d.rating}
        </div>
      </div>
      <div class="card__body" style="display: flex; flex-direction: column; flex-grow: 1;">
        <h3 class="card__title">${d.name}</h3>
        <div class="dest-card__meta">
          <span>🕐 ${d.season}</span>
          <span class="dest-card__budget">${d.budget}</span>
        </div>
        <p class="card__text mb-4">${d.desc}</p>
        <div class="mb-4">${d.things.map(t => `<span class="tag">${t}</span>`).join(' ')}</div>
        ${d.mapUrl ? `<a href="${d.mapUrl}" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.25rem; font-size: 0.875rem; color: var(--color-primary); font-weight: 600; text-decoration: none; margin-top: auto;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          View on Map
        </a>` : ''}
      </div>
    </article>`;
}

function renderPackageCard(p) {
  return `
    <article class="card package-card fade-in">
      <div class="package-card__header">
        <img src="${p.img}" alt="${p.name}" class="card__image" loading="lazy">
        <div class="package-card__overlay"></div>
        <span class="package-card__tier" style="background:${p.color}">${p.tier}</span>
        <div class="package-card__footer-info">
          <h3 class="package-card__name">${p.name}</h3>
          <span class="package-card__price">${p.price}</span>
        </div>
      </div>
      <div class="card__body">
        <div class="mb-3">
          <span class="package-card__days" style="background:${p.color}">${p.days} Days</span>
          <span class="card__text" style="display:inline;margin-left:0.5rem">${p.difficulty} · ${p.transport}</span>
        </div>
        <p class="card__text mb-4">${p.desc}</p>
        <div class="mb-4">
          <div class="package-detail"><span class="package-detail__label">Destinations</span><span class="package-detail__value">${p.destinations.join(', ')}</span></div>
          <div class="package-detail"><span class="package-detail__label">Meals</span><span class="package-detail__value">${p.meals}</span></div>
          <div class="package-detail"><span class="package-detail__label">Stay</span><span class="package-detail__value">${p.accommodation}</span></div>
        </div>
        <a href="contact.html" class="btn btn--primary btn--full btn--sm">Book Now</a>
      </div>
    </article>`;
}

function renderHotelCard(h) {
  return `
    <article class="card hotel-card fade-in">
      <div class="card__image-wrap">
        <img src="${h.img}" alt="${h.name}" class="card__image" loading="lazy">
        <span class="card__badge">${h.tier}</span>
        <div class="hotel-card__stars-overlay"><div class="stars">${renderStars(h.stars)}</div></div>
      </div>
      <div class="card__body">
        <div class="hotel-card__header">
          <h3 class="card__title">${h.name}</h3>
          <span class="hotel-card__price">${h.price}</span>
        </div>
        <p class="hotel-card__location">📍 ${h.location}</p>
        <p class="card__text mb-4">${h.desc}</p>
        <div class="mb-4">${h.facilities.map(f => `<span class="tag tag--blue">${f}</span> `).join('')}</div>
        <button class="btn btn--blue btn--full btn--sm">Book Now</button>
      </div>
    </article>`;
}

function renderBlogCard(p) {
  const base = getBasePath();
  return `
    <article class="card blog-card fade-in">
      <div class="card__image-wrap" style="height:11rem">
        <img src="${p.img}" alt="${p.title}" class="card__image" loading="lazy">
      </div>
      <div class="card__body">
        <div class="blog-card__tags">${p.tags.map(t => `<span class="blog-card__tag">${t}</span>`).join('')}</div>
        <h3 class="card__title" style="font-size:0.875rem">${p.title}</h3>
        <p class="card__text mb-4">${p.excerpt}</p>
        <div class="blog-card__footer">
          <div>
            <p style="font-family:var(--font-heading);font-weight:600;font-size:0.75rem">${p.author}</p>
            <p style="font-size:0.75rem;color:var(--color-gray-400)">${p.date}</p>
          </div>
          <span class="blog-card__read-time">${p.time}</span>
        </div>
      </div>
    </article>`;
}

function renderGalleryItem(item) {
  return `
    <div class="gallery-item fade-in" data-src="${item.src}" data-caption="${item.caption}">
      <img src="${item.src}" alt="${item.caption}" class="gallery-item__image" loading="lazy">
      <div class="gallery-item__overlay">
        <span class="gallery-item__caption">${item.caption}</span>
      </div>
    </div>`;
}

function renderFaqItem(faq, index) {
  return `
    <div class="faq-item" data-faq="${index}">
      <button class="faq-item__question" type="button">
        <span>${faq.q}</span>
        <svg class="faq-item__chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      <div class="faq-item__answer">${faq.a}</div>
    </div>`;
}

function initFaqAccordion() {
  document.querySelectorAll('.faq-item__question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });
}

function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  const img = lightbox.querySelector('.lightbox__image');
  const close = lightbox.querySelector('.lightbox__close');

  document.addEventListener('click', (e) => {
    const item = e.target.closest('.gallery-item');
    if (!item) return;
    img.src = item.dataset.src;
    img.alt = item.dataset.caption;
    lightbox.classList.add('open');
  });

  const closeLightbox = () => lightbox.classList.remove('open');
  close?.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });
}
