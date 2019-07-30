import React from 'react'

const RecipeDetailed = () => {
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
          Yield: 5 servings
          Total Time: 55 mins
        </div>
        <div className='prep-cook-times'>
          Prep Time: 30 mins
          Cook Time: 25 mins
        </div>
        <div className='oven-temp'>
          Oven Temp: 350
        </div>
      </div>
    </div>
  )
}

export default RecipeDetailed;