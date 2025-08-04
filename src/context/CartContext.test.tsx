import { render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import { CartProvider, useCartContext } from './CartContext';

const validText = 'Contexto válido';
const invalidText = 'Contexto inválido';

const ComponentUsingCartContent = () => {
  const context = useCartContext();
  return (
    <p>{ context ? validText : invalidText }</p>
  );
};

test('Deve jogar erro ao usar useCartContext sem Provider', () => {
  const renderizacaoSemProvider = () => (
    render(<ComponentUsingCartContent />)
  );

  expect(renderizacaoSemProvider).toThrow(Error);
  expect(renderizacaoSemProvider).toThrow('useCartContext must be used within a CartProvider');
});

test('Deve renderizar normalmente com Provider', () => {
  render(
    <CartProvider>
      <ComponentUsingCartContent />
    </CartProvider>
  );

  expect(screen.getByText(validText)).toBeInTheDocument();
});