import React from "react";
import { Container } from "react-bootstrap";
import pagelogo from "../assets/images/svg/pagelogo.svg";
import addimg from "../assets/images/png/addphoto.png";

const LogoSection = () => {
  return (
    <section className="bg_white ">
      <Container>
        <div className="d-flex justify-content-end align-items-center py-2 justify-content-lg-between">
          <ul className="m-0 p-0">
            <li>
              <a href="#">
                <img
                  className="d-none d-lg-block"
                  src={pagelogo}
                  alt="pagelogo"
                />{" "}
              </a>
            </li>
          </ul>
          <div>
            <img className=" max_width_680" src={addimg} alt="addimg" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LogoSection;
