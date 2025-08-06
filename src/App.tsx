import { ThemeProvider } from 'styled-components';
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

        <AppRouter />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
