import { Suspense } from 'react';
import { productService } from '../../service/productService';
import ProductList from './ProductList';

export default async function LoadProductList() {
  const { data, error } = await productService.getProducts();

  return (
    <Suspense fallback={<p>Carregando...</p>}>
      { error && <p>Ocorreu um erro: {error}</p> }
      { !error && data != null && <ProductList products={data}/> }
    </Suspense>
  );
}