document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('hotels-grid');
  let currentFilter = 'All';

  function render(list) {
    if (!grid) return;
    grid.innerHTML = list.map(renderHotelCard).join('');
    initScrollAnimations();
  }

  initFilterBar('hotel-filters', (filter) => {
    currentFilter = filter;
    const filtered = HOTELS.filter(h => filter === 'All' || h.tier === filter);
    render(filtered);
  });

  render(HOTELS);
});
