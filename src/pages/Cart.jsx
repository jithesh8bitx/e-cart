import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FaArrowLeft, FaTrash } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import sadMagnifyingGlass from "../assets/Nothing_found.svg";
import { useNavigate } from "react-router-dom";
import { emptyCart, removeFromCart } from "../redux/slices/cartSlice";
import { useEffect, useState } from "react";

function Cart() {
  const navigate = useNavigate();
  const cartArray = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);

  const getTotal = () => {
    cartArray.length > 0 &&
      setTotal(cartArray.map((item) => item.price).reduce((p1, p2) => p1 + p2));
  };

  useEffect(() => {
    getTotal();
  }, [cartArray]);

  return (
    <Container>
      {cartArray.length > 0 ? (
        <Row>
          <Col lg={7} xl={8}>
            {cartArray.map((item, index) => (
              <Card
                key={index}
                className="my-4 flex-row"
                style={{ height: "170px" }}
              >
                <Card.Img
                  src={item.thumbnail}
                  className="object-fit-cover"
                  style={{ width: "45%", maxWidth: "300px" }}
                />
                <Card.Body className="d-flex flex-column overflow-hidden">
                  <Card.Title className="text-truncate">
                    {item.title}
                  </Card.Title>
                  <div>
                    <div>Qty: 1</div>
                    <div>Price: ${item.price}</div>
                  </div>
                  <div className="d-flex mt-auto">
                    <Button
                      onClick={() => {
                        dispatch(removeFromCart(item.id));
                      }}
                      variant="primary"
                      className="ms-auto d-flex align-items-center"
                    >
                      <span className="pe-2">Remove</span>
                      <FaTrash />
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </Col>
          <Col>
            <div>
              <Card
                className="my-4 mx-auto ms-sm-auto me-sm-0"
                style={{ maxWidth: "400px" }}
              >
                <Card.Body>
                  <Card.Title className="text-primary">
                    Order summary
                  </Card.Title>
                  <div className="fw-medium my-3">
                    <div className="d-flex justify-content-between mb-1">
                      <div>Subtotal</div>
                      <div className="text-primary">${total}</div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div>Shipping</div>
                      <div className="text-primary">FREE</div>
                    </div>
                  </div>
                  <div className="mb-2 d-flex justify-content-between fw-bold fs-4 text-primary">
                    <div>Total</div>
                    <div>${total}</div>
                  </div>
                  <Button
                    onClick={() => {
                      alert(
                        "Thank you ! Your order has been placed succesfully"
                      );
                      dispatch(emptyCart());
                      navigate("/");
                    }}
                    variant="primary"
                    className="w-100"
                  >
                    Checkout now
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      ) : (
        <Container
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ height: "90vh" }}
        >
          <img
            src={sadMagnifyingGlass}
            alt="No items found"
            style={{ maxWidth: "128px" }}
          />
          <h4 className="m-5">
            No items found. you need to add somthing to display here !
          </h4>
          <Button
            onClick={() => navigate("/")}
            variant="primary"
            className="d-flex"
          >
            <FaArrowLeft size={24} />
            <span className="ps-2">Back to Home</span>
          </Button>
        </Container>
      )}
    </Container>
  );
}

export default Cart;
