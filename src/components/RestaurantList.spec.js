/* eslint-disable jest/valid-expect */
/* eslint-disable testing-library/no-wait-for-multiple-assertions */
/* eslint-disable no-unused-expressions */
import {render, screen, waitFor} from '@testing-library/react';
import RestaurantList from './RestaurantList';

import {rest} from 'msw';
import {setupServer} from 'msw/node';
import {act} from 'react-dom/test-utils';

describe('RestaurantList', () => {
  const restaurantsUrl =
    'https://api.outsidein.dev/nkt25RaVlQOPIXq6iEZ6a8pbJrgvzqYv/restaurants';

  const restaurantsResponse = rest.get(restaurantsUrl, (req, res, ctx) => {
    return res(
      ctx.json([
        {id: 1, name: 'Sushi Place'},
        {id: 2, name: 'Pizza Place'},
      ]),
    );
  });

  const restaurantsErrorResponse = rest.get(restaurantsUrl, (req, res, ctx) => {
    return res(ctx.status(500));
  });


  const restaurantsNotFoundResponse = rest.get(restaurantsUrl, (req, res, ctx) => {
    return res(ctx.status(404));
  });

  const handlers = [restaurantsResponse];

  const server = new setupServer(...handlers);

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('displays the restaurants', async () => {
    render(<RestaurantList />);

    await waitFor(() => {
      expect(screen.getByText('Sushi Place')).toBeInTheDocument;
      expect(screen.getByText('Pizza Place')).toBeInTheDocument;
    });
  });

  it('Shows error message when api response with an error', async () => {
    server.use(restaurantsErrorResponse);
    render(<RestaurantList />);
    await waitFor(() => {
      const errorMessage = screen.getByText('Error, intentelo más tarde');
      expect(errorMessage).toBeVisible;
    });
  });

  it('Shows error message when api response of not found', async () => {
    server.use(restaurantsNotFoundResponse);
    render(<RestaurantList />); 
    await waitFor(() => {
      const errorMessage = screen.getByText('Error, intentelo más tarde');
      expect(errorMessage).toBeVisible;
    });
  });
});
