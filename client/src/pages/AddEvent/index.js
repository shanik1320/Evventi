import React, { Component} from 'react'
// import { UserContext } from "../../utils/UserContext";
import EventForm from '../../components/EventForm';
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch
} from 'react-router-dom';

function AddEvent () {
   
    return (
        <div className="container">
                <EventForm/>
			
            
        </div>
    )
}

export default AddEvent;