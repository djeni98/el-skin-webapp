import Carrosel from '../../components/Carrosel/Carrosel';
import ProductList from '../../components/ProductList/ProductList';
import PromoBanner from '../../components/PromoBanner/PromoBanner';

function Home() {
  return (
    <>
      <PromoBanner />
      <Carrosel />
      <ProductList />
    </>
  );
}

export default Home;