import {Grid, useMediaQuery} from "@material-ui/core";
import InfoContainer from "./InfoContainer";
import React from "react";
import {useTheme} from "@material-ui/core/styles";
import {useStyles} from "../../../Topbar/style";


export default function InfoContainerMain() {
    const theme = useTheme();
    const classes = useStyles();

    const isXs = useMediaQuery(theme.breakpoints.down("xs"));
    return(
        <div className={classes.infoContainerMain}>
            <Grid  container spacing={isXs?5:3}>
                <Grid item sm={8} xs={12}>
                    <Grid container spacing={isXs?5:0}>
                        <Grid item xs={12} sm={3}>
                            <InfoContainer title="Total Application"/>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <InfoContainer active title="Shortlisted by you "/>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <InfoContainer title="Pending Application"/>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <InfoContainer title="Rejected"/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sm={4} xs={12}>
                    <Grid container  spacing={isXs?5:0}>
                        <Grid  item xs={12} sm={6}>
                            <InfoContainer title="Employee Requested"/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InfoContainer title="Approved"/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>




        </div>
    )
}