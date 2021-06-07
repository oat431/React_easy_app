import { InputGroup, FormControl, Button } from "react-bootstrap";
function TodoInput() {
  return (
    <InputGroup className="mb-3">
      <FormControl aria-label="Todo list here" />
      <Button variant="primary" size="lg" active>
        Add 
      </Button>
    </InputGroup>
  );
}

export default TodoInput;
