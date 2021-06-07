import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import TodoInput from "./Component/TodoInput";
import TodoNav from "./Component/TodoNav";
import ShowTodo from "./Component/ShowTodo";
function App() {
  return (
    <>
      <TodoNav />
      <Container>
        <h1>Todo list</h1>
        <p>Please fill your todo list below</p>
        <TodoInput />
      </Container>
      <ShowTodo/>
    </>
  );
}

export default App;
