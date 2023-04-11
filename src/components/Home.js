import React from "react";
import Navbar from "./Navbar";
import Footer from "../components/Footer/Footer";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Map from "../assets/map.jpeg";
import Violent from "../assets/violent.png";
import Women from "../assets/women.png";
import Property from "../assets/property.png";
import Economic from "../assets/economic.png";
const Home = () => {
  return (
    <div style={{ marginBottom: "0rem" }}>
      <Navbar />
      <Container>
        <Row>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              margin: "4rem 0rem",
              gap: "1rem",
            }}
          >
            <h1 style={{ color: "#990033" }}>Crime in India</h1>
            <h3>Opening up India's crime data</h3>
            <h5 style={{ textAlign: "center" }}>
              Crime in India makes it easy to look up crime statistics on
              states, without having to parse through dense government PDFs and
              websites.
            </h5>
          </div>
        </Row>
        <Row>
          <div style={{ textAlign: "center", margin: "2rem 0rem" }}>
            <h1 style={{ color: "#545454" }}>
              Know your state. Track different kinds of crimes.
            </h1>
            <h5>
              Pick a state from the map or menu. Choose crime categories. Or
              read our <Link to="/Stories">stories</Link>.
            </h5>
          </div>
          <div style={{ textAlign: "center" }}>
            <div>
              <form id="user-location" style={{ display: "flex" }}>
                <select name="/city/" class="form-control" id="city-name">
                  <option value="Agra">Delhi</option>
                  <option value="Agra">Uttar Pradesh</option>
                  <option value="Agra">Goa</option>
                  <option value="Agra">Himachal Pradesh</option>
                  <option value="Agra">Punjab</option>
                  {/* <option value="Ahmedabad">Ahmedabad</option>
                  <option value="Allahabad">Allahabad</option>
                  <option value="Amritsar">Amritsar</option>
                  <option value="Asansol">Asansol</option>
                  <option value="Aurangabad">Aurangabad</option>
                  <option value="Bengaluru">Bengaluru</option>
                  <option value="Bhopal">Bhopal</option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Coimbatore">Coimbatore</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Dhanbad">Dhanbad</option>
                  <option value="Durg-Bhilainagar">Durg-Bhilainagar</option>
                  <option value="Faridabad">Faridabad</option>
                  <option value="Ghaziabad">Ghaziabad</option>
                  <option value="Gwalior">Gwalior</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Indore">Indore</option>
                  <option value="Jabalpur">Jabalpur</option>
                  <option value="Jaipur">Jaipur</option>
                  <option value="Jamshedpur">Jamshedpur</option>
                  <option value="Jodhpur">Jodhpur</option>
                  <option value="Kannur">Kannur</option>
                  <option value="Kanpur">Kanpur</option>
                  <option value="Kochi">Kochi</option>
                  <option value="Kolkata">Kolkata</option>
                  <option value="Kollam">Kollam</option>
                  <option value="Kota">Kota</option>
                  <option value="Kozhikode">Kozhikode</option>
                  <option value="Lucknow">Lucknow</option>
                  <option value="Ludhiana">Ludhiana</option>
                  <option value="Madurai">Madurai</option>
                  <option value="Malappuram">Malappuram</option>
                  <option value="Meerut">Meerut</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Nagpur">Nagpur</option>
                  <option value="Nasik">Nasik</option>
                  <option value="Patna">Patna</option>
                  <option value="Pune">Pune</option>
                  <option value="Raipur">Raipur</option>
                  <option value="Rajkot">Rajkot</option>
                  <option value="Ranchi">Ranchi</option>
                  <option value="Srinagar">Srinagar</option>
                  <option value="Surat">Surat</option>
                  <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                  <option value="Thrissur">Thrissur</option>
                  <option value="Tiruchirappalli">Tiruchirappalli</option>
                  <option value="Vadodara">Vadodara</option>
                  <option value="Varanasi">Varanasi</option>
                  <option value="Vasai-Virar">Vasai-Virar</option>
                  <option value="Vijayawada">Vijayawada</option>
                  <option value="Vishakhapatnam">Vishakhapatnam</option> */}
                </select>
                <input
                  type="submit"
                  id="city-button"
                  class="btn btn-primary"
                  value="Show me"
                />
              </form>
            </div>
            <img
              style={{ margin: "5rem 0rem", height: "30rem" }}
              src={Map}
              alt=""
            />
          </div>
        </Row>
        <Row>
          <div style={{ textAlign: "center" }} id="main-header">
            <h1 style={{ color: "#990033" }} class="head" id="scroll-point">
              Crimes
            </h1>
            <h5 class="explainer">Choose a category of crime</h5>
            <p class="desc" id="crime-select">
              'Violent crimes' include crimes like murder, attempt to commit
              murder, riots. 'Crimes against women' include rape, sexual
              harassment and molestation, dowry deaths. Burglary, arson, car
              thefts are among those classified as 'property crimes'. Economic
              crimes include, among others, cheating and forgery.
            </p>
          </div>
          <Row>
            <Col>
              <div
                style={{
                  backgroundColor: "#F6F6F6",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "15rem",
                  gap: "2rem",
                  margin: "2rem",
                }}
              >
                <h4>Violent Crimes</h4>
                <img style={{ height: "10rem" }} src={Violent} alt="" />
              </div>
            </Col>
            <Col>
              <div
                style={{
                  backgroundColor: "#F6F6F6",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "15rem",
                  gap: "2rem",
                  margin: "2rem",
                }}
              >
                <h4>Property Crimes</h4>
                <img style={{ height: "10rem" }} src={Property} alt="" />
              </div>
            </Col>
            <Col>
              <div
                style={{
                  backgroundColor: "#F6F6F6",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "15rem",
                  gap: "2rem",
                  margin: "2rem",
                  textAlign: "center",
                }}
              >
                <h4>Crimes Against Women</h4>
                <img style={{ height: "10rem" }} src={Women} alt="" />
              </div>
            </Col>
            <Col>
              <div
                style={{
                  backgroundColor: "#F6F6F6",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "15rem",
                  gap: "2rem",
                  margin: "2rem",
                }}
              >
                <h4>Kidnapping and Abduction</h4>
                <img style={{ height: "10rem" }} src={Economic} alt="" />
              </div>
            </Col>
          </Row>
        </Row>
        <Row>
          <div style={{ textAlign: "center", margin: "4rem" }}>
            <h1 style={{ color: "#990033" }}>Crime Rate in States</h1>
            <p>
              Here are the top five cities with the highest average crime rates
              in different crime categories. The average has been calculated
              using crime rates from 2010 to 2014. You can click here to see the
              entire list of cities.
            </p>
          </div>
          <Row style={{ textAlign: "center" }}>
            <Col>
              <h4>Overall Crimes</h4>
            </Col>
            <Col>
              <h4>Murder</h4>
            </Col>
            <Col>
              <h4>Rape</h4>
            </Col>
          </Row>
          <Row style={{ textAlign: "center" }}>
            <Col>
              <h4>Hurt</h4>
            </Col>
            <Col>
              <h4>Robbery</h4>
            </Col>
            <Col>
              <h4>Sexual Harrasment</h4>
            </Col>
          </Row>
          <Row style={{ textAlign: "center" }}>
            <Col>
              <h4>Kidnapping</h4>
            </Col>
            <Col>
              <h4>Death due to rash driving</h4>
            </Col>
            <Col>
              <h4>Cheating</h4>
            </Col>
          </Row>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
