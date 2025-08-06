import { ThemeProvider } from 'styled-components';
import { CartProvider } from './context/CartContext';
import AppRouter from './routes';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <CartProvider>
          <AppRouter />
        </CartProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
