import React from "react";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";

import Carousel from "../components/Recommended/Carousel";
import Heading1 from "../components/Headings/Heading1";
import Heading2 from "../components/Headings/Heading2";
import PropertyList from "../components/propertyList";
import Services from "../components/Services/Services";
import List from "../components/List/List";
import Footer from "../components/Footer/Footer";
import CheckboxesGroup from "../components/filter/filter"

import { SearchBar } from "../components/SearchBarTemp";

import styled from "styled-components";

import ChatbotSearch from "../ChatbotSearch"

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 8em;
`;

function Home({ data }) {
  return (
    <div>
      {/* HEADER */}
      <div className="header-div">
        <Header />
        <Navbar className />

        <AppContainer>
          <SearchBar data={data} />
        </AppContainer>
      </div>

      {/*CONTENT */}
      <div className="transition">
        <div className="heading-div">
          <section className=""></section>
          <h1 className="heading"> Welcome to RealEstate SKGCODE 9</h1>
          <section className="heading-bottom"></section>
        </div>
      </div>

      {/*Recommended section*/}
      <div className="section">
        <div className="wrapper">
          <Heading1 title="Our Recommendations:"></Heading1>
          <Carousel data={data} />
        </div>
        <section class="wave-container">
          <div class="wave"></div>
        </section>
      </div>

      {/*PropertyList */}
      <div className="wrapper">
        <Heading2 title="New Listings:"></Heading2>
        <PropertyList data={data} />
      </div>
      <section class="wave-container-top">
        <div class="wave-top"></div>
      </section>

      {/* Services Section*/}
      <div className="section">
        <div className="wrapper">
          <Heading1 title="Our Services:"></Heading1>
          <Services />
        </div>
        <section class="wave-container">
          <div class="wave"></div>
        </section>
      </div>

      {/*Tips section*/}
      <div className="wrapper">
        <Heading2
          title={[
            "Our Tips ",
            <span className="subtitle">For Finding Your Perfect House</span>,
          ]}
        ></Heading2>
        <List />
      </div>
      <ChatbotSearch data={data} />
      <Footer />
      
    </div>
  );
}

export default Home;
