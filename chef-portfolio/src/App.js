import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './login';

//import useLocalStorage from './authorization/useLocalStorage'

import Footer from './components/Footer/Footer';
import AppRouter from './AppRouter';

function App() {

  //const [intitialToken, setInitialToken] = useLocalStorage('token')

  return (
    <div className="App">

      {/* <Login /> */}

      <AppRouter />

      <Footer />

    </div>
  );
}

export default App;
