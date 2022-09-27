import RestaurantList from './RestaurantList';
import {useRestaurants} from './useRestaurants';

export default function RestaurantScreen() {
  return (
    <div>
      <h1>Restaurants</h1>
      <RestaurantList useRestaurants={useRestaurants} />
    </div>
  );
}
