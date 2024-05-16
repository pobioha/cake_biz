import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

import React, { useState } from 'react';
import Step1 from '../components/form/Step1';
import Step2 from '../components/form/Step2';
import Step3 from '../components/form/Step3';
import Preview from '../components/form/Preview';

export default function Appointment() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      address: '',
      city: '',
      country: '',
    });
  
    const nextStep = () => {
      setStep(step + 1);
    };
  
    const prevStep = () => {
      setStep(step - 1);
    };
  
    const handleChange = (input) => (e) => {
      setFormData({ ...formData, [input]: e.target.value });
    };
  
    const renderStep = () => {
      switch (step) {
        case 1:
          return <Step1 nextStep={nextStep} handleChange={handleChange} values={formData} />;
        case 2:
          return <Step2 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={formData} />;
        case 3:
          return <Step3 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={formData} />;
        case 4:
          return <Preview prevStep={prevStep} values={formData} />;
        default:
          return <div>Multi-Step Form</div>;
      }
    };
  
    return (
      <div>
        <Navbar />
        <div className="container-fluid bg-dark bg-img p-5 mb-5">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="display-4 text-uppercase text-white">Appointment</h1>
              <Link to="./">Home</Link>
              <i className="far fa-square text-primary px-2"></i>
              <Link to="./">Book Appointment</Link>
            </div>
          </div>
        </div>
        <div className="container">
          {renderStep()}
        </div>
        <Footer />
      </div>
    );
  }