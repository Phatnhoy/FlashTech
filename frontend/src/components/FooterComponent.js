import { Container, Row, Col } from "react-bootstrap";
const FooterComponent = () => {
    return (
        <Container fluid>
            <Row className="mt-5">
                <Col className="bg-dark text-white text-center py-5">Copyright &copy; FlashTech</Col>
            </Row>
        </Container>
    )
}

export default FooterComponent;