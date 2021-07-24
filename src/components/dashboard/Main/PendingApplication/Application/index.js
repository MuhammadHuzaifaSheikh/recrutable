import ApplicationsCard from "./ApplicationCard";
import './style.css'
import {Grid} from "@material-ui/core";
import React from "react";
export default function Applications({candidatesApplications}) {
    return(
        <div className="Applications_main">
            <div className="applicationContainer_heading">
                <h2>Pending Applications</h2>
            </div>
            <Grid container spacing={3}>
                {candidatesApplications.map((item,index)=>{
                    let {first_name,last_name,profile_img,designation,city,state,country,expected_salary,latest_education,latest_education_end_year,tags} = item
                    return(
                        <Grid key={index} item xs={12} sm={6} md={12}>
                            <ApplicationsCard name={first_name+" "+ last_name} city={city} country={country} designation={designation} expected_salary={expected_salary} latest_education={latest_education} latest_education_end_year={latest_education_end_year} profile_img={profile_img} state={state} tags={tags}/>
                        </Grid>
                    )
                })}

            </Grid>



        </div>
    )
}