import '@testing-library/jest-dom';
import { act, render, screen } from '@testing-library/react';
import ProductList from './ProductList';
import { formatPrice } from '../../formatters/price';

const mockProducts = [
  {
    id: '1',
    name: 'Produto 1',
    description: 'Descrição do produto 1',
    price: 99.99,
    image: '/image1.jpg',
    tags: ['protection']
  },
  {
    id: '2',
    name: 'Produto 2',
    description: 'Descrição do produto 2',
    price: 149.99,
    image: '/image2.jpg',
    tags: ['face']
  }
];

jest.mock('../../service/productService', () => ({
  productService: {
    getProducts: () => mockProducts,
  },
}));

let mockSearchTerm = '';
jest.mock('../../hooks/useSearch', () => ({
  useSearch: () => ({
    search: mockSearchTerm,
  }),
}));

const mockAddItem = jest.fn();
jest.mock('../../context/CartContext', () => ({
  useCartContext: () => ({
    addItem: mockAddItem
  }),
}));

const renderWithAct = async () => {
  let component;
  await act(async () => {
    component = render(<ProductList />);
  });
  return component;
};


test('componente ProductList deve ser renderizado', async () => {
  // Act
  await renderWithAct();

  // Assert
  expect(screen.getByText(/nossos queridinhos estão aqui/i)).toBeInTheDocument();
});


test('deve exibir produtos corretamente', async () => {
  await renderWithAct();

  const product1 = mockProducts[0];
  const product2 = mockProducts[1];

  expect(screen.getByText(product1.name)).toBeInTheDocument();
  expect(screen.getByText(product1.description)).toBeInTheDocument();
  expect(screen.getByText(formatPrice(product1.price))).toBeInTheDocument();

  expect(screen.getByText(product2.name)).toBeInTheDocument();
  expect(screen.getByText(product2.description)).toBeInTheDocument();
  expect(screen.getByText(formatPrice(product2.price))).toBeInTheDocument();
});

test('Deve chamar console.log ao clicar no produto', async () => {
  const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => undefined);

  await renderWithAct();

  const product1 = mockProducts[0];
  const productCard = screen.getByText(product1.name);
  productCard.click();

  expect(consoleSpy).toHaveBeenCalledWith('Clicou no produto ' + product1.id);

  consoleSpy.mockRestore();
});

test('Deve chamar addItem ao clicar no botão comprar', async () => {
  await renderWithAct();
  const buyButtons = screen.getAllByTestId('buy-button');
  buyButtons[0].click();
  expect(mockAddItem).toHaveBeenCalledTimes(1);
});

test('Deve filtrar produtos com base no termo de busca', async () => {
  const product1 = mockProducts[0];
  const product2 = mockProducts[1];

  mockSearchTerm = product1.name;
  await renderWithAct();

  expect(screen.getByText(product1.name)).toBeInTheDocument();
  expect(screen.queryByText(product2.name)).not.toBeInTheDocument();
});