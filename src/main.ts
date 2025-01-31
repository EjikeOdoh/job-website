const mainSection = document.querySelector('main')!
const filterSection = document.getElementById('filter-section')!
const closeFilterBtn = document.getElementById('close-filter-btn') as HTMLButtonElement
const subscribeDialog = document.querySelector('dialog')!

function openFilterSection(event: Event): void {
    event.stopPropagation()
    filterSection.classList.add('active')
    document.body.style.overflow = 'hidden'
}

function closeFilterSection(): void {
    filterSection.classList.remove('active')
    document.body.style.overflow = 'scroll'
}


function showModal():void {
    subscribeDialog.showModal()
}

function closeModal():void {
    subscribeDialog.close()
}


window.addEventListener('click', (event: Event): void => {
    const isFilterOpen: boolean = filterSection.classList.contains('active')

    if (!(event.target as HTMLElement)!.closest('#filter-section')) {
        if (isFilterOpen) {
            closeFilterSection()
        }
    }
})

closeFilterBtn.addEventListener('click', closeFilterSection)
console.log(jobList)

let jobSection: string = ""
let defaultImg: string = ' <img src="../assets/logo.png" />'

document.addEventListener('DOMContentLoaded', () => {
    jobList.forEach(job => {
        const { id, jobTitle, companyName, applicationDeadline, jobDescription, salaryRange, companyLogo } = job

        jobSection += `
            <div class="job-card">
                <div>
                    <div class="comp-logo">
                    ${ companyLogo ? "<img src='${companyLogo}' />" : defaultImg }
                    </div>        
                    <div>
                        <p><span class="job-title bold-text">${jobTitle}</span> needed at <span class="bold-text">${companyName}</span></p>
                        <p><span class="label">Posted by</span> - <span class="poster">Admin</span></p>
                        <p><span class="label">Date Posted</span> - <small class="time-posted">${applicationDeadline}</small></p>
                        
                    </div>
                </div>
                 <div>
                      <p class="label">Description</p>
                        <p class="job-desc value">${jobDescription}
                        </p>
                </div>
                <div>
                      <p class="label">Salary</p>
                        <p class="value">${salaryRange}
                        </p>
                </div>
                    <a href="job.html?id=${id}" class="apply-btn" type="menu">Apply</a>

            </div>
        `

        setTimeout(showModal, 2000)
    });

    mainSection.innerHTML = jobSection;
})


