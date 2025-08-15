import LoadCarrosel from '../components/Carrosel/LoadCarrosel';
import ProductList from '../components/ProductList/ProductList';
import PromoBanner from '../components/PromoBanner/PromoBanner';

export default function Home() {
  return (
    <>
      <PromoBanner />
      <LoadCarrosel />
      <ProductList />
    </>
  );
}