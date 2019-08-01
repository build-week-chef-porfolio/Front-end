import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react';

const SingleChefCard = (props) => {
    const recipeData = props.recipeData;
    return (
        <div className='.singleheaderWrapper'>
      <Card>
        {/* <NavLink to={`/recipe-title`}> */}
        <Image src={recipeData.imgURL} as='a'
          href={`/${recipeData.id}`}
          alt={recipeData.title} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{recipeData.title}</Card.Header>
            <Card.Meta>
              <span className='description'>{recipeData.description}</span>
            </Card.Meta>
            <Card.Description>
              <span className='author'>By: {recipeData.chef}</span>
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
      </div>
    )
  }
  
  export default SingleChefCard;