import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import  { Link } from 'react-router-dom';

export default function LocationCard ({name, episode, url}) {
 
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
          <Link to = {url}>
            <Icon name='user' />
              {episode}
          </Link>
        </Card.Content>
      </Card>
  </span>
  )
}