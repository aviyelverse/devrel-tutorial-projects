import React from 'react';
import './App.css';
import Counter from './Counter';
import FunctionCounterHooks from './FunctionCounterHooks';


function App() {
  return (
    <>
      <h2>Class Based Counter</h2>
      <Counter initialCount={0} />  {/* //initial count to number zero instead of string zero */}


      <h2>Function based Counter --Counter Hooks </h2>
      <FunctionCounterHooks initialCount={0} />
    </>
  );

}

export default App;
