"use strict";
const filterSection = document.getElementById('filter-section');
function toggleFilterSection(event) {
    event.stopPropagation();
    filterSection.classList.toggle('active');
}
window.addEventListener('click', (event) => {
    const isFilterOpen = filterSection.classList.contains('active');
    if (!event.target.closest('#filter-section')) {
        if (isFilterOpen) {
            filterSection.classList.remove('active');
        }
    }
});
