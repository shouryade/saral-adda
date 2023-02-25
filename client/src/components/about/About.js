import React from "react";
import "./about.css";
import { Container, Row, Col } from "react-bootstrap";
import FAQ from "./FAQ";

function About() {
  return (
    <>
      <Container fluid className="home-section" id="home">
        <Container className="about-content">
          <Row>
            <Col md={12} className="heading" style={{ textAlign: "center" }}>
              <h1
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "600",
                  letterSpacing: "0.5rem",
                  paddingBottom: "1rem",
                }}
              >
                ABOUT US
              </h1>
              <p
                className="home-about-body"
                style={{
                  textAlign: "center",
                  fontSize: "1.2rem",
                }}
              >
                Our Story at <b class="purple">MLSC DB </b> is forged with
                passion and grit. We’re a welcoming community of geeks who
                strongly believe in helping others learn through <b class="purple">exciting
                workshops and hands on projects</b>. We want our members to be able
                to benefit from our collective expertise, whether they are a
                stack overflow chad or a python novice. We conduct monthly
                meetups, hands-on workshops and{" "}
                <b class="purple">&lt;cool&gt;</b> events. If you have any
                questions, our friendly and knowledgeable team would be more
                than happy to help. 
                
                <br />
                <br />In the spirit of science and in the name of
                Alan Turing, we welcome you! May you experience the dopamine
                rush of snorting code!
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
      <FAQ />
    </>
  );
}

export default About;
