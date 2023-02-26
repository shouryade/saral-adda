import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";

import { FaGithub, FaDiscord, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "600",
            letterSpacing: "0.5rem",
            paddingBottom: "3rem",
          }}
        >
          <span className="purple">IMPACT ON INDUSTRY</span>
        </h1>
        <Row>
          <div className="contact-container">
            <Carousel>
              <Carousel.Item interval={1000}>
                <div className="canvas-d">
                  <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1599408444232-8947844d94e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1070&q=80"
                    width={69}
                    height={500}
                    alt="First slide"
                  />
                </div>
                <Carousel.Caption>
                  <div className="stake">
                    {" "}
                    <h3>Consumers</h3>
                    <p>
                      Share your BhoomiCode with your friends and social media
                      if they want an easy way to see and get directions to your
                      address.
                    </p>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={1500}>
                <div className="canvas-d">
                  <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    width={69}
                    height={500}
                    alt="Second slide"
                  />
                </div>
                <Carousel.Caption>
                  <div className="stake">
                    <h3>Businesses</h3>
                    <p>
                      Any last mile delivery, logistics & supply chain
                      challenges can be solved with BhoomiCode , e-commerce will
                      get heavily impacted as it will make the checkout system
                      much more fast and robust. Moreover, BhoomiCode will help
                      make drone delivery system a reality in India, a universal
                      address system will help deliver supplies even in the
                      remote areas. Taxi aggregators will be heavily impacted as
                      it will help in last mile connectivity.
                    </p>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div className="canvas-d">
                  <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1532375810709-75b1da00537c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
                    width={69}
                    height={500}
                    alt="Third slide"
                  />
                </div>
                <Carousel.Caption>
                  <div className="stake">
                    <h3>Government</h3>
                    <p>
                      BhoomiCode can be used for rapid emergency response down
                      to the doorstep, which will eventually help our defence
                      forces too. Taxation on property and water can be done
                      more robustly using the code and further it will
                      revolutionize the census process. It will further bring a
                      revolution to postal services making it easier and robust.
                    </p>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </Row>
        {/* <Row>
          <Col md={12} className="home-about-social">
            <h1
              style={{
                fontSize: "2.5rem",
                fontWeight: "600",
                letterSpacing: "0.5rem",
                paddingBottom: "1rem",
              }}
            >
              CONNECT WITH US
            </h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://discord.gg/aUK3SrdeXP"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaDiscord />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/MLSC-DB"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/mlsc_db/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row> */}
      </Container>
    </Container>
  );
};

export default Contact;
