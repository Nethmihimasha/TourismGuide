document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('gallery-grid');
  let currentFilter = 'All';

  function render(list) {
    if (!grid) return;
    grid.innerHTML = list.map(renderGalleryItem).join('');
    initScrollAnimations();
  }

  initFilterBar('gallery-filters', (filter) => {
    currentFilter = filter;
    const filtered = GALLERY_ITEMS.filter(i => filter === 'All' || i.cat === filter);
    render(filtered);
  });

  render(GALLERY_ITEMS);
  initLightbox();
});
