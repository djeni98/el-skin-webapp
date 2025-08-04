import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SearchProvider, useSearchContext } from './SearchContext';

const validText = 'Contexto válido';
const invalidText = 'Contexto inválido';

const ComponentUsingSearchContent = () => {
  const context = useSearchContext();
  return (
    <p>{ context ? validText : invalidText }</p>
  );
};

test('Deve jogar erro ao usar useSearchContext sem Provider', () => {
  const renderizacaoSemProvider = () => (
    render(<ComponentUsingSearchContent />)
  );

  expect(renderizacaoSemProvider).toThrow(Error);
  expect(renderizacaoSemProvider).toThrow('useSearch must be used within a SearchProvider');
});

test('Deve renderizar normalmente com Provider', () => {
  render(
    <SearchProvider>
      <ComponentUsingSearchContent />
    </SearchProvider>
  );

  expect(screen.getByText(validText)).toBeInTheDocument();
});