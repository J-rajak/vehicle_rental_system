import { Card, Button, Row, Col } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import { LinkContainer } from "react-router-bootstrap";

const ProductForListComponent = ({images, idx}) => {
    return (
        <Card style={{ marginTop: "30px", marginBottom: "50px" }}>
            <Row>
                <Col lg={5}>
                    <Card.Img variant="top" src={"/images/"+ images[idx] +".jpg"}/>
                </Col>
                <Col lg={7}>
                    <Card.Body>
                        <Card.Title>Product Name</Card.Title>
                        <Card.Text>
                            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                        </Card.Text>
                        <Card.Text>
                            <Rating readonly size={20} initialValue={5} />(1)
                        </Card.Text>
                        <Card.Text className="h4">
                            $123{" "}
                            <LinkContainer to="/product-details">
                                <Button variant="danger">See Product</Button>
                            </LinkContainer>

                        </Card.Text>
                    </Card.Body>
                </Col>
            </Row>


        </Card>
    );
}

export default ProductForListComponent;