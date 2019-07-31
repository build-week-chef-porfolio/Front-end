import React from 'react';

const getRecipeToDisplay = (recipesData, selectedRecipe) => {
  if (recipesData.length === 0) {
    return [];
  } else if (!selectedRecipe) {
    return recipesData;
  } else {
    // recipesData.forEach(recipeData => {
    //   console.log(recipeData)

    // })
    return recipesData.find(recipeData => recipeData.id == selectedRecipe);
  }
}

const RecipeDetailed = (props) => {

  const recipesData = props.recipesData;

  console.log('recipesData in RecipeDetailed', recipesData)
  console.log('recipesData', recipesData)

  const selectedRecipe = props.match.params.id;
  console.log('selectedRecipe', selectedRecipe)
  let recipeToDisplay = getRecipeToDisplay(recipesData, selectedRecipe);
  console.log('recipeToDisplay Object', recipeToDisplay)


  return (
    <div className='recipeDetailedWrapper'>
      <div className='img-and-name'>
        <img src={recipeToDisplay.imgURL} alt='food photo' />
        <h1>{recipeToDisplay.title}</h1>
      </div>
      <div className='recipeInfo'>
        <div className='servings-total-time'>
          <p>Yield: {recipeToDisplay.yield}</p>
          <p>Total Time: {recipeToDisplay.total_time}</p>
        </div>
        <div className='prep-cook-times'>
          <p>Prep Time: {recipeToDisplay.prep_time}</p>
          <p>Cook Time: {recipeToDisplay.cook_time}</p>
        </div>
        <div className='oven-temp'>
          <p>Oven Temp: {recipeToDisplay.oven_temperature}</p>
        </div>
      </div>
      <div className='recipe-description'>
        <p>Description: {recipeToDisplay.description}</p>
      </div>
    </div>
  )
}

export default RecipeDetailed;