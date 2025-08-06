import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react';
import { act, ReactNode } from 'react';
import { useSearch } from './useSearch';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../store/slices/searchSlice';

const createTestStore = () => configureStore({
  reducer: {
    search: searchReducer,
  },
});

const createWrapper = (store: ReturnType<typeof createTestStore>) => {
  const TestWrapper = ({ children }: { children: ReactNode }) => (
    <Provider store={store}>{children}</Provider>
  );
  TestWrapper.displayName = 'TestWrapper';
  return TestWrapper;
};

test('Deve iniciar a busca vazia', () => {
  const store = createTestStore();
  const wrapper = createWrapper(store);
  const { result } = renderHook(() => useSearch(), { wrapper });

  // Assert
  expect(result.current.search).toEqual('');
});

test('Deve atualizar valor da busca ao chamar setSearch', () => {
  const store = createTestStore();
  const wrapper = createWrapper(store);
  const { result } = renderHook(() => useSearch(), { wrapper });

  const newSearch = 'New search value';
  act(() => result.current.setSearch(newSearch));

  expect(result.current.search).toEqual(newSearch);
});