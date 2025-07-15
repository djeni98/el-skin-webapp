import Carrosel from "../components/Carrosel/Carrosel";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ProductList from "../components/ProductList/ProductList";
import PromoBanner from "../components/PromoBanner/PromoBanner";

function Home() {
  return (
    <>
      <Header /> 
      <PromoBanner />
      <Carrosel />
      <ProductList />
      <Footer />
    </>
  );
}

export default Home;