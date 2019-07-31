import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
// }));



const RecipeDetailed = () => {

  // const classes = useStyles();

  return (
    <div className='recipeDetailedWrapper'>
      <div> render header from UI team...DELETE this after</div>
      <div> render navigation from UI team...DELETE this afer</div>
      <div className='img-and-name'>
        <img src='https://s3-alpha-sig.figma.com/img/63a0/c427/a8f9f5748d4674375419167bbfa4f6a3?Expires=1565568000&Signature=RvnNSgHeI82x3oBSycFoydUO~-J20c7uiE9OhfkPOXIt3aJ9SlV5EEGMQ9fRq8zE3RlTmVBkXxI80eQ0oWHbymL3Yjj4cJ-TvoV0KNWaNFbWjkbm4fB9CLXvw0BC87scEaTx58yCfrffg~g0D7kMDOjEYFJVYg~cRidIBkr~F~UolOiep4GaeTvbHiq2UNMrVRyA7N2ei9xW0utMXUFPbTpL0qZpDvCc-VyextCDivoDFad6xD~suqRHfw~afqjc4TlmJFMjzYXM2MfXOsE9B84TGm8fTFuJcS8~5yq5zs7i-khERlgpLJDmXFlsPo-aGqzp-6aIQoKQpD00r-T86w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' alt='food photo' />
        <h1>Sweet Potato Enchiladas</h1>
      </div>
      <div className='recipeInfo'>
        <div className='servings-total-time'>
          <p>Yield: 5 servings</p>
          <p>Total Time: 55 mins</p>
        </div>
        <div className='prep-cook-times'>
          <p>Prep Time: 30 mins</p>
          <p>Cook Time: 25 mins</p>
        </div>
        <div className='oven-temp'>
          <p>Oven Temp: 350&deg;F</p>
        </div>
      </div>
      <div className='recipe-description'>
        <p>Description: Tasty enchilada recipe</p>
      </div>
      {/* <div className={classes.root} className='ingredients-and-instructions'> */}
      {/* <Grid container spacing={3} >
          <Grid item xs={6}>
            <Paper className={classes.paper}>Ingredients</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>Directions</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>2 cups sweet potato</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>1. Preheat oven</Paper>
          </Grid>
          <Grid item xs={3} spacing={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
        </Grid> */}
      {/* </div> */}
    </div>
  )
}

export default RecipeDetailed;