import { Route, Routes } from 'react-router-dom'
import Home from '../views/Home'
import AboutUs from '../views/AboutUs'
import Contactus from '../views/Contactus'
import Blog from '../views/Blog'
import Address from '../views/Address'

export default function AppRoute() {
  return (
    <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/aboutus' element={<AboutUs/>}></Route>
        <Route path='/contactus' element={<Contactus/>}></Route>
        <Route path='/contactus/:city' element={<Address/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/blog/:id' element={<Blog/>}></Route>
    </Routes>
  )
}
