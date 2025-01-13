"use strict";
const filterSection = document.getElementById('filter-section');
function toggleFilterSection(event) {
    event.stopPropagation();
    filterSection.classList.toggle('active');
}
window.addEventListener('click', (event) => {
    var _a;
    const isFilterOpen = filterSection.classList.contains('active');
    if (!((_a = event.target) === null || _a === void 0 ? void 0 : _a.closest('#filter-section'))) {
        if (isFilterOpen) {
            filterSection.classList.remove('active');
        }
    }
});
