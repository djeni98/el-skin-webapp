import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CartModal from './CartModal';
import { ICartItem } from '../../store/slices/cartSlice';
import { formatPrice } from '../../formatters/price';

const mockOnClose = jest.fn();

const cartItem: ICartItem = {
  quantity: 10,
  id: '1',
  name: 'Produto 1',
  price: 99.99,
  image: '/image1.jpg'
};

let mockItems: ICartItem[] = [];
const mockUpdateQuantity = jest.fn();
const mockRemoveItem = jest.fn();
const mockGetTotalPrice = jest.fn();

jest.mock('../../hooks/useCart', () => ({
  useCart: () => ({
    items: mockItems,
    updateQuantity: mockUpdateQuantity,
    removeItem: mockRemoveItem,
    getTotalPrice: mockGetTotalPrice
  }),
}));

test('componente CartModal deve ser renderizado', () => {
  render(
    <CartModal
      isOpen={true}
      onClose={mockOnClose}
    />
  );

  expect(screen.getByTestId('cart-modal')).toBeInTheDocument();
});

test('Deve renderizar "carrinho vazio" se não houver itens no carrinho', () => {
  mockItems = [];
  render(
    <CartModal
      isOpen={true}
      onClose={mockOnClose}
    />
  );
  
  expect(screen.getByText(/seu carrinho está vazio/i)).toBeInTheDocument();
});

test('Deve renderizar sumário do carrinho se houver itens', () => {
  mockItems = [cartItem];
  const totalPrice = cartItem.price * cartItem.quantity;

  mockGetTotalPrice.mockReturnValueOnce(totalPrice);
  const formattedPrice = formatPrice(totalPrice);

  render(
    <CartModal
      isOpen={true}
      onClose={mockOnClose}
    />
  );
  
  expect(screen.getByText(cartItem.name)).toBeInTheDocument();
  expect(screen.getByTestId('quantity-display')).toHaveTextContent('1');
  expect(screen.getByTestId('subtotal-display')).toHaveTextContent(formattedPrice);
  expect(screen.getByTestId('total-display')).toHaveTextContent(formattedPrice);
  expect(screen.getByText(/finalizar compra/i)).toBeInTheDocument();

  mockItems = [];
});

test('Deve chamar updateQuantity ao aumentar a quantidade do produto', () => {
  mockItems = [cartItem];
  mockGetTotalPrice.mockReturnValueOnce(cartItem.price);

  render(
    <CartModal
      isOpen={true}
      onClose={mockOnClose}
    />
  );

  const increaseBtn = screen.getByTestId('increase-quantity');
  fireEvent.click(increaseBtn);

  expect(mockUpdateQuantity).toHaveBeenCalledTimes(1);
  expect(mockUpdateQuantity).toBeCalledWith(cartItem.id, cartItem.quantity + 1);

  mockItems = [];
});

test('Deve chamar updateQuantity ao diminuir a quantidade do produto', () => {
  mockItems = [cartItem];
  mockGetTotalPrice.mockReturnValueOnce(cartItem.price);

  render(
    <CartModal
      isOpen={true}
      onClose={mockOnClose}
    />
  );

  const decreaseBtn = screen.getByTestId('decrease-quantity');
  fireEvent.click(decreaseBtn);

  expect(mockUpdateQuantity).toHaveBeenCalledTimes(1);
  expect(mockUpdateQuantity).toBeCalledWith(cartItem.id, cartItem.quantity - 1);

  mockItems = [];
});

test('Deve chamar removeItem ao remover produto do carrinho', () => {
  mockItems = [cartItem];
  mockGetTotalPrice.mockReturnValueOnce(cartItem.price);

  render(
    <CartModal
      isOpen={true}
      onClose={mockOnClose}
    />
  );

  const removeBtn = screen.getByTestId('remove-item');
  fireEvent.click(removeBtn);

  expect(mockRemoveItem).toHaveBeenCalledTimes(1);
  expect(mockRemoveItem).toBeCalledWith(cartItem.id);

  mockItems = [];
});

test('Deve chamar onClose se clicar no overlay', () => {
  render(
    <CartModal
      isOpen={true}
      onClose={mockOnClose}
    />
  );

  const modal = screen.getByTestId('cart-modal-overlay');
  fireEvent.click(modal);

  expect(mockOnClose).toHaveBeenCalledTimes(1);
});

test('Deve chamar onClose se apertar tela <Esc>', () => {
  render(
    <CartModal
      isOpen={true}
      onClose={mockOnClose}
    />
  );

  const modal = screen.getByTestId('cart-modal-overlay');
  fireEvent.keyDown(modal, { key: 'Escape' });

  expect(mockOnClose).toHaveBeenCalledTimes(1);
});

