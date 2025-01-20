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
let defaultImg = ' <img src="../assets/logo.png" />';
document.addEventListener('DOMContentLoaded', () => {
    jobList.forEach(job => {
        const { id, jobTitle, companyName, applicationDeadline, jobDescription, salaryRange, companyLogo } = job;
        jobSection += `
            <div class="job-card">
                <div>
                    <div class="comp-logo">
                    ${companyLogo ? "<img src='${companyLogo}' />" : defaultImg}
                
                    </div>        
                    <div>
                        <p><span class="job-title bold-text">${jobTitle}</span> needed at <span class="bold-text">${companyName}</span></p>
                        <small class="time-posted">${applicationDeadline}</small>
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
        `;
    });
    mainSection.innerHTML = jobSection;
});
