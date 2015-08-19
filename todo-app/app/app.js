import React from "react";
import Greeting from "./components/greeting/greeting";
import TodoList from "./components/todo-list/todo-list";

React.render(
  <div>
    <Greeting name="World"/>
    <TodoList />
  </div>,
  document.body
);