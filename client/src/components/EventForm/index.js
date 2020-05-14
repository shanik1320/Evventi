import React, {useRef} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Card from "../../components/Card";

function EventForm (data) {
  const formRef = useRef();
	const eventNameRef = useRef();
	const descriptionRef = useRef();
  return (
    <Card title="Make your own event">
			<Form
				ref={formRef}
				onSubmit={(e) => {
					e.preventDefault();
					return data ({
						eventname: eventNameRef.current.value,
						description: descriptionRef.current.value
					});
        }}
        >
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Event Name</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="Add Name" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Event Description</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
      <FormGroup tag="fieldset">
        <legend></legend>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            Public Event
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
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


export default EventForm;