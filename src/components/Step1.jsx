import React from 'react';

const Step1 = (props) => {

const { data, handleChange, next } = props;

  return (
    <form >
      <p>
        <label htmlFor="name">Name</label>
        <input type="text" 
        name="name"
        value={data.name} 
        onChange={handleChange}
        />
      </p>

      <p>
        <label htmlFor="lastname">Lastname</label>
        <input type="text" 
        name="lastname"
        value={data.lastname} 
        onChange={handleChange}
        />
      </p>

      <button onClick={next}>Next</button>
    </form>
  );
}

export default Step1;
