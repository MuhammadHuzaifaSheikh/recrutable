import {Container, Toolbar, Typography, Grid, useMediaQuery,} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import InfoContainerMain from './infoContainer/index'
import './style.css'
import Header from "./Header/Header";
import Applications from "./Application";
import {applicantions} from "../../../../data/applicationsData.json";
import {candidates} from "../../../../data/candidateData.json";
import {useSelector} from "react-redux";
export default function PendingApplication() {
    let {type} = useSelector(({filterCase}) => filterCase);

    const [data, setData] = useState({
        approved: [],
        pending: [],
        rejected: [],
        requested: [],
        shortListed: [],
    })

    const [candidatesData, setCandidatesData] = useState(candidates);

    useEffect(() => {
        const approveData = applicantions.filter((curElm) => curElm.ac_manager_approval === "approved")
        const pendingData = applicantions.filter((curElm) => curElm.ac_manager_approval === "pending")
        const rejectedData = applicantions.filter((curElm) => curElm.ac_manager_approval === "rejected")
        const requestedData = applicantions.filter((curElm) => curElm.ac_manager_approval === "requested");
        const shortListedData = applicantions.filter((curElm) => curElm.ac_manager_approval === "shortListed");
        setData({approved: approveData, pending: pendingData, rejected: rejectedData,requested:requestedData,shortListed:shortListedData})
    }, [])

    useEffect(() => {
        let currDataCandidate = []
        if (type==='all') setCandidatesData(candidates)
        else if (type==='shortListed')  setCandidatesData([])
        else {
            data[type].forEach((value)=>{
                const candidateFilter = candidates.filter((curCandidate) => curCandidate.id === value.candidate_id);
                currDataCandidate.push(candidateFilter[0])
            })
            setCandidatesData(currDataCandidate)
        }
    }, [data,type])
    console.log(candidatesData);
    return(
        <Container   className="PendingApplication_main">
            <Header/>
            <div className="pendingApplication_content">
                <InfoContainerMain data={data}/>
                <Applications candidatesApplications={candidatesData}/>
            </div>
        </Container>
    )
}