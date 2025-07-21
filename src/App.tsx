import { useState } from 'react';
import './App.css';
import { SearchContext } from './context/SearchContext';
import AppRouter from './routes';

function App() {
  const [search, setSearch] = useState('');
  return (
    <SearchContext value={{search: search, setSearch: setSearch}}>
      <AppRouter />
    </SearchContext>
  );
}

export default App;
