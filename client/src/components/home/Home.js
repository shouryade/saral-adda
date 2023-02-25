import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";

import Button from "react-bootstrap/Button";

import Prizes from "./Prizes";
import Pricing from "./Pricing";
import Contact from "./Contact";

function Home() {
  return (
    <>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="heading">
              <br />

              <p className="home-about-body">
                <br />
                <p className="down">
                  Saral Adda
                  <b className="purple"> - get your unique Bhoomi Code now </b>
                </p>
                <br />
                Location sharing with digital address code. Create your
                twelve-character address code now from{" "}
                <b className="purple"> 15 trillion combinations.</b>
              </p>
              <div
                className="sponsorUS"
                style={{
                  justifyContent: "left",
                  display: "flex",
                  justifySelf: "center",
                }}
              >
                <Button
                  variant="outline-light"
                  href="/register"
                  target="_blank"
                  type="submit"
                  style={{
                    fontSize: "1.5rem",
                    width: "90%",
                    height: "auto",
                    background: "none",
                  }}
                >
                  Generate Bhoomi Code
                </Button>{" "}
              </div>
            </Col>
            <Col
              md={5}
              style={{
                paddingBottom: 20,
                paddingTop: 50,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "400px" }}
              />
            </Col>
          </Row>
        </Container>

        <Prizes />
      </Container>
      <Pricing />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Contact />
      {/* <Timeline /> */}

      {/* <Sponsors /> */}
    </>
  );
}

export default Home;
