import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'


export default function LocationCard ({ name, type, dimension, residents }) {
  // image={image}
  return (<span>todo: location
       <Card>
        <Card.Content>
          <Card.Header>Location</Card.Header>
          <Card.Meta>where??</Card.Meta>
          <Card.Description>
         Description
          </Card.Description>
          <Card.Description>
          Random
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            Inhabitants
          </a>
        </Card.Content>
      </Card>
  </span>
  )
}
