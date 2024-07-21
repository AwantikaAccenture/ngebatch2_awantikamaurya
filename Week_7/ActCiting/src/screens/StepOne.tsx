import React from 'react';

interface StepOneProps {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  nextStep: () => void;
}

const StepOne: React.FC<StepOneProps> = ({ formData, handleChange, nextStep }) => {
  return (
    <div className="container">
    <div className="row justify-content-center mt-5">
      <div className="col-md-8">
    <div className="form-step">
      <div className='points-container'>
      <h1 className='point' style={{backgroundColor:'darkblue'}}></h1>
      <h1 className='line'></h1>
      <h1 className='point'></h1>
      <h1 className='line'></h1>
      <h1 className='point'></h1>
      </div>
      <h2>Step 1: Owner Details</h2>
      <label htmlFor="ownerName">Owner's Name:</label>
      <input
        type="text"
        id="ownerName"
        name="ownerName"
        value={formData.ownerName}
        onChange={handleChange}
        required
      />
      <label htmlFor="ownerPhone">Owner's Phone Number:</label>
      <input
        type="tel"
        id="ownerPhone"
        name="ownerPhone"
        value={formData.ownerPhone}
        onChange={handleChange}
        required
      />
       <label htmlFor="ownerEmail">Owner's Email ID:</label>
      <input
        type="email"
        id="ownerEmail"
        name="ownerEmail"
        value={formData.ownerEmail}
        onChange={handleChange}
        required
      />
       <label htmlFor="ownerAddress">Owner's Address:</label>
      <input
        type="text"
        id="ownerAddress"
        name="ownerAddress"
        value={formData.ownerAddress}
        onChange={handleChange}
        required
      />
      <button className="next-btn" onClick={nextStep}>Next</button>
    </div>
    </div></div></div>
  );
};

export default StepOne;
