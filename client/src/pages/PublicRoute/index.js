import React from 'react'
import './index.css'
import event from '../../assets/imgs/event.jpg';
/* This is a very simple component.. it probably doesn't need to be a smart component at this point but you never know what's goingto happen in the future */

function PublicRoute() {

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm">
                </div>
                <div className="col-sm">
                    <h3>Welcome to Evventi</h3>
                    <img src={event} alt="event" />
                </div>
                <div className="col-sm">

                </div>
            </div>
        </div>
    )
}


export default PublicRoute