import React from "react";
import ReactDOM from "react-dom";
import { TasksContainer } from "./containers/tasks-container";

const App = () => <TasksContainer />;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
