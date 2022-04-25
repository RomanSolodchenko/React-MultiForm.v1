import React from 'react';

const Step3 = (props) => {
    const { data, handleChange, next, back } = props;

    return (
    
        <form>
        <p>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
      </p>

        <p>
          <label htmlFor="comments">Comments:</label>
          <textarea
            name="comments"
            value={data.comments}
            onChange={handleChange}
          ></textarea>
        </p>      
        <button onClick={back}>Back</button> 
        <button onClick={next}>Next</button>
      </form>


    );
}

export default Step3;
