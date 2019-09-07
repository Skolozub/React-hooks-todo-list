import React from "react";
import { ListGroup, ButtonGroup, Button } from "react-bootstrap";
import styled from "styled-components";

export const TasksListItem = props => (
  <ListGroup.Item variant={props.status === "done" && "secondary"}>
    <ButtonToolbar>
      <Text>{props.taskName}</Text>
      {props.status === "done" ? (
        <ButtonGroup>
          <Button variant="secondary">not&nbsp;done</Button>
          <Button variant="danger">delete</Button>
        </ButtonGroup>
      ) : (
        <Button variant="success">done</Button>
      )}
    </ButtonToolbar>
  </ListGroup.Item>
);

const Text = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;
const ButtonToolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
