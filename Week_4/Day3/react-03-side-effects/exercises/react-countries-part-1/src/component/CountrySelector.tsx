import { useState } from "react";

interface CountryProps {
    countries: string[];
    onSelectCountry: (selectedCountry: string) => void;
  }

  const CountrySelector =(props:CountryProps) =>{
   const [AllData, SetAllData] =useState([])
   const [name, setName] =useState('');
    // const handlerItems =(e:any)=>{
    //   const categoryName = props.onSelectCountry(e.target.value)
     
    // }

    return(
      <>
      <label>Select a country:</label>
      <select onChange={(event)=> props.onSelectCountry(event.target.value)}>
        
        {props.countries.map((country,index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </select>
      </>
    )
    
  }

  export default CountrySelector;