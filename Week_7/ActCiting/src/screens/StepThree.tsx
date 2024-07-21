import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'

interface StepThreeProps {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  prevStep: () => void;
}



const StepThree: React.FC<StepThreeProps> = ({ formData, handleChange, prevStep }) => {
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
    alert('Form submitted!'); // Example submission action
    
      navigate('/')
    
  };
  return (
    <div className="form-step" style={{marginTop:20}}>
       <div className='points-container'>
      <h1 className='point' ></h1>
      <h1 className='line'></h1>
      <h1 className='point'></h1>
      <h1 className='line'></h1>
      <h1 className='point' style={{backgroundColor:'darkblue'}}></h1>
      </div>
      <h2>Step 3: Confirmation</h2>
      <p>Review your details:</p>
      <p><strong>Owner's Name:</strong> {formData.ownerName}</p>
      <p><strong>Owner's Phone Number:</strong> {formData.ownerPhone}</p>
      <p><strong>Owner's Email:</strong> {formData.ownerEmail}</p>
      <p><strong>Owner's Address:</strong> {formData.ownerAddress}</p>
      <p><strong>Venue Name:</strong> {formData.venueName}</p>
      <p><strong>Venue Type:</strong> {formData.venueType}</p>
      <p><strong>Venue Capacity:</strong> {formData.venueCapacity}</p>
      <p><strong>Venue Address:</strong> {formData.venueAddress}</p>
      <p><strong>Venue Coordinates:</strong> {formData.venueCoordinates}</p>
      <p><strong>Venue Image:</strong> {formData.Image}</p>
      <p><strong>Available From Date:</strong> {formData.availableFromDate}</p>
      <p><strong>Available To Date:</strong> {formData.availableToDate}</p>
      <button className="prev-btn" onClick={prevStep}>Previous</button>
      <button type="submit" className="submit-btn" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default StepThree;
