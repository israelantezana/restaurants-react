import {useRestaurants} from './useRestaurants';

export default function RestaurantList() {
  const {restaurants, error} = useRestaurants();

  return (
    <div>
      {error ? <div>Error, intentelo más tarde</div> : null}
      <ul>
        {restaurants.map(restaurant => (
          <li key={restaurant.id}>{restaurant.name}</li>
        ))}
      </ul>
    </div>
  );
}
