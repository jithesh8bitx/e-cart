import "react-icons/fa6";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FaCartShopping, FaHeart } from "react-icons/fa6";
import useFetch from "../hooks/useFetch";
import { useDispatch } from "react-redux";
import { addToWishList } from "../redux/slices/wishListSlice";
import { addToCart } from "../redux/slices/cartSlice";

function Home() {
  const dispatch = useDispatch();
  const data = useFetch("https://dummyjson.com/products");

  return (
    <Container>
      <Row xs={1} sm={2} md={2} lg={3} xl={4}>
        {data.products?.map((item) => (
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
                    onClick={() => dispatch(addToWishList(item))}
                    variant="outline-primary mb-3 d-flex align-items-center justify-content-center"
                  >
                    <span className="me-2">Add to wish list</span>
                    <FaHeart />
                  </Button>
                  <Button
                    onClick={() => dispatch(addToCart(item))}
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
    </Container>
  );
}

export default Home;
