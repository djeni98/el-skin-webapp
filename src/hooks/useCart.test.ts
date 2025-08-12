import { renderHook } from '@testing-library/react';
import { useCart } from './useCart';
import { act } from 'react';
import { createWrapperWithStore } from '../testHelper';

const newItem = {
  id: '1',
  name: 'Produto Teste',
  price: 99.99,
  image: '/test.jpg'
};

test('Deve iniciar o carrinho vazio', () => {
  const { wrapper } = createWrapperWithStore();
  const { result } = renderHook(() => useCart(), { wrapper });

  // Assert
  expect(result.current.items).toEqual([]);
  expect(result.current.getTotalItems()).toBe(0);
  expect(result.current.getTotalPrice()).toBe(0);
});

test('Deve adicionar um item no carrinho ao chamar addItem', () => {
  const { wrapper } = createWrapperWithStore();
  const { result } = renderHook(() => useCart(), { wrapper });

  act(() => result.current.addItem(newItem));

  expect(result.current.items).toHaveLength(1);
  expect(result.current.getTotalItems()).toBe(1);
  expect(result.current.getTotalPrice()).toBe(newItem.price);
});

test('Deve aumentar quantidade de um item no carrinho ao chamar addItem', () => {
  const { wrapper } = createWrapperWithStore();
  const { result } = renderHook(() => useCart(), { wrapper });

  act(() => result.current.addItem(newItem));
  act(() => result.current.addItem(newItem));

  expect(result.current.items).toHaveLength(1);
  expect(result.current.getTotalItems()).toBe(2);
  expect(result.current.getTotalPrice()).toBe(newItem.price * 2);
});

test('Deve remover item do carrinho ao chamar removeItem', () => {
  const { wrapper } = createWrapperWithStore();
  const { result } = renderHook(() => useCart(), { wrapper });

  act(() => result.current.addItem(newItem));
  act(() => result.current.addItem(newItem));
  act(() => result.current.removeItem(newItem.id));

  expect(result.current.items).toHaveLength(0);
  expect(result.current.getTotalItems()).toBe(0);
  expect(result.current.getTotalPrice()).toBe(0);
});

test('Deve alterar quantidade de um item no carrinho ao chamar updateQuantity', () => {
  const { wrapper } = createWrapperWithStore();
  const { result } = renderHook(() => useCart(), { wrapper });

  act(() => result.current.addItem(newItem));
  act(() => result.current.updateQuantity(newItem.id, 10));

  expect(result.current.items).toHaveLength(1);
  expect(result.current.getTotalItems()).toBe(10);
  expect(result.current.getTotalPrice()).toBe(newItem.price * 10);
});

test('Deve remover item do carrinho ao chamar updateQuantity com quantidade igual ou inferior a zero', () => {
  const { wrapper } = createWrapperWithStore();
  const { result } = renderHook(() => useCart(), { wrapper });

  act(() => result.current.addItem(newItem));
  act(() => result.current.updateQuantity(newItem.id, 0));

  expect(result.current.items).toHaveLength(0);
  expect(result.current.getTotalItems()).toBe(0);
  expect(result.current.getTotalPrice()).toBe(0);
});

test('Deve limpar carrinho ao chamar clearCart', () => {
  const { wrapper } = createWrapperWithStore();
  const { result } = renderHook(() => useCart(), { wrapper });

  act(() => result.current.addItem(newItem));
  act(() => result.current.clearCart());

  expect(result.current.items).toEqual([]);
  expect(result.current.getTotalItems()).toBe(0);
  expect(result.current.getTotalPrice()).toBe(0);
});