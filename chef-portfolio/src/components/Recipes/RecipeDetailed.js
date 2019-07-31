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
        <img src='https://s3-alpha-sig.figma.com/img/63a0/c427/a8f9f5748d4674375419167bbfa4f6a3?Expires=1565568000&Signature=RvnNSgHeI82x3oBSycFoydUO~-J20c7uiE9OhfkPOXIt3aJ9SlV5EEGMQ9fRq8zE3RlTmVBkXxI80eQ0oWHbymL3Yjj4cJ-TvoV0KNWaNFbWjkbm4fB9CLXvw0BC87scEaTx58yCfrffg~g0D7kMDOjEYFJVYg~cRidIBkr~F~UolOiep4GaeTvbHiq2UNMrVRyA7N2ei9xW0utMXUFPbTpL0qZpDvCc-VyextCDivoDFad6xD~suqRHfw~afqjc4TlmJFMjzYXM2MfXOsE9B84TGm8fTFuJcS8~5yq5zs7i-khERlgpLJDmXFlsPo-aGqzp-6aIQoKQpD00r-T86w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' alt='food photo' />
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