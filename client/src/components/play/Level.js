import React from "react";
import { useNavigate } from "react-router-dom";
import { decodeToken } from "react-jwt";
import axios from "axios";
import { Button, Container, Row } from "react-bootstrap";
import "../auth/login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Level = () => {
  const navigate = useNavigate();

  const [message, setMessage] = React.useState("");

  //for the input Box
  const handleChange = (event) => {
    const result = event.target.value.replace(/[^a-z0-9]/gi, "");
    setMessage(result);
  };

  //getting the questions
  const [data, setData] = React.useState({});
  const populateQues = React.useCallback(async (quesNum) => {
    const res = await axios.get("http://localhost:3001/api/getCurrentLevel", {
      headers: {
        "astellar-headers": localStorage.getItem("jwt"),
        "question-headers": quesNum,
      },
    });
    if (res.status > 400) {
      return {
        success: false,
        data: null,
      };
    }
    return {
      success: true,
      data: {
        _id: res.data["_id"],
        ques: res.data["question"],
        points: res.data["points"],
      },
    };
  }, []);

  React.useEffect(() => {
    async function getData() {
      const token = localStorage.getItem("jwt");
      if (token) {
        const team = decodeToken(token);
        const quesNum = localStorage.getItem("qno");
        console.log(quesNum);
        if (!team) {
          localStorage.removeItem("jwt");
          navigate("/login");
        } else {
          const res = await populateQues(quesNum);
          setData(res.data);
        }
      } else {
        navigate("/login");
      }
    }

    getData();
  }, [navigate, populateQues]);

  //submit functionality

  const handleSubmit = (e) => {
    e.preventDefault();

    const headers = {
      "astellar-headers": localStorage.getItem("jwt"),
    };
    axios
      .post(
        "http://localhost:3001/api/answer",
        { answer: message, question: data._id },

        { headers }
      )
      .then((res) => {
        toast.success(res.data, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        console.log(data._id);
        localStorage.setItem("pl", data._id);
        navigate("/play");
      })
      .catch((err) => {
        var msg = "";
        if (typeof err.response == "undefined") {
          msg = "Server error, please try again!";
        } else {
          msg = err.response.data.errors[0].msg;
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

  return (
    <>
      <Container fluid className="sponsor-section" id="about">
        <Container>
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: "600",
              letterSpacing: "0.5rem",
              paddingBottom: "2rem",
              paddingTop: "7rem",
            }}
          >
            <span className="purple"> LEVEL {data._id} </span>
          </h1>
          <Row>
            <div className="form-gallery" style={{ padding: "0 3rem 0 3rem" }}>
              <form className="form-content" onSubmit={handleSubmit}>
                <div className="form-Item">
                  <div className="styling">
                    <p
                      style={{
                        paddingBottom: "1rem",
                        width: "100%",
                        textAlign: "center",
                      }}
                    >
                      {data.ques}
                    </p>
                  </div>
                  <span className="sw">
                    Keep at it dreamer, you'll arrive soon at the answer!
                    ~Don't~ Panic, To Err is to Human, to Glitch, machine.
                  </span>
                  <input
                    id="message"
                    name="message"
                    type="text"
                    value={message}
                    onChange={handleChange}
                    style={{
                      marginTop: "3rem",
                      fontSize: "1.1rem",
                      background: "none",
                      boxShadow: "0 0 1rem 0 rgba(0, 0, 0, .25)",
                      padding: "1.4rem 0 1.4rem 1rem",
                      borderRadius: "10px",
                      color: "white",
                    }}
                  />
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
                      display: "block",
                      fontSize: "1.5rem",
                      height: "auto",
                      width: "auto",
                      background: "none",
                      marginTop: "3rem",
                      marginBottom: "3rem",
                      justifyContent: "center",
                      align: "center",
                    }}
                  >
                    Submit Answer!
                  </Button>{" "}
                </div>
              </form>
            </div>
          </Row>
        </Container>
      </Container>

      <ToastContainer />
    </>
  );
};

export default Level;
