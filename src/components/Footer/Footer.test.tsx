import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './Footer';

test('componente Footer deve ser renderizado', () => {
  render(<Footer />);

  const titulosDeGrupo = [
    /sobre a al skin/i,
    /loja al skin/i,
    /atendimento/i,
    /blog al skin/i
  ];

  titulosDeGrupo.forEach(titulo => expect(screen.getByText(titulo)).toBeInTheDocument());
});