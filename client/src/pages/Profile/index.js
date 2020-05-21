import React, { Component } from 'react';
import Profile from "../../components/Profile";
import '../PublicRoute/index.css';
//event.map
//

function Myprofile() {

    return (
        <div className="container">
            <Profile />
            {/* <Redirect to={{
                             pathname: '/myprofile',
                         }} /> */}


        </div>
    )

}



export default Myprofile;

