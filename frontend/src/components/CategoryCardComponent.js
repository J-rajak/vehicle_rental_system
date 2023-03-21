import { Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const CategoryCardComponent = ({ category, idx }) => {

    const images = [
        "/images/suv.jpg",
        "/images/hatchback.jpg",
        "/images/crossover.jpg",
        "/images/convetible.jpg",
        "/images/sedan.jpg",
        "/images/sports.jpg",
        "/images/coupe.jpg",
        "/images/minivan.jpg",
        "/images/stationwagon.jpg",


    ]
    return (
        <Card>
            <Card.Img crossorigin="anonymous" variant="top" src={images[idx]} />
            <Card.Body>
                <Card.Title>{category}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <LinkContainer to="/product-list">
                    <Button variant="primary">Go to the category</Button>
                </LinkContainer>

            </Card.Body>
        </Card>
    );
}

export default CategoryCardComponent