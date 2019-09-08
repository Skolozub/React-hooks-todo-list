import React, { useState } from "react";
import { TasksAddPanel } from "../components/tasks-add-panel";
import { TasksList } from "../components/tasks-list";
import { tasksList } from "../constants/tasks";

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
    changeNewTaskName("");
  };

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

  return (
    <>
      <TasksAddPanel
        value={newTaskName}
        onSubmitHandler={addNewTask}
        onChangeHandler={e => changeNewTaskName(e.currentTarget.value)}
      />
      <TasksList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleTaskStatus={toggleTaskStatus}
      />
    </>
  );
};
