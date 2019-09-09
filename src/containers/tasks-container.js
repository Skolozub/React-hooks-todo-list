import React, { useState, useMemo } from "react";
import { TasksAddPanel } from "../components/tasks-add-panel";
import { TasksList } from "../components/tasks-list";
import { TasksFilter } from "../components/tasks-filter";
import { Header } from "../components/header";
import { tasksList } from "../constants/tasks";

export const TasksContainer = () => {
  const [tasks, setTasks] = useState(tasksList);
  const [newTaskName, setNewTaskName] = useState("");
  const [filter, setFilter] = useState("all");

  // ------------------------ add panel methods ------------------------

  const setNewTaskNameHandler = e => setNewTaskName(e.currentTarget.value);

  const cleanInputValue = () => setNewTaskName("");

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

  // ------------------------ task list methods ------------------------

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

  // -------------------------- filter methods -------------------------

  const setFilterHandler = e => setFilter(e.currentTarget.value);

  const applyFilter = (data, type) => {
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

  const filteredTasks = useMemo(() => applyFilter(tasks, filter), [
    tasks,
    filter
  ]);

  return (
    <>
      <Header>
        <Header.LeftSide>
          <TasksAddPanel
            value={newTaskName}
            onSubmitHandler={addNewTask}
            onChangeHandler={setNewTaskNameHandler}
          />
        </Header.LeftSide>
        <Header.RightSide>
          <TasksFilter onChangeHandler={setFilterHandler} />
        </Header.RightSide>
      </Header>
      <TasksList
        tasks={filteredTasks}
        deleteTask={deleteTask}
        toggleTaskStatus={toggleTaskStatus}
      />
    </>
  );
};
