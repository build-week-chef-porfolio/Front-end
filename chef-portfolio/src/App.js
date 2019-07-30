import React from 'react';
import './App.css';

import Login from './login';

//import useLocalStorage from './authorization/useLocalStorage'

import Header from './components/Header/Header';
import HomePageContainer from './components/MainContainer/HomePageContainer';
import Footer from './components/Footer/Footer';
import RecipeCard from './components/Recipes/RecipeCard.js';


function App() {
  //const [intitialToken, setInitialToken] = useLocalStorage('token')

  return (
    <div className="App">

      <Login />

      <Header />
      <HomePageContainer />
      <RecipeCard />
      <Footer />

    </div>
  );
}

export default App;
