import {
  Container,
  ListGroup,
  Button,
  Row,
  Col,
  ButtonGroup,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function ShowTodo(props) {
  let deleting = (elem) => {
    let name = props.todo.indexOf(elem.target.name);
    props.todo.splice(name,1);
  };
  let editing = (elem) => {
    let newName = promps();
    let name = props.todo.indexOf(elem.target.name);
    props.todo[name] = newName;
  }
  return (
    <Container>
      <ListGroup as="ul">
        {props.todo.map((item, index) => {
          return (
            <ListGroup.Item as="li">
              <Container>
                <Row>
                  <Col xs={10} md={10} xl={10}>
                    <strong>{index + 1 + " " + item}</strong>
                  </Col>
                  <Col
                    xs={2}
                    md={2}
                    xl={2}
                    className="d-flex justify-content-end"
                  >
                    <ButtonGroup>
                      <Button variant="warning" size="md">
                        edit
                      </Button>
                      <Button
                        variant="danger"
                        size="md"
                        name={item}
                        onClick={deleting}
                      >
                        delete
                      </Button>
                    </ButtonGroup>
                  </Col>
                </Row>
              </Container>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </Container>
  );
}

export default ShowTodo;
