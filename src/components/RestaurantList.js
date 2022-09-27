export default function RestaurantList({useRestaurants}) {
  const {restaurants, loading} = useRestaurants();

  return (
    <div>
      {loading && <div>Cargando...</div>}
      {!loading && (
        <ul>
          {restaurants.map(restaurant => (
            <li key={restaurant.id}>{restaurant.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
