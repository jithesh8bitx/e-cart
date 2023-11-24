import "react-icons/fa6";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { FaCartShopping, FaHeart, FaHouse, FaTruckFast } from "react-icons/fa6";
import { Badge, Button, Form } from "react-bootstrap";
import { useSelector } from "react-redux";

function Header() {
  const wishlist = useSelector((state) => state.wishListReducer);
  const cart = useSelector((state) => state.cartReducer);

  return (
    <Navbar variant="dark" expand="lg" className="bg-primary">
      <Container>
        <Navbar.Brand>
          <FaTruckFast size="32" />
          <span className="ms-3">E-Cart</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mt-3 mt-lg-0">
            <NavLink
              to="/"
              className="nav-link d-flex align-items-center me-auto p-3 position-relative"
            >
              <FaHouse />
              <span className="ms-2 pe-2">Home</span>
            </NavLink>
            <NavLink
              to="/cart"
              className="nav-link d-flex align-items-center justify-content-end me-auto p-3 position-relative"
            >
              <FaCartShopping />
              <span className="ms-2 pe-2">Cart</span>
              <Badge bg="secondary" className="mb-5 position-absolute">
                {cart.length}
              </Badge>
            </NavLink>
            <NavLink
              to="/wishlist"
              className="nav-link d-flex align-items-center justify-content-end me-auto p-3 position-relative"
            >
              <FaHeart />
              <span className="ms-2 pe-2">Wish List</span>
              <Badge bg="secondary" className="mb-5 position-absolute">
                {wishlist.length}
              </Badge>
            </NavLink>
          </Nav>
          <Form className="d-flex mt-5 mt-lg-0 align-items-center">
            <Form.Control
              id="search"
              className="me-2"
              type="text"
              placeholder="Search"
            />
            <Button variant="secondary" className="my-2 my-sm-0" type="submit">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
