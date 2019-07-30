import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const RecipeCard = () => {
  return (
    <Card>
      <Image src='https://s3-alpha-sig.figma.com/img/63a0/c427/a8f9f5748d4674375419167bbfa4f6a3?Expires=1565568000&Signature=RvnNSgHeI82x3oBSycFoydUO~-J20c7uiE9OhfkPOXIt3aJ9SlV5EEGMQ9fRq8zE3RlTmVBkXxI80eQ0oWHbymL3Yjj4cJ-TvoV0KNWaNFbWjkbm4fB9CLXvw0BC87scEaTx58yCfrffg~g0D7kMDOjEYFJVYg~cRidIBkr~F~UolOiep4GaeTvbHiq2UNMrVRyA7N2ei9xW0utMXUFPbTpL0qZpDvCc-VyextCDivoDFad6xD~suqRHfw~afqjc4TlmJFMjzYXM2MfXOsE9B84TGm8fTFuJcS8~5yq5zs7i-khERlgpLJDmXFlsPo-aGqzp-6aIQoKQpD00r-T86w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' wrapped ui={false} />
      <Card.Content>
        <Card.Header>Liver Soup</Card.Header>
        <Card.Meta>
          <span className='description'>Soup for your Liver</span>
        </Card.Meta>
        <Card.Description>
          <span className='author'>By Chef Ben Roberts</span>
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
    </Card>
  )
}

export default RecipeCard;