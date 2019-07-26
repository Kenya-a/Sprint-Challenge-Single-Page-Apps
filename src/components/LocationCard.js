import React from 'react'
//import { Card, Icon, Image } from 'semantic-ui-react'
import { Card, Icon, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default function LocationCard ({name, type, dimension, residence}) {
 
  return (<span classname = 'locationspan'>
          <Card>
        <Image wrapped ui={false} />
        <Card.Content>
          <Card.Header>Location: {name}</Card.Header>
          <Card.Meta>Type: {type}</Card.Meta>
          <Card.Description>
          Dimension: {dimension}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Link>
            <Icon name='user' />
              {residence}
          </Link>
        </Card.Content>
      </Card>
  </span>
  )
}
