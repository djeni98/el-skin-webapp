import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './Home';
import { act } from 'react';

jest.mock('../../service/productService', () => ({
  productService: {
    getProducts: () => [],
  },
}));

jest.mock('../../service/carroselService', () => ({
  carouselService: {
    getCarouselItems: () => [],
  },
}));

jest.mock('../../context/SearchContext', () => ({
  useSearchContext: () => ({
    search: '',
  }),
}));

jest.mock('../../context/CartContext', () => ({
  useCartContext: () => ({ }),
}));

test('página Home deve ser renderizada', async () => {
  await act(async () => render(<Home />));

  expect(screen.getByText(/nossos queridinhos estão aqui/i)).toBeInTheDocument();
});