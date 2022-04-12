/* eslint-disable no-unused-vars */
import "./App.css";
import Home from "./Pages/Home"


import { useState, useEffect } from "react";
import axios from "axios";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import ForSale from "./Pages/ForSale";
import ForRent from "./Pages/ForRent";
import HousePage from "./Pages/HousePage";
import Filter from "./components/filter/filter";

require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);



function App() {
  //all data
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/property/all"
        );
        setData(response.data);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };
    fetchData();
  }, []);

  return (
    
    <Router>
   
      <Routes>
        <Route path="/" element={<Home data={data}/>}/>
        <Route path="/sale" element={<ForSale data={data} />}/>
        <Route path="/rent" element={<ForRent data={data} />}/>
        <Route path="/filter" element={<Filter data={data} />}/>
        <Route path="/property/:id" element={ <HousePage data={data} />}/>                 
        
      </Routes>

    </Router>
    
  );
}

export default App;
