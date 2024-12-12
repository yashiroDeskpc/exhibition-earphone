import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Scrollbar } from "swiper/modules";
import kaitori from "../img/10kaitori.png";

import headphone from "../img/headphone1.png";

export function More() {
  return (
    <button className="morebtn">もっと見る</button>
  );
}

// RecentProducts コンポーネント
function RecentProducts() {
  const products = [
    { id: 1, image: headphone, name: "商品名A", company: "B社", price: "¥65,540(税込み)", points: "加算ポイント120pt", rating: "4.0" },
    { id: 2, image: headphone, name: "商品名B", company: "B社", price: "¥65,540(税込み)", points: "加算ポイント120pt", rating: "4.0" },
    { id: 3, image: headphone, name: "商品名C", company: "B社", price: "¥65,540(税込み)", points: "加算ポイント120pt", rating: "4.0" },
    { id: 4, image: headphone, name: "商品名D", company: "B社", price: "¥65,540(税込み)", points: "加算ポイント120pt", rating: "4.0" },
    { id: 5, image: headphone, name: "商品名E", company: "B社", price: "¥65,540(税込み)", points: "加算ポイント120pt", rating: "4.0" },
  ];

  return (
    <div className="recent-products"> 
    <img className="kaitori-img" src={kaitori} alt="買取キャンペーン" />
      <h2>最近チェックした商品</h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        scrollbar={{
          draggable: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Scrollbar]}
        className="product-swiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="product-card">
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
          </SwiperSlide>
        ))}
      </Swiper>

      <section className="itemsec">
        <div className="itemh3flex">
          <h3 className="itemcate">新着アイテム</h3>
          <h3 className="itemcate">新品総合ランキング</h3>
          <h3 className="itemcate">中古ランキング</h3>
        </div>

        <div className="itemcase-wrapper">
            <Item products={products} />
            <Item products={products} />
            <Item products={products} />
            <Item products={products} />
            
        </div>
        <More />
      </section>

    </div>
  );
}

// Item コンポーネント
function Item({ products }) {
  return (
    <div className="itemcase">
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

export default RecentProducts;