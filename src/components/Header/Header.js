import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';

const Header = ({ toggleCodeOpen }) => {
  return (
    <Navbar
      bg="transparent"
      fixed="top"
    >
      <Container>
        <Nav className="me-auto"></Nav>
        <Nav>
          <Nav.Link>
            <Button
              variant="outline-primary"
              onClick={() =>
                window
                  .open('/assets/cv/pedrogardim_cv_en.pdf', '_blank')
                  .focus()
              }
            >
              Open CV
            </Button>
          </Nav.Link>
          <Nav.Link>
            <Button
              variant="outline-primary"
              onClick={() => window.open('mailto:me@pedrogardim.com')}
            >
              Contact
            </Button>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
