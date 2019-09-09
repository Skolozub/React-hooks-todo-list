import React from "react";
import { Form, Button, InputGroup, FormControl } from "react-bootstrap";

export const TasksAddPanel = props => (
  <Form onSubmit={props.onSubmitHandler}>
    <InputGroup>
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
);
