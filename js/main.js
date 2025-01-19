"use strict";
const mainSection = document.querySelector('main');
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
console.log(jobList);
let jobSection = "";
document.addEventListener('DOMContentLoaded', () => {
    jobList.forEach(job => {
        const { jobTitle, companyName, applicationDeadline, jobDescription } = job;
        jobSection += `
            <div class="job-card">
                    <div>
                        <h3 class="job-tile">${jobTitle} needed at ${companyName}</h3>
                        <small class="time-posted">${applicationDeadline}</small>
                    </div>
                    <div>
                        <div class="comp-logo"></div>
                        <p class="job-desc">${jobDescription}
                        </p>
                    </div>
                    <a href="job.html" class="apply-btn" type="menu">Apply</a>

                </div>
        `;
    });
    mainSection.innerHTML = jobSection;
});
