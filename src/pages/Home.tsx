import Carrosel from "../components/Carrosel/Carrosel";
import Header from "../components/Header/Header";
import ProductCard from "../components/ProductCard/ProductCard";
import ProductList from "../components/ProductList/ProductList";
import PromoBanner from "../components/PromoBanner/PromoBanner";

function Home() {
  return (
    <>
      <Header /> 
      <PromoBanner />
      <Carrosel />
      <ProductList />
    </>
  );
}

export default Home;