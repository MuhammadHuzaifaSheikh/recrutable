import React, {useState} from "react";
import './style.css'
import sidebarMainDashboardIcon from '../../../../images/sidebarMainDashboardIcon.svg'
import {List, ListItem, Collapse, ListItemIcon, ListItemText} from "@material-ui/core";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import {jobData,otherItems} from "./SidebarData";

export default function Sidebar() {
    const [main_dashboardOpen, setMain_dashboardOpen] = useState(true);
    const [job_dashboardOpen, setJob_dashboardOpen] = useState(true);
    const [pending_approvalOpen, setPending_approvalOpen ]= useState(true);



    return (
        <div>
            <List>
                <ListItem style={{paddingRight:0}} onClick={() => setMain_dashboardOpen(!main_dashboardOpen)}>
                    <div  className="main_dashboard">
                        <img src={sidebarMainDashboardIcon} alt="icon"/>
                        <p>Main Dashboard</p>
                    </div>

                </ListItem>
                <Collapse in={main_dashboardOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem onClick={() => setJob_dashboardOpen(!job_dashboardOpen)} style={{paddingLeft: 48, paddingRight: 0,paddingBottom:0}}>
                            <div className="main_dashboard">
                                {job_dashboardOpen ? <ExpandLess fontSize="large" style={{color: "#24AEE4"}}/> :
                                    <ExpandMore fontSize="large" style={{color: "#24AEE4"}}/>}
                                <p>Job Dashboard</p>
                            </div>
                        </ListItem>
                        <Collapse in={job_dashboardOpen} timeout="auto" unmountOnExit>
                            <List style={{marginLeft: 71.5,height: 189,paddingTop:20,borderLeft:'1px solid #C4C4C4'}} component="div" disablePadding>
                                {jobData.map((item,index)=>{
                                    let {title} = item
                                    return(
                                        <ListItem key={index}  style={{paddingLeft:0,paddingBottom:0}}>
                                            <div className="sub_menuText">
                                                <div/>
                                                <p style={index===2?{color:'#ED2147'}:{}}>{title}</p>
                                            </div>
                                        </ListItem>
                                    )
                                })}
                            </List>
                        </Collapse>

                        {otherItems.map((item,index)=>{
                            let {title,isChild,badge,child,image} = item
                            return(
                                <div key={index}>
                                    <ListItem onClick={index===2?()=>setPending_approvalOpen(!pending_approvalOpen):()=>''} button style={ index===0? {marginTop:30,marginBottom:0}:{marginBottom:0,paddingBottom:child?0:8,marginTop:index===otherItems.length-1?12:0,}}>
                                        <div  className="other-dashboardItems">
                                            <img src={image} alt="icon"/>
                                            <p>{title}{badge&&<span>{badge}</span>} </p>
                                        </div>
                                    </ListItem>
                                    {isChild&&
                                    <Collapse in={pending_approvalOpen} timeout="auto" unmountOnExit>
                                        <List style={{marginLeft: 71.5,height: 107,paddingTop:20,borderLeft:'1px solid #C4C4C4'}} component="div" disablePadding>
                                            {child.map((item,index)=>{
                                                let {title,badge} = item
                                                return(
                                                    <ListItem key={index}  style={{paddingLeft:0,paddingBottom:0}}>
                                                        <div className="sub_menuText">
                                                            <div/>
                                                            <p style={index===2?{color:'#ED2147'}:{}}>{title}{badge&&<span>{badge}</span>}</p>
                                                        </div>
                                                    </ListItem>
                                                )
                                            })}
                                        </List>
                                    </Collapse>

                                    }
                                </div>
                            )
                        })}
                    </List>
                </Collapse>


            </List>
        </div>
    )
}