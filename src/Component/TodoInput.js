import { InputGroup, FormControl, Button } from "react-bootstrap";
import React, { Component } from "react";
class TodoInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      method:props.method,
      data:props.content,
    }
    //this.filling = this.filling.bind(this);
  }

  // filling(elem){
  //   this.setState({data:elem.target.value});
  // }

  render() {
    return (
      <InputGroup className="mb-3">
        <FormControl aria-label="Todo list here" value={this.state.data} onChange={this.state.method}/>
        <Button variant="primary" size="lg">
          Add
        </Button>
      </InputGroup>
    );
  }
}

export default TodoInput;
