import viewJobs from '../../../../images/ViewJobsIcon.svg';
import allCandidedades from '../../../../images/allCandidedades.svg';
import pendingApproval from '../../../../images/pendingApproval.svg';
import assignCompanies from '../../../../images/assignCompanies.svg';




export const jobData = [
    {title:"Total Applications",path:"/totalApplication"},
    {title:"Shortlisted By You",path:"/shortlistedByYou"},
    {title:"Pending Applications",path:"/pendingApplication"},
    {title:"Rejected",path:"/rejected"},
    {title:"View Job",path:"/viewJob"},
]

export const otherItems = [
    {title:"View Jobs",path:"/viewJobs",isChild:false,image:viewJobs},
    {title:"All Candidate",path:"/allCandidate",isChild: false,image: allCandidedades},
    {title:"Pending Approval",path:"/pendingApproval",badge:20,isChild: true,image: pendingApproval,child:[
            {title: "Candidate Approval",path:"/candidateApproval/",badge:10,},
            {title: "Employer Approval",path:"/employerApproval/",badge:5,},
            {title: "Pending Job",path:"/pendingJob/",badge:5,},
        ]},
    {title:"Assign Companies",path:"/assignCompanies",isChild: false,image: assignCompanies},
]