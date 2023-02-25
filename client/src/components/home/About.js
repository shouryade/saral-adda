import React from "react";
import { Container, Row } from "react-bootstrap";

function About() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "600",
            letterSpacing: "0.5rem",
            paddingBottom: "3rem",
            textAlign: "center"
          }}
        >
          <span className="purple"> ABOUT </span>
        </h1>
        <Row>
          <p style={{
            fontSize: "1.5rem",
            width: "100%",
            lineHeight: "2.5rem",
            color: "white"
          }}>
            Our aim is to provide intelligent stock managment services in this fast moving world by tracking inventory across the supply chain, companies can monitor trends and identify areas for improvement. Tracking inventory also enables companies to make smarter decisions, such as keeping additional spare parts in stock to address common equipment breakdowns.
          </p>
        </Row>
      </Container>
    </Container>
  );
}
export default About;
