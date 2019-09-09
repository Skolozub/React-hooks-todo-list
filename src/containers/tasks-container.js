import React, { useState, useEffect } from "react";
import { TasksAddPanel } from "../components/tasks-add-panel";
import { TasksList } from "../components/tasks-list";
import { tasksList } from "../constants/tasks";
import { TasksFilter } from "../components/tasks-filter";
import styled from "styled-components";

export const TasksContainer = () => {
  const [tasks, setTasks] = useState(tasksList);
  const [newTaskName, changeNewTaskName] = useState("");

  const addNewTask = e => {
    e.preventDefault();
    if (newTaskName === "") return null;

    const lastTaskIndex = tasks.length && tasks[tasks.length - 1].id;

    const newTasks = [
      ...tasks,
      {
        id: lastTaskIndex + 1,
        taskName: newTaskName,
        isDone: false
      }
    ];
    setTasks(newTasks);
    cleanInputValue();
  };

  const cleanInputValue = () => changeNewTaskName("");

  const deleteTask = deletingTaskId => {
    const TaskListWithoutDeletedTask = tasks.filter(
      ({ id }) => id !== deletingTaskId
    );
    setTasks(TaskListWithoutDeletedTask);
  };

  const toggleTaskStatus = togglingTaskId => {
    const toggledTasks = tasks.reduce(
      (acc, task) => [
        ...acc,
        togglingTaskId === task.id ? { ...task, isDone: !task.isDone } : task
      ],
      []
    );
    setTasks(toggledTasks);
  };

  const [filter, setFilter] = useState("all");

  const applyFilter = (type, data) => {
    switch (type) {
      case "all": {
        return data;
      }

      case "done": {
        return data.filter(({ isDone }) => isDone);
      }

      case "notdone": {
        return data.filter(({ isDone }) => !isDone);
      }

      default: {
        return data;
      }
    }
  };

  return (
    <>
      <Header>
        <HeaderLeftSide>
          <TasksAddPanel
            value={newTaskName}
            onSubmitHandler={addNewTask}
            onChangeHandler={e => changeNewTaskName(e.currentTarget.value)}
          />
        </HeaderLeftSide>
        <HeaderRightSide>
          <TasksFilter
            onChangeHandler={e => setFilter(e.currentTarget.value)}
          />
        </HeaderRightSide>
      </Header>
      <TasksList
        tasks={applyFilter(filter, tasks)}
        deleteTask={deleteTask}
        toggleTaskStatus={toggleTaskStatus}
      />
    </>
  );
};

const Header = styled.div`
  display: flex;
  padding: 0.75rem 1.25rem;
`;
const HeaderLeftSide = styled.div`
  width: 68%;
  margin-right: 2%;
`;
const HeaderRightSide = styled.div`
  width: 30%;
`;
