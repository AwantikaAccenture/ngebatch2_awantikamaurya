import React from 'react';

interface StepTwoProps {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const StepTwo: React.FC<StepTwoProps> = ({ formData, handleChange,handleFileChange, nextStep, prevStep }) => {
  return (
    <div className="container">
    <div className="row justify-content-center mt-5">
      <div className="col-md-8">
    <div className="form-step">
    <div className='points-container'>
      <h1 className='point' ></h1>
      <h1 className='line'></h1>
      <h1 className='point'style={{backgroundColor:'darkblue'}}></h1>
      <h1 className='line'></h1>
      <h1 className='point'></h1>
      </div>
      <h2>Step 2: Venue Details</h2>
      <label htmlFor="venueName">Venue Name:</label>
      <input
        type="text"
        id="venueName"
        name="venueName"
        value={formData.venueName}
        onChange={handleChange}
        required
      />
      <label htmlFor="venueType">Venue Type:</label>
      <input
        type="text"
        id="venueType"
        name="venueType"
        value={formData.venueType}
        onChange={handleChange}
        required
      />
       <label htmlFor="venueCapacity">Venue Capacity:</label>
      <input
        type="number"
        id="venueCapacity"
        name="venueCapacity"
        value={formData.venueCapacity}
        onChange={handleChange}
        required
      />
      <label htmlFor="venueAddress">Venue Address:</label>
      <input
        type="text"
        id="venueAddress"
        name="venueAddress"
        value={formData.venueAddress}
        onChange={handleChange}
        required
      />
        <label htmlFor="venueCoordinates">Venue Coordinates:</label>
      <input
        type="decimal"
        id="venueCoordinates"
        name="venueCoordinates"
        value={formData.venueCoordinates}
        onChange={handleChange}
        required
      />
         <label htmlFor="venueImage">Venue Image:</label>
      <input
        type="file"
        id="venueImage"
        name="venueImage"
        onChange={handleFileChange}
        accept=".jpg, .jpeg, .png"
        required
      />
      <label htmlFor="availableFromDate">Available From Date:</label>
      <input
        type="date"
        id="availableFromDate"
        name="availableFromDate"
        value={formData.availableFromDate}
        onChange={handleChange}
        required
      />
      <label htmlFor="availableToDate">Available To Date:</label>
      <input
        type="date"
        id="availableToDate"
        name="availableToDate"
        value={formData.availableToDate}
        onChange={handleChange}
        required
      />
      <button className="prev-btn" onClick={prevStep}>Previous</button>
      <button className="next-btn" onClick={nextStep}>Next</button>
    </div>
    </div></div></div>
  );
};

export default StepTwo;
