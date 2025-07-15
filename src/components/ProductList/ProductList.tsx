import ProductCard, { IProduct } from "../ProductCard/ProductCard"
import img1 from "../../assets/img1.png";
import "./ProductList.css"

function ProductList() {
  const productX: IProduct = {
    id: "protetor",
    name: "Protetor solar AL SUN",
    description: "alta proteção e pele luminosa sem grude nem pele cinzenta",
    price: 79.90,
    image: img1,
    tags: [
      { label: "proteção", backgroundColor: "seal" },
      { label: "rosto", backgroundColor: "pink" },
    ]
  }
  
  const productList = [
    { ...productX, id: "item-1"},
    { ...productX, id: "item-2"},
    { ...productX, id: "item-3"},
    { ...productX, id: "item-4"},
    { ...productX, id: "item-5"},
    { ...productX, id: "item-6"},
    { ...productX, id: "item-7"},
  ]

  return (
    <section className="product-list container">
      <h2 className="product-list-title">nossos queridinhos estão aqui</h2>
      <div className="product-items">
        { productList.map((item) => (
          <ProductCard product={item} key={item.id} />
        ))}
      </div>
    </section>
  )
}

export default ProductList;