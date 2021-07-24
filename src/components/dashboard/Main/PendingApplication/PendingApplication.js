import {Container, Toolbar, Typography, Grid, useMediaQuery,} from "@material-ui/core";
import React from "react";
import InfoContainerMain from './infoContainer/index'
import './style.css'
import Header from "./Header/Header";
import Applications from "./Application";
export default function PendingApplication() {

    return(
        <Container   className="PendingApplication_main">
            <Header/>
            <div className="pendingApplication_content">
                <InfoContainerMain/>
                <Applications/>

            </div>
        </Container>
    )
}