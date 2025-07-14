import Carrosel from "../components/Carrosel/Carrosel";
import Header from "../components/Header/Header";
import PromoBanner from "../components/PromoBanner/PromoBanner";

function Home() {
  return (
    <>
      <Header /> 
      <PromoBanner />
      <Carrosel />
    </>
  );
}

export default Home;