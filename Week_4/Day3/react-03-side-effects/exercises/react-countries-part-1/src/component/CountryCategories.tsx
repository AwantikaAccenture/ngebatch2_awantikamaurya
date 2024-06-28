import React, { useEffect, useState } from 'react'


interface selectedProps{
    name:string
}

export default function CountryCategories(getname:selectedProps) {
    const [allData, setAllData] = useState([]);
  useEffect(()=>{
   getData()
  },[getname.name])

  const getData = async() =>{
    try{
    const response = await fetch(`https://fakestoreapi.com/products/category/${getname.name}`);
    const data = await response.json();
    console.log("data is coming",data)
    setAllData(data)
    }
    catch(e){
        console.log(e)
    }
  }

  return (
    <>
    <div>CountryCategories:</div>
    {allData.map((items:any) =>
    <p> <ul>
        <li>{items.title}</li>
        </ul> </p>)}

    </>
  )
}
