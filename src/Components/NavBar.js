import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
      <Navbar.Brand href="./Home">
            <img
              alt=""
              src="./icon.ico"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
            <Nav.Link href="./Home">Home</Nav.Link>
            <Nav.Link href="./Profile">Profile</Nav.Link>
            <NavDropdown title="Ressources" id="navbarScrollingDropdown">
              <NavDropdown.Item href="https://www.w3schools.com/">W3 School</NavDropdown.Item>
              <NavDropdown.Item href="https://developer.mozilla.org/en-US/">MozillaDev</NavDropdown.Item>
              <NavDropdown.Item href="https://stackoverflow.com/">stackoverflow</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="./SignIn">Sign-In</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;