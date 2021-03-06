import React, {useRef} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Card from "../../components/Card";
import {Redirect, BrowserRouter, Link} from "react-router-dom"
import {withRouter, browserHistory} from "react-router"
import axios from 'axios';

class EventForm  extends React.Component{
  // constructor(props){
  //   super(props)
  //   console.log(props)
  // }
  

  state= {
    name:'',
    description:'',
    option:''
    
  }
  handleChangeName = event => {
    this.setState({ name: event.target.value });
  }
  handleChangeDis = event => {
    this.setState({ description: event.target.value });
  }
  handleChangeOption = event => {
    this.setState({ option: event.target.value });
  }
  handleSubmit = e => {
    e.preventDefault();
  console.log("form submitted");
  
    axios.post(`api/events/addevent`,  {
      name: this.state.name,
      description: this.state.description
     
      
    } ).then(res => {
        console.log(res);
        console.log("posting event");
        console.log(this.props.history)
        // return <Redirect to="/profile"/>
        this.props.history.push("/profile")
      }) 
    }
render(){
  return (
  
    <Card title="Make your own event">
		
    <Form>
      <FormGroup>
        <Label for="eventName">Event Name</Label>
        <Input type="textarea" name="name" id="eventName" placeholder="Add Name"
         onChange={this.handleChangeName}
        />
      </FormGroup>
      <FormGroup>
        <Label for="description">Event Description</Label>
        <Input type="textarea" name="description" id="description" 
        onChange={this.handleChangeDis}
        />
      </FormGroup>
      <FormGroup tag="fieldset">
        <legend></legend>
        
      </FormGroup>
       <Button onClick = {this.handleSubmit}>Submit</Button>
    </Form>
    
    </Card>
  
  );
}
}


export default EventForm;