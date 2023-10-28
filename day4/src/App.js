import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect } from 'react';

import Clock from './clock';
import Footer from './Footer';
import Greeting from './Greeting';






function App() {
  const [count, setCount] = useState(0);
  
useEffect(() => {
  const timer = setInterval(() => {
    setCount(prevCount => prevCount + 1);
  }, 1000);

  return () => clearInterval(timer);
}, []);

  return (
<div>    
<h2>Count: {count}</h2>

<button onClick={() => setCount(prevCount => prevCount -11)}>
  Increment
</button>
</div>
    
  );
}

export default App;
