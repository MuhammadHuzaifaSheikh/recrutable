import React from 'react';
import LOGO from '../../images/LOGO.png'
import TopBar from "./Topbar/Topbar";


export default function PrimarySearchAppBar() {

    return (
        <div style={{flexGrow:1}}>
           <TopBar logo={LOGO}/>


        </div>
    );
}
