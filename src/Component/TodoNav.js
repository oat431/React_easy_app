import { Container, Navbar, Nav } from "react-bootstrap";

function TodoNav() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Todo List</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="https://github.com/oat431">github</Nav.Link>
            <Nav.Link href="https://github.com/oat431/Todo_list_backend/wiki">backend api</Nav.Link>
            <Nav.Link href="https://github.com/oat431/React_easy_app">frontend repo</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default TodoNav;
