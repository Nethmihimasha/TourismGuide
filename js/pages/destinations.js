document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('destinations-grid');
  const searchInput = document.getElementById('dest-search');
  const emptyState = document.getElementById('dest-empty');
  let currentFilter = 'All';

  function render(list) {
    if (!grid) return;
    if (list.length === 0) {
      grid.innerHTML = '';
      if (emptyState) emptyState.style.display = 'block';
      return;
    }
    if (emptyState) emptyState.style.display = 'none';
    grid.innerHTML = list.map(renderDestCard).join('');
    initScrollAnimations();
  }

  function applyFilters() {
    const query = (searchInput?.value || '').toLowerCase();
    const filtered = DESTINATIONS.filter(d =>
      (currentFilter === 'All' || d.cat === currentFilter) &&
      (d.name.toLowerCase().includes(query) || d.cat.toLowerCase().includes(query))
    );
    render(filtered);
  }

  initFilterBar('dest-filters', (filter) => {
    currentFilter = filter;
    applyFilters();
  });

  searchInput?.addEventListener('input', applyFilters);
  render(DESTINATIONS);
});
