import React from 'react';
import './App.css';
import Counter from './Counter';

function App() {
  return (
    <Counter initialCount={0} />  //initial count to number zero instead of string zero
  );
}

export default App;
