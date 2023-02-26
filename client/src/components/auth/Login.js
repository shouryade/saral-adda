import React, { useState, useEffect } from "react";
import { Button, Container, Row, Modal } from "react-bootstrap";
import "./login.css";
import FormInput from "./FormInput";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Map, Marker, ZoomControl } from "pigeon-maps";

export default function Login() {
  const [mapValue, setMapValue] = useState(false);
  const [mapCoords, setMapCoords] = useState({
    lat: 0,
    long: 0,
  });
  const [lgShow, setLgShow] = useState(false);
  const [values, setValues] = useState({
    teamname: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "bhumicode",
      type: "text",
      required: true,
      autocomplete: "off",
      errorMessage: "Enter your Bhumi Code. Don't leave it empty!",
      placeholder: "PB $ H67C JXF9 $ X25",
      label: "Enter Bhumi Code",
    },
  ];

  useEffect(() => {
    if (lgShow) {
      const fetchData = async () => {
        try {
          const data = new FormData(document.getElementById("my-form"));
          const payload = JSON.stringify(Object.fromEntries(data.entries()));
          const myObj = JSON.parse(payload);

          const result = await axios.post(
            "http://localhost:1339/api/generate/location",
            { bhumicode: myObj.bhumicode }
          );

          var res = result.data.res;
          console.log(res);
          setMapValue(true);
          setMapCoords({
            lat: Number(res[0]),
            long: Number(res[1]),
          });
        } catch (err) {
          var msg = "";
          if (typeof err.response == "undefined") {
            msg = "Server error, please try again!";
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
        }
      };
      fetchData();
    }
  }, [lgShow]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLgShow(true);
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
            <span className="purple"> Bhumi Code to Location </span>
          </h1>
          <Row>
            <div className="form-gallery">
              <form
                id="my-form"
                onSubmit={handleSubmit}
                className="form-content"
              >
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
                  Show me my Location!
                </Button>{" "}
              </form>
              <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-modal-sizes-title-lg">
                    Bhumi Code to Location
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Map
                    height={300}
                    defaultCenter={[mapCoords.lat, mapCoords.long]}
                    defaultZoom={13}
                  >
                    <Marker
                      width={50}
                      anchor={[mapCoords.lat, mapCoords.long]}
                    />
                    <ZoomControl />
                  </Map>
                </Modal.Body>
              </Modal>
            </div>
          </Row>
        </Container>
      </Container>
      <ToastContainer />
    </>
  );
}
