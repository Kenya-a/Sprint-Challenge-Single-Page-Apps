import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard'

export default function EpisodeList() {
  // TODO: Add useState to track data from useEffect
  const [episodes, setEpisode] = useState([])

// TODO: Add AJAX/API Request here - must run in `useEffect`
  useEffect(() => {
    const getEpisodes = () => {
      axios.get('https://rickandmortyapi.com/api/episode/')

      .then(response => {
        console.log('episodes', response.data.results)
        const show = response.data.results
         setEpisode(show)
      })

      .catch(error => {
        console.log('ERROR', error)
      })
    }
    
    getEpisodes();
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return <div>

      <h2>
        {episodes.map((show) => <EpisodeCard
        
        name = {show.name}
       
        episode = {show.episode}
        />)}
      </h2>

    </div>

}
