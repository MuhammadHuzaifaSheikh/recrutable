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
export default function ApplicationsCard({name,designation,profile_img,city,state,country,latest_education_end_year,latest_education,expected_salary,tags}) {
    const classes = useStyles();

    return (
        <div className="ApplicationsCard_main">
            <div className="userInfo_Div">
                <div>
                    <Avatar className={classes.avatar} alt={name?name:"Name"} src={profile_img}/>
                </div>
                <div className="userInfo_name">
                    <h2>{name?name:"User Name"}</h2>
                    <p>{designation?designation:"None"}</p>
                </div>
            </div>
            <div className="applicationCard_center">
                <div className="applicationCard_center_firstDiv">
                    <div className="applicationCard_center_div1">
                        <div className="applicationCard_center_general">
                            <img style={{margin: "0 12px", width: 10}} src={LocationIcon} alt="icon"/>
                            <p>{city&&city} {state&&state}, {country&&country}</p>
                        </div>
                        <div className="applicationCard_center_general">
                            <img style={{width: 13}} src={degreeIcon} alt="icon"/>
                            <p>Education: {latest_education_end_year?latest_education_end_year:"0000-0000"} - {latest_education?latest_education:"latest_education"} </p>
                        </div>
                    </div>
                    <div className="applicationCard_center_div2">
                        <div className="applicationCard_center_general">
                            <img style={{width: 14}} src={salaryIcon} alt="icon"/>
                            <p>Expected Salary: {expected_salary?expected_salary:"Open to Negotiation"} </p>
                        </div>
                    </div>
                </div>

                <div className="applicationCard_center_div3">
                    <div>
                        <Button style={{color: "#24AEE4", borderColor: '#24AEE4',}} variant="outlined">View Application</Button>
                    </div>
                    <div className="acceptBtn">
                        <Button
                            style={{color: "#fff", background: '#24AEE4',}}
                            variant="contained">Accept</Button>
                    </div>
                </div>
            </div>

            <div className="divider">
                <Divider/>
            </div>

            <div className="tags">
                <div className="tags1">
                    {tags.slice(0,3).map((item,index)=>{
                        return  <p key={index}>{item}</p>
                    })}
                </div>
                <div className="tags2">
                    {tags.slice(3,6).map((item,index)=>{
                        return  <p key={index}>{item}</p>
                    })}

                </div>
            </div>


        </div>
    )
}