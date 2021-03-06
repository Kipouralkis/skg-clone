import React from "react";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";

import Heading1 from "../components/Headings/Heading1";
import PropertyList from "../components/propertyList";
import Footer from "../components/Footer/Footer";
import { SearchBar } from "../components/SearchBarTemp";
import styled from "styled-components";


function ForSale({data}) {

  const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 8em;
`;


  //Filter results
  const result = data.filter((d) => d.for === "sale");
  console.log(result);

  return (
    <div>
      {/* HEADER */}
      <div className="header-div">
        <Header />
        <Navbar className />
        <AppContainer>
            <SearchBar data={data}/>
           </AppContainer>
      </div>

      {/*CONTENT */}

      {/*PropertyList */}
      <div className="wrapper">
        <Heading1 title="Properties for Sale"></Heading1>
        <div style={{padding:"30px"}}></div>
        <PropertyList data={result} />
      </div>

      <Footer />
    </div>
  );
}

export default ForSale;
