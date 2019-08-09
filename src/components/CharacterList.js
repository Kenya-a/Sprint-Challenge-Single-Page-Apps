import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacter] = useState([])

// TODO: Add AJAX/API Request here - must run in `useEffect`
  useEffect(() => {
    const getCharacters = () => {
      axios.get('https://rickandmortyapi.com/api/character/')

      .then(response => {
        console.log('Characters', response.data.results)
        const avatar = response.data.results
         setCharacter(avatar)
      })

      .catch(error => {
        console.log('ERROR', error)
      })
    }
    
    getCharacters();
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return <section className='character-list grid-view'>

      <h2>
        {characters.map((avatar) => <CharacterCard
        image = {avatar.image}
        name = {avatar.name}
        species = {avatar.species}
        location = {avatar.location}
        origin = {avatar.origin}
        episode = {avatar.episode}
        />)}
      </h2>

    </section>

}
