import React from "react";
import styled from "styled-components";
import { Form, Button, InputGroup, FormControl, Card } from "react-bootstrap";

export const TasksAddPanel = props => (
  <FormCard>
    <Card.Body>
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
    </Card.Body>
  </FormCard>
);

const FormCard = styled(Card)`
  margin-bottom: -1px;
`;
