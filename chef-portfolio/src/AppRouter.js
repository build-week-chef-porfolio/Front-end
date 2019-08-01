import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import SingleHome from './components/SingleUser/SingleHome';
import RecipeDetailed from './components/Recipes/RecipeDetailed.js';
import MainMenu from './components/Menu/Menu.js';
import axios from 'axios'
import RecipesList from './components/Recipes/RecipesList';
import SingleRecipesCard from './components/SingleUser/SingleRecipesCard';
import SingleChefCard from './components/SingleUser/SingleChefCard';
import SingleRecipesList from './components/SingleUser/SingleRecipesList';



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
      <Switch>
        <Route 
          exact path='/' 
          render={(props) => (
            <SingleHome 
              {...props}
              recipesData={recipesData}
            />
          )} 
        />
        <Route
          path='/recipes'
          render={(props) => (
            <SingleRecipesList
              {...props}
              recipesData={recipesData}
            />
          )} />
          
        <Route
          path='/chefs'
          render={(props) => (
            <SingleChefCard 
              {...props}
              recipesData={recipesData}
            />
          )} />

      </Switch>
    </div>
  )
}

export default AppRouter;