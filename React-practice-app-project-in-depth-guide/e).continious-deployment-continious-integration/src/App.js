import React, { useState } from 'react';
import './App.css';
import Counter from './Counter';
import FunctionCounterHooks from './FunctionCounterHooks';


export const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState('limegreen')
  return (

    < ThemeContext.Provider value={{ backgroundColor: theme }}>
      <h2>Class Based Counter</h2>
      <Counter initialCount={0} />  {/* //initial count to number zero instead of string zero */}

      <h2>Function based Counter --Counter Hooks </h2>
      <FunctionCounterHooks initialCount={0} />

      <button onClick={() => setTheme(prevTheme => {
        return prevTheme === 'limegreen' ? 'blue' : 'limegreen'
      })} >Change Button color</button>

    </ThemeContext.Provider >
  );
}

export default App;
