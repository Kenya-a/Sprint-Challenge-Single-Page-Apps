import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocationCard from './LocationCard';

export default function LocationsList() {
    const [locations, setLocation] = useState([]);

    useEffect(()=> {

        const getLocations = () => {

            axios.get('https://rickandmortyapi.com/api/location/')

            .then(response => {
                console.log('Locations:', response.data.results)
                const destination = response.data.results
                setLocation(destination)
            })

            .catch(error => {
                console.log('Error:', error)
            })

        }

        getLocations();

    }, []);

    return (

        <div>

        {locations.map((destination) => <LocationCard
        name = {destination.name}/>)}

        </div>
        
        )
        

}

