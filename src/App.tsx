import React from 'react'
import logo from './logo.svg';  
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './router/route';

function App() {
  return (
    <RouterProvider router={router} >
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
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
    </RouterProvider>
  );
}

export default App;
