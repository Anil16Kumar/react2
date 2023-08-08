import React from 'react';
import Component2 from './Component2';

const Component1 = (props) => {
  return (
    <div>
      Component1 - Number: {props.number}
      <Component2 number={props.number} setNumber={props.setNumber} />
    </div>
  );
}

export default Component1;
