import React from "react";
import {
  Form,
  Button,
  InputGroup,
  FormControl,
  ListGroup
} from "react-bootstrap";

export const TasksAddPanel = props => (
  <ListGroup.Item>
    <Form onSubmit={props.onSubmitHandler}>
      <InputGroup className="mb-3">
        <FormControl
          onChange={props.onChangeHandler}
          value={props.value}
          placeholder="Enter new task"
        />
        <InputGroup.Append>
          <Button variant="primary" type="submit">
            Add
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  </ListGroup.Item>
);
