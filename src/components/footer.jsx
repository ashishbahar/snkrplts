import React from "react";
import logo from "../assets/images/svg/logo.svg";
import fb from "../assets/images/svg/footer_fb.svg";
import twiter from "../assets/images/svg/twiter.2.svg";
import google from "../assets/images/svg/google2.svg";
import { Col, Container, Row } from "react-bootstrap";
const Footer = () => {
  return (
    <footer className="bg-black mt-5 ">
      <Container className="py-5">
        <img src={logo} alt="logo" />
        <Row>
          <Col lg={5}>
            <p className="ff_poppins fw_400 fs_lg clr_lightestwhite">
              Sed nec ultricies felis, vitae facilisis ipsum. Morbi id turpis
              euismod, rhoncus tortor quis, lobortis sapien. Sed imperdiet nulla
              in leo ullamcorper, in finibus elit porta.
            </p>
            <div className="d-flex">
              <a href="#">
                <img src={fb} alt="fb" />
              </a>
              <a href="#">
                <img src={twiter} alt="twiter" className="ms-4" />
              </a>
              <a href="#">
                <img src={google} alt="google" className="ms-4" />
              </a>
            </div>
          </Col>
          <Col lg={7}>
            <Row className="mt-3 mt-lg-0">
              <Col xs={12} sm={6} md={3} lg={3} className=" mt-5 mt-sm-0">
                <ul className="m-0 p-0">
                  <li className="ff_poppins fw_600 fs_lg clr_white mb-4">
                    CUSTOM LINKS
                  </li>
                  <li className="mb-3">
                    <a
                      href="#"
                      className="ff_poppins fw_400 fs_lg clr_lightwhite footr_hover "
                    >
                      Lorem ipsum
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="ff_poppins fw_400 fs_lg clr_lightwhite footr_hover"
                    >
                      Lorem ipsum
                    </a>
                  </li>
                </ul>
              </Col>
              <Col xs={12} sm={6} md={3} lg={3} className=" mt-5 mt-sm-0">
                <ul className="mb-0 ps-0">
                  <li className="ff_poppins fw_600 fs_lg clr_white mb-4">
                    PRODUCTS
                  </li>
                  <li className="mb-3">
                    <a
                      href="#"
                      className="ff_poppins fw_400 fs_lg clr_lightwhite footr_hover "
                    >
                      Lorem ipsum
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      href="#"
                      className="ff_poppins fw_400 fs_lg clr_lightwhite footr_hover"
                    >
                      Lorem ipsum
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="ff_poppins fw_400 fs_lg clr_lightwhite footr_hover"
                    >
                      Lorem ipsum
                    </a>
                  </li>
                </ul>
              </Col>
              <Col xs={12} sm={6} md={3} lg={3} className=" mt-5 mt-md-0">
                <ul className="mb-0 ps-0">
                  <li className="ff_poppins fw_600 fs_lg clr_white mb-4">
                    OUR COMPANY
                  </li>
                  <li className="mb-3">
                    <a
                      href="#"
                      className="ff_poppins fw_400 fs_lg clr_lightwhite footr_hover "
                    >
                      Lorem ipsum
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="ff_poppins fw_400 fs_lg clr_lightwhite footr_hover"
                    >
                      Lorem ipsum
                    </a>
                  </li>
                </ul>
              </Col>
              <Col xs={12} sm={6} md={3} lg={3} className=" mt-5 mt-md-0">
                <ul className="mb-0 ps-0">
                  <li className="ff_poppins fw_600 fs_lg clr_white mb-4">
                    YOUR ACCOUNT
                  </li>
                  <li className="mb-3">
                    <a
                      href="#"
                      className="ff_poppins fw_400 fs_lg clr_lightwhite footr_hover "
                    >
                      Lorem ipsum
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="ff_poppins fw_400 fs_lg clr_lightwhite footr_hover"
                    >
                      Lorem ipsum
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <p className="ff_poppins fw_400 bg_darkblack fs_lg  clr_lightwhite  mb-0 text-center py-4">
        © Copyright SNKRPLTS 2021.
      </p>
    </footer>
  );
};

export default Footer;
