import React from 'react';

const Preview = ({ prevStep, values }) => {
  return (
    <div>
      <h1>Preview</h1>
      <p>Name: {values.name}</p>
      <p>Email: {values.email}</p>
      <p>Address: {values.address}</p>
      <p>City: {values.city}</p>
      <p>Country: {values.country}</p>
      <button onClick={prevStep}>Back</button>
      <button onClick={() => alert('Form Submitted!')}>Submit</button>
    </div>
  );
};

export default Preview;
