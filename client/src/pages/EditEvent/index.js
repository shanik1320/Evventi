import React, { Component, useState, useEffect } from 'react'
import EditEventComponent from '../../components/EditForm';




class EditEvent extends React.Component {
    constructor(props) {
        super(props)
    }

    //set the state of the event to the object
    state = {
        event: {}
    }



    render() {
        const eventId = this.props.match.params.id
        return (
            <div className="container" >
                <h1>Edit Details For{this.state.event.name} </h1>
                <EditEventComponent eventId={eventId}/> 
            </div>
        )
    }
}

export default EditEvent;