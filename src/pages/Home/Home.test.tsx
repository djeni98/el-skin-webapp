import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './Home';
import { act } from 'react';

const mockProducts = [
  {
    id: '1',
    name: 'Produto 1',
    description: 'Descrição do produto 1',
    price: 99.99,
    image: '/image1.jpg',
    tags: ['protection']
  }
];

jest.mock('../../store/api/apiSlice', () => ({
  useGetProductsQuery: () => ({
    data: mockProducts,
    isLoading: false,
    error: false,
  }),
  useGetCarouselItemsQuery: () => ({
    data: [],
    isLoading: false,
    error: false,
  })
}));

jest.mock('../../hooks/useSearch', () => ({
  useSearch: () => ({
    search: '',
  }),
}));

jest.mock('../../hooks/useCart', () => ({
  useCart: () => ({ }),
}));

test('página Home deve ser renderizada', async () => {
  await act(async () => render(<Home />));

  expect(screen.getByText(/nossos queridinhos estão aqui/i)).toBeInTheDocument();
});