import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductCard from './ProductCard';
import { IProduct } from '../../service/productService';

// Arrange
const product: IProduct = {
  id: 'id-test',
  name: 'name-test',
  description: 'description-test',
  price: 10,
  image: 'img',
  tags: ['tag-test']
};
const handleProductClick = jest.fn();
const handleBuyClick = jest.fn();

test('componente ProductCard deve ser renderizado', () => {
  // Act
  render(<ProductCard
    product={product}
    onProductClick={handleProductClick}
    onBuyClick={handleBuyClick}
  />);

  // Assert
  expect(screen.getByText(product.name)).toBeInTheDocument();
  expect(screen.getByText(product.description)).toBeInTheDocument();
  expect(screen.getByText(product.tags[0])).toBeInTheDocument();
});

test('deve acionar o método onProductClick quando o produto for clicado', () => {
  // Act
  render(<ProductCard
    product={product}
    onProductClick={handleProductClick}
    onBuyClick={handleBuyClick}
  />);

  const card = screen.getByTestId('product-card');
  fireEvent.click(card);

  // Assert
  expect(handleProductClick).toBeCalledWith(product.id);
  expect(handleProductClick).toHaveBeenCalledTimes(1);
});

test('deve acionar o método onProductClick quando tecla Enter ou <Space> for acionada', () => {
  // Act
  render(<ProductCard
    product={product}
    onProductClick={handleProductClick}
    onBuyClick={handleBuyClick}
  />);

  const card = screen.getByTestId('product-card');
  fireEvent.keyDown(card, { key: 'Enter'});

  // Assert
  expect(handleProductClick).toBeCalledWith(product.id);
  expect(handleProductClick).toHaveBeenCalledTimes(1);
});

test('deve acionar o método onBuyClick quando o botão comprar for clicado', () => {
  // Act
  render(<ProductCard
    product={product}
    onProductClick={handleProductClick}
    onBuyClick={handleBuyClick}
  />);

  const button = screen.getByText(/comprar/i);
  fireEvent.click(button);

  // Assert
  expect(handleBuyClick).toHaveBeenCalledTimes(1);
  expect(handleBuyClick).toBeCalledWith(product.id, expect.any(Object));
});