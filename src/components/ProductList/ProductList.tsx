'use client';

import ProductCard from '../ProductCard/ProductCard';
import { useCallback, useEffect, useState } from 'react';
import { useSearch } from '../../hooks/useSearch';
import { useCart } from '../../hooks/useCart';
import { useGetProductsQuery, IProduct } from '../../store/api/apiSlice';
import styles from './styles.module.css';

function ProductList() {
  const { data: products = [], isLoading: loading, error } = useGetProductsQuery();
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
  }, [search, products]);

  return (
    <section className={styles.product_list_section}>
      <h2 className={styles.product_list_title}>nossos queridinhos estão aqui</h2>
      { loading && <p>Carregando...</p>}
      { error && <p>Erro ao carregar produtos: {JSON.stringify(error)}</p>}

      { !loading && !error && (
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