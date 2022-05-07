import { Navbar,Container,NavDropdown,Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'


export default function NavBars() {
    return (
      <div  className='title-container'>
        <Navbar bg="primary" variant="dark">
          <Container>
          <Navbar.Brand>
            <Link to="/" className='text-light'>Food Recipe App |</Link>

          </Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" className='text-light'>Home</Link>
            <Link to="/recipe" className='text-light'>Recipe</Link>
            <Link to="/about" className='text-light'>About</Link>
          </Nav>
          </Container>
        </Navbar>
      </div>
    )
}
