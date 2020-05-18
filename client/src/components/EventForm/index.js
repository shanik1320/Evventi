import React, {useRef} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Card from "../../components/Card";
import axios from 'axios';

class EventForm  extends React.Component{
  // const formRef = useRef();
	// const eventNameRef = useRef();
  // const descriptionRef = useRef();
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
      description: this.state.description,
      option: this.state.option,
      
    } ).then(res => {
        console.log(res);
        console.log("posting event");
        
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
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" 
            onChange={this.handleChangeOption}
            />{' '}
            Public Event
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" 
            onChange={this.handleChangeOption}
            />{' '}
            Private Event
          </Label>
        </FormGroup>
      </FormGroup>
      <Button onClick={this.handleSubmit}>Submit</Button>
    </Form>
    
    </Card>
  );
}
}


export default EventForm;