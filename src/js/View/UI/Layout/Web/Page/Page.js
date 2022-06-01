import {Card, Col, Container, Nav, Row, Stack} from "react-bootstrap";

export class Page extends React.Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col className="bg-light">
                        <div className="pt-3 pb-3 ps-1 pe-1">
                            <Card>
                                <Card.Header>
                                    Tools and Resources
                                </Card.Header>
                                <Card.Body className="p-0">
                                    <Nav variant="pills" className="flex-column">
                                        <Nav.Item>
                                            <Nav.Link href="#">Color-Table</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link href="#">Currency Converter</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link href="#">Compound-Interest Calculator</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link href="#">Other Resources</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col xs={12} md={8} className="bg-light">
                        <div className="pt-3 pb-3 ps-1 pe-1">
                            {this.props.children}
                        </div>
                    </Col>
                    <Col className="bg-light"></Col>
                </Row>
            </Container>
        );
    }
}