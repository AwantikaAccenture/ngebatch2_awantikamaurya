import React, { useState } from 'react';
import AddVenueForm from './AddVenueForm';
import { useLocation, useNavigate } from 'react-router-dom'
import '../App.css'

interface Venue {
  id: number;
  name: string;
  location: string;
}

const Dashboard: React.FC = () => {
  const [venues, setVenues] = useState<Venue[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);

  const { pathname } = useLocation()
  const navigate = useNavigate()
  const navigate_myvenue= useNavigate()

 

  const addVenue = () => {
    navigate('/slidercontainer')
  }

  const myVenue = () => {
    navigate('/myvenue')
  }

  return (
    <div>
        <div className='dashboard-container'>
      <h3 style={{WebkitTextFillColor:'white',marginLeft:20}}>ActCiting | Part of GigStr</h3>
      <h1 className='gradient-text' style={{marginTop:90,width:300,position:'absolute'}}>ActCiting</h1>
      <h2 style={{WebkitTextFillColor:'white',
      position:'absolute',
      marginTop:150,
      marginLeft:20}}>Part of GigStr</h2>
      <h3 style={{WebkitTextFillColor:'yellow',
      position:'absolute',
           marginTop:190,
           marginLeft:20}}>It's time to get 'Actcited'...with venue hosting made easy!</h3>
      {/* Button to toggle Add Venue Form */}
      
        <button style={{width:200,
            height:50,
            backgroundColor:'white',
            color:'black',
            position:'absolute',
            marginLeft:20,
            marginTop:360,}} onClick={addVenue}>Add New Venue</button>
      <button style={{width:200,
            height:50,
            float: 'right',
            backgroundColor:'white',
            color:'black',
            marginLeft:900,
            marginTop:360,}} onClick={addVenue}>New Demand</button>

<button style={{width:200,
            height:50,
            float: 'right',
            backgroundColor:'white',
            color:'black',
            marginLeft:20,
            marginTop:360,}} onClick={myVenue}>My Venue</button>
          </div>
      {/* Add Venue Form */}
      {/* {showAddForm && <AddVenueForm onAddVenue={handleAddVenue} />} */}

      {/* Display list of venues */}
      {venues.length > 0 && (
        <div>
          <h2>Venues:</h2>
          <ul>
            {venues.map((venue) => (
              <li key={venue.id}>
                {venue.name} - {venue.location}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
