import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePageContainer from './components/MainContainer/HomePageContainer.js';
import RecipeDetailed from './components/Recipes/RecipeDetailed.js';
import axios from 'axios';
import ChefList from './components/Chef/ChefList.js';
import SingleRecipeList from './components/Recipes/SingleRecipeList';

const AppRouter = () => {

  // hook for data of all recipes in the API
  const [recipesData, setRecipesData] = useState([]);

  useEffect(() => {
    axios
      .get('https://chefs-portfolio.herokuapp.com/api/users/post')
      .then(response => {
        setRecipesData(response.data.posts);
      })
      .catch(err => console.log('there is an error in Recipe data fetch', err))
  }, []);

  // hook for data of all chefs in the API
  const [chefsData, setChefsData] = useState([]);

  useEffect(() => {
    axios
      .get('https://chefs-portfolio.herokuapp.com/api/users/chef')
      .then(response => {
        setChefsData(response.data.chefs);
      })
      .catch(err => console.log('error in chef data fetch', err));
  }, [])

  // hook for search query
  const [searchQuery, setSearchQuery] = useState('');
  // hook for data from search query
  const [queryData, setQueryData] = useState();

  const onSearch = (query) => {
    if (query.title === 'Caramel Cake') {
      setSearchQuery(1);
    }
  }

  useEffect(() => {
    axios
      .get(
        `https://chefs-portfolio.herokuapp.com/api/users/post/${searchQuery}`
      )
      .then(result => {
        setQueryData(result.data.post);
      })
      .catch(error => {
        console.log('error in app.js', error);
      });
  }, [searchQuery])

  return (
    <div className='app-router'>
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
          exact path='/recipes'
          render={(props) => (
            <SingleRecipeList
              {...props}
              recipesData={recipesData}
              onSearch={onSearch}
              queryData={queryData}
            />
          )} 
        />
       <Route
          path='/chefs/'
          render={(props) => (
            <ChefList 
              {...props}
              chefsData={chefsData}
            />
          )}
        />
        <Route
          path='/recipes/:id'
          render={(props) => (
            <RecipeDetailed 
              {...props}
              recipesData={recipesData}
            />
          )}
        />
      </Switch>
    </div>
  )
}

export default AppRouter;