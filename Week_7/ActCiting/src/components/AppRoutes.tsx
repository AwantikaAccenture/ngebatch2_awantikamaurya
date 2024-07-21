import { Route, Routes } from 'react-router-dom'
import Dashboard from '../screens/Dashboard'
import AddVenueForm from '../screens/AddVenueForm'
import MultiStepForm from '../screens/MultiStepForm'
import VenueCardList from '../screens/VenueCardList'


const AppRoutes = () => (
  <Routes>
    <Route path='/' element={<Dashboard />} />
    <Route path='/addvenue' element={<AddVenueForm />} />
    <Route path='/slidercontainer' element={<MultiStepForm/>} />
    <Route path='/myvenue' element={<VenueCardList/>} />
    
   
  </Routes>
)

export default AppRoutes
