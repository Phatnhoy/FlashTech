import {
    Row,
    Col,
    Container,
    Image,
    ListGroup,
    Form,
    Button,
    Alert,
} from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import AddedToCartMessageComponent from "../../components/AddedToCartMessageComponent";
import ProductForListComponent from "../../components/ProductForListComponent";

import ImageZoom from "js-image-zoom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ProductDetailsPageComponent = ({ addToCartReduxAction, reduxDispatch, getProduct, getRelatedProducts }) => {

    const { id } = useParams()
    const [quantity, setQuantity] = useState(1);
    const [showCartMessage, setShowCartMessage] = useState(false);

    const addToCartHandler = () => {
        reduxDispatch(addToCartReduxAction(id, quantity));
        setShowCartMessage(true);
    }

    const [productName, setProductName] = useState();
    const [productPrice, setProductPrice] = useState();
    const [productDescription, setProductDescription] = useState();
    const [productReviews, setProductReviews] = useState([]);
    const [productCount, setProductCount] = useState(0);
    const [productImages, setProductImages] = useState([]);
    const [relatedProducts, setRelatedProducts] = useState([])
    const zoomOptions = {
        scale: 2,
        offset: { vertical: 0, horizontal: 0 },
    };
    useEffect(() => {
        // Apply ImageZoom for each image
        productImages.forEach((_, idx) => {
            new ImageZoom(document.getElementById(`zoom-image-${idx}`), zoomOptions);
        });
    }, [productImages]);
    useEffect(() => {
        getProduct(id)
            .then((product) => {
                setProductName(product.name);
                setProductPrice(product.price);
                setProductDescription(product.description);
                setProductReviews(product.reviews.map((review) => review))
                setProductCount(product.count)
                setProductImages(product.images.map((image) => image))
            })
            .catch((er) =>
                console.log(
                    er.response.data.message ? er.response.data.message : er.response.data
                )
            );
        getRelatedProducts(id)
        .then(products => setRelatedProducts(products.slice(0, 4)))
        .catch((er) => console.log(er));
    }, [id]);
    return (
        <Container>
            <AddedToCartMessageComponent showCartMessage={showCartMessage} setShowCartMessage={setShowCartMessage} />
            <Row className="mt-5">
                <Col style={{ zIndex: 1 }} md={4}>
                    {productImages.map((image, idx) => (
                        <div key={idx} id={`zoom-image-${idx}`} className="image-zoom-container">
                            <Image fluid src={image.path} alt={`Product Image ${idx + 1}`} style={{ objectFit: "contain", marginBottom: "30px" }} /> <br />
                        </div>
                    ))}
                </Col>
                <Col md={8}>
                    <Row>
                        <Col md={8}>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <h1>{productName}</h1>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Rating readonly size={20} initialValue={4} /> (1)
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Price <span className="fw-bold">${productPrice}</span>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    {productDescription}
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col md={4}>
                            <ListGroup>
                                <ListGroup.Item>Status: in stock</ListGroup.Item>
                                <ListGroup.Item>
                                    Price: <span className="fw-bold">${productPrice}</span>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Quantity:
                                    <Form.Select value={quantity} onChange={e => setQuantity(e.target.value)} size="lg" aria-label="Default select example">
                                        {[...Array(productCount).keys()].map((x) => (
                                            <option key={x + 1} value={x + 1}>
                                                {x + 1}
                                            </option>
                                        ))}
                                    </Form.Select>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Button onClick={addToCartHandler} variant="danger">Add to cart</Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="mt-5">
                            <h5>REVIEWS</h5>
                            <ListGroup variant="flush">
                                {productReviews.map((review, idx) => (
                                    <ListGroup.Item key={idx}>
                                        {review.user.name} <br />
                                        <Rating readonly size={20} initialValue={review.rating} />
                                        <br />
                                        {review.createdAt.substring(0, 10)} <br />
                                        {review.comment}
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Col>
                    </Row>
                    <hr />
                    <Alert variant="danger">Login first to write a review</Alert>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Write a review</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Form.Select aria-label="Default select example">
                            <option>Your rating</option>
                            <option value="5">5 (very good)</option>
                            <option value="4">4 (good)</option>
                            <option value="3">3 (average)</option>
                            <option value="2">2 (bad)</option>
                            <option value="1">1 (awful)</option>
                        </Form.Select>
                        <Button className="mb-3 mt-3" variant="primary">
                            Submit
                        </Button>
                    </Form>
                </Col>
            <Container className="g-4 mt-5 mb-5">
                <h2>Related Products</h2>
                <Row className="mt-3">
                    {relatedProducts.map((product) => (
                        <Col key={product._id} xs={12} sm={6} md={4} lg={3}>
                            <ProductForListComponent
                                key={product._id}
                                images={product.images}
                                name={product.name}
                                description={product.description}
                                price={product.price}
                                rating={product.rating}
                                reviewsNumber={product.reviewsNumber}
                                productId={product._id}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
            </Row>
        </Container>
    );
};

export default ProductDetailsPageComponent;

