import { CartProvider } from './context/CartContext';
import { SearchProvider } from './context/SearchContext';
import AppRouter from './routes';
import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />

      <CartProvider>
        <SearchProvider>
          <AppRouter />
        </SearchProvider>
      </CartProvider>
    </>
  );
}

export default App;
