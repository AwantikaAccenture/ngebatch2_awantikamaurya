import React from 'react'

export default function Categories() {
  const categories =[
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing"
  ];
  return (
   <>
    <label>Select a country:</label>
      {/* <select onChange={(event)=> props.onSelectCountry(event.target.value)}>
        
        {props.countries.map((country,index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </select> */}
   </>
  )
}
