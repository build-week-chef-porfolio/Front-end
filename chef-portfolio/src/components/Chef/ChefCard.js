import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const ChefCard = (props) => {
  const chefData = props.chefData;
  return (
      <Card>
        <Image src='https://bloximages.newyork1.vip.townnews.com/gazette.com/content/tncms/assets/v3/editorial/d/6f/d6facaea-e5ce-54ee-8cab-69b691db892f/5b32c1b444b95.image.jpg' wrapped ui={false} />
        <Card.Content>
          <Card.Header>{chefData.first_name} {chefData.last_name}</Card.Header>
          <Card.Meta>
            <span className='date'>{chefData.chef_type}</span>
          </Card.Meta>
          <Card.Description>
            {chefData.first_name} is from {chefData.city}, {chefData.zip_code}.
        </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            22 Friends
        </a>
        </Card.Content>
      </Card>

  )
}

export default ChefCard;