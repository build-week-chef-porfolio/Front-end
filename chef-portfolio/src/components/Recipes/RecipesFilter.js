import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const DropdownFilterSearchInMenu = (props) => {

  const recipesData = props.recipesData;

  return (
    <>
      <Dropdown
        text='Title'
        icon='filter'
        floating
        labeled
        button
        className='icon'
      >
        <Dropdown.Menu>
          <Dropdown.Menu scrolling>
            {recipesData.map(recipe => {
              return <Dropdown.Item key={recipe.id}>{recipe.title}</Dropdown.Item>
            })}
          </Dropdown.Menu>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown
        text='Chef'
        icon='filter'
        floating
        labeled
        button
        className='icon'
      >
        <Dropdown.Menu>
          <Dropdown.Menu scrolling>
            {recipesData.map(recipe => {
              return <Dropdown.Item key={recipe.id}>{recipe.chef_id}</Dropdown.Item>
            })}
          </Dropdown.Menu>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown
        text='Meal Type'
        icon='filter'
        floating
        labeled
        button
        className='icon'
      >
        <Dropdown.Menu>
          <Dropdown.Menu scrolling>
            {recipesData.map(recipe => {
              return <Dropdown.Item key={recipe.id}>{recipe.meal_type}</Dropdown.Item>
            })}
          </Dropdown.Menu>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown
        text='Ingredient'
        icon='filter'
        floating
        labeled
        button
        className='icon'
      >
        <Dropdown.Menu>
          <Dropdown.Menu scrolling>
            {recipesData.map(recipe => {
              return <Dropdown.Item key={recipe.id}>{recipe.ingredient}</Dropdown.Item>
            })}
          </Dropdown.Menu>
        </Dropdown.Menu>
      </Dropdown>
    </>
  )

}

export default DropdownFilterSearchInMenu;