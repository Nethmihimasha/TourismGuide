/* Main entry — initializes shared components on every page */
document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.dataset.page || 'home';
  renderNavbar(page);
  renderFooter();
  initAnimatedCounters();
  initScrollAnimations();
  initGoTop();
});
