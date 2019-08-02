import React, { useState } from 'react';

const ChefAddRecipe = (props) => {
  const recipesData = props.recipesData;
  const handleSubmit = props.handleClick;

  const [query, setQuery] = useState({
    name: '',
    type: ''
  });

  const handleInputChange = (event) => {
    setQuery({ ...query, [event.target.name]: event.target.value })
  }

  return (
    <section className="chef-add-recipe">
      <form onSubmit={(event) => handleSubmit(event)}>
        {/* <fieldset> */}
          {/* <legend>Add Recipe</legend> */}
          <div className='recipe-name'>
            <label class='col-25'>
              Title:
            <input
                type='text'
                name='name'
                placeholder='Lambda Lamb Bowl'
              // value={member.name}
              // onChange={handleChange}
              />
            </label>
          </div>
          <div className='meal-type'>
            <label>
              Meal Type:
              <select id='meal-type' name='meal-type'>
                <option value='Breakfast'>Breakfast</option>
                <option value='Lunch'>Lunch</option>
                <option value='Dinner'>Dinner</option>
                <option value='Snack'>Snack</option>
                <option value='Appetizer'>Appetizer</option>
              </select>
            </label>
          </div>
          <div className='yield'>
            <label>
              Yield:
            <input
                type='text'
                name='yield'
                placeholder='2 servings'
              // value={member.email}
              // onChange={handleChange}
              />
            </label>
          </div>
          <div className='serving'>
            <label>
              Serving:
            <input
                type='text'
                name='serving'
                placeholder='Serving Size'
              // id='role' 
              // value={member.role}
              // onChange={handleChange}
              />
            </label>
          </div>
          <div className='time'>
            <label>
              Time:
            <input
                type='text'
                name='time'
                placeholder='Total'
              // id='role' 
              // value={member.role}
              // onChange={handleChange}
              />
            </label>
          </div>
          <div className='description'>
            <label>
              Description:
            <input
                type='text'
                name='description'
                placeholder='Spicy Texas Lamb'
              // id='role' 
              // value={member.role}
              // onChange={handleChange}
              />
            </label>
          </div>
          <div className='ingredients'>
            <label>
              Ingredient:
            <textarea
                type='text'
                name='ingredients'
                placeholder='List of Ingredients'
              // id='role' 
              // value={member.role}
              // onChange={handleChange}
              />
            </label>
          </div>
          <div className='directions'>
            <label>
              Directions:
            <textarea
                type='text'
                name='directions'
                placeholder='How would you cook this? Even the secret steps! '
              // id='role' 
              // value={member.role}
              // onChange={handleChange}
              />
            </label>
          </div>
          <button className='add-recipe'>
            SAVE
            {/* {isEditing ? 'Edit Member!' : 'Add Member!'} */}
          </button>
          <button className='preview-recipe'>PREVIEW</button>
          <button className='publish-recipe'>PUBLISH</button>
        {/* </fieldset> */}
      </form>
    </section>


  )
}

export default ChefAddRecipe;