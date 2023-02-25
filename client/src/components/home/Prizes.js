import React from "react";
import { Container, Row } from "react-bootstrap";
import Countdown from "../Countdown";
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
            <span className="purple"> WHAT IS A BHOOMI CODE? </span>
          </h1>
          <Countdown />
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
                <div
                  className="gallery"
                  style={{
                    paddingTop: "3rem",
                    justifyContent: "left",
                  }}
                >
                  <span style={{ textAlign: "left" }}>
                    <p>
                      India has a system for addressing houses, buildings,
                      places, government offices, businesses, etc. However, only
                      a few areas in the country have an official address. This
                      situation is compounded by the numerous dialects,
                      languages, cultures, and other differences across India,
                      leading to varying interpretations of addresses by
                      different individuals. To address this issue, there is a
                      need for a straightforward, consistent, and accurate
                      digital address system that can be used throughout India.
                    </p>
                    <p>
                      A <b className="purple">Bhoomi Code </b>provides you an
                      encoded string of letters and digits from your geographic
                      coordinates. The Saral Adda system provides you a
                      Universal, Precise and Scalable pan-India digital address
                      system.
                    </p>
                  </span>
                </div>
              </h1>
            </div>
          </Row>
        </Container>
      </Container>
    </>
  );
}
export default Prizes;
