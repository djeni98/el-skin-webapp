import "./ProductCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  tags: Array<{
    label: string;
    backgroundColor: 'pink' | 'seal';
  }>;
}

export interface IProductCardProps {
  product: IProduct
}

function ProductCard(props: Readonly<IProductCardProps>) {
  const product = props.product;

  function formatPrice(price: number): string {
    return `R$ ${price.toFixed(2).replace('.', ',')}`;
  }

  return (
    <div className="product-card">
      <div className="img-product">
        <img src={product.image} alt={product.name} />
      </div>
      <span className="product-title">{product.name}</span>
      <span className="product-description">{product.description}</span>
      <div className="tags-list-product">
        { product.tags.map((tag) => (
          <span className={`tag-product bg-${tag.backgroundColor}`} key={tag.label}>{tag.label}</span>
        ))}
      </div>
      <div className="buy-section">
        <span className="buy-price">{formatPrice(product.price)}</span>
        <button className="buy-button">
          comprar 
          <FontAwesomeIcon icon={faShoppingBag} />
        </button>
      </div>
    </div>
  )
}

export default ProductCard