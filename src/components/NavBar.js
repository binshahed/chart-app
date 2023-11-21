import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";

const NavBar = ({ handleLogout }) => {
  return (
    <Container>
      <Nav className="justify-content-end">
        <Nav.Item>
          <Nav.Link eventKey="link-2">
            <button className="btn btn-warning" onClick={handleLogout}>
              Log out
            </button>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
};

export default NavBar;
