import {Container, Toolbar, Typography, Grid, useMediaQuery,} from "@material-ui/core";
import React from "react";
import InfoContainerMain from './infoContainer/index'
import './style.css'
import Header from "./Header/Header";
export default function PendingApplication() {

    return(
        <Container   className="PendingApplication_main">
            <Header/>
           <InfoContainerMain/>
        </Container>
    )
}