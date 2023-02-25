import React from "react";
import { Container } from "react-bootstrap";
import Countdown from "react-countdown";

const Timer = (props) => {
  return (
    <Container className="timer-container">
      <div className="timecard">
        {props.days}
        <p>Days</p>
      </div>
      <div className="timecard">
        {props.hours}
        <p>Hours</p>
      </div>
      <div className="timecard">
        {props.minutes}
        <p>Minutes</p>
      </div>
      <div className="timecard">
        {props.seconds}
        <p>Seconds</p>
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
