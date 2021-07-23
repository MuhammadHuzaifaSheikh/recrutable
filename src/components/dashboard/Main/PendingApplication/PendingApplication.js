import {Container, Toolbar, Typography, Grid, useMediaQuery,} from "@material-ui/core";
import React from "react";
import InfoContainer from './infoContainer/InfoContainer'
import './style.css'
import Header from "./Header/Header";
import {useTheme} from "@material-ui/core/styles";
export default function PendingApplication() {
    const theme = useTheme();

    const isXs = useMediaQuery(theme.breakpoints.down("xs"));
    return(
        <Container   className="PendingApplication_main">
            <Header/>
            <div className="infoBoxContainer">
                <Grid  container spacing={isXs?5:3}>
                    <Grid item sm={8} xs={12}>
                        <Grid container spacing={isXs?5:0}>
                            <Grid item xs={12} sm={3}>
                                <InfoContainer/>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <InfoContainer active/>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <InfoContainer/>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <InfoContainer/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <Grid container  spacing={isXs?5:0}>
                            <Grid  item xs={12} sm={6}>
                                <InfoContainer/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <InfoContainer/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>




            </div>




        </Container>
    )
}