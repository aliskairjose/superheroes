import axios from "axios";
import { useState, useEffect } from "react";

export function useGetCharacter() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://rickandmortyapi.com/api/character");
      setData(response.data.results)
    };

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  return { data };
}
