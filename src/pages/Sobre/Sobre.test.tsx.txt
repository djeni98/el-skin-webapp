import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Sobre from './Sobre';

test('tela Sobre deve ser renderizada', () => {
  render(<Sobre />);

  const titulo = /sobre a AL SKIN/i;
  const subtitulos = [
    /quem somos/i,
    /por que existimos/i,
    /o que a gente faz/i
  ];

  expect(screen.getByText(titulo)).toBeInTheDocument();
  subtitulos.forEach((subtitulo) => {
    expect(screen.getByText(subtitulo)).toBeInTheDocument();
  });
});