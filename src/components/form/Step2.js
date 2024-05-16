import React from 'react';

const Step2 = ({ nextStep, prevStep, handleChange, values }) => {
  return (
    <div>
      <h1>Step 2</h1>
      <label>Address:</label>
      <input type="text" onChange={handleChange('address')} value={values.address} />
      <br />
      <label>City:</label>
      <input type="text" onChange={handleChange('city')} value={values.city} />
      <br />
      <button onClick={prevStep}>Back</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default Step2;
