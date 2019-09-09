import React from "react";
import { Form } from "react-bootstrap";

export const TasksFilter = ({ onChangeHandler }) => (
  <Form.Control as="select" onChange={onChangeHandler}>
    <option value="all">All</option>
    <option value="done">Done</option>
    <option value="notdone">Not done</option>
  </Form.Control>
);
