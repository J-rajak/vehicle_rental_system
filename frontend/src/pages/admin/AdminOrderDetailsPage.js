import { Row, Col, Container, Form, Alert, ListGroup, Button } from "react-bootstrap";
import CartItemComponent from "../../components/CartItemComponent";
const AdminOrderDetailsPage = () => {
    return (

        <Container fluid>
            <Row className="mt-4">
                <h1>Order Details</h1>
                <Col md={8}>
                    <br />

                    <Row>
                        <Col md={6}>
                            <h2>Shipping</h2>
                            <b>Name</b>: John Doe <br />
                            <b>Address</b>: 3242 Mayflower St. Los Angeles, CA 90843 <br />
                            <b>Phone</b>: 9872378123
                        </Col>
                        <Col md={6}>
                            <h2>Payment method</h2>
                            <Form.Select disabled={false}>
                                <option value="pp">
                                    Paypal
                                </option>
                                <option value="cod">
                                    Cash On Delivery(delivery maybe delayed)
                                </option>
                            </Form.Select>
                        </Col>
                        <Row>
                            <Col>
                                <Alert className="mt-3" variant="danger">
                                    Not Delivered
                                </Alert>
                            </Col>

                            <Col>
                                <Alert className="mt-3" variant="success">
                                    Paid on 2022-10-21
                                </Alert>
                            </Col>
                        </Row>
                    </Row>
                    <br />
                    <h2>Order items</h2>
                    <ListGroup variant="flush">
                        {Array.from({ length: 3 }).map((item, idx) => (
                            <CartItemComponent key={idx} />
                        ))}
                    </ListGroup>
                </Col>

                <Col md={4}>
                    <ListGroup>
                        <ListGroup.Item>
                            <h3>Order summary</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Items price (after tax): <span className="fw-bold">$873</span>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Shipping: <span className="fw-bold">Included</span>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Tax: <span className="fw-bold">Included</span>
                        </ListGroup.Item>
                        <ListGroup.Item className="text-danger">
                            Total price: <span className="fw-bold">$999</span>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <div className="d-grid gap-2">
                                <Button size="lg" variant="danger" type="button">
                                    Mark as delivered
                                </Button>
                            </div>

                        </ListGroup.Item>
                    </ListGroup>

                </Col>
            </Row>

        </Container>

    );
}

export default AdminOrderDetailsPage;