import logo from './logo.svg';
import './App.css';
import Header from './comonents/Header/Header';
import Simponents from './comonents/Simponent/Simponents';
import Home from './comonents/Home/Home';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(10);

  return (
    <div>
      <h5>Hello Count: {count}</h5>
      <Header count={count} setCount={setCount}></Header>
      <Home count={count}></Home>
      <Simponents></Simponents>
    </div>
  );
}

export default App;
