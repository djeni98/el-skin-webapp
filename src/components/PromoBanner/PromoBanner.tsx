import "./PromoBanner.css";

function PromoBanner() {
  return (
    <div className="banner">
      <div className="container banner-container">
        <span className="titulo-banner">primeira compra?</span>
        <span><span className="font-bold">R$25</span> OFF A PARTIR DE <span className="font-bold">R$200</span></span>
        <span className="codigo-promo">PRIMEIRA25</span>
      </div>
    </div>
  )
}

export default PromoBanner;