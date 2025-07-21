import ProductCard from '../ProductCard/ProductCard';
import { useEffect, useState } from 'react';
import { IProduct, productService } from '../../service/productService';
import './ProductList.css';

function ProductList() {
  const [products, setProducts] = useState<IProduct[]>([]);

  function handleProductClick(productId: string) {
    console.log(`Clicou no produto ${productId}`);
  }

  function handleBuyClick(productId: string, event: React.MouseEvent) {
    event.stopPropagation();
    console.log(`Comprar produto ${productId}`);
  }

  async function requestProducts() {
    const fetchedProducts = await productService.getProducts();
    setProducts(fetchedProducts);
  }


  useEffect(() => {
    requestProducts();
  }, []);

  return (
    <section className="product-list container">
      <h2 className="product-list-title">nossos queridinhos estão aqui</h2>
      <div className="product-items">
        { products.map((item) => (
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