import React from 'react';

const Step1 = (props) => {

const { data, handleChange, next } = props;

  return (
    <form >
      <p>
        <label htmlFor="name">name:</label>
        <input type="text" 
        name="name"
        value={data.name} 
        onChange={handleChange}
        />
      </p>
    </form>
  );
}

export default Step1;
