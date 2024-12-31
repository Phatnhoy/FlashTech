import ProductCarouselComponent from "../../components/ProductCarouselComponent";
import CategoryCardComponent from "../../components/CategoryCardComponent";
import { Row, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const HomePageComponent = ({ getBestsellers }) => {
    const categories = useSelector((state) => state.getCategories.categories);
    const [bestSellers, setBestsellers] = useState([]);
    useEffect(() => {
        getBestsellers()
            .then((data) => {
                setBestsellers(data);
            })
            .catch((er) => console.log(er.response.data.message ? er.response.data.message : er.response.data));
    }, [])
    return (
        <>
            <ProductCarouselComponent bestSellers={bestSellers} />
            <Container>
                <Row xs={1} md={2} className="g-4 mt-5 mb-5">
                    {categories.map((category, idx) => (
                        <CategoryCardComponent key={idx} category={category} idx={idx} />
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default HomePageComponent;

