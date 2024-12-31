import { Navbar, Nav, Container, NavDropdown, Badge, Form, DropdownButton, Dropdown, Button, InputGroup } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { logout } from "../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCategories } from "../redux/actions/categoryActions";

const HeaderComponent = () => {
    const dispatch = useDispatch();
    const { userInfo } = useSelector((state) => state.userRegisterLogin);
    const itemsCount = useSelector((state) => state.cart.itemsCount);

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch])

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>FlashTech</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <InputGroup>
                            <Form.Control type="text" placeholder="Searching..." />
                            <Button variant="warning">
                                <i className="bi bi-search"></i>
                            </Button>
                        </InputGroup>
                    </Nav>
                    <Nav>
                        {userInfo.isAdmin ? (
                            <Nav.Link href="/admin/orders">Admin</Nav.Link>
                        ) : userInfo.name && !userInfo.isAdmin ? (
                            <NavDropdown title={`${userInfo.name} ${userInfo.lastName}`} id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/user">Profile</NavDropdown.Item>
                                <NavDropdown.Item href="/user/myorder">Orders</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={() => dispatch(logout())}>Log out</NavDropdown.Item>
                            </NavDropdown>
                        ) : (<>
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link href="/register">Register</Nav.Link>
                        </>
                        )}


                        <Nav.Link href="/cart">
                            <i className="bi bi-cart-dash me-1"></i>
                            CART
                            <Badge pill bg="danger">
                                {itemsCount === 0 ? "" : itemsCount}
                            </Badge>
                        </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default HeaderComponent;