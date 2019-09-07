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
    <Form>
      <InputGroup className="mb-3">
        <FormControl placeholder="Enter new task" />
        <InputGroup.Append>
          <Button variant="primary" type="submit">
            Add
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  </ListGroup.Item>
);
