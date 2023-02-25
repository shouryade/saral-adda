import React from "react";
import { Container } from "react-bootstrap";
import Countdown from "react-countdown";

const Timer = (props) => {
  return (
    <Container className="timer-container">
      <div className="timecard">
        PB
        <p>State</p>
      </div>
      <div className="timecard">
        H67C
        <p>11×11 KM Area</p>
      </div>
      <div className="timecard">
        JXF9
        <p>100×100 M Area</p>
      </div>
      <div className="timecard">
        X25
        <p>Exact Location</p>
      </div>
    </Container>
  );
};

const renderer = ({ days, hours, minutes, seconds }) => {
  return (
    <Timer days={days} hours={hours} minutes={minutes} seconds={seconds} />
  );
};

const CountdownContainer = () => {
  return <Countdown date={1665837000000} renderer={renderer} />;
};

export default CountdownContainer;
