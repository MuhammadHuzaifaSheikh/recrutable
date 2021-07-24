import {Grid, useMediaQuery} from "@material-ui/core";
import InfoContainer from "./InfoContainer";
import {useTheme} from "@material-ui/core/styles";
import {useStyles} from "../../../Topbar/style";
import {applicantions} from '../../../../../data/applicationsData.json'
import {setFilterCase} from "../../../../../store/action/action";
import {useDispatch, useSelector} from "react-redux";

export default function InfoContainerMain({data}) {
    let {type} = useSelector(({filterCase}) => filterCase);

    const theme = useTheme();
    const dispatch = useDispatch();
    const classes = useStyles();
    const isXs = useMediaQuery(theme.breakpoints.down("xs"));
    return (
        <div className={classes.infoContainerMain}>
            <Grid container spacing={isXs ? 5 : 3}>
                <Grid item sm={8} xs={12}>
                    <Grid container spacing={isXs ? 5 : 0}>
                        <Grid item xs={12} sm={12} md={3}>
                            <InfoContainer active={type==="all"} onClick={()=>dispatch(setFilterCase('all'))} number={applicantions.length} title="Total Application"/>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3}>
                            <InfoContainer  active={type==='shortListed'} onClick={()=>dispatch(setFilterCase('shortListed'))}   number={data.shortListed.length}  title="Shortlisted by you "/>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3}>
                            <InfoContainer active={type==="pending"} onClick={()=>dispatch(setFilterCase('pending'))} number={data.pending.length} title="Pending Application"/>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3}>
                            <InfoContainer active={type==="rejected"} onClick={()=>dispatch(setFilterCase('rejected'))} number={data.rejected.length} title="Rejected"/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sm={4} xs={12}>
                    <Grid container spacing={isXs ? 5 : 0}>
                        <Grid item xs={12} sm={12 } md={6}>
                            <InfoContainer active={type==="requested"} onClick={()=>dispatch(setFilterCase('requested'))} number={data.requested.length} title="Employee Requested"/>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <InfoContainer active={type==="approved"} onClick={()=>dispatch(setFilterCase('approved'))} number={data.approved.length} title="Approved"/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>


        </div>
    )
}