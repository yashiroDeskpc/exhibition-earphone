import React from 'react';
import headphone from '../img/headphone1.png';

export { Item } from "../component/maincol1";

function Puritemitem() {
  const products = [
    { id: 1, image: headphone, name: "商品名A", company: "B社", price: "¥65,540(税込み)", points: "加算ポイント120pt", rating: "4.0" },
    { id: 2, image: headphone, name: "商品名B", company: "B社", price: "¥65,540(税込み)", points: "加算ポイント120pt", rating: "4.0" },
    { id: 3, image: headphone, name: "商品名C", company: "B社", price: "¥65,540(税込み)", points: "加算ポイント120pt", rating: "4.0" },
    { id: 4, image: headphone, name: "商品名D", company: "B社", price: "¥65,540(税込み)", points: "加算ポイント120pt", rating: "4.0" },
  ];

  return (
    <div className="purchase-itemcase-wrapper">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <div className="product-info">
            <div className="badge-container">
              <span className="badge new">新品</span>
            </div>
            <p className="company">{product.company}</p>
            <p className="product-name">{product.name}</p>
            <p className="rating">★★★★ {product.rating}</p>
            <p className="points">{product.points}</p>
            <p className="price">{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function Puritem() {
    return (
        <>
        <Puritemitem />
        <Item products={products} />
        <Item products={products} />
        <Item products={products} />
        <Item products={products} />
        </>
    )
}

export default Puritem;