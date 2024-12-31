import { Card, Button, Row, Col } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import { LinkContainer } from "react-router-bootstrap";

const ProductForListComponent = ({ productId, name, description,
  price, images, rating, reviewsNumber }) => {
  return (
    <Card style={{ fontSize: "0.8rem", maxHeight: "350px" }}>
      <Col>
        <Row lg={5}>
          <Card.Img variant="top" src={images[0] ? images[0].path : ''} style={{
            objectFit: "cover", height: "16vh",
            width: "100%"
          }} />
        </Row>
        <Row lg={7}>
          <Card.Body className="m-1">
            <Card.Title style={{ fontSize: "1.2rem" }}>{name}</Card.Title>
            <Card.Text>
              {description.length > 50 ? description.substring(0, 55) + '...' : description}
            </Card.Text>
            <Card.Text>
              <Rating readonly size={20} initialValue={rating} /> ({reviewsNumber})
            </Card.Text>
            <Card.Text className="h5">
              ${price}{" "}
              <LinkContainer to={`/productdetails/${productId}`}>
                <Button variant="danger">See product</Button>
              </LinkContainer>
            </Card.Text>
          </Card.Body>
        </Row>
      </Col>
    </Card>
  );
};

export default ProductForListComponent;

