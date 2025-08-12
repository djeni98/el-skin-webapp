import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react';
import { act } from 'react';
import { useSearch } from './useSearch';
import { createWrapperWithStore } from '../testHelper';

test('Deve iniciar a busca vazia', () => {
  const { wrapper } = createWrapperWithStore();
  const { result } = renderHook(() => useSearch(), { wrapper });

  // Assert
  expect(result.current.search).toEqual('');
});

test('Deve atualizar valor da busca ao chamar setSearch', () => {
  const { wrapper } = createWrapperWithStore();
  const { result } = renderHook(() => useSearch(), { wrapper });

  const newSearch = 'New search value';
  act(() => result.current.setSearch(newSearch));

  expect(result.current.search).toEqual(newSearch);
});