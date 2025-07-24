import ProductCard from '../ProductCard/ProductCard';
import { useCallback, useEffect, useState } from 'react';
import { IProduct, productService } from '../../service/productService';
import './ProductList.css';
import { useSearchContext } from '../../context/SearchContext';
import { useCartContext } from '../../context/CartContext';

function ProductList() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

  const { search } = useSearchContext();
  const { addItem } = useCartContext();

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

  async function requestProducts() {
    const fetchedProducts = await productService.getProducts();
    setProducts(fetchedProducts);
  }

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
    requestProducts();
  }, []);

  useEffect(() => {
    updateFilteredProducts();
  }, [search, products]);

  return (
    <section className="product-list container">
      <h2 className="product-list-title">nossos queridinhos estão aqui</h2>
      <div className="product-items">
        { filteredProducts.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
            onProductClick={handleProductClick}
            onBuyClick={handleBuyClick}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductList;