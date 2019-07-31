import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePageContainer from './components/MainContainer/HomePageContainer';
import RecipeDetailed from './components/Recipes/RecipeDetailed.js';
import MainMenu from './components/Menu/Menu.js';
import axios from 'axios'



const AppRouter = () => {

  const [recipesData, setRecipesData] = useState([]);

  useEffect(() => {
    axios.get('https://chefs-portfolio.herokuapp.com/api/users/post')
      .then(response => {
        setRecipesData(response.data.posts);
      })
  }, []);

  return (
    <div className='app-router'>
      <MainMenu />
      <Switch>
        <Route 
          exact path='/' 
          render={(props) => (
            <HomePageContainer 
              {...props}
              recipesData={recipesData}
            />
          )} 
        />
        <Route
          path='/:id'
          render={(props) => {
            return <RecipeDetailed 
              {...props}
              recipesData={recipesData}
            />
          }} />
      </Switch>
    </div>
  )
}

export default AppRouter;