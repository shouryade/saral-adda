import React from "react";
import axios from "axios";
import { decodeToken } from "react-jwt";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { Row, Container } from "react-bootstrap";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const navigate = useNavigate();
  // const [data, setData] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  // const populateProfile = useCallback(async () => {
  //   const res = await axios.get("http://localhost:1339/api/user/getDetails", {
  //     headers: {
  //       "astellar-headers": localStorage.getItem("jwt"),
  //     },
  //   });
  //   // console.log(res);
  //   if (res.status > 400) {
  //     return {
  //       success: false,
  //       data: null,
  //     };
  //   }
  //   return {
  //     success: true,
  //     data: {
  //       u1: res.data["u1"].toUpperCase(),
  //       atLevel: res.data["atlevel"],
  //       teamName: res.data["teamname"].toUpperCase(),
  //     },
  //   };
  // }, []);

  // React.useEffect(() => {
  //   async function getData() {
  //     const token = localStorage.getItem("jwt");
  //     // console.log(token);
  //     if (token) {
  //       const team = decodeToken(token);
  //       if (!team) {
  //         localStorage.removeItem("jwt");
  //         navigate("/login");
  //       } else {
  //         const res = await populateProfile();
  //         setData(res.data);
  //       }
  //     } else {
  //       navigate("/login");
  //     }
  //     setLoading(false);
  //   }

  //   setLoading(true);
  //   getData();
  // }, [navigate, populateProfile]);
  const data = { userName: "HELLO APPAREL" };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "Chart.js Bar Chart",
      },
    },
  };
  const labels = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52,
  ];

  const interdata = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      // {
      //   label: "Dataset 2",
      //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      //   backgroundColor: "rgba(53, 162, 235, 0.5)",
      // },
    ],
  };
  const options1 = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
    },
  };

  const data1 = {
    labels,
    datasets: [
      {
        label: "Line Chart",
        data: labels.map(() =>
          faker.datatype.number({ min: -1000, max: 1000 })
        ),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  if (loading && !data) return <h2>loading</h2>;

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
          <span className="purple"> {data.userName} </span>
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
                DASHBOARD{" "}
              </span>
            </h1>
            <div
              className="hello"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "2rem",
              }}
            >
              <div
                className="gallery"
                style={{
                  paddingTop: "1rem",
                  justifyContent: "left",
                  display: "grid",

                  gridTemplateColumns: "1fr",
                }}
              >
                <span style={{ padding: "2rem 0 2rem 0" }}>
                  <Bar options={options} data={interdata} />
                </span>
              </div>
              <div
                className="gallery"
                style={{
                  paddingTop: "1rem",
                  justifyContent: "center",
                  display: "grid",
                  gridTemplateColumns: "1fr",
                }}
              >
                <span style={{ padding: "1rem 1rem 1rem 1rem" }}>
                  <Line options={options1} data={data1} />
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </Container>
  );
};

export default Dashboard;
