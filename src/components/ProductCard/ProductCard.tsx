import "./ProductCard.css";
import img1 from "../../assets/img1.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

function ProductCard() {
  return (
    <div className="product-card">
      <img className="img-product" src={img1} alt="img1" />
      <span className="product-title">Protetor solar AL SUN</span>
      <span className="product-description">alta proteção e pele luminosa sem grude nem pele cinzenta</span>
      <div className="tags-list-product">
        <span className="tag-product bg-seal">proteção</span>
        <span className="tag-product bg-pink">rosto</span>
      </div>
      <div className="buy-section">
        <span className="buy-price">R$ 79,90</span>
        <button className="buy-button">
          comprar 
          <FontAwesomeIcon icon={faShoppingBag} />
        </button>
      </div>
    </div>
  )
}

export default ProductCard