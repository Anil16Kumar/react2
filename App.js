import React, { useState } from 'react';
import Component1 from './Component1';

function App() {
  const [number, setNumber] = useState(1);

  return (
    <>
      App.js
    
      <Component1 number={number} setNumber={setNumber} />
    </>
  );
}

export default App;
