import React from 'react';
import './App.css';
import Login from './Login'

//import useLocalStorage from './authorization/useLocalStorage'

function App() {
  //const [intitialToken, setInitialToken] = useLocalStorage('token')

  return (
    <div className="App">
      <h1>Chef's Portfolio</h1>
      <Login />
    </div>
  );
}

export default App;
