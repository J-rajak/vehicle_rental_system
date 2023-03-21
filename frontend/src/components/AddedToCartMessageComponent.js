import { Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

const AddedToCartMessageComponent = () => {

    const [show, setShow] = useState(true);
    return (
        <Alert show={show} variant="success" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>This product was added to the cart</Alert.Heading>
            <p>
                <Button variant="success">GO BACK</Button> {" "}
                <Link to="/cart">
                    <Button variant="danger">Go to Cart</Button>
                </Link>

            </p>
        </Alert>
    );
}

export default AddedToCartMessageComponent;