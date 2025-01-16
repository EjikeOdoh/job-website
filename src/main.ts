
const filterSection = document.getElementById('filter-section')!

function toggleFilterSection(event: Event):void {

    event.stopPropagation()
    filterSection.classList.toggle('active')
}

window.addEventListener('click', (event: Event):void=>{
    const isFilterOpen: boolean = filterSection.classList.contains('active')

    if (!(event.target as HTMLElement)!.closest('#filter-section')) {
        if (isFilterOpen) {
            filterSection.classList.remove('active');
        }
    }
})