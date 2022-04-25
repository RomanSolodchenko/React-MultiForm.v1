import React from 'react';

const Step2 = (props) => {

  const { data, handleChange, next, back } = props;

  return (
    
    <form >
    <p>
      <label htmlFor="password">Password</label>
      <input type="password" 
      name="password"
      value={data.password} 
      onChange={handleChange}
      />
    </p>

    <p>
      <label htmlFor="password">Password</label>
      <input type="password" 
      name="password"
      value={data.password} 
      onChange={handleChange}
      />
    </p>
    <button onClick={back}>Back</button>
    <button onClick={next}>Next</button>
  </form>
    
  );
}

export default Step2;
