import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NotFound from './page';

test('tela NotFound deve ser renderizada', () => {
  render(<NotFound />);

  const titulo = /página não encontrada/i;
  const voltarInicio = /voltar para o início/i;

  expect(screen.getByText(titulo)).toBeInTheDocument();
  expect(screen.getByText(voltarInicio)).toBeInTheDocument();
});