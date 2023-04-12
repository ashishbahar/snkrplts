import React, { useState } from "react";
import { Container } from "react-bootstrap";
import pagelogo from "../assets/images/svg/pagelogo.svg";
import cross from "../assets/images/svg/cross.svg";

const MyNav = () => {
  const [first, setfirst] = useState(true);
  if (first) {
    document.body.classList.remove("overflow-hidden");
  } else {
    document.body.classList.add("overflow-hidden");
  }
  return (
    <nav className="nav_bg">
      <Container>
        <div className="d-flex justify-content-lg-end justify-content-between align-items-center ">
          <ul className="d-lg-none m-0 p-0  py-1">
            <li>
              <a href="#">
                <img className="max_width58" src={pagelogo} alt="pagelogo" />
              </a>
            </li>
          </ul>
          <ul
            className={
              first
                ? "d-flex mobile_view  align-items-center hide p-0  m-0 py-lg-3"
                : " d-flex mobile_view  align-items-center show m-0 p-0 py-lg-3"
            }
          >
            <li>
              <a
                onClick={() => {
                  setfirst(true);
                }}
                className=" ff_roboto fw_400 fs_lg clr_black nav_hover color_white  mx-2"
                href="#"
              >
                HOME
              </a>
            </li>{" "}
            <li>
              <a
                onClick={() => {
                  setfirst(true);
                }}
                className=" ff_roboto fw_400 fs_lg clr_black nav_hover color_white  mx-2"
                href="#"
              >
                SNEAKERS KOPEN
              </a>
            </li>{" "}
            <li>
              <a
                onClick={() => {
                  setfirst(true);
                }}
                className=" ff_roboto fw_400 fs_lg clr_black nav_hover color_white  mx-2"
                href="#"
              >
                INTERVIEWS
              </a>
            </li>{" "}
            <li>
              <a
                onClick={() => {
                  setfirst(true);
                }}
                className=" ff_roboto fw_400 fs_lg clr_black nav_hover color_white  mx-2"
                href="#"
              >
                SALE
              </a>
            </li>{" "}
            <li>
              <a
                onClick={() => {
                  setfirst(true);
                }}
                className=" ff_roboto fw_400 fs_lg clr_black nav_hover color_white  mx-2"
                href="#"
              >
                SNEAKER VAN DE DAG
              </a>
            </li>{" "}
            <li>
              <a
                onClick={() => {
                  setfirst(true);
                }}
                className=" ff_roboto fw_400 fs_lg clr_black nav_hover color_white  mx-2"
                href="#"
              >
                SNEAKER FORUM
              </a>
            </li>{" "}
            <li>
              <a
                onClick={() => {
                  setfirst(true);
                }}
                className=" ff_roboto fw_400 fs_lg clr_black nav_hover color_white  ms-2"
                href="#"
              >
                BLOG
              </a>
            </li>
            <img
              className=" position-absolute cross_position d-lg-none"
              onClick={() => {
                setfirst(true);
              }}
              src={cross}
              alt="cross"
            />
          </ul>
          <div
            className=" mobile_icon d-lg-none"
            onClick={() => {
              setfirst(false);
            }}
          >
            <div className="icon_line"></div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default MyNav;
