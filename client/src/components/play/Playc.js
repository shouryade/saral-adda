import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Countdown from "../Countdown";

const Playc = (props) => {
  return (
    <>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={12} className="heading">
              <h1
                style={{
                  fontSize: "5rem",
                  fontWeight: "600",
                  letterSpacing: "0.1rem",
                  textAlign:"center",
                }}
              >
                Astellar
              </h1>
              </Col>
              <h1 style={{ fontSize: "3rem", fontWeight: "600", textAlign:"center" }}> starts in
                
              </h1>
            
          </Row>
          <Countdown />
        </Container>
      </Container>
    </>
  );
};

export default Playc;
