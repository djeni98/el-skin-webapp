import searchReducer, { setSearchTerm } from './searchSlice';

const estadoInicial = { searchTerm: '' };

test('Deve iniciar o estado inicial com searchTerm vazio', () => {
  const novoEstado = searchReducer(undefined, { type: '' });
  expect(novoEstado).toEqual(estadoInicial);
});

test('Deve alterar o searchTerm ao usar ação setSearchTerm', () => {
  const newTerm = 'termo de busca';

  const novoEstado = searchReducer(estadoInicial, setSearchTerm(newTerm));
  expect(novoEstado).toEqual({ searchTerm: newTerm });
});

