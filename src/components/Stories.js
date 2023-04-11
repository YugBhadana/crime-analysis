import React from "react";
import Navbar from "./Navbar";
import Footer from "../components/Footer/Footer";
import { Container, Row, Col } from "react-bootstrap";

const Stories = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <div
          style={{ width: "100%", textAlign: "center", margin: "4rem 0rem" }}
        >
          <h1 style={{ color: "#990033" }}>Stories </h1>
          <hr />
        </div>
        <Row style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
          <div
            style={{
              textAlign: "center",
              gap: "2rem",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h3>
              Delhi bad for women, but Vijaywada, Gwalior are worse, stats show
            </h3>
            <p class="desc">
              Capital city Delhi always gets tagged as unsafe for women, but it
              is two other cities that have higher rates of crimes against women
              — Vijaywada and Gwalior — an analysis of the latest five years of
              crime data from the National Crime Records Bureau show.
            </p>
            <p class="desc">
              Gwalior has the highest average rate of rape crimes from 2011 to
              2014, at 16.1 rapes per 100,000 women. This is more than thrice
              the national average for the same period. Vijaywada has the
              highest rate of sexual harassment and molestation crimes — 76.5
              per 100,000 women — putting it at a whopping seven times the
              national average. Our composite crime category of sexual
              harassment and molestation includes crimes recorded under Sections
              354 and 509 of the Indian Penal Code, which encompass all kinds of
              sexual harassment crimes women face other than rape i.e. stalking,
              teasing, molestation, passing lewd remarks, etc.
            </p>
          </div>
          <hr />
          <div
            style={{
              textAlign: "center",
              gap: "2rem",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h3>Is Kochi really the most unsafe city?</h3>
            <p class="desc">
              Kochi, a city from the southern state of Kerala, is among the top
              ten cities with the highest average crime rate, according to the
              latest data available with the National Crime Records Bureau.
              This, however, raises more questions than it answers.
            </p>
            <p class="desc">
              Kochi has an overall average crime rate of 1,159 crimes per
              100,000 people, more than five times the national average. The
              city has a population of 2.1 million, according to the 2011
              Census. Kollam, another city from Kerala with a population of 1.1
              million, is fifth on the list of cities with highest overall crime
              rate, with a rate of 689.1 crimes per 100,000 people.
            </p>
          </div>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Stories;
