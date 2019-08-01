import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePageContainer from './components/MainContainer/HomePageContainer';
import RecipeDetailed from './components/Recipes/RecipeDetailed.js';
import MainMenu from './components/Menu/Menu.js';
import axios from 'axios'
import ChefList from './components/Chef/ChefList';



const AppRouter = () => {

  const [recipesData, setRecipesData] = useState([]);

  useEffect(() => {
    axios
      .get('https://chefs-portfolio.herokuapp.com/api/users/post')
      .then(response => {
        setRecipesData(response.data.posts);
      })
      .catch(err => console.log('there is an error in Recipe data fetch', err))
  }, []);


  const [chefsData, setChefsData] = useState([]);

  useEffect(() => {
    axios
      .get('https://chefs-portfolio.herokuapp.com/api/users/chef')
      .then(response => {
        setChefsData(response.data.chefs);
      })
      .catch(err => console.log('error in chef data fetch', err));
  }, [])

  console.log('chefsData', chefsData);

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
              chefsData={chefsData}
            />
          )} 
        />
        <Route
          path='/:id'
          render={(props) => (
            <RecipeDetailed 
              {...props}
              recipesData={recipesData}
            />
          )}
        />
        {/* <Route 
          path='/:chefName'
          render={(props) => (
            <ChefList 
              {...props}
              chefsData={chefsData}
            />
          )}
        /> */}
      </Switch>
    </div>
  )
}

export default AppRouter;