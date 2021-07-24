import {Grid, useMediaQuery} from "@material-ui/core";
import InfoContainer from "./InfoContainer";
import React, {useEffect, useState} from "react";
import {useTheme} from "@material-ui/core/styles";
import {useStyles} from "../../../Topbar/style";
import {applicantions} from '../../../../../data/applicationsData.json'
import {candidates} from '../../../../../data/candidateData.json'

export default function InfoContainerMain() {
    const theme = useTheme();
    const classes = useStyles();

    const [data, setData] = useState({
        approved: [],
        pending: [],
        rejected: [],
    })

    const [candidatesData, setCandidatesData] = useState([]);

    useEffect(() => {
        const approveData = applicantions.filter((curElm) => curElm.ac_manager_approval === "approved")
        const pendingData = applicantions.filter((curElm) => curElm.ac_manager_approval === "pending")
        const rejectedData = applicantions.filter((curElm) => curElm.ac_manager_approval === "rejected")
        setData({approved: approveData, pending: pendingData, rejected: rejectedData})
    }, [])

    useEffect(() => {
       data.rejected.forEach((value)=>{
           console.log(value);
           const candidateFilter = candidates.filter((curCandidate) => curCandidate.id === value.candidate_id);
           console.log(candidateFilter);
       })

    }, [data])

    const isXs = useMediaQuery(theme.breakpoints.down("xs"));
    return (
        <div className={classes.infoContainerMain}>
            <Grid container spacing={isXs ? 5 : 3}>
                <Grid item sm={8} xs={12}>
                    <Grid container spacing={isXs ? 5 : 0}>
                        <Grid item xs={12} sm={12} md={3}>
                            <InfoContainer number={applicantions.length} title="Total Application"/>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3}>
                            <InfoContainer active title="Shortlisted by you "/>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3}>
                            <InfoContainer number={data.pending.length} title="Pending Application"/>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3}>
                            <InfoContainer number={data.rejected.length} title="Rejected"/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sm={4} xs={12}>
                    <Grid container spacing={isXs ? 5 : 0}>
                        <Grid item xs={12} sm={12 } md={6}>
                            <InfoContainer title="Employee Requested"/>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <InfoContainer number={data.approved.length} title="Approved"/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>


        </div>
    )
}