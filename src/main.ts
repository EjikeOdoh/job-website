
const filterSection = document.getElementById('filter-section')!
const closeFilterBtn = document.getElementById('close-filter-btn') as HTMLButtonElement

function toggleFilterSection(event: Event):void {
    event.stopPropagation()
    filterSection.classList.toggle('active')
}

function closeFilterSection():void {
    filterSection.classList.remove('active')
}


window.addEventListener('click', (event: Event):void=>{
    const isFilterOpen: boolean = filterSection.classList.contains('active')

    if (!(event.target as HTMLElement)!.closest('#filter-section')) {
        if (isFilterOpen) {
            filterSection.classList.remove('active');
        }
    }
})

closeFilterBtn.addEventListener('click', closeFilterSection)