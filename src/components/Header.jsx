import React, { useEffect, useState } from "react";
import shoes_img from "../assets/images/png/seec_1_shoes_img.png";
import redshoes from "../assets/images/png/red-shoes.png";
import redblack from "../assets/images/png/redblack.png";
import blackshoes from "../assets/images/png/black-shoes.png";
import gray_shoes from "../assets/images/png/gray-shoes.png";
import { Col, Container, Row } from "react-bootstrap";
import star from "../assets/images/svg/star.svg";
import wishlist from "../assets/images/svg/wishlist.svg";
import compare from "../assets/images/svg/compare.svg";
import share from "../assets/images/svg/share.svg";
import fb from "../assets/images/svg/fb.svg";
import twiter from "../assets/images/svg/twiter'.svg";
import ping from "../assets/images/svg/ping.svg";
import google from "../assets/images/svg/google.svg";
const Header = () => {
  const [first, setfirst] = useState(1);

  useEffect(() => {}, [first]);
  return (
    <header className=" bg_white mt-5">
      <Container>
        <Row className=" py-4">
          <Col lg={6}>
            <div className="py-4 bg_grey">
              <img className="w-100" src={shoes_img} alt="shoes_img" />
            </div>
            <div className="d-flex mt-4 overflow_scroll example ">
              <img
                className="me-4 min_width_137"
                src={blackshoes}
                alt="blackshoes"
              />
              <img
                className="me-4 min_width_137"
                src={redshoes}
                alt="redshoes"
              />
              <img
                className="me-4 min_width_137"
                src={gray_shoes}
                alt="gray_shoes"
              />
              <img
                className="me-4  min_width_137"
                src={redblack}
                alt="redblack"
              />
              <img
                className="me-4 min_width_137"
                src={redshoes}
                alt="redshoes"
              />
            </div>
          </Col>
          <Col lg={6} className=" pt-4 ps-5">
            <h1 className=" ff_poppins fw_600 fs_4xl color_black">
              PREMIUM MENS SPORTS LATHER KEDS
            </h1>
            <div className="d-flex  mt- flex-column flex-sm-row ">
              <div className="d-flex ">
                <img src={star} className="" alt="star" />
                <img src={star} className="ms-1" alt="star" />
                <img src={star} className="ms-1" alt="star" />
                <img src={star} className="ms-1" alt="star" />
                <img src={star} className="ms-1" alt="star" />
              </div>
              <p className=" ff_poppins fw_400 fs_xl color_lightblack pt-3 ms-sm-3  ">
                ( 5 Customer Review )
              </p>
            </div>
            <p className=" ff_poppins fs_xl clr_lightgrey fw_400 pt-3">
              Sed nec ultricies felis, vitae facilisis ipsum. Morbi id turpis
              euismod, rhoncus tortor quis, lobortis sapien. Sed imperdiet nulla
              in leo ullamcorper, in finibus elit porta. Sed eget congue neque,
              mattis finibus neque. In vel dolor ac augue pretium
            </p>
            <div className="d-flex align-items-lg-center mt-md-5 pt-4 flex-column-reverse flex-md-row">
              <div className="d-flex align-items-center">
                <p className=" ff_poppins fw_500 fs_xl clr_black mt-2">Qty: </p>
                <div>
                  <div className="border   py-1 px-2 ms-3 me-4 ">
                    <span
                      className="ff_Josefin fw_400 fs_xl c_pointer clr_lightestgrey  cursur_poi"
                      onClick={() => {
                        setfirst(first - 1);
                      }}
                    >
                      -
                    </span>
                    <span className="ff_Josefin fw_400 fs_xl clr_lightestgrey px-3">
                      {first}
                    </span>
                    <span
                      className="ff_Josefin fw_400 fs_xl c_pointer clr_lightestgrey  cursur_poi"
                      onClick={() => {
                        setfirst(first + 1);
                      }}
                    >
                      +
                    </span>
                  </div>
                </div>
              </div>
              <button className=" ff_poppins border-0  fw_500 fs_xl clr_white btn_modify c_pointer   ">
                Add to Cart
              </button>
            </div>
            <div className="d-flex align-items-center">
              <p className=" ff_poppins fw_500 fs_xl clr_black me-3 mt-3 ">
                Size:
              </p>
              <form>
                <select className="ps-2 py-1">
                  <option value="">S</option>
                  <option value="">M</option>
                  <option value="">L</option>
                  <option value="">XL</option>
                </select>
              </form>
            </div>
            <div className="d-flex">
              <p className=" ff_poppins fw_500 fs_xl clr_black me-3 mt-3 ">
                Color:
              </p>
              <div className="d-flex align-items-center">
                <div className=" border_grey">
                  <div className="redcolor_box"></div>
                </div>{" "}
                <div className=" border_grey">
                  <div className="khakicolor_box"></div>
                </div>{" "}
                <div className=" border_grey">
                  <div className="blackcolor_box"></div>
                </div>{" "}
                <div className=" border_grey">
                  <div className="darkgreycolor_box"></div>
                </div>
              </div>
            </div>{" "}
            <div className="d-flex mt-3 bottom_border pb-4">
              <div className="d-flex align-items-center">
                <img src={compare} alt=" compare" />
                <p className="mb-0 ff_poppins fw_300 clr_darkblack  ms-1 ">
                  Compare
                </p>
              </div>
              <div className="d-flex align-items-center ms-4">
                <img src={wishlist} alt=" wishlist" />
                <p className="mb-0 ms-1 ff_poppins fw_300 clr_darkblack ">
                  Wishlist
                </p>
              </div>
            </div>
            <div className="d-flex mt-3">
              <img className=" c_pointer" src={share} alt="share" />
              <img className="ms-4 c_pointer" src={fb} alt="fb" />
              <img className="ms-4 c_pointer" src={twiter} alt="twiter" />
              <img className="ms-4 c_pointer" src={ping} alt="ping" />
              <img className="ms-4 c_pointer" src={google} alt="google" />
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
