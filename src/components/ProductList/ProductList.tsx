'use client';

import ProductCard from '../ProductCard/ProductCard';
import { useCallback, useEffect, useState } from 'react';
import { useSearch } from '../../hooks/useSearch';
import { useCart } from '../../hooks/useCart';
import styles from './styles.module.css';
import { IProduct } from '../../service/productService';

function ProductList({ products }: Readonly<{ products: IProduct[]}>) {
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

  const { search } = useSearch();
  const { addItem } = useCart();

  function handleProductClick(productId: string) {
    console.log(`Clicou no produto ${productId}`);
  }

  const handleBuyClick = useCallback((productId: string, event: React.MouseEvent) => {
    event.stopPropagation();
    console.log(`Comprar produto ${productId}`);
    const produtoComprado = products.find(product => product.id === productId);

    if(!produtoComprado) {
      console.error(`Produto com ID ${productId} não encontrado.`);
      return;
    }

    addItem(produtoComprado);
  }, [products, addItem]);

  function updateFilteredProducts() {
    if (search) {
      setFilteredProducts(products.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase())
      ));
    } else {
      setFilteredProducts([...products]);
    }
  }

  useEffect(() => {
    updateFilteredProducts();
  }, [search]);

  return (
    <section className={styles.product_list_section}>
      <h2 className={styles.product_list_title}>nossos queridinhos estão aqui</h2>
      {(
        <div className={styles.product_items}>
          { filteredProducts.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
              onProductClick={handleProductClick}
              onBuyClick={handleBuyClick}
            />
          ))}

          { filteredProducts.length === 0 && <p>Sem produtos</p>}
        </div>
      )}
    </section>
  );
}

export default ProductList;