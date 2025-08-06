import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';
import { act } from 'react';

const mockGetTotalItems = jest.fn();
jest.mock('../../context/CartContext', () => ({
  useCartContext: () => ({
    items: [],
    getTotalItems: mockGetTotalItems
  }),
}));

let mockSearch = '';
const mockSetSearch = jest.fn();
jest.mock('../../hooks/useSearch', () => ({
  useSearch: () => ({
    search: mockSearch,
    setSearch: mockSetSearch
  }),
}));

test('componente Header deve ser renderizado', () => {
  render(<Header />);

  const links = [
    /categorias/i,
    /tipo de pele/i,
    /necessidade/i,
    /ingredientes/i
  ];
  
  links.forEach(link => (
    expect(screen.getByText(link)).toBeInTheDocument()
  ));
});

const renderWithAct = async () => {
  let component;
  await act(async () => {
    component = render(<Header />);
  });
  return component;
};


test('Deve atualizar termo de busca ao digitar na barra de busca', () => {
  render(<Header />);

  const searchInput = screen.getByPlaceholderText(/o que você está procurando/i);

  const searchInputValue = 'valor de busca';
  fireEvent.change(searchInput, { target: { value: searchInputValue }});

  expect(mockSetSearch).toBeCalledTimes(1);
  expect(mockSetSearch).toBeCalledWith(searchInputValue);
});

test('Deve chamar console.log ao clicar no botão de busca', () => {
  mockSearch = 'Search term';
  const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => undefined);

  render(<Header />);

  const searchButton = screen.getByTestId('search-button');
  searchButton.click();

  expect(consoleSpy).toHaveBeenCalledWith('Você pesquisou por: ' + mockSearch);

  consoleSpy.mockRestore();
});

test('Deve abrir modal do carrinho ao clicar no botão de carrinho', async () => {
  await renderWithAct();

  const cartButton = screen.getByTestId('cart-button');
  act(() => cartButton.click());

  expect(screen.getByTestId('cart-modal')).toBeInTheDocument();
  expect(screen.getByText(/seu carrinho está vazio/i)).toBeInTheDocument();
});

test('Deve fechar o modal do carrinho ao clicar no botão de X do modal', async () => {
  await renderWithAct();

  const cartButton = screen.getByTestId('cart-button');
  act(() => cartButton.click());

  const cartModalCloseButton = screen.getByTestId('cart-modal-close');
  act(() => cartModalCloseButton.click());
  
  expect(screen.queryByTestId('cart-modal')).not.toBeInTheDocument();
});

