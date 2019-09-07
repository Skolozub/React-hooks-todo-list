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

    const lastTaskIndex = tasks[tasks.length - 1].id;
    const newTasks = [
      ...tasks,
      {
        id: lastTaskIndex + 1,
        taskName: newTaskName,
        status: null
      }
    ];
    setTasks(newTasks);
    changeNewTaskName("");
  };

  const deleteTask = taskId => {
    const TaskListWithoutDeletedTask = tasks.filter(({ id }) => id !== taskId);
    setTasks(TaskListWithoutDeletedTask);
  };

  const toggleTaskStatus = taskId => {
    const toggledTasks = tasks.reduce(
      (acc, task) =>
        task.id === taskId
          ? [...acc, { ...task, status: task.status === "done" ? "" : "done" }]
          : [...acc, task],
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
