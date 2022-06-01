import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Branding} from "./Branding";
import {Goto} from "genesis-ui-app/src/js/Routing/Goto";

export class HeaderNav extends React.Component {
    goto(event, routeName) {
        event.preventDefault();

        Goto.route(routeName);
    }

    render() {
        return (
            <div id="header-nav">
                <Navbar expand="lg" bg="dark" variant="dark">
                    <Container fluid>
                        <Navbar.Brand><Branding/></Navbar.Brand>
                        <Navbar.Toggle aria-controls="header-nav-items"/>
                        <Navbar.Collapse id="header-nav-items">
                            <Nav className="me-auto">
                                <Nav.Link href="/" active={this.props.route === 'home'}
                                          onClick={(e) => this.goto(e, 'home')}>Home</Nav.Link>
                                <Nav.Link href="/about" active={this.props.route === 'about'}
                                          onClick={(e) => this.goto(e, 'about')}>About</Nav.Link>
                                <NavDropdown title="Experience & Projects" id="references-dropdown">
                                    <NavDropdown.Item href="#">Personal Projects</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Projects I have worked on</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Experience Overview</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}