import React from 'react';
import './App.css';

import Login from './login';

//import useLocalStorage from './authorization/useLocalStorage'

import HomePageContainer from './components/MainContainer/HomePageContainer';
import Footer from './components/Footer/Footer';

import AppRouter from './AppRouter';


function App() {
  //const [intitialToken, setInitialToken] = useLocalStorage('token')

  return (
    <div className="App">

      <Login />
      <AppRouter />
      {/* <DropdownFilterSearchInMenu /> */}
      {/* <HomePageContainer /> */}
      {/* <RecipeCard /> */}
      <Footer />

    </div>
  );
}

export default App;
