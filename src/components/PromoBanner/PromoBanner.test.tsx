import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PromoBanner from './PromoBanner';

test('componente PromoBanner deve ser renderizado', () => {
  render(<PromoBanner />);

  const destaque = /primeira compra/i;
  const cupom = /PRIMEIRA25/i;

  expect(screen.getByText(destaque)).toBeInTheDocument();
  expect(screen.getByText(cupom)).toBeInTheDocument();
});