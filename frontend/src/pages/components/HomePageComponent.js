import ProductCarouselComponent from "../../components/ProductCarouselComponent";
import CategoryCardComponent from "../../components/CategoryCardComponent";
import ProductForListComponent from "../../components/ProductForListComponent";
import { Col, Row, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const HomePageComponent = ({ getBestsellers, getProducts, getHotProducts, getNewProducts}) => {
    const categories = useSelector((state) => state.getCategories.categories);
    const [bestSellers, setBestsellers] = useState([]);
    useEffect(() => {
        getBestsellers()
            .then((data) => {
                setBestsellers(data);
            })
            .catch((er) => console.log(er.response.data.message ? er.response.data.message : er.response.data));
    }, [])

    const [hotProducts, setHotProducts] = useState([])
    const [newProducts, setNewProducts] = useState([])
    useEffect(() => {
        getHotProducts()
        .then(products => setHotProducts(products.slice(0, 4)))
        .catch((er) => console.log(er));
        console.log(hotProducts)
        getNewProducts()
        .then(products => setNewProducts(products.slice(0, 4)))
        .catch((er) => console.log(er));
        console.log(newProducts)
    }, [])
    return (
        <>
            <ProductCarouselComponent bestSellers={bestSellers} />
            <Container>
                <Row xs={1} md={2} className="g-4 mt-5 mb-5" style={{ columnGap: '20px' }}>
                    {categories.map((category, idx) => (
                        <CategoryCardComponent key={idx} category={category} idx={idx} />
                    ))}
                </Row>
            </Container>
            <Container className="g-4 mt-5 mb-5">
                <h2>New Products</h2>
                <Row className="mt-3 home-row">
                    {newProducts.map((product) => (
                        <Col key={product._id} xs={12} sm={6} md={4} lg={3} style={{marginBottom: '10px'}}>
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
            <Container className="g-4 mt-5 mb-5">
                <h2>Hot Products</h2>
                <Row className="mt-3">
                    {hotProducts.map((product) => (
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
        </>
    );
};

export default HomePageComponent;

