import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Sobre from './pages/Sobre/Sobre';

export default function AppRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/quem-somos' element={<Sobre />} />
      </Routes>
      <Footer />
    </Router>
  );
}
