import {useEffect} from 'react';

export default function RestaurantList({loadRestaurants}) {
  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);

  return <div>Restaurant List</div>;
}
