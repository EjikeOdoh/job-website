
const filterSection = document.getElementById('filter-section')!
const closeFilterBtn = document.getElementById('close-filter-btn') as HTMLButtonElement

function openFilterSection(event: Event):void {
    event.stopPropagation()
    filterSection.classList.add('active')
    document.body.style.overflow = 'hidden'
}

function closeFilterSection():void {
    filterSection.classList.remove('active')
    document.body.style.overflow = 'scroll'
}


window.addEventListener('click', (event: Event):void=>{
    const isFilterOpen: boolean = filterSection.classList.contains('active')

    if (!(event.target as HTMLElement)!.closest('#filter-section')) {
        if (isFilterOpen) {
            closeFilterSection()
        }
    }
})

closeFilterBtn.addEventListener('click', closeFilterSection)