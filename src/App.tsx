import React from 'react';
import logo from './logo.svg';
import './App.css';
import { observer } from 'mobx-react';
import Button from '@mui/material/Button';
import { useStores } from '../src/hooks/use-stores';

function App() {
  const { testStore } = useStores();
  const { start, current, elapsedTime, tick } = testStore;
  
  const handleSubmit = () => {
    console.log('current before', current);
    tick()
    console.log('current after', current);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>Start {start}</p>
        <p>Current {current}</p>
        <p>Elapsed time {elapsedTime}</p>
        <Button variant="contained" onClick={handleSubmit}>Tick</Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default observer(App);
