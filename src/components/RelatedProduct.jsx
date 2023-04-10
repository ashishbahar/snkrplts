import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import red_shoes from "../assets/images/png/red_shoes.png";
import grey_shoes from "../assets/images/png/grey_shoes.png";
import blackstar from "../assets/images/svg/Starblack.svg";
import add from "../assets/images/svg/add.svg";
const RelatedProduct = () => {
  const [first, setfirst] = useState(0);
  return (
    <section className=" bg_white pb-sm-5">
      <Container>
        <p className=" ff_poppins fw_600 fs_4xl clr_black">RELATED PRODUCT</p>
        <Row>
          <Col lg={3} md={4} sm={6} className=" my-4 ">
            <div className="box_border position-relative box_modify c_pointer ">
              <p className=" position-absolute ff_poppins fw_400 fs_sm px-3 py-1 clr_white new_position">
                NEW
              </p>
              <p className="position-absolute ff_poppins fw_300 fs_sm px-5  clr_white off_position">
                -10% OFF
              </p>
              <img className="w-100" src={red_shoes} alt="redshoes" />
              <div className="px-2 pb-4 ">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <p className=" ff_poppins fw_500 fs_lg clr_black mb-0 mt-3 ">
                      Quickiins Mens Shoes
                    </p>
                    <p className=" ff_poppins fw_500 fs_lg clr_grey9 mt-2 ">
                      $90.00 <span className="clr_lightred">$70.00</span>
                    </p>
                  </div>
                  <img src={add} alt="add" />
                </div>
                <div className="d-flex">
                  <img src={blackstar} alt="blackstar" />
                  <img className="ms-1" src={blackstar} alt="blackstar" />
                  <img className="ms-1" src={blackstar} alt="blackstar" />
                  <img className="ms-1" src={blackstar} alt="blackstar" />
                  <img className="ms-1" src={blackstar} alt="blackstar" />
                </div>
              </div>
            </div>
          </Col>{" "}
          <Col lg={3} md={4} sm={6} className=" my-4 ">
            <div className="box_border position-relative box_modify c_pointer ">
              <p className=" position-absolute ff_poppins fw_400 fs_sm px-3 py-1 clr_white new_position">
                NEW
              </p>
              <p className="position-absolute ff_poppins fw_300 fs_sm px-5  clr_white off_position">
                -10% OFF
              </p>
              <img className="w-100" src={grey_shoes} alt="grey_shoes" />
              <div className="px-2 pb-4 ">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <p className=" ff_poppins fw_500 fs_lg clr_black mb-0 mt-3 ">
                      Quickiins Mens Shoes
                    </p>
                    <p className=" ff_poppins fw_500 fs_lg clr_grey9 mt-2 ">
                      $90.00 <span className="clr_lightred">$70.00</span>
                    </p>
                  </div>
                  <img src={add} alt="add" />
                </div>
                <div className="d-flex">
                  <img src={blackstar} alt="blackstar" />
                  <img className="ms-1" src={blackstar} alt="blackstar" />
                  <img className="ms-1" src={blackstar} alt="blackstar" />
                  <img className="ms-1" src={blackstar} alt="blackstar" />
                  <img className="ms-1" src={blackstar} alt="blackstar" />
                </div>
              </div>
            </div>
          </Col>{" "}
          <Col lg={3} md={4} sm={6} className=" my-4 ">
            <div className="box_border position-relative box_modify c_pointer ">
              <p className=" position-absolute ff_poppins fw_400 fs_sm px-3 py-1 clr_white new_position">
                NEW
              </p>
              <p className="position-absolute ff_poppins fw_300 fs_sm px-5  clr_white off_position">
                -10% OFF
              </p>
              <img className="w-100" src={red_shoes} alt="redshoes" />
              <div className="px-2 pb-4 ">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <p className=" ff_poppins fw_500 fs_lg clr_black mb-0 mt-3 ">
                      Quickiins Mens Shoes
                    </p>
                    <p className=" ff_poppins fw_500 fs_lg clr_grey9 mt-2 ">
                      $90.00 <span className="clr_lightred">$70.00</span>
                    </p>
                  </div>
                  <img src={add} alt="add" />
                </div>
                <div className="d-flex">
                  <img src={blackstar} alt="blackstar" />
                  <img className="ms-1" src={blackstar} alt="blackstar" />
                  <img className="ms-1" src={blackstar} alt="blackstar" />
                  <img className="ms-1" src={blackstar} alt="blackstar" />
                  <img className="ms-1" src={blackstar} alt="blackstar" />
                </div>
              </div>
            </div>
          </Col>{" "}
          <Col lg={3} md={4} sm={6} className=" my-4 ">
            <div className="box_border position-relative box_modify c_pointer ">
              <p className=" position-absolute ff_poppins fw_400 fs_sm px-3 py-1 clr_white new_position">
                NEW
              </p>
              <p className="position-absolute ff_poppins fw_300 fs_sm px-5  clr_white off_position">
                -10% OFF
              </p>
              <img className="w-100" src={grey_shoes} alt="grey_shoes" />
              <div className="px-2 pb-4 ">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <p className=" ff_poppins fw_500 fs_lg clr_black mb-0 mt-3 ">
                      Quickiins Mens Shoes
                    </p>
                    <p className=" ff_poppins fw_500 fs_lg clr_grey9 mt-2 ">
                      $90.00 <span className="clr_lightred">$70.00</span>
                    </p>
                  </div>
                  <img src={add} alt="add" />
                </div>
                <div className="d-flex">
                  <img src={blackstar} alt="blackstar" />
                  <img className="ms-1" src={blackstar} alt="blackstar" />
                  <img className="ms-1" src={blackstar} alt="blackstar" />
                  <img className="ms-1" src={blackstar} alt="blackstar" />
                  <img className="ms-1" src={blackstar} alt="blackstar" />
                </div>
              </div>
            </div>
          </Col>{" "}
          <Col lg={3} md={4} sm={6} className=" my-4 ">
            <div className="box_border position-relative box_modify c_pointer ">
              <p className=" position-absolute ff_poppins fw_400 fs_sm px-3 py-1 clr_white new_position">
                NEW
              </p>
              <p className="position-absolute ff_poppins fw_300 fs_sm px-5  clr_white off_position">
                -10% OFF
              </p>
              <img className="w-100" src={red_shoes} alt="redshoes" />
              <div className="px-2 pb-4 ">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <p className=" ff_poppins fw_500 fs_lg clr_black mb-0 mt-3 ">
                      Quickiins Mens Shoes
                    </p>
                    <p className=" ff_poppins fw_500 fs_lg clr_grey9 mt-2 ">
                      $90.00 <span className="clr_lightred">$70.00</span>
                    </p>
                  </div>
                  <img src={add} alt="add" />
                </div>
                <div className="d-flex">
                  <img src={blackstar} alt="blackstar" />
                  <img className="ms-1" src={blackstar} alt="blackstar" />
                  <img className="ms-1" src={blackstar} alt="blackstar" />
                  <img className="ms-1" src={blackstar} alt="blackstar" />
                  <img className="ms-1" src={blackstar} alt="blackstar" />
                </div>
              </div>
            </div>
          </Col>{" "}
          <Col lg={3} md={4} sm={6} className=" my-4 ">
            <div className="box_border position-relative box_modify c_pointer ">
              <p className=" position-absolute ff_poppins fw_400 fs_sm px-3 py-1 clr_white new_position">
                NEW
              </p>
              <p className="position-absolute ff_poppins fw_300 fs_sm px-5  clr_white off_position">
                -10% OFF
              </p>
              <img className="w-100" src={grey_shoes} alt="grey_shoes" />
              <div className="px-2 pb-4 ">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <p className=" ff_poppins fw_500 fs_lg clr_black mb-0 mt-3 ">
                      Quickiins Mens Shoes
                    </p>
                    <p className=" ff_poppins fw_500 fs_lg clr_grey9 mt-2 ">
                      $90.00 <span className="clr_lightred">$70.00</span>
                    </p>
                  </div>
                  <img src={add} alt="add" />
                </div>
                <div className="d-flex">
                  <img src={blackstar} alt="blackstar" />
                  <img className="ms-1" src={blackstar} alt="blackstar" />
                  <img className="ms-1" src={blackstar} alt="blackstar" />
                  <img className="ms-1" src={blackstar} alt="blackstar" />
                  <img className="ms-1" src={blackstar} alt="blackstar" />
                </div>
              </div>
            </div>
          </Col>{" "}
          <Col lg={3} md={4} sm={6} className=" my-4 ">
            <div className="box_border position-relative box_modify c_pointer ">
              <p className=" position-absolute ff_poppins fw_400 fs_sm px-3 py-1 clr_white new_position">
                NEW
              </p>
              <p className="position-absolute ff_poppins fw_300 fs_sm px-5  clr_white off_position">
                -10% OFF
              </p>
              <img className="w-100" src={red_shoes} alt="redshoes" />
              <div className="px-2 pb-4 ">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <p className=" ff_poppins fw_500 fs_lg clr_black mb-0 mt-3 ">
                      Quickiins Mens Shoes
                    </p>
                    <p className=" ff_poppins fw_500 fs_lg clr_grey9 mt-2 ">
                      $90.00 <span className="clr_lightred">$70.00</span>
                    </p>
                  </div>
                  <img src={add} alt="add" />
                </div>
                <div className="d-flex">
                  <img src={blackstar} alt="blackstar" />
                  <img className="ms-1" src={blackstar} alt="blackstar" />
                  <img className="ms-1" src={blackstar} alt="blackstar" />
                  <img className="ms-1" src={blackstar} alt="blackstar" />
                  <img className="ms-1" src={blackstar} alt="blackstar" />
                </div>
              </div>
            </div>
          </Col>{" "}
          <Col lg={3} md={4} sm={6} className=" my-4 ">
            <div className="box_border position-relative box_modify c_pointer ">
              <p className=" position-absolute ff_poppins fw_400 fs_sm px-3 py-1 clr_white new_position">
                NEW
              </p>
              <p className="position-absolute ff_poppins fw_300 fs_sm px-5  clr_white off_position">
                -10% OFF
              </p>
              <img className="w-100" src={grey_shoes} alt="grey_shoes" />
              <div className="px-2 pb-4 ">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <p className=" ff_poppins fw_500 fs_lg clr_black mb-0 mt-3 ">
                      Quickiins Mens Shoes
                    </p>
                    <p className=" ff_poppins fw_500 fs_lg clr_grey9 mt-2 ">
                      $90.00 <span className="clr_lightred">$70.00</span>
                    </p>
                  </div>
                  <img src={add} alt="add" />
                </div>
                <div className="d-flex">
                  <img src={blackstar} alt="blackstar" />
                  <img className="ms-1" src={blackstar} alt="blackstar" />
                  <img className="ms-1" src={blackstar} alt="blackstar" />
                  <img className="ms-1" src={blackstar} alt="blackstar" />
                  <img className="ms-1" src={blackstar} alt="blackstar" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <div className="d-flex justify-content-end align-items-center mt-5">
          <p
            onClick={() => {
              setfirst(0);
            }}
            className={
              first === 0
                ? "ff_poppins fw_600 fs_2xl small_box  bg_red"
                : "ff_poppins fw_600 fs_2xl small_box  "
            }
          >
            1
          </p>
          <p
            onClick={() => {
              setfirst(1);
            }}
            className={
              first === 1
                ? "ff_poppins fw_600 fs_2xl small_box  bg_red ms-3"
                : "ff_poppins fw_600 fs_2xl small_box ms-3  "
            }
          >
            2
          </p>{" "}
          <p
            onClick={() => {
              setfirst(2);
            }}
            className={
              first === 2
                ? "ff_poppins fw_600 fs_2xl small_box  bg_red ms-3"
                : "ff_poppins fw_600 fs_2xl small_box ms-3  "
            }
          >
            3
          </p>
          <p className=" ff_poppins fs_md clr_lightestblack fw_400 border_offwhite ms-3 d-none d-sm-block">
            Next
          </p>
        </div>
      </Container>
    </section>
  );
};

export default RelatedProduct;
