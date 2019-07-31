import React from 'react';
import { Grid, Header, Image } from 'semantic-ui-react';
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
      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
            <div className='img-and-name'>
            <img src={recipeToDisplay.imgURL} alt='food photo' />
            <h1>{recipeToDisplay.title}</h1>
            </div>
          </Grid.Column>
        </Grid.Row>

      </Grid>
      
        <div className='recipeChefInfo'>
          <img src='https://s3-alpha-sig.figma.com/img/a729/e5df/b640ff2a85dfac945ac466139ed05c59?Expires=1565568000&Signature=DjOkk94C7GgdMqYa5I4UVmzUEMFSpNkG73lNhORsGKllh9SAQKMoe4j3PrAZ0RFGUzjKaOTBdCfbPsM4u8SasGIyO7ukuozu-xCPHAEMcTRgF4v8ztIA42PA1VrrS0CXsR1w2KhxE4pGjGu9A57UW0VB2E3pq74I6WuQ9Me9R4h8FA0twTVdh8~676oUVWKkUDl~0lStdv-aIwSQpu7MRwGO3gKYvk7PPmoSefwkJs3r4DHBTGMy9NgfiQau~wRbvEASo34MVtMQ72nPfhMYInPAQY-XnHmIKmnCZvNGBiviYH~WWg5flTWyUZ24kQHEYTqH1BCk-O25hTT4qpzkyQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' alt='${recipeToDisplay.chef_id}'/>
          <p>{recipeToDisplay.chef_id}</p>

        </div>
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
          <p>Meal: {recipeToDisplay.meal_type}  </p> 
        </div>
      </div>
      <div className='recipe-description'>
        <p>Description: {recipeToDisplay.description}</p>
      </div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header size='medium'>Ingredient</Header>
            <p>{recipeToDisplay.ingredient}</p>
          </Grid.Column>
          <Grid.Column width={8}>
            <Header size='medium'>Directions</Header>
            <p>{recipeToDisplay.directions}</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default RecipeDetailed;