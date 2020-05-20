import React, { Component, useState, useEffect } from 'react'
// import { UserContext } from "../../utils/UserContext";
import EventForm from '../../components/EventForm';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
    useParams

} from 'react-router-dom';
import axios from 'axios';


class EditEvent extends React.Component {
    constructor(props) {
        super(props)
    }

    //set the state of the event to the object
    state = {
        event: {}
    }
    //get the id from the url
    //when the page loads go get the info from the db
    componentDidMount() {
        console.log('Edit Event', this.props.match.params.id);

        axios.get('api/events/'+ this.props.match.params.id)

            .then(res => {
                console.log("edit data", res.data);

                this.setState({
                    event:res.data});
            })

    }


    render() {
        return (
            <div className="container" >
                <h1>Edit Details For {this.state.event.name}</h1>
                <EventForm />
                <Redirect to={{
                    pathname: '/myevents',
                }} />


            </div>
        )
    }
}

export default EditEvent;