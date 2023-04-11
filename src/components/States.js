import React from "react";
import Navbar from "./Navbar";
import Footer from "../components/Footer/Footer";
import Murder from "../assets/murderDataImg.jpeg";
import OverallCrime from "../assets/OverallCrime.jpeg";

import { Container, Row, Col } from "react-bootstrap";
const States = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Row
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            textAlign: "center",
            margin: "2rem 0rem",
          }}
        >
          <h1 style={{ color: "#990033" }}>States</h1>
          <div>
            <h5>Overall Crime Rate</h5>
            <p>
              The chart below shows states with the top 20 highest average
              overall crime.
            </p>
            <div>
              <img src={OverallCrime} style={{ width: "50rem" }} alt="" />
            </div>
          </div>
          <div>
            <h5>Murder Crime Rate</h5>
            <p>
              The chart below shows states with the top 20 highest average
              murder crime.
            </p>
            <div>
              <img src={Murder} style={{ width: "50rem" }} alt="" />
            </div>
          </div>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default States;
