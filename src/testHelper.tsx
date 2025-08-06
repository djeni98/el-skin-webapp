import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './store/slices/searchSlice';
import cartReducer from './store/slices/cartSlice';

export const createTestStore = () => configureStore({
  reducer: {
    search: searchReducer,
    cart: cartReducer
  },
});

export const createWrapper = (store: ReturnType<typeof createTestStore>) => {
  const TestWrapper = ({ children }: { children: ReactNode }) => (
    <Provider store={store}>{children}</Provider>
  );
  TestWrapper.displayName = 'TestWrapper';
  return TestWrapper;
};

export const createWrapperWithStore = () => {
  const store = createTestStore();
  const wrapper = createWrapper(store);

  return { store, wrapper };
};
