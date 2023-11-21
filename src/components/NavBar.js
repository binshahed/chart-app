import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";

const NavBar = () => {
  return (
    <Container>
      <Nav className="justify-content-end">
        <Nav.Item>
          <Nav.Link eventKey="link-2">
            <button className="btn btn-warning">LogOut</button>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
};

export default NavBar;
