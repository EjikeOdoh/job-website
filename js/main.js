"use strict";
const filterSection = document.getElementById('filter-section');
const closeFilterBtn = document.getElementById('close-filter-btn');
function openFilterSection(event) {
    event.stopPropagation();
    filterSection.classList.add('active');
    document.body.style.overflow = 'hidden';
}
function closeFilterSection() {
    filterSection.classList.remove('active');
    document.body.style.overflow = 'scroll';
}
window.addEventListener('click', (event) => {
    const isFilterOpen = filterSection.classList.contains('active');
    if (!event.target.closest('#filter-section')) {
        if (isFilterOpen) {
            closeFilterSection();
        }
    }
});
closeFilterBtn.addEventListener('click', closeFilterSection);
