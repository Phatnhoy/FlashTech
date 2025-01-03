import { Carousel } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const ProductCarouselComponent = () => {
  const cursorP = {
    cursor: "pointer",
  };
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
          <LinkContainer style={cursorP} to="/productdetails">
            <h3>Bestseller in Laptops Category</h3>
          </LinkContainer>
          <p>Dell Inspiron 15 3000 Laptop, 15.6 inch HD</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "300px", objectFit: "cover" }}
          src="/images/carousel/tablet.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/productdetails">
            <h3>Bestseller in Tablets Category</h3>
          </LinkContainer>
          <p>10.4-inch Tablet with 2K Display, Octa-Core Processor, 8GB RAM, 128GB Storage, and Stylus Support</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "300px", objectFit: "cover" }}
          src="/images/carousel/smartphone.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/productdetails">
            <h3>Bestseller in Smartphones Category</h3>
          </LinkContainer>
          <p>
          Ultra Smartphone 5G with 120Hz AMOLED Display, 108MP Camera, 12GB RAM, and
          256GB Storage
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ProductCarouselComponent;

