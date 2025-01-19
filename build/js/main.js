"use strict";
const filterSection = document.getElementById('filter-section');
const closeFilterBtn = document.getElementById('close-filter-btn');
function toggleFilterSection(event) {
    event.stopPropagation();
    filterSection.classList.toggle('active');
}
function closeFilterSection() {
    filterSection.classList.remove('active');
}
window.addEventListener('click', (event) => {
    const isFilterOpen = filterSection.classList.contains('active');
    if (!event.target.closest('#filter-section')) {
        if (isFilterOpen) {
            filterSection.classList.remove('active');
        }
    }
});
closeFilterBtn.addEventListener('click', closeFilterSection);
