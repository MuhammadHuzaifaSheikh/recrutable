import {Avatar, Button, Divider} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import LocationIcon from '../../../../../images/locationIcon.png'
import degreeIcon from '../../../../../images/degreeIcon.png'
import salaryIcon from '../../../../../images/salaryIcon.png'

const useStyles = makeStyles((theme) => ({
    avatar: {
        width: theme.spacing(6),
        height: theme.spacing(6),
    },
}));
export default function ApplicationsCard() {
    const classes = useStyles();

    return (
        <div className="ApplicationsCard_main">
            <div className="userInfo_Div">
                <div>
                    <Avatar className={classes.avatar} alt={"Huzaifa"}
                            src="https://capital-placement.com/wp-content/uploads/2021/05/Ashiklal-Pyarilal.jpeg"/>
                </div>
                <div className="userInfo_name">
                    <h2>Moin Khan</h2>
                    <p>Full Stack web developer</p>
                </div>
            </div>
            <div className="applicationCard_center">
                <div className="applicationCard_center_firstDiv">
                    <div className="applicationCard_center_div1">
                        <div className="applicationCard_center_general">
                            <img style={{margin: "0 12px", width: 10}} src={LocationIcon} alt="icon"/>
                            <p>Bangalore Urban, Karnataka, India</p>
                        </div>
                        <div className="applicationCard_center_general">
                            <img style={{width: 13}} src={degreeIcon} alt="icon"/>
                            <p>Education: 2018-2021 - MSc Computer Science </p>
                        </div>
                    </div>
                    <div className="applicationCard_center_div2">
                        <div className="applicationCard_center_general">
                            <img style={{width: 14}} src={salaryIcon} alt="icon"/>
                            <p>Expected Salary: Open to Negotiation </p>
                        </div>
                    </div>
                </div>

                <div className="applicationCard_center_div3">
                    <div>
                        <Button style={{
                            color: "#24AEE4",
                            fontWeight: 600,
                            borderColor: '#24AEE4',
                            textTransform: "capitalize"
                        }} variant="outlined">View Application</Button>
                    </div>
                    <div className="acceptBtn">
                        <Button
                            style={{color: "#fff", fontWeight: 600, background: '#24AEE4', textTransform: "capitalize"}}
                            variant="contained">Accept</Button>
                    </div>
                </div>
            </div>

            <div className="divider">
                <Divider/>
            </div>

            <div className="tags">
                <div className="tags1">
                   <p>HTML</p>
                   <p>CSS</p>
                   <p>Bootstrap </p>
                </div>
                <div className="tags2">
                    <p>HTMl</p>
                    <p>CSS</p>
                    <p>Bootstrap </p>
                </div>
            </div>


        </div>
    )
}