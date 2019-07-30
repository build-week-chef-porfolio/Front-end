import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import HomePageContainer from './components/MainContainer/HomePageContainer';
import Footer from './components/Footer/Footer';
import RecipeCard from './components/Recipes/RecipeCard.js';
import BlogCard from './components/Blog/BlogCard';
import BlogSingle from './components/Blog/BlogSingle';
import BioPage from './components/Bio/BioPage';
import SingleHome from './components/SingleUser/SingleHome';

function App() {
  return (
    <div className="App">
      <Header />
      <HomePageContainer />
      <RecipeCard />
      <BlogCard />
      <BlogSingle />
      <BioPage />
      <SingleHome />
      <Footer />
    </div>
  );
}

export default App;
