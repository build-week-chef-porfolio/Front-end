import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import HomePageContainer from './components/MainContainer/HomePageContainer';
import Footer from './components/Footer/Footer';
import RecipeCard from './components/Recipes/RecipeCard.js';

function App() {
  return (
    <div className="App">
      <Header />
      <HomePageContainer />
      <RecipeCard />
      <Footer />
    </div>
  );
}

export default App;
