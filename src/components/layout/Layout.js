import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Home from "../home/Home";
import About from "../about/About";
import Contact from "../contact/Contact";
import Portfolio from "../portfolio/Portfolio";

function Layout() {
	return (
		<Router>
			<Navbar bg="dark" variant="dark" expand="lg">
  <Navbar.Brand href="#home">Landscapes</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/" className="nav-link">Home</Nav.Link>
      <Nav.Link href="/Portfolio" className="nav-link">My Portfolio</Nav.Link>
      <Nav.Link href="/About" className="nav-link">About</Nav.Link>
      <Nav.Link href="/Contact" className="nav-link">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
			<Container>
				<Switch>
					<Route path="/" exact component={Home} />
                    <Route path="/Portfolio" component={Portfolio} />
					<Route path="/about" component={About} />
					<Route path="/contact" component={Contact} />
				</Switch>
			</Container>
		</Router>
	);
}

export default Layout;