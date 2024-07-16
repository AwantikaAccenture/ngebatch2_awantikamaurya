import { Route, Routes } from 'react-router-dom'
import Dashboard from '../screens/Dashboard'
import AddVenueForm from '../screens/AddVenueForm'

const AppRoutes = () => (
  <Routes>
    <Route path='/' element={<Dashboard />} />
    <Route path='/addvenue' element={<AddVenueForm />} />
   
  </Routes>
)

export default AppRoutes
