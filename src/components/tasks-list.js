import React from "react";
import { ListGroup } from "react-bootstrap";
import { TasksListItem } from "./tasks-list-item";

export const TasksList = props => (
  <ListGroup>
    {props.tasks.map(({ id, taskName, status }) => (
      <TasksListItem key={id} taskName={taskName} status={status} />
    ))}
  </ListGroup>
);
