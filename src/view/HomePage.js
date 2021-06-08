import React, { Component } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
//import TodoInput from "../Component/TodoInput";
import TodoNav from "../Component/TodoNav";
import ShowTodo from "../Component/ShowTodo";

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      showContent: "",
      todo:[]
    };
    this.filling = this.filling.bind(this);
    this.adding = this.adding.bind(this);
  }

  filling(elem) {
    this.setState({ showContent: elem.target.value });
  }

  adding(){
    this.state.todo.push(this.state.showContent);
    this.setState({showContent:''})
  }

  render() {
    return (
      <>
        <TodoNav />
        <Container>
          <h1>Todo list</h1>
          <InputGroup className="mb-3">
            <FormControl
              aria-label="Todo list here"
              value={this.state.showContent}
              onChange={this.filling}
            />
            <Button variant="primary" size="lg" onClick={this.adding}>
              Add
            </Button>
          </InputGroup>
          <p>{this.state.showContent===""? 'Please fill your todo list' : this.state.showContent} </p>
        </Container>
        <ShowTodo todo={this.state.todo}/>
      </>
    );
  }
}

export default HomePage;
