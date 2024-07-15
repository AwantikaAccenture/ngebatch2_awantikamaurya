import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Categories from '../views/Categories'
import Products from '../views/Products'

export default function AppRoute() {
  return (
    <Routes>
       <Route path='/categories' element={<Categories/>}></Route>
        <Route path='/categories/:category' element={<Products/>}></Route>
    </Routes>
  )
}
