'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { createRef } from 'react';
import { IProduct } from '../../service/productService';
import { formatPrice } from '../../formatters/price';
import styles from './styles.module.css';

export interface IProductCardProps {
  product: IProduct,
  onProductClick: (productId: string) => void;
  onBuyClick: (productId: string, event: React.MouseEvent) => void;
}

const buy_button_style = `${styles.buy_button} buy_button_theme`;

const getClassNameForTag = (tag: string) => {
  const BLUE_TAGS = ['protection', 'exfoliation', 'hydration'];
  const color_style = BLUE_TAGS.includes(tag) ? styles.cyan_tag : styles.pink_tag;

  return [styles.product_tag, color_style].join(' ');
};

function ProductCard(props: Readonly<IProductCardProps>) {
  const { product, onProductClick, onBuyClick } = props;

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
    <div className={styles.product_card}
      data-testid='product-card'
      ref={cardDiv}
      role='button' tabIndex={0}
      onClick={() => onProductClick(product.id)}
      onKeyDown={(e) => handleKeyDownInProduct(e)}
    >
      <div className={styles.product_image_container}>
        <img src={product.image} alt={product.name} />
      </div>

      <span className={styles.title}>{product.name}</span>
      <span className={styles.description}>{product.description}</span>

      <div className={styles.product_tags_list}>
        { product.tags.map((tag) => (
          <span className={getClassNameForTag(tag)} key={tag}>{tag}</span>
        ))}
      </div>
      
      <div className={styles.buy_section}>
        <span className={styles.product_price}>{formatPrice(product.price)}</span>
        <button className={buy_button_style} data-testid='buy-button' onClick={(e) => onBuyClick(product.id, e)}>
          comprar 
          <FontAwesomeIcon icon={faShoppingBag} />
        </button>
      </div>
    </div>
  );
}

export default ProductCard;