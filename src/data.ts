type Job = {
    id: string;
    jobTitle: string;
    jobCategory: string;
    jobType: string;
    jobDescription: string;
    jobRequirements: string;
    locationType: string;
    location?: string;
    salaryRange?: string;
    benefits?: string;
    applicationDeadline?: string;
    applicationInstructions?: string;
    applicationLink?: string;
    companyName: string;
    companyAbout?: string;
    companyWebsite?: string;
    companyLogo?: File;
};


const jobList: Job[] = [
    {
        id: "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed",
        jobTitle: "Software Engineer",
        jobCategory: "IT",
        jobType: "Full-time",
        jobDescription: "Develop and maintain web applications.",
        jobRequirements: "Proficiency in JavaScript and experience with React.",
        locationType: "On-site",
        location: "Lagos, Nigeria",
        salaryRange: "₦3,000,000 - ₦4,000,000/year",
        benefits: "Health insurance, paid time off.",
        applicationDeadline: "2025-02-28",
        applicationInstructions: "Submit your resume and cover letter via email.",
        applicationLink: "careers@techsolutions.com",
        companyName: "Tech Solutions Inc.",
        companyAbout: "A leading tech company specializing in web development.",
        companyWebsite: "https://www.techsolutions.com",
        companyLogo: undefined,
    },
    {
        id: "2a4f6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed",
        jobTitle: "Marketing Manager",
        jobCategory: "Marketing",
        jobType: "Full-time",
        jobDescription: "Lead the marketing team to develop strategies.",
        jobRequirements: "Experience in digital marketing and team management.",
        locationType: "Hybrid",
        location: "Abuja, Nigeria",
        salaryRange: "₦2,500,000 - ₦3,500,000/year",
        benefits: "Flexible working hours, performance bonuses.",
        applicationDeadline: "2025-03-15",
        applicationInstructions: "Apply through our online portal.",
        applicationLink: "https://www.marketingleaders.com/careers",
        companyName: "Marketing Leaders Ltd.",
        companyAbout: "A dynamic marketing agency with a global clientele.",
        companyWebsite: "https://www.marketingleaders.com",
        companyLogo: undefined,
    },
    {
        id: "3c7d8bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed",
        jobTitle: "Data Analyst",
        jobCategory: "Data Analysis",
        jobType: "Contract",
        jobDescription: "Analyze data to support business decisions.",
        jobRequirements: "Strong analytical skills and proficiency in SQL.",
        locationType: "Remote",
        location: undefined,
        salaryRange: "₦1,800,000 - ₦2,200,000/year",
        benefits: "Remote work allowance.",
        applicationDeadline: "2025-02-20",
        applicationInstructions: "Send your portfolio and resume via email.",
        applicationLink: "hr@dataanalytics.com",
        companyName: "Data Analytics Corp.",
        companyAbout: "Specializes in providing data-driven solutions.",
        companyWebsite: "https://www.dataanalytics.com",
        companyLogo: undefined,
    },
    {
        id: "4d9e0bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed",
        jobTitle: "Graphic Designer",
        jobCategory: "Design",
        jobType: "Part-time",
        jobDescription: "Create visual content for various platforms.",
        jobRequirements: "Proficiency in Adobe Creative Suite.",
        locationType: "On-site",
        location: "Port Harcourt, Nigeria",
        salaryRange: "₦1,200,000 - ₦1,500,000/year",
        benefits: "Creative work environment.",
        applicationDeadline: "2025-03-10",
        applicationInstructions: "Submit your portfolio and resume online.",
        applicationLink: "https://www.creativedesigns.com/careers",
        companyName: "Creative Designs Studio",
        companyAbout: "A design studio focused on innovative solutions.",
        companyWebsite: "https://www.creativedesigns.com",
        companyLogo: undefined,
    },
    {
        id: "5e1f2bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed",
        jobTitle: "Sales Executive",
        jobCategory: "Sales",
        jobType: "Full-time",
        jobDescription: "Drive sales and expand market reach.",
        jobRequirements: "Strong communication and negotiation skills.",
        locationType: "On-site",
        location: "Kano, Nigeria",
        salaryRange: "₦2,000,000 - ₦2,800,000/year",
        benefits: "Commission on sales, company car.",
        applicationDeadline: "2025-02-25",
        applicationInstructions: "Apply via our career page.",
        applicationLink: "https://www.salesforce.com/careers",
        companyName: "SalesForce Nigeria",
        companyAbout: "Leading provider of sales solutions.",
        companyWebsite: "https://www.salesforce.com",
        companyLogo: undefined,
    },
    {
        id: "6f3a4bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed",
        jobTitle: "Human Resources Manager",
        jobCategory: "Human Resources",
        jobType: "Full-time",
        jobDescription: "Oversee HR functions and employee relations.",
        jobRequirements: "Experience in HR management and labor laws.",
        locationType: "Hybrid",
        location: "Ibadan, Nigeria",
        salaryRange: "₦2,800,000 - ₦3,500,000/year",
        benefits: "Health benefits, retirement plan.",
        applicationDeadline: "2025-03-05",
        applicationInstructions: "Email your resume and cover letter.",
        applicationLink: "jobs@hrsolutions.com",
        companyName: "HR Solutions Ltd.",
        companyAbout: "Provides comprehensive HR services.",
        companyWebsite: "https://www.hrsolutions.com",
        companyLogo: undefined,
    },
    {
        id: "7g5b6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed",
        jobTitle: "Project Manager",
        jobCategory: "Project Management",
        jobType: "Contract",
        jobDescription: "Manage projects from initiation to closure.",
        jobRequirements: "PMP certification and project management experience.",
        locationType: "Remote",
        location: undefined,
        salaryRange: "₦3,500,000 - ₦4,500,000/year",
        benefits: "Flexible working hours.",
        applicationDeadline: "2025-02-28",
        applicationInstructions: "Apply through our website.",
        applicationLink: "https://www.projectmanagement.com/careers",
        companyName: "Project Management Experts",
        companyAbout: "Specializes in managing large-scale projects.",
        companyWebsite: "https://www.projectmanagement.com",
        companyLogo: undefined,
    },

]  