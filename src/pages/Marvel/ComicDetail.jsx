import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getComicDetail } from '../../services/marvel.service';

function ComicDetail() {
  const { id } = useParams();
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getComicDetail(id);
      setResponse(response);
    };

    fetchData().catch(console.error);
  }, []);

  const comic = response?.data.results[0];
  const image = `${comic?.thumbnail?.path}.${comic?.thumbnail?.extension}`;
  

  return (
    <div>ComicDetail</div>
  )
}

export default ComicDetail