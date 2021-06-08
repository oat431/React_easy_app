import { Container, ListGroup } from "react-bootstrap";
import React, { Component } from "react";
import Axios from "axios";
class ShowTodo extends Component {
  constructor() {
    super();
    this.state = {
      todo_list: [],
    };
  }

  componentDidMount() {
    Axios.get("http://167.99.64.31:5039/api/todo/todolist", {
      header: { "Access-Control-Allow-Origin": "*" },
    })
      .then((res) => {
          console.log(res.data);
          this.setState({ todo_list: res.data });
      })
      .catch((err) => {
        console.log("some err happen");
      });
  }

  render() {
    return (
      <Container>
        <ListGroup as="ul">
          {this.state.todo_list.map((item, index) => {
            return (
              <ListGroup.Item as="li"><strong>{index + " " + item.title}</strong> update on {item.date}</ListGroup.Item>
            );
          })}
        </ListGroup>
      </Container>
    );
  }
}

export default ShowTodo;
