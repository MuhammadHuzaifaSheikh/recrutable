import React from 'react';
import LOGO from '../../images/LOGO.png'
import TopBar from "./Topbar/Topbar";
import Sidebar from "react-sidebar";
import SidebarContent from "./Topbar/SidebarContent/Sidebar";
import Main from "./Main/Main";
import {useDispatch, useSelector} from "react-redux";
import {useMediaQuery} from "@material-ui/core";
import {setSideBarToggle} from "../../store/action/action";
import {useTheme} from "@material-ui/core/styles";
import {profile_img,first_name} from '../../data/userData.json'

export default function PrimarySearchAppBar() {
    const theme = useTheme();
    const dispatch = useDispatch();
    const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

    let {open} = useSelector(({sideBarToggle}) => sideBarToggle);
    return (
        <div style={{flexGrow:1}}>
           <TopBar profileImage={profile_img} username={first_name} logo={LOGO}/>
            <Sidebar
                sidebar={<SidebarContent/>}
                open={open}
                onSetOpen={()=>dispatch(setSideBarToggle(!open))}
                docked={isMdUp}
                shadow={false}
                styles={{ sidebar: { background: "#F6F8F9",marginTop:70,width:260,padding:'45px 20px',overflow:"auto"}}}
            >
                <Main/>
            </Sidebar>

        </div>
    );
}
