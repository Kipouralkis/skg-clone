import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import PropertyList from "../propertyList";

import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar"

const CheckboxesGroup = ({data}) => {

    const [state, setState] = React.useState({
    sale: false,
    rent: false,
    thessaloniki: false,
    athina: false
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { sale, rent, thessaloniki, athina } = state;
  const error = [sale, rent, thessaloniki, athina].filter((v) => v).length !== 3;

  const Sale = data.filter((d) => d.for === "sale");
    const Rent = data.filter((d) => d.for === "rent");
     const Thessaloniki = data.filter((d) => d.city === "Θεσσαλονίκη ");
      const Athina = data.filter((d) => d.city === "Αθήνα");

  return (

    <>
    <Header/>
    <Navbar/>
    <Box sx={{ display: 'flex' }}>
    
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Φίλτρα αναζήτησης</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={sale} onChange={handleChange} name="sale" />
            }
            label="Αγορά"
          />
          <FormControlLabel
            control={
              <Checkbox checked={rent} onChange={handleChange} name="rent" />
            }
            label="Ενοικίαση"
          />
          <FormControlLabel
            control={
              <Checkbox checked={thessaloniki} onChange={handleChange} name="thessaloniki" />
            }
            label="Θεσσαλονικη"
          />
          <FormControlLabel
            control={
              <Checkbox checked={athina} onChange={handleChange} name="athina" />
            }
            label="Αθήνα"
          />
        </FormGroup>
        
      </FormControl>
      {state.sale === true && <PropertyList data={Sale} /> }
     {state.rent === true && <PropertyList data={Rent} /> }
     {state.thessaloniki === true && <PropertyList data={Thessaloniki} /> }
    {state.athina === true && <PropertyList data={Athina} /> }
    </Box>
    </>
    
 
  )
}

export default CheckboxesGroup