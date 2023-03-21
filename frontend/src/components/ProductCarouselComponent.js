import { Carousel } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const ProductCarouselComponent = () => {

  const cursorP = {
    cursor: "pointer"
  }
  return (
    <Carousel>
      <Carousel.Item>
        <img
          crossorigin="anonymous"
          className="d-block w-100"
          style={{ height: "300px", objectFit: "cover" }}
          src="/images/carousel/carousel-1.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/product-details">
            <h3>Best seller in laptops category</h3>
          </LinkContainer>

          <p>Dell Inspiron 5 3000 laptop, 15.6 inch</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "300px", objectFit: "cover" }}
          src="/images/carousel/carousel-2.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/product-details">
            <h3>Best seller in books category</h3>
          </LinkContainer>
          <p>The eorld of eric carcle</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "300px", objectFit: "cover" }}
          src="/images/carousel/carousel-3.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/product-details">
            <h3>Best seller in cameras category</h3>
          </LinkContainer>
          <p>
            Best camera in the nation
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ProductCarouselComponent