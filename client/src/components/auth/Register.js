import React, { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import "./login.css";
import FormInput from "./FormInput";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  const [values, setValues] = useState({
    username: "",
    companyname: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "lat",
      type: "text",
      required: true,
      autocomplete: "off",
      // pattern: "^[A-Za-z0-9]{3,50}$",
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
      // pattern: "^[A-Za-z0-9]{3,50}$",
      errorMessage: "Please enter your longitude",
      placeholder: "76.896965",
      label: "Enter your longitude",
    },
    {
      id: 3,
      name: "floor",
      type: "text",
      required: true,
      autocomplete: "off",
      // pattern: "^[A-Za-z0-9]{3,50}$",
      errorMessage: "Please enter your floor",
      placeholder: "69",
      label: "Enter your floor",
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const payload = JSON.stringify(Object.fromEntries(data.entries()));
    const myObj = JSON.parse(payload);
    console.log(myObj);
    axios
      .post("http://localhost:1339/api/user/signup/", {
        lat: myObj.lat,
        long: myObj.long,
        floor: myObj.floor,
      })
      .then((result) => {
        var res = result.data.res;
        toast.success(res, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        // useNavigate('/dashboard');
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
            <span className="purple"> GENERATE YOUR BHUMI CODE </span>
          </h1>
          <Row>
            <div className="form-gallery">
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
                <div
                  className="g-recaptcha"
                  data-sitekey="6Ld2Cf0fAAAAAGUlXmCKZBT8j6cG0Dk5kb7qzriZ"
                ></div>
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
