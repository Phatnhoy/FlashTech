import { Card, Button, Row, Col } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import { LinkContainer } from "react-router-bootstrap";
import './styles.css'

const ProductForListComponent = ({ productId, name, description,
  price, images, rating, reviewsNumber }) => {
  return (
    <Card className="prod-card">
      <Col>
        <Row lg={5}>
          <Card.Img variant="top" src={images[0] ? images[0].path : ''} style={{
            objectFit: "cover",
            height: '150px',
            objectFit: 'cover',
          }} />
        </Row>
        <Row lg={7}>
          <Card.Body className="">
            <Card.Title>{name}</Card.Title>
            <Card.Text className="desc">
              {description.length > 50 ? description.substring(0, 55) + '...' : description}
            </Card.Text>
            <Card.Text>
              <Rating readonly size={20} initialValue={rating} /> ({reviewsNumber})
            </Card.Text>
            <Card.Text className="h5" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Card.Text style={{ margin: '0' }}>
                ${price}{" "}
              </Card.Text>
              <LinkContainer to={`/productdetails/${productId}`}>
                <Button variant="default" style={{ color: '#dc3545' }}>See product</Button>
              </LinkContainer>
            </Card.Text>
          </Card.Body>
        </Row>
      </Col>
    </Card>
  );
};

export default ProductForListComponent;

