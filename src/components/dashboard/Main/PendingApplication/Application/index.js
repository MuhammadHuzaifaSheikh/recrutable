import ApplicationsCard from "./ApplicationCard";
import './style.css'
import {Grid} from "@material-ui/core";
import InfoContainer from "../infoContainer/InfoContainer";
import {applicantions} from "../../../../../data/applicationsData.json";
import React from "react";
export default function Applications() {
    return(
        <div className="Applications_main">
            <div className="applicationContainer_heading">
                <h2>Pending Applications</h2>
            </div>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={12}>
                    <ApplicationsCard/>
                </Grid>
                <Grid item xs={12} sm={6} md={12}>
                    <ApplicationsCard/>
                </Grid>
                <Grid item xs={12} sm={6} md={12}>
                    <ApplicationsCard/>
                </Grid>
                <Grid item xs={12} sm={6} md={12}>
                    <ApplicationsCard/>
                </Grid>


            </Grid>



        </div>
    )
}