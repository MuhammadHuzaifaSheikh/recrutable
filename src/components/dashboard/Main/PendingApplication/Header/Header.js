import {Grid} from "@material-ui/core";
import SubLogo from '../../../../../images/subLogo.png'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import './style.css'
export default function Header() {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <div className="header_heading">
                    <h2>Experienced Full Stack Developer</h2>
                    <div className="headerLocation_div">
                            <div className="header_website">
                                <p>SaaSLeads.io</p>
                            </div>
                            <div className="locationDiv">
                                <LocationOnIcon/>
                                <p>Londcon, England, United Kingdom</p>
                            </div>
                    </div>

                </div>

        </Grid>
    <Grid className="subLogo" item xs={12} sm={12} md={6} lg={6} xl={6}>
        <div>
            <img src={SubLogo} alt="LOGO"/>
        </div>
    </Grid>
</Grid>
)
}