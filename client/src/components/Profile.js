import React from "react";
import axios from "axios";
import { decodeToken } from "react-jwt";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { Row, Container } from "react-bootstrap";

const Profile = () => {
  const navigate = useNavigate();
  const [data, setData] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const populateProfile = useCallback(async () => {
    const res = await axios.get("/api/user/getDetails", {
      headers: {
        "astellar-headers": localStorage.getItem("jwt"),
      },
    });
    // console.log(res);
    if (res.status > 400) {
      return {
        success: false,
        data: null,
      };
    }
    return {
      success: true,
      data: {
        u1: res.data["u1"].toUpperCase(),
        atLevel: res.data["atlevel"],
        teamName: res.data["teamname"].toUpperCase(),
      },
    };
  }, []);

  React.useEffect(() => {
    async function getData() {
      const token = localStorage.getItem("jwt");
      // console.log(token);
      if (token) {
        const team = decodeToken(token);
        if (!team) {
          localStorage.removeItem("jwt");
          navigate("/login");
        } else {
          const res = await populateProfile();
          setData(res.data);
        }
      } else {
        navigate("/login");
      }
      setLoading(false);
    }

    setLoading(true);
    getData();
  }, [navigate, populateProfile]);

  if (loading && !data) return <h2>loading</h2>;
  // return <h1>{JSON.stringify(data)}</h1>;
  return (
    <Container fluid className="sponsor-section" id="about">
      <Container>
        <h1
          style={{
            paddingTop: "7rem",
            fontSize: "2.5rem",
            fontWeight: "600",
            letterSpacing: "0.5rem",
            paddingBottom: "3rem",
          }}
        >
          <span className="purple"> TEAM {data.teamName} </span>
        </h1>
        <Row>
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
                PROFILE{" "}
              </span>
            </h1>
            <div
              className="gallery"
              style={{
                paddingTop: "1rem",
                justifyContent: "left",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span style={{ padding: "2rem 0 2rem 0" }}>
                <span className="purple" style={{ fontSize: "1.1rem" }}>
                  {" "}
                  LEADER NAME :{" "}
                </span>
                <span
                  style={{
                    fontSize: "1.1rem",
                    color: "white",
                    fontWeight: "600",
                    paddingLeft: "2rem",
                  }}
                >
                  {data.u1}
                </span>
              </span>
              <span style={{ padding: "2rem 0 2rem 0" }}>
                <span className="purple" style={{ fontSize: "1.1rem" }}>
                  {" "}
                  CURRENT LEVEL :{" "}
                </span>
                <span
                  style={{
                    fontSize: "1.1rem",
                    color: "white",
                    fontWeight: "600",
                    paddingLeft: "2rem",
                  }}
                >
                  {data.atLevel}
                </span>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </Container>
  );
};

export default Profile;
