import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
// import { Card, Icon, Image } from 'semantic-ui-react'


export default function LocationCard (key, props) {
  // image={image}
  return (<span classname = 'locationspan'>
          <Card>
        <Image src={key.image} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{key.name}</Card.Header>
          <Card.Meta>{key.type}</Card.Meta>
          <Card.Description>
          {key.dimension}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
              {key.residence}
          </a>
        </Card.Content>
      </Card>
  </span>
  )
}
