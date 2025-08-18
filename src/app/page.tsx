import LoadCarrosel from '../components/Carrosel/LoadCarrosel';
import LoadProductList from '../components/ProductList/LoadProductList';
import PromoBanner from '../components/PromoBanner/PromoBanner';

export default function Home() {
  return (
    <>
      <PromoBanner />
      <LoadCarrosel />
      <LoadProductList />
    </>
  );
}