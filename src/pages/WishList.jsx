import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FaArrowLeft, FaCartShopping, FaTrash } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import sadMagnifyingGlass from "../assets/Nothing_found.svg";
import { useNavigate } from "react-router-dom";
import { removeFromWishList } from "../redux/slices/wishListSlice";
import { addToCart } from "../redux/slices/cartSlice";

function WishList() {
  const navigate = useNavigate();
  const wishListArray = useSelector((state) => state.wishListReducer);
  const dispatch = useDispatch();

  return (
    <Container>
      {wishListArray.length > 0 ? (
        <Row xs={1} sm={2} md={2} lg={3} xl={4}>
          {wishListArray.map((item) => (
            <Col key={item.id}>
              <Card className="my-4" style={{ maxHeight: "500px" }}>
                <Card.Img
                  variant="top"
                  src={item.thumbnail}
                  height={"200px"}
                  className="object-fit-cover"
                />
                <Card.Body>
                  <div
                    style={{
                      height: "70px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                    className="mb-4"
                  >
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                  </div>
                  <Card.Text style={{ fontWeight: "700" }}>
                    Price: ${item.price}
                  </Card.Text>
                  <div className="d-flex flex-column">
                    <Button
                      onClick={() => dispatch(removeFromWishList(item.id))}
                      variant="outline-primary mb-3 d-flex align-items-center justify-content-center"
                    >
                      <span className="me-2">Remove item</span>
                      <FaTrash />
                    </Button>
                    <Button
                      onClick={() => {
                        dispatch(removeFromWishList(item.id));
                        dispatch(addToCart(item));
                      }}
                      variant="primary d-flex align-items-center justify-content-center"
                    >
                      <span className="me-2">Add to cart</span>
                      <FaCartShopping />
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
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

export default WishList;
