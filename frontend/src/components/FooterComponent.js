import { Container, Row, Col } from "react-bootstrap";
const FooterComponent = () => {
    return (
        <footer>
            <Container fluid>
                <Row className="mt-5">
                    <Col className="bg-dark text-white text-center py-5">
                        Copyright: car rental 
                        <br />
                        Contact us: +977 9876525123
                        <br />

                    </Col>
                </Row>
            </Container>
        </footer>

    )
}

export default FooterComponent