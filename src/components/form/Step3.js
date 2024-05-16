import React from 'react';

const Step3 = ({ nextStep, prevStep, handleChange, values }) => {
  return (
    <div>
      <h1>Step 3</h1>
      <label>Country:</label>
      <input type="text" onChange={handleChange('country')} value={values.country} />
      <br />
      <button onClick={prevStep}>Back</button>
      <button onClick={nextStep}>Preview</button>
    </div>
  );
};

export default Step3;
