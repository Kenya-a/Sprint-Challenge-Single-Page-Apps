import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
// import { Link } from 'react';

export default function LocationCard ({name, episode}) {
 
  return (<span classname = 'locationspan'>
          <Card>
        <Image wrapped ui={false} />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Meta></Card.Meta>
          <Card.Description>
          
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
              {episode}
          </a>
        </Card.Content>
      </Card>
  </span>
  )
}