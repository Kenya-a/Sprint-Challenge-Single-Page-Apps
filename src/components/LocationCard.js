import React from 'react'
//import { Card, Icon, Image } from 'semantic-ui-react'
import { Card, Icon, Image } from 'semantic-ui-react'


export default function LocationCard ({name, type, dimension, residence}) {
 
  return (<span classname = 'locationspan'>
          <Card>
        <Image wrapped ui={false} />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Meta>{type}</Card.Meta>
          <Card.Description>
          {dimension}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
              {residence}
          </a>
        </Card.Content>
      </Card>
  </span>
  )
}
