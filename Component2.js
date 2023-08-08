import React from 'react';
import Component3 from './Component3';

const Component2 = (props) => {
  const incrementNumber = () => {
    props.setNumber(props.number + 1);
  };

  return (
    <div>
      Component2 - Number: {props.number}
      <button onClick={incrementNumber}>Increment</button>
      <Component3 number={props.number} />
    </div>
  );
}

export default Component2;
