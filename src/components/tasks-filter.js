import React from "react";
import { Form } from "react-bootstrap";

export const TasksFilter = () => (
  <Form.Control as="select">
    <option>All</option>
    <option>Done</option>
    <option>Not done</option>
  </Form.Control>
);
