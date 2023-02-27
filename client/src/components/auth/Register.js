import React, { useState, useEffect } from "react";
import { Button, Container, Row, Modal } from "react-bootstrap";
import "./login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormInput from "./FormInput";

import axios from "axios";
export default function Register() {
  const [values, setValues] = useState({
    lat: "",
    long: "",
    floor: "",
  });

  const [locationEnabled, setLocationEnabled] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const inputs = [
    {
      id: 1,
      name: "lat",
      type: "text",
      required: true,
      autocomplete: "off",
      errorMessage: "Please enter your longitude",
      placeholder: "30.562477",
      label: "Enter your latitude",
    },
    {
      id: 2,
      name: "long",
      type: "text",
      required: true,
      autocomplete: "off",
      errorMessage: "Please enter your longitude",
      placeholder: "76.896965",
      label: "Enter your longitude",
    },
    {
      id: 3,
      name: "floor",
      type: "text",
      required: false,
      value: "0",
      autocomplete: "off",
      placeholder: "0",
      label: "Enter your floor",
    },
  ];

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          if (result.state === "granted") {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                setValues({
                  ...values,
                  lat: position.coords.latitude.toFixed(6),
                  long: position.coords.longitude.toFixed(6),
                });
                setLocationEnabled(true);
              },
              (error) => {
                console.log(error.message);
              }
            );
          } else if (result.state === "prompt") {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                setValues({
                  ...values,
                  lat: position.coords.latitude.toFixed(6),
                  long: position.coords.longitude.toFixed(6),
                });
                setLocationEnabled(true);
              },
              (error) => {
                console.log(error.message);
              }
            );
          } else {
            toast.error(
              "Geolocation permission is required to use this feature",
              {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              }
            );
          }
        });
    } else {
      toast.error("Geolocation is not supported by this browser", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLgShow(true);
    const data = new FormData(e.target);
    const payload = JSON.stringify(Object.fromEntries(data.entries()));
    const myObj = JSON.parse(payload);
    axios
      .post("http://localhost:1339/api/generate/bhumicode", {
        lat: myObj.lat,
        long: myObj.long,
        floor: myObj.floor,
      })
      .then((result) => {
        var res = result.data.res;
        navigator.clipboard.writeText(res);
        toast.success(res + " copied to clipboard", {
          position: "top-center",
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => {
        var msg = "";
        if (typeof err.response == "undefined") {
          msg = "Server error, please try later!";
        } else {
          msg = err.response.data.detail;
        }
        toast.error(msg, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

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
              paddingTop: "7rem",
            }}
          >
            <span className="purple"> GENERATE YOUR BHOOMI CODE </span>
          </h1>
          <Row>
            <div className="form-gallery">
              <div
                className="g-recaptcha"
                data-sitekey="6Ld2Cf0fAAAAAGUlXmCKZBT8j6cG0Dk5kb7qzriZ"
              ></div>
              <form onSubmit={handleSubmit} className="form-content">
                {inputs.map((input) => (
                  <FormInput
                    key={input.id}
                    {...input}
                    value={values[input.name]}
                    onChange={onChange}
                  />
                ))}
                <style type="text/css">
                  {`
    .btn-outline-light:hover{
      color: white;}
      .btn-outline-light:active{
        color:green;
      }    
    `}
                </style>
                <Button
                  variant="outline-light"
                  type="submit"
                  style={{
                    display: "flex",
                    fontSize: "1.5rem",
                    width: "auto",
                    height: "auto",
                    background: "none",
                    marginTop: "3rem",
                    marginBottom: "3rem",
                    justifyContent: "center",
                    align: "center",
                  }}
                >
                  Generate !
                </Button>{" "}
              </form>
            </div>
          </Row>
        </Container>
      </Container>
      <ToastContainer />
    </>
  );
}
