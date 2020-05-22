import React, { Component, useState, useEffect } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Card from "../../components/Card";
import axios from 'axios';


class EditEventComponent extends React.Component {
    constructor(props) {
        super(props)
    }

    //set the state of the event to the object
    state = {
        eventDeti:{
            name:'',
            description:''
        },
        name:'',
        description:''
    }
    //get the id from the url
    //when the page loads go get the info from the db
    componentDidMount() {
        
        console.log('Edit Event', this.props.eventId);

        axios.get('/api/events/'+ this.props.eventId)

            .then(res => {
                console.log("edit data", res.data);

                this.setState({ name:res.data.name , description:res.data.description });
            })

    }

    handleChangeName = event => {
        this.setState({ name: event.target.value });
      }
      handleChangeDis = event => {
        this.setState({ description: event.target.value });
      }

      handleSubmit = e => {
        e.preventDefault();
      console.log("form submitted");
        axios.post(`/api/editevent/${this.props.eventId}`,  {
          name: this.state.name,
          description: this.state.description
          
           
          
        } ).then(res => {
            console.log(res);
            console.log(this.state.name);
            this.props.history.push("/profile");
            console.log("Edit event");
            
          })
        }


    render() {
        return (
            <div>
        <Card title="Edit">
		
        <Form>
          <FormGroup>
            <Label for="eventName">Event Name</Label>
            <Input type="textarea"
              name="name"
              id="eventName"
               placeholder={this.state.name}
             onChange={this.handleChangeName}
            />
          </FormGroup>
          <FormGroup>
            <Label for="description">Event Description</Label>
            <Input 
            type="textarea"
            name="description"
              id="description" 
              placeholder={this.state.description}
            onChange={this.handleChangeDis}
            />
          </FormGroup>
          <FormGroup tag="fieldset">
            <legend></legend>
            
          </FormGroup>
          <Button onClick={this.handleSubmit.bind(this)}>Submit</Button>
        </Form>
        
        </Card>
            </div>
        )
    }
}

export default EditEventComponent;