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
  const [shoes, setshoes] = useState(0);
  useEffect(() => {}, [first]);
  let minus = () => {
    if (first === 1) {
      setfirst(1);
    } else {
      setfirst(first - 1);
    }
  };
  let add = () => {
    if (first === 5) {
      setfirst(5);
    } else {
      setfirst(first + 1);
    }
  };
  return (
    <header className=" bg_white mt-5">
      <Container>
        <Row className=" py-4">
          <Col lg={6}>
            <div className="py-4 bg_grey">
              <img
                className={shoes === 0 ? "w-100 d-block" : "w-100 d-none"}
                src={shoes_img}
                alt="shoes_img"
              />
              <img
                className={shoes === 1 ? "w-100 d-block" : "w-100 d-none"}
                src={blackshoes}
                alt="blackshoes"
              />
              <img
                className={shoes === 2 ? "w-100 d-block" : "w-100 d-none"}
                src={gray_shoes}
                alt="gray_shoes"
              />
              <img
                className={shoes === 3 ? "w-100 d-block" : "w-100 d-none"}
                src={redblack}
                alt="redblack"
              />
            </div>
            <div className="d-flex mt-4 overflow_scroll example justify-content-between ">
              <img
                onClick={() => {
                  setshoes(1);
                }}
                className={
                  shoes === 1
                    ? "me-4 shoes_width c_pointer border_red"
                    : "me-4 shoes_width c_pointer border_bottom_grey"
                }
                src={blackshoes}
                alt="blackshoes"
              />
              <img
                onClick={() => {
                  setshoes(0);
                }}
                className={
                  shoes === 0
                    ? "me-4 shoes_width c_pointer border_red"
                    : "me-4 shoes_width c_pointer border_bottom_grey"
                }
                src={redshoes}
                alt="redshoes"
              />
              <img
                onClick={() => {
                  setshoes(2);
                }}
                className={
                  shoes === 2
                    ? "me-4 shoes_width c_pointer border_red"
                    : "me-4 shoes_width c_pointer border_bottom_grey"
                }
                src={gray_shoes}
                alt="gray_shoes"
              />
              <img
                onClick={() => {
                  setshoes(3);
                }}
                className={
                  shoes === 3
                    ? " shoes_width c_pointer border_red"
                    : " shoes_width c_pointer border_bottom_grey"
                }
                src={redblack}
                alt="redblack"
              />
            </div>
          </Col>
          <Col lg={6} className=" pt-4 ps-lg-5">
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
                      onClick={minus}
                    >
                      -
                    </span>
                    <span className="ff_Josefin fw_400 fs_xl clr_lightestgrey px-3">
                      {first}
                    </span>
                    <span
                      className="ff_Josefin fw_400 fs_xl c_pointer clr_lightestgrey  cursur_poi"
                      onClick={add}
                    >
                      +
                    </span>
                  </div>
                </div>
              </div>
              <button className=" ff_poppins  cart_hover  fw_500 fs_xl clr_white btn_modify c_pointer   ">
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
                <div
                  onClick={() => {
                    setshoes(0);
                  }}
                  className=" border_grey c_pointer"
                >
                  <div className="redcolor_box"></div>
                </div>{" "}
                <div
                  onClick={() => {
                    setshoes(3);
                  }}
                  className=" border_grey c_pointer"
                >
                  <div className="khakicolor_box"></div>
                </div>{" "}
                <div
                  onClick={() => {
                    setshoes(1);
                  }}
                  className=" border_grey c_pointer"
                >
                  <div className="blackcolor_box"></div>
                </div>{" "}
                <div
                  onClick={() => {
                    setshoes(2);
                  }}
                  className=" border_grey c_pointer"
                >
                  <div className="darkgreycolor_box"></div>
                </div>
              </div>
            </div>
            <div className="d-flex mt-3 bottom_border pb-4">
              <div className="d-flex align-items-center c_pointer">
                <img src={compare} alt=" compare" />
                <p className="mb-0 ff_poppins fw_300 clr_darkblack  ms-1 ">
                  Compare
                </p>
              </div>
              <div className="d-flex align-items-center ms-4 c_pointer">
                <img src={wishlist} alt=" wishlist" />
                <p className="mb-0 ms-1 ff_poppins fw_300 clr_darkblack ">
                  Wishlist
                </p>
              </div>
            </div>
            <div className="d-flex mt-3">
              <img
                className=" c_pointer transform_scale_hover"
                src={share}
                alt="share"
              />
              <img
                className="ms-4 c_pointer transform_scale_hover"
                src={fb}
                alt="fb"
              />
              <img
                className="ms-4 c_pointer transform_scale_hover"
                src={twiter}
                alt="twiter"
              />
              <img
                className="ms-4 c_pointer transform_scale_hover"
                src={ping}
                alt="ping"
              />
              <img
                className="ms-4 c_pointer transform_scale_hover"
                src={google}
                alt="google"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
