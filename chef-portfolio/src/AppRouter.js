import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePageContainer from './components/MainContainer/HomePageContainer.js';
import RecipeDetailed from './components/Recipes/RecipeDetailed.js';
import axios from 'axios';
import ChefList from './components/Chef/ChefList.js';
import RecipesList from './components/Recipes/RecipesList.js';
import RecipeCard from './components/Recipes/RecipeCard.js';

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


  const [searchQuery, setSearchQuery] = useState('');
  const [queryData, setQueryData] = useState();

  const onSearch = (query) => {
    // event.preventDefault();
    console.log('query in AppRouter --> handleClick', query)
    if (query.title === 'Caramel Cake') {
      setSearchQuery(1);
    }
  }

  console.log('search QUery', searchQuery);

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
            <RecipesList
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