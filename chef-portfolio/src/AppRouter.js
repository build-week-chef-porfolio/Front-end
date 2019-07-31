import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePageContainer from './components/MainContainer/HomePageContainer';
import RecipeDetailed from './components/Recipes/RecipeDetailed.js';
import MainMenu from './components/Menu/Menu.js';

const AppRouter = () => {
  return (
    <div className='app-router'>
      <MainMenu />
      <Switch>
        <Route exact path='/' component={HomePageContainer} />
        <Route path='/recipe-title' component={RecipeDetailed} />
      </Switch>
    </div>
  )
}

export default AppRouter;