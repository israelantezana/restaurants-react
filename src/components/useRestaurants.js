import {useEffect, useState} from 'react';
const axios = require('axios').default;

export function useRestaurants() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getRestaurants() {
      try {
        const {data} = await axios.get(
          'https://api.outsidein.dev/nkt25RaVlQOPIXq6iEZ6a8pbJrgvzqYv/restaurants',
        );
        setRestaurants(data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getRestaurants();
  }, []);

  return {restaurants, loading};
}
