import "react-icons/fa6";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaEnvelope,
  FaFacebook,
  FaGoogle,
  FaHouse,
  FaInstagram,
  FaPhone,
  FaPrint,
  FaXTwitter,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="text-center text-lg-start text-white bg-primary p-4 pb-0">
      <Container>
        <section className="">
          <Row>
            <Col className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold text-white">
                E-Cart pvt ltd
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </Col>
            <hr className="w-100 clearfix d-md-none" />
            <Col className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold text-white">
                Products
              </h6>
              <p>
                <a
                  className="text-white"
                  href="https://loremipsum.com"
                  target="_blank"
                >
                  Vite
                </a>
              </p>
              <p>
                <a
                  className="text-white"
                  href="https://loremipsum.com"
                  target="_blank"
                >
                  React
                </a>
              </p>
              <p>
                <a
                  className="text-white"
                  href="https://loremipsum.com"
                  target="_blank"
                >
                  React Bootsrap
                </a>
              </p>
              <p>
                <a
                  className="text-white"
                  href="https://loremipsum.com"
                  target="_blank"
                >
                  Node Js
                </a>
              </p>
            </Col>
            <hr className="w-100 clearfix d-md-none" />
            <Col className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold text-white">
                Useful links
              </h6>
              <p>
                <a
                  className="text-white"
                  href="https://loremipsum.com"
                  target="_blank"
                >
                  Your Account
                </a>
              </p>
              <p>
                <a
                  className="text-white"
                  href="https://loremipsum.com"
                  target="_blank"
                >
                  Become an Affiliate
                </a>
              </p>
              <p>
                <a
                  className="text-white"
                  href="https://loremipsum.com"
                  target="_blank"
                >
                  Shipping Rates
                </a>
              </p>
              <p>
                <a
                  className="text-white"
                  href="https://loremipsum.com"
                  target="_blank"
                >
                  Help
                </a>
              </p>
            </Col>
            <hr className="w-100 clearfix d-md-none" />
            {/* Grid column */}
            <Col className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold text-white">
                Contact
              </h6>
              <p>
                <FaHouse className="me-1" /> New York, NY 10012, US
              </p>
              <p>
                <FaEnvelope className="me-1" /> info@gmail.com
              </p>
              <p>
                <FaPhone className="me-1" /> + 01 234 567 88
              </p>
              <p>
                <FaPrint className="me-1" /> + 01 234 567 89
              </p>
            </Col>
          </Row>
        </section>
        <hr className="my-3" />
        <section className="p-3 pt-0">
          <div className="row d-flex align-items-center">
            <Col className="col-md-7 col-lg-8 text-center text-md-start">
              <div className="p-3">
                © E-CART 2023 Copyright: <a
                  className="text-white"
                  target="_blank"
                  href="https://cartsharklogistics.com/"
                >
                  CARTSharkLogistics.com
                </a>
              </div>
            </Col>
            <Col className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
              <a
                className="btn btn-outline-light btn-floating m-1"
                role="button"
              >
                <i className="fab fa-facebook-f" />
                <FaFacebook />
              </a>
              <a
                className="btn btn-outline-light btn-floating m-1"
                role="button"
              >
                <FaXTwitter />
              </a>
              <a
                className="btn btn-outline-light btn-floating m-1"
                role="button"
              >
                <FaGoogle />
              </a>
              <a
                className="btn btn-outline-light btn-floating m-1"
                role="button"
              >
                <FaInstagram />
              </a>
            </Col>
          </div>
        </section>
      </Container>
    </footer>
  );
}

export default Footer;
