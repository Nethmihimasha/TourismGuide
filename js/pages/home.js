document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.hero-slider');
  if (!slider) return;
  const scrollArrow = slider.querySelector('.home-hero__scroll');

  const slides = slider.querySelectorAll('.hero-slider__slide');
  const dotsContainer = slider.querySelector('.hero-slider__dots');
  let current = 0;
  let autoplayTimer;

  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'hero-slider__dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll('.hero-slider__dot');

  function goTo(index) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
    resetAutoplay();
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function resetAutoplay() {
    clearInterval(autoplayTimer);
    autoplayTimer = setInterval(next, 5000);
  }

  slider.querySelector('.hero-slider__btn--prev')?.addEventListener('click', prev);
  slider.querySelector('.hero-slider__btn--next')?.addEventListener('click', next);

  slider.addEventListener('mouseenter', () => clearInterval(autoplayTimer));
  slider.addEventListener('mouseleave', resetAutoplay);

  if (scrollArrow) {
    const scrollTarget = document.querySelector('.stats-bar') || slider.nextElementSibling;

    scrollArrow.setAttribute('role', 'button');
    scrollArrow.setAttribute('tabindex', '0');
    scrollArrow.setAttribute('aria-label', 'Scroll to next section');

    const scrollToTarget = () => {
      if (!scrollTarget) return;

      scrollTarget.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    };

    scrollArrow.addEventListener('click', scrollToTarget);
    scrollArrow.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      scrollToTarget();
    });
  }

  resetAutoplay();
});
