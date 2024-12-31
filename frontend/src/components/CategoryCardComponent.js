import { Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const CategoryCardComponent = ({ category, idx }) => {
  return (
    <Card>
      <Card.Img crossorigin="anonymous" variant="top" src={category.image}
        style={{
          width: '100%',
          height: '300px',
          objectFit: 'cover',
        }}
      />
      <Card.Body>
        <Card.Title>{category.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <LinkContainer to="/productlist">
          <Button variant="primary">Go to the Category</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
};

export default CategoryCardComponent;

