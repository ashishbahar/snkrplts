import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import footloker from "../assets/images/png/foot-locker.png";
import sidestep from "../assets/images/png/sidestep.png";
const NikeAir = () => {
  const [first, setfirst] = useState(0);
  return (
    <section>
      <Container>
        <p className=" ff_poppins fw_500 fs_3xl clr_black pt-md-5 pb-md-3">
          You can buy the Nike Air Max 97 Men's Shoe - White here:
        </p>
        <Row className="">
          <Col xl={3} lg={4} md={6} className="mt-sm-5 mt-3">
            <div className="hover_box">
              <div className=" box_border_2">
                <div className="p-5">
                  <img className="w-100" src={footloker} alt="footloker" />
                </div>
              </div>
              <div className="px-3 py-3">
                {" "}
                <div className="">
                  <div className="d-flex justify-content-between  align-items-center ">
                    <div className="d-flex align-items-center mt-3">
                      <p className=" clr_darkgrey2 ff_poppins fs_sm fw_400">
                        Price:
                      </p>
                      <p className="clr_black ff_poppins fs_xl fw_600 ms-3">
                        €179,99
                      </p>
                    </div>
                    <button className="btn_modify_2 py-1 px-3 ff_poppins fw_400 fs_xsm clr_white">
                      Best Price
                    </button>
                  </div>
                </div>
                <div>
                  <p className=" clr_darkgrey2 ff_poppins fs_sm fw_400">
                    Size:
                  </p>
                  <div className="d-flex justify-content-md-between">
                    <p
                      onClick={() => {
                        setfirst(1);
                      }}
                      className={
                        first === 1
                          ? " ff_poppins fw_500 fs_md clr_black  no_box_modify mx-md-0 c_pointer bg_green clr_white"
                          : " ff_poppins fw_500 fs_md clr_black  no_box_modify mx-md-0  c_pointer "
                      }
                    >
                      41
                    </p>{" "}
                    <p
                      onClick={() => {
                        setfirst(2);
                      }}
                      className={
                        first === 2
                          ? " ff_poppins fw_500 fs_md clr_black  no_box_modify mx-md-0 mx-2 c_pointer bg_green clr_white"
                          : " ff_poppins fw_500 fs_md clr_black  no_box_modify mx-md-0 mx-2 c_pointer "
                      }
                    >
                      42
                    </p>{" "}
                    <p
                      onClick={() => {
                        setfirst(3);
                      }}
                      className={
                        first === 3
                          ? " ff_poppins fw_500 fs_md clr_black  no_box_modify mx-md-0 mx-2 c_pointer bg_green clr_white"
                          : " ff_poppins fw_500 fs_md clr_black  no_box_modify mx-md-0 mx-2 c_pointer "
                      }
                    >
                      43
                    </p>{" "}
                  </div>
                  <div className="d-flex justify-content-md-between">
                    <p
                      onClick={() => {
                        setfirst(4);
                      }}
                      className={
                        first === 4
                          ? " ff_poppins fw_500 fs_md clr_black  no_box_modify mx-md-0  c_pointer bg_green clr_white"
                          : " ff_poppins fw_500 fs_md clr_black  no_box_modify mx-md-0  c_pointer "
                      }
                    >
                      44
                    </p>{" "}
                    <p
                      onClick={() => {
                        setfirst(5);
                      }}
                      className={
                        first === 5
                          ? " ff_poppins fw_500 fs_md clr_black  no_box_modify mx-md-0 mx-2 c_pointer bg_green clr_white"
                          : " ff_poppins fw_500 fs_md clr_black  no_box_modify mx-md-0 mx-2 c_pointer "
                      }
                    >
                      45
                    </p>{" "}
                    <p
                      onClick={() => {
                        setfirst(6);
                      }}
                      className={
                        first === 6
                          ? " ff_poppins fw_500 fs_md clr_black  no_box_modify mx-md-0 mx-2 c_pointer bg_green clr_white"
                          : " ff_poppins fw_500 fs_md clr_black  no_box_modify mx-md-0 mx-2 c_pointer "
                      }
                    >
                      46
                    </p>{" "}
                  </div>
                </div>
                <p className="mb-0  ff_poppins fw_400 fs_md clr_black">
                  View this product as:
                </p>
                <p className="clr_blue c_pointer  ff_poppins fw_400 fs_md">
                  Foot Locker NL
                </p>
              </div>
            </div>
          </Col>{" "}
          <Col xl={3} lg={4} md={6} className="mt-sm-5 mt-3">
            <div className="hover_box">
              <div className=" box_border_2">
                <div className="p-5 ">
                  <img className="w-100 " src={sidestep} alt="sidestep" />
                </div>
              </div>
              <div className="px-3 py-3">
                {" "}
                <div className="">
                  <div className="d-flex justify-content-between  align-items-center ">
                    <div className="d-flex align-items-center mt-3">
                      <p className=" clr_darkgrey2 ff_poppins fs_sm fw_400">
                        Price:
                      </p>
                      <p className="clr_black ff_poppins fs_xl fw_600 ms-3">
                        €179,99
                      </p>
                    </div>
                    <button className="btn_modify_2 py-1 px-3 ff_poppins fw_400 fs_xsm clr_white">
                      Best Price
                    </button>
                  </div>
                </div>
                <div>
                  <p className=" clr_darkgrey2 ff_poppins fs_sm fw_400">
                    Size:
                  </p>
                  <div className="d-flex justify-content-md-between">
                    <p
                      onClick={() => {
                        setfirst(7);
                      }}
                      className={
                        first === 7
                          ? " ff_poppins fw_500 fs_md clr_black  no_box_modify mx-md-0 c_pointer bg_green clr_white"
                          : " ff_poppins fw_500 fs_md clr_black  no_box_modify mx-md-0  c_pointer "
                      }
                    >
                      41
                    </p>{" "}
                    <p
                      onClick={() => {
                        setfirst(8);
                      }}
                      className={
                        first === 8
                          ? " ff_poppins fw_500 fs_md clr_black  no_box_modify mx-md-0 mx-2 c_pointer bg_green clr_white"
                          : " ff_poppins fw_500 fs_md clr_black  no_box_modify mx-md-0 mx-2 c_pointer "
                      }
                    >
                      42
                    </p>{" "}
                    <p
                      onClick={() => {
                        setfirst(9);
                      }}
                      className={
                        first === 9
                          ? " ff_poppins fw_500 fs_md clr_black  no_box_modify mx-md-0 mx-2 c_pointer bg_green clr_white"
                          : " ff_poppins fw_500 fs_md clr_black  no_box_modify mx-md-0 mx-2 c_pointer "
                      }
                    >
                      43
                    </p>{" "}
                  </div>
                  <div className="d-flex justify-content-md-between">
                    <p
                      onClick={() => {
                        setfirst(10);
                      }}
                      className={
                        first === 10
                          ? " ff_poppins fw_500 fs_md clr_black  no_box_modify mx-md-0  c_pointer bg_green clr_white"
                          : " ff_poppins fw_500 fs_md clr_black  no_box_modify mx-md-0  c_pointer "
                      }
                    >
                      44
                    </p>{" "}
                    <p
                      onClick={() => {
                        setfirst(11);
                      }}
                      className={
                        first === 11
                          ? " ff_poppins fw_500 fs_md clr_black  no_box_modify mx-md-0 mx-2 c_pointer bg_green clr_white"
                          : " ff_poppins fw_500 fs_md clr_black  no_box_modify mx-md-0 mx-2 c_pointer "
                      }
                    >
                      45
                    </p>{" "}
                    <p
                      onClick={() => {
                        setfirst(12);
                      }}
                      className={
                        first === 12
                          ? " ff_poppins fw_500 fs_md clr_black  no_box_modify mx-md-0 mx-2 c_pointer bg_green clr_white"
                          : " ff_poppins fw_500 fs_md clr_black  no_box_modify mx-md-0 mx-2 c_pointer "
                      }
                    >
                      46
                    </p>{" "}
                  </div>
                </div>
                <p className="mb-0  ff_poppins fw_400 fs_md clr_black">
                  View this product as:
                </p>
                <p className="clr_blue c_pointer  ff_poppins fw_400 fs_md">
                  Foot Locker NL
                </p>
              </div>
            </div>
          </Col>{" "}
          <Col xl={3} lg={4} md={6} className="mt-sm-5 mt-3">
            <div className="hover_box">
              <div className=" box_border_2">
                <div className="p-5">
                  <img className="w-100" src={footloker} alt="footloker" />
                </div>
              </div>
              <div className="px-3 py-3">
                {" "}
                <div className="">
                  <div className="d-flex justify-content-between  align-items-center ">
                    <div className="d-flex align-items-center mt-3">
                      <p className=" clr_darkgrey2 ff_poppins fs_sm fw_400">
                        Price:
                      </p>
                      <p className="clr_black ff_poppins fs_xl fw_600 ms-3">
                        €179,99
                      </p>
                    </div>
                    <button className="btn_modify_2 py-1 px-3 ff_poppins fw_400 fs_xsm clr_white">
                      Best Price
                    </button>
                  </div>
                </div>
                <div>
                  <p className=" clr_darkgrey2 ff_poppins fs_sm fw_400">
                    Size:
                  </p>
                  <div className="d-flex justify-content-md-between">
                    <p
                      onClick={() => {
                        setfirst(13);
                      }}
                      className={
                        first === 13
                          ? " ff_poppins fw_500 fs_md clr_black  no_box_modify mx-md-0 c_pointer bg_green clr_white"
                          : " ff_poppins fw_500 fs_md clr_black  no_box_modify mx-md-0  c_pointer "
                      }
                    >
                      41
                    </p>{" "}
                    <p
                      onClick={() => {
                        setfirst(14);
                      }}
                      className={
                        first === 14
                          ? " ff_poppins fw_500 fs_md clr_black  no_box_modify mx-md-0 mx-2 c_pointer bg_green clr_white"
                          : " ff_poppins fw_500 fs_md clr_black  no_box_modify mx-md-0 mx-2 c_pointer "
                      }
                    >
                      42
                    </p>{" "}
                    <p
                      onClick={() => {
                        setfirst(15);
                      }}
                      className={
                        first === 15
                          ? " ff_poppins fw_500 fs_md clr_black  no_box_modify mx-md-0 mx-2 c_pointer bg_green clr_white"
                          : " ff_poppins fw_500 fs_md clr_black  no_box_modify mx-md-0 mx-2 c_pointer "
                      }
                    >
                      43
                    </p>{" "}
                  </div>
                  <div className="d-flex justify-content-md-between">
                    <p
                      onClick={() => {
                        setfirst(16);
                      }}
                      className={
                        first === 16
                          ? " ff_poppins fw_500 fs_md clr_black  no_box_modify mx-md-0  c_pointer bg_green clr_white"
                          : " ff_poppins fw_500 fs_md clr_black  no_box_modify mx-md-0  c_pointer "
                      }
                    >
                      44
                    </p>{" "}
                    <p
                      onClick={() => {
                        setfirst(17);
                      }}
                      className={
                        first === 17
                          ? " ff_poppins fw_500 fs_md clr_black  no_box_modify mx-md-0 mx-2 c_pointer bg_green clr_white"
                          : " ff_poppins fw_500 fs_md clr_black  no_box_modify mx-md-0 mx-2 c_pointer "
                      }
                    >
                      45
                    </p>{" "}
                    <p
                      onClick={() => {
                        setfirst(18);
                      }}
                      className={
                        first === 18
                          ? " ff_poppins fw_500 fs_md clr_black  no_box_modify mx-md-0 mx-2 c_pointer bg_green clr_white"
                          : " ff_poppins fw_500 fs_md clr_black  no_box_modify mx-md-0 mx-2 c_pointer "
                      }
                    >
                      46
                    </p>{" "}
                  </div>
                </div>
                <p className="mb-0  ff_poppins fw_400 fs_md clr_black">
                  View this product as:
                </p>
                <p className="clr_blue c_pointer  ff_poppins fw_400 fs_md">
                  Foot Locker NL
                </p>
              </div>
            </div>
          </Col>{" "}
          <Col xl={3} lg={4} md={6} className="mt-sm-5 mt-3">
            <div className="hover_box">
              <div className=" box_border_2">
                <div className="p-5">
                  <img className="w-100" src={sidestep} alt="sidestep" />
                </div>
              </div>
              <div className="px-3 py-3">
                {" "}
                <div className="">
                  <div className="d-flex justify-content-between  align-items-center ">
                    <div className="d-flex align-items-center mt-3">
                      <p className=" clr_darkgrey2 ff_poppins fs_sm fw_400">
                        Price:
                      </p>
                      <p className="clr_black ff_poppins fs_xl fw_600 ms-3">
                        €179,99
                      </p>
                    </div>
                    <button className="btn_modify_2 py-1 px-3 ff_poppins fw_400 fs_xsm clr_white">
                      Best Price
                    </button>
                  </div>
                </div>
                <div>
                  <p className=" clr_darkgrey2 ff_poppins fs_sm fw_400">
                    Size:
                  </p>
                  <div className="d-flex justify-content-md-between">
                    <p
                      onClick={() => {
                        setfirst(19);
                      }}
                      className={
                        first === 19
                          ? " ff_poppins fw_500 fs_md clr_black  no_box_modify mx-md-0 c_pointer bg_green clr_white"
                          : " ff_poppins fw_500 fs_md clr_black  no_box_modify mx-md-0  c_pointer "
                      }
                    >
                      41
                    </p>{" "}
                    <p
                      onClick={() => {
                        setfirst(20);
                      }}
                      className={
                        first === 20
                          ? " ff_poppins fw_500 fs_md clr_black  no_box_modify mx-md-0 mx-2 c_pointer bg_green clr_white"
                          : " ff_poppins fw_500 fs_md clr_black  no_box_modify mx-md-0 mx-2 c_pointer "
                      }
                    >
                      42
                    </p>{" "}
                    <p
                      onClick={() => {
                        setfirst(21);
                      }}
                      className={
                        first === 21
                          ? " ff_poppins fw_500 fs_md clr_black  no_box_modify mx-md-0 mx-2 c_pointer bg_green clr_white"
                          : " ff_poppins fw_500 fs_md clr_black  no_box_modify mx-md-0 mx-2 c_pointer "
                      }
                    >
                      43
                    </p>{" "}
                  </div>
                  <div className="d-flex justify-content-md-between">
                    <p
                      onClick={() => {
                        setfirst(22);
                      }}
                      className={
                        first === 22
                          ? " ff_poppins fw_500 fs_md clr_black  no_box_modify mx-md-0  c_pointer bg_green clr_white"
                          : " ff_poppins fw_500 fs_md clr_black  no_box_modify mx-md-0  c_pointer "
                      }
                    >
                      44
                    </p>{" "}
                    <p
                      onClick={() => {
                        setfirst(23);
                      }}
                      className={
                        first === 23
                          ? " ff_poppins fw_500 fs_md clr_black  no_box_modify mx-md-0 mx-2 c_pointer bg_green clr_white"
                          : " ff_poppins fw_500 fs_md clr_black  no_box_modify mx-md-0 mx-2 c_pointer "
                      }
                    >
                      45
                    </p>{" "}
                    <p
                      onClick={() => {
                        setfirst(24);
                      }}
                      className={
                        first === 24
                          ? " ff_poppins fw_500 fs_md clr_black  no_box_modify mx-md-0 mx-2 c_pointer bg_green clr_white"
                          : " ff_poppins fw_500 fs_md clr_black  no_box_modify mx-md-0 mx-2 c_pointer "
                      }
                    >
                      46
                    </p>{" "}
                  </div>
                </div>
                <p className="mb-0  ff_poppins fw_400 fs_md clr_black">
                  View this product as:
                </p>
                <p className="clr_blue c_pointer  ff_poppins fw_400 fs_md">
                  Foot Locker NL
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NikeAir;
