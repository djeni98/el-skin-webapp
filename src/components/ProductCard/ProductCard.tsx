import './ProductCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { createRef } from 'react';

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
  product: IProduct,
  onProductClick: (productId: string) => void;
  onBuyClick: (productId: string, event: React.MouseEvent) => void;
}

function ProductCard(props: Readonly<IProductCardProps>) {
  const { product, onProductClick, onBuyClick } = props;

  function formatPrice(price: number): string {
    return `R$ ${price.toFixed(2).replace('.', ',')}`;
  }

  function handleKeyDownInProduct(event: React.KeyboardEvent) {
    const activateKeys = ['Enter', ' '];

    if (!activateKeys.includes(event.key)) {
      return;
    }

    if (event.target !== cardDiv.current) {
      return;
    }

    onProductClick(product.id);
  }

  const cardDiv = createRef<HTMLDivElement>();

  return (
    /* Div usando role button, pois não pode usar button dentro de button */
    <div
      ref={cardDiv}
      role="button" tabIndex={0}
      onClick={() => onProductClick(product.id)}
      onKeyDown={(e) => handleKeyDownInProduct(e)}
      className="product-card"
    >
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
        <button className="buy-button" onClick={(e) => onBuyClick(product.id, e)}>
          comprar 
          <FontAwesomeIcon icon={faShoppingBag} />
        </button>
      </div>
    </div>
  );
}

export default ProductCard;