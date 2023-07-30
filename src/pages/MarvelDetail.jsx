import React from 'react'
import { useParams } from 'react-router-dom'
import { getCharacterDetail } from '../services/marvel.service';
import { useState, useEffect } from 'react';

function MarvelDetail() {
  const {id} = useParams();
  const [personaje, setPersonaje] = useState(null);

  const image = `${personaje?.thumbnail.path}.${personaje?.thumbnail.extension}`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await getCharacterDetail(id);
      setPersonaje(response.results[0]);
    };

    fetchData().catch(console.error);
  }, []);


  return (
    <div>{personaje?.name}</div>
  )
}

export default MarvelDetail