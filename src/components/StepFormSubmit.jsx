import React from 'react';

const StepFormSubmit = (props) => {

    const { data } = props;
    const listItems = Object.entries(data).map(([key,value]) => (
        <li>
            <strong>{key}: </strong> {value}
        </li>
    )
    );

    return (
        <div>
            <ul>{listItems}</ul>
            <button type="submit">Submit</button>
        </div>
    );
}

export default StepFormSubmit;
