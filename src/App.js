
import './App.css';
import{Card,Button,Container,Navbar,Nav,NavDropdown} from "react-bootstrap";

function App() {
  return (
    <div className="App">
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    <h1>Smartphones Apple</h1>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="data:image/jpeg;base64,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" />
  <Card.Body>
    <Card.Title>iphone</Card.Title>
    <Card.Text>
    iPhone, retrouvez les dernières tendances en ligne ou dans votre Fnac préférée. Commandez vos produits high-tech en ligne et retirez-les en magasin...  
    </Card.Text>
    <Button variant="primary">achat</Button>
  </Card.Body>
</Card>
         </div>
  );
}

export default App;
