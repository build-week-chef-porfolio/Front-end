import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './login';

//import useLocalStorage from './authorization/useLocalStorage'

import Footer from './components/Footer/Footer';
import AppRouter from './AppRouter';
import ChefList from './components/Chef/ChefList';

function App() {

  //const [intitialToken, setInitialToken] = useLocalStorage('token')

  return (
    <div className="App">

      {/* <Login /> */}

      <AppRouter />

      {/* <ChefList /> */}

      <Footer />

    </div>
  );
}

export default App;
