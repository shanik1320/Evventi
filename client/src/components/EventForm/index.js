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
    discription:'',
    option:'',
    id: +6
  }
  handleChangeName = event => {
    this.setState({ name: event.target.value });
  }
  handleChangeDis = event => {
    this.setState({ discription: event.target.value });
  }
  handleChangeOption = event => {
    this.setState({ option: event.target.value });
  }
  handleSubmit = e => {
    e.preventDefault();

    // const event = {
    //   name: this.state.name,
    //   discription: this.state.discription,
    //   option: this.state.option,
    //   id:4
    // };

    axios.post(`http://localhost:4000/events`,  {
      name: this.state.name,
      discription: this.state.discription,
      option: this.state.option,
      id:+this.state.id
    } )
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    }
render(){
  return (
    <Card title="Make your own event">
			<Form
				// ref={formRef}
				// onSubmit={(e) => {
				// 	e.preventDefault();
				// 	return data ({
				// 		eventname: eventNameRef.current.value,
        //     description: descriptionRef.current.value,
            
				// 	});
        // }}
        onSubmit={this.handleSubmit}
        >
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Event Name</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="Add Name"
         onChange={this.handleChangeName}
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Event Description</Label>
        <Input type="textarea" name="text" id="exampleText" 
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
      <Button>Submit</Button>
    </Form>
    </Form>
    </Card>
  );
}
}


export default EventForm;