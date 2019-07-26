import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocationCard from './LocationCard'

export default function LocationsList() {
    const [locatiions, setLocation] = useState([])
    useEffect(()=> {
        const getLocations = () => {
            axios.get('https://rickandmortyapi.com/api/locations/')

            .then(response => {
                console.log('Locations:', response.data)
                const destination = response.data
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
        <LocationCard/>
        </div>
        
        )
        

}

