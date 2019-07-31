import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const RecipeCard = (props) => {
  const recipeData = props.recipeData;
  return (
    <Card>
      {/* <NavLink to={`/recipe-title`}> */}
      <Image src='https://images.unsplash.com/photo-1511911063855-2bf39afa5b2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1834&q=80' as='a'
        size='medium'
        href={`/${recipeData.id}`}
        alt={recipeData.title} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{recipeData.title}</Card.Header>
          <Card.Meta>
            <span className='description'>{recipeData.description}</span>
          </Card.Meta>
          <Card.Description>
            <span className='author'>By: {recipeData.chef_id}</span>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='cardIconWrapper'>
            <a>
              <Icon name='heart outline' />
              22
      </a>
            <a>
              <Icon name='comment outline' />
              15
      </a>
          </div>
        </Card.Content>
      {/* </NavLink> */}
    </Card>
  )
}

export default RecipeCard;