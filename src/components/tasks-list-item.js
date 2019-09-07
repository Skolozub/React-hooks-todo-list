import React from "react";
import { ListGroup, ButtonGroup, Button } from "react-bootstrap";
import styled from "styled-components";

export const TasksListItem = ({
  id,
  taskName,
  status,
  deleteTask,
  toggleTaskStatus
}) => (
  <ListGroup.Item variant={status === "done" && "secondary"}>
    <ButtonToolbar>
      <Text>{taskName}</Text>
      {status === "done" ? (
        <ButtonGroup>
          <Button variant="secondary" onClick={() => toggleTaskStatus(id)}>
            not&nbsp;done
          </Button>
          <Button variant="danger" onClick={() => deleteTask(id)}>
            delete
          </Button>
        </ButtonGroup>
      ) : (
        <Button variant="success" onClick={() => toggleTaskStatus(id)}>
          done
        </Button>
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
