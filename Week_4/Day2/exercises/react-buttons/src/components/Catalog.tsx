import React, { useState } from 'react'
import CatalogDisplay from './CatalogDisplay';

export default function Catalog() {
    const categories =[
        "electronics",
        "jewelery",
        "men's clothing",
        "women's clothing"
      ];
      const[selectedCategory,setSelectedCategory] = useState("electronics");
      const handleSelect =(selectedCategory:string) =>
      console.log(selectedCategory);
      setSelectedCategory(selectedCategory)
  return (
    <div>
        
        <CatalogDisplay 
        categories ={categories}
        onSelect ={handleSelect}
        selected ={selectedCategory}/>
    </div>
  );
}




