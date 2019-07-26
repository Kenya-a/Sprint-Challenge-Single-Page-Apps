import React from 'react';
import { useState } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

export default function CharacterCard (key, props) {
  // const { name, species, location, origin, episode } = characters;
  
  return (<span>
    <span>
      <Card>
        <Image src={key.image} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{key.name}</Card.Header>
          <Card.Meta>{key.species}</Card.Meta>
          <Card.Description>
          {key.location.name}
          </Card.Description>
          <Card.Description>
          {key.origin.name}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            {key.episode}
          </a>
        </Card.Content>
      </Card>
      </span>
      </span>
    )
    
}
