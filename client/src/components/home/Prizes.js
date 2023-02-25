import React from "react";
import { Container, Row } from "react-bootstrap";

function Prizes() {
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
            }}
          >
            <span className="purple"> PRIZES FOR ASTELLAR </span>
          </h1>
          <Row>
            <div className="title-sponsor">
              <h1
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  letterSpacing: "0.1rem",
                  paddingBottom: "0.7rem",
                }}
              >
                <span className="purple"> WINNER </span>
              </h1>
              <div
                className="title-sponsor-tier-item"
                tyle={{ justifyItems: "left" }}
              >
                <div className="tBox" s>
                  <span style={{ color: "white" }}>
                    <ul>
                      <li>₹ 3000/- cash prize </li>
                      <li>₹ 3000/- Amazon voucher </li>
                      <li>
                        Internship Opportunities from Internship &amp; Training
                      </li>
                      <li>
                        Internship &amp; Training merchandise (Mugs and Goodies){" "}
                      </li>
                      <li>Foxmula T-Shirt</li>
                      <li>Free Microsoft course Worth ₹ 9500 </li>
                      <li>
                        Discount Coupons worth $25 from the Art of Problem
                        Solving
                      </li>
                      <li>Lifetime upgradation on Taskade </li>
                      <li>One month free website hosting on Cybrancee </li>
                      <li>Extra 10% discount on Coding Ninjas paid courses</li>
                    </ul>{" "}
                  </span>
                </div>
              </div>
              <div className="tier-sponsors" style={{ gridColumnGap: "3rem" }}>
                <div>
                  <h1
                    style={{
                      paddingTop: "4rem",
                      fontSize: "1.5rem",
                      fontWeight: "600",
                      letterSpacing: "0.1rem",
                      paddingBottom: "0.7rem",
                    }}
                  >
                    <span className="purple"> FIRST RUNNER UP </span>
                  </h1>
                  <div className="sponsor-tier-item">
                    <span style={{ textAlign: "center" }}>
                      <ul>
                        <li>₹ 2000/- cash prize </li>
                        <li>₹ 2000/- Amazon voucher </li>
                        <li>
                          Internship Opportunities from Internship &amp; Training
                        </li>
                        <li>
                        Internship &amp; Training merchandise (Mugs and Goodies){" "}
                        </li>
                        <li>Foxmula T-Shirt</li>
                        <li>
                          Discount Coupons worth $25 from the Art of Problem
                          Solving
                        </li>
                        <li>Lifetime upgradation on Taskade </li>
                        <li>One month free website hosting on Cybrancee </li>
                        <li>
                          Extra 10% discount on Coding Ninjas paid courses
                        </li>
                      </ul>{" "}
                    </span>
                  </div>
                </div>
                <div>
                  <h1
                    style={{
                      paddingTop: "4rem",
                      paddingLeft: "1rem",
                      fontSize: "1.5rem",
                      fontWeight: "600",
                      letterSpacing: "0.1rem",
                      paddingBottom: "0.7rem",
                    }}
                  >
                    <span className="purple"> SECOND RUNNER UP </span>
                  </h1>
                  <div className="sponsor-tier-item">
                    <span>
                      <ul>
                        <li>₹ 1000/- cash prize </li>
                        <li>₹ 1000/- Amazon voucher </li>
                        <li>
                          Internship Opportunities from Internship &amp; Training
                        </li>
                        <li>
                          Internship &amp; Training merchandise (Mugs and Goodies){" "}
                        </li>
                        <li>Foxmula T-Shirt</li>

                        <li>Lifetime upgradation on Taskade </li>
                        <li>One month free website hosting on Cybrancee </li>
                        <li>
                          Extra 10% discount on Coding Ninjas paid courses
                        </li>
                      </ul>{" "}
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <h1
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "600",
                    letterSpacing: "0.1rem",
                    paddingBottom: "0.7rem",
                  }}
                >
                  <span className="purple" style={{ marginBottom: "11rem" }}>
                    {" "}
                    PARTICIPANTS{" "}
                  </span>
                </h1>
                <div
                  className="gallery"
                  style={{
                    paddingTop: "1rem",
                    justifyContent: "left",
                  }}
                >
                  <span style={{ textAlign: "left" }}>
                    <ul>
                      <li>Free Coding Ninjas scholarship test</li>
                      <li>
                        Free mock interviews for government and non-goverment
                        jobs
                      </li>
                      <li>5 year free upgradation on Taskade</li>
                      <li>
                        90-days extended trial promocode from Balsamiq Cloud
                      </li>
                      <li>
                        Free certification courses from Internship &amp; Training
                      </li>

                      <li>One month free website hosting on Cybrancee</li>
                    </ul>{" "}
                  </span>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </Container>
    </>
  );
}
export default Prizes;
