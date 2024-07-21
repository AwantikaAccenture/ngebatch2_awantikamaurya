import React, { useState } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import './MultiStepForm.css'; // Import your CSS file for styling
import '../App.css'
import StepPoint from './StepPoint';

const MultiStepForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    ownerName: '',
    ownerPhone: '',
    ownerEmail: '',
    ownerAddress: '',
    venueName: '',
    venueType: '',
    venueCapacity: '',
    venueAddress: '',
    venueCoordinates: '',
    venueImage: null as File | null,
    availableFromDate: '',
    availableToDate: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setFormData(prevState => ({
        ...prevState,
        [e.target.name]: file
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // You can submit the form data here or perform any other action with it
    console.log('Form data:', formData);
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    
    <div className="multi-step-form">
      <div className='screen-container'>
    <h3 style={{color:'white',fontWeight:'normal'}}>ActCiting | Part of GigStr</h3>
    </div>
  
  
      <form onSubmit={handleSubmit}>
      
        {currentStep === 1 && (
          <StepOne
            formData={formData}
            handleChange={handleChange}
            nextStep={nextStep}
          />
        )}
        {currentStep === 2 && (
          <StepTwo
            formData={formData}
            handleChange={handleChange}
            handleFileChange={handleFileChange}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}
        {currentStep === 3 && (
          <StepThree
            formData={formData}
            handleChange={handleChange}
            prevStep={prevStep}
          />
        )}
      </form>
    </div>
    
    
  );
};

export default MultiStepForm;
