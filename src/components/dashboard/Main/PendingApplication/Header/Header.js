import {Grid} from "@material-ui/core";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {title,company_name,company_logo,region} from '../../../../../data/jobData.json'
import './style.css'
export default function Header() {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <div className="header_heading">
                    <h2>{title}</h2>
                    <div className="headerLocation_div">
                            <div className="header_website">
                                <p>{company_name}</p>
                            </div>
                            <div className="locationDiv">
                                <LocationOnIcon/>
                                <p>{region}</p>
                            </div>
                    </div>
                </div>
        </Grid>
    <Grid className="subLogo" item xs={12} sm={12} md={6} lg={6} xl={6}>
        <div>
            <img src={company_logo} alt="LOGO"/>
        </div>
    </Grid>
</Grid>
)
}