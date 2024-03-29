import React from "react";
import { ListGroup } from "react-bootstrap";
import { TasksListItem } from "./tasks-list-item";

export const TasksList = props => (
  <ListGroup>
    {props.tasks.map(task => (
      <TasksListItem
        key={task.id}
        {...task}
        deleteTask={props.deleteTask}
        toggleTaskStatus={props.toggleTaskStatus}
      />
    ))}
  </ListGroup>
);
