import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactHandler from "./ContactHandler";
import { FaGithub, FaDiscord, FaInstagram } from "react-icons/fa";

const contactDetails = [
  {
    name: "Shourya De",
    post: "Technical Head",
    email: "sde_be21@thapar.edu",
    number: "+91 9084022584",
    insta: "shourya.yay",
    img: require("../../Assets/organizers/shourya.jpg"),
  },
  {
    name: "Rochak Ranjan",
    post: "General Secretary",
    email: "rranjan_be21@thapar.edu",
    number: "+91 9910709476",
    insta: "tempestrochak",
    img: require("../../Assets/organizers/rauchak.jpg"),
  },
  {
    name: "Srishti Jethi",
    post: "Marketing and Management Head",
    email: "sjethi_be21@thapar.edu",
    number: "+91 995862565",
    insta: "_srishti_0210",
    img: require("../../Assets/organizers/srishti.jpg"),
  },
];

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
          <span className="purple"> CONTACT</span>
        </h1>
        <Row>
          <p
            style={{
              color: "white",
              fontSize: "1.2rem",
              paddingBottom: "1.5rem",
            }}
          >
            <b className="purple">Astellar</b> is being organized by{" "}
            <b className="purple">
              Microsoft Learn Student Chapter, Derabassi.{" "}
            </b>
            <br />
            <br />
            The fastest way to reach us is by contacting any of the following
            admins on their <b className="purple">Instagram DMs</b>. You can
            also{" "}
            <a
              href="https://www.instagram.com/mlsc_db/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#1B4279",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              follow us on Instagram
            </a>
          </p>
          <div className="contact-container">
            {contactDetails.map((data, idx) => (
              <ContactHandler data={data} key={idx} />
            ))}
          </div>
        </Row>
        <Row>
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
        </Row>
      </Container>
    </Container>
  );
};

export default Contact;
