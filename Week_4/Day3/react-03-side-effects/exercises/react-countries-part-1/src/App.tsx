import { useState } from 'react';
import './App.css'
import CountrySelector from './component/CountrySelector';
import CountryCategories from './component/CountryCategories';

const App = () => {
  const [country, setCountry] = useState([])
   const [category, setCategory] = useState('')
  const categories =[
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing"
  ];

  return (
    <div className='app'>
      <h1>Select Category</h1>
        <CountrySelector
         countries={categories}
         onSelectCountry={setCategory}
        />
        <CountryCategories
        name={category}/>
      {/* <select>
        {[{ countryName: 'United Kingdom', countryCode: 'GBR' }].map((item) => (
          <option key={item.countryCode} value={item.countryCode}>
            {item.countryName}
          </option>
        ))}
      </select> */}

      {/* <p className='result'>LATEST: 67215293</p> */}
    </div>
  )
}

export default App
