import React from "react";
import { Container, Row } from "react-bootstrap";

function Pricing() {
  return (
    <>
      <Container fluid className="sponsor-section" id="about">
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
            <span className="purple"> PRICING </span>
          </h1>
          <div className="card-deck" style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "2rem",
          }}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Hobby</h5>
                <h2 className="card-text">$0</h2>
                <p className="card-text">per month</p>
                <hr/>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, dignissimos quod aliquid tenetur aspernatur tempora assumenda quisquam cupiditate laboriosam molestiae?</p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Professional</h5>
                <h2 className="card-text">$49.99</h2>
                <p className="card-text">per month</p>
                <hr/>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, dignissimos quod aliquid tenetur aspernatur tempora assumenda quisquam cupiditate laboriosam molestiae?</p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Buisness</h5>
                <h2 className="card-text">$99.99</h2>
                <p className="card-text">per month</p>
                <hr/>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, dignissimos quod aliquid tenetur aspernatur tempora assumenda quisquam cupiditate laboriosam molestiae?</p>
              </div>
            </div>
          </div>
        </Container>
      </Container>
    </>
  );
}
export default Pricing;
