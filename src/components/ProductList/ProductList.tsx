import ProductCard from '../ProductCard/ProductCard';
import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSearch } from '../../hooks/useSearch';
import { useCart } from '../../hooks/useCart';
import { useGetProductsQuery, IProduct } from '../../store/api/apiSlice';

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
    <ProductListSection>
      <ProductListTitle>nossos queridinhos estão aqui</ProductListTitle>
      { loading && <p>Carregando...</p>}
      { error && <p>Erro ao carregar produtos: {JSON.stringify(error)}</p>}

      { !loading && !error && (
        <ProductItems>
          { filteredProducts.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
              onProductClick={handleProductClick}
              onBuyClick={handleBuyClick}
            />
          ))}

          { filteredProducts.length === 0 && <p>Sem produtos</p>}
        </ProductItems>
      )}
    </ProductListSection>
  );
}

const ProductListSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  flex-direction: column;
  margin-bottom: 6rem;
`;

const ProductListTitle = styled.h2`
  margin: 3rem 0;
`;

const ProductItems = styled.div`
  display: flex;
  gap: 64px;
  flex-wrap: wrap;
`;

export default ProductList;