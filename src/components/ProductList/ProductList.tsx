import ProductCard from "../ProductCard/ProductCard"
import "./ProductList.css"

function ProductList() {
  return (
    <section className="product-list container">
      <h2 className="product-list-title">nossos queridinhos estão aqui</h2>
      <div className="product-items">
        <ProductCard />
        <ProductCard />        
        <ProductCard />        
        <ProductCard />
        <ProductCard />        
        <ProductCard />
        <ProductCard />        
        <ProductCard />
      </div>
    </section>
  )
}

export default ProductList;