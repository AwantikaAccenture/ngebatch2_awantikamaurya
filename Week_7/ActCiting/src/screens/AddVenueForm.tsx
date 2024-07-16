import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
import '../App.css'

// interface AddVenueFormProps {
//   onAddVenue: (newVenue: { name: string; location: string }) => void;
// }

const AddVenueForm: React.FC= () => {
  const [form, setForm] = useState({
    name: '',
    capacity: '',
    halls:'',
    charge:'',
    address: '',
    city:'',
    geolocation: '',
    imageUrl: '',
    email: '',
    phone: '',
    summary: '',
    availableFrom: '',
    availableTo:''
})
const { pathname } = useLocation()
const navigate = useNavigate()

const handleChange = (e: any) => {
  const { name, value } = e.target;
  setForm({ ...form, [name]: value });
}


const handleOnclick = () => {
  navigate('/')
}
return (
  <>
  <div>
    <div className='screen-container'>
    <h3 style={{color:'white',fontWeight:'normal'}}>ActCiting | Part of GigStr</h3>
    </div>
    
    <h2 style={{alignContent:'center'}}>Enter details of your venue</h2>
    <div className='bg-content'>
    <div className='dashboard-content'>
    <form className="venue-form">
      <div className='form-group'>
        <label style={{marginRight:'60%'}}>Enter Venue name:</label>
        <input
          type="text"
          name="name"
          value={form.name}
          placeholder="venue name"
          onChange={handleChange}
        ></input>
      </div>
      <div className='form-group'>
        <label style={{marginRight:'66%'}}>Enter Capacity:</label>
        <input
          type="number"
          name="capacity"
          value={form.capacity}
          placeholder="capacity"
          onChange={handleChange}
        ></input>
      </div>
      <div className='form-group' style={{flexDirection:'row',marginTop:10,display:'flex'}}>
      
        <label >Halls:</label>
        <input
        style={{width:150}}
          type="number"
          name="halls"
          value={form.halls}
          placeholder="no. of halls"
          onChange={handleChange}
        ></input>
     
      
        <label style={{marginLeft:10}}>Charge:</label>
        <input
        style={{width:122}}
          type="number"
          name="charge"
          value={form.charge}
          placeholder="Cost"
          onChange={handleChange}
        ></input>
     
      </div>
      <div className='form-group'>
        <label style={{marginRight:'80%'}}>Address:</label>
        <input
          type="text"
          name="address"
          value={form.address}
          placeholder="valid address"
          onChange={handleChange}
        ></input>
      </div>
      <div className='form-group'>
        <label style={{marginRight:'85%'}}>City:</label>
        <input
          type="text"
          name="city"
          value={form.city}
          placeholder="valid city"
          onChange={handleChange}
        ></input>
      </div>
      <div className='form-group'>
        <label style={{marginRight:'71%'}}>GeoLocation:</label>
        <input
          type="text"
          name="geoloaction"
          value={form.geolocation}
          placeholder="location"
          onChange={handleChange}
        ></input>
      </div>
      <div className='form-group'>
        <label style={{marginRight:'75%'}}>Image URL</label>
        <input
          type="text"
          name="imageUrl"
          value={form.imageUrl}
          placeholder="imageUrl"
          onChange={handleChange}
        ></input>
      </div>
      <div className='form-group'>
        <label style={{marginRight:'84%'}}>Email:</label>
        <input
          type="text"
          name="email"
          value={form.email}
          placeholder="email address"
          onChange={handleChange}
        ></input>
      </div>
      <div className='form-group'>
        <label style={{marginRight:'83%'}}>Phone:</label>
        <input
          type="number"
          name="capacity"
          value={form.phone}
          placeholder="phone number"
          onChange={handleChange}
        ></input>
      </div>
      <div className='form-group'>
        <label style={{marginRight:'76%'}}>Summary:</label>
        <input
          type="text"
          name="summary"
          value={form.summary}
          placeholder="minimum 150 characters"
          onChange={handleChange}
        ></input>
      </div>
      <div className='form-group'>
        <label style={{marginRight:'66%'}}>Available From:</label>
        <input
          type="date"
          name="availableFrom"
          value={form.availableFrom}
          onChange={handleChange}
        ></input>
      </div>
      <div className='form-group'>
        <label style={{marginRight:'72%'}}>Available To:</label>
        <input
          type="date"
          name="availableTo"
          value={form.availableTo}
          onChange={handleChange}
        ></input>
            </div>
           
            <button style={{width:100,
            margin:5,
             backgroundColor:'#Ff8c00',
            color:'white',}} type="submit" onClick={handleOnclick}>Back</button>
            <button style={{width:100,margin:5,marginLeft:180,
             backgroundColor:'#Ff8c00',
            color:'white',}} type="submit" onClick={handleOnclick}>submit</button>
           
    </form>
    </div>
  </div>
  </div>
  </>
);
}

export default AddVenueForm;
