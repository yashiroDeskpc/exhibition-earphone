import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Scrollbar } from "swiper/modules";
import kaitori from "../img/10kaitori.png";
import headphone from "../img/headphone1.png";
import earphone1 from "../img/earphone1.png"

export function More() {
  return (
    <button className="morebtn">もっと見る</button>
  );
}

const products = [
  { id: 1, image: headphone, name: "商品名A-001", company: "メーカーA", price: "¥49,800(税込み)", points: "加算ポイント450pt", rating: "4.5" },
  { id: 2, image: headphone, name: "商品名A-002", company: "メーカーA", price: "¥39,800(税込み)", points: "加算ポイント380pt", rating: "4.5" },
  { id: 3, image: headphone, name: "商品名B-001", company: "メーカーB", price: "¥15,400(税込み)", points: "加算ポイント150pt", rating: "4.5" },
  { id: 4, image: headphone, name: "商品名B-002", company: "メーカーB", price: "¥54,780(税込み)", points: "加算ポイント520pt", rating: "4.5" },
  { id: 5, image: headphone, name: "商品名C-001", company: "メーカーC", price: "¥29,700(税込み)", points: "加算ポイント280pt", rating: "4.5" },
  { id: 6, image: headphone, name: "商品名C-002", company: "メーカーC", price: "¥39,600(税込み)", points: "加算ポイント380pt", rating: "4.5" },
  { id: 7, image: headphone, name: "商品名D-001", company: "メーカーD", price: "¥29,980(税込み)", points: "加算ポイント280pt", rating: "4.5" },
  { id: 8, image: headphone, name: "商品名D-002", company: "メーカーD", price: "¥20,900(税込み)", points: "加算ポイント200pt", rating: "4.5" },
  { id: 9, image: headphone, name: "商品名E-001", company: "メーカーE", price: "¥49,800(税込み)", points: "加算ポイント470pt", rating: "4.5" },
  { id: 10, image: headphone, name: "商品名E-002", company: "メーカーE", price: "¥22,000(税込み)", points: "加算ポイント220pt", rating: "4.5" },
  { id: 11, image: headphone, name: "商品名F-001", company: "メーカーF", price: "¥18,980(税込み)", points: "加算ポイント180pt", rating: "4.5" },
  { id: 12, image: headphone, name: "商品名F-002", company: "メーカーF", price: "¥34,800(税込み)", points: "加算ポイント340pt", rating: "4.5" },
  { id: 13, image: headphone, name: "商品名G-001", company: "メーカーG", price: "¥45,600(税込み)", points: "加算ポイント450pt", rating: "4.5" },
  { id: 14, image: headphone, name: "商品名G-002", company: "メーカーG", price: "¥67,800(税込み)", points: "加算ポイント670pt", rating: "4.5" },
  { id: 15, image: headphone, name: "商品名H-001", company: "メーカーH", price: "¥88,000(税込み)", points: "加算ポイント880pt", rating: "4.5" },
  { id: 16, image: headphone, name: "商品名H-002", company: "メーカーH", price: "¥29,800(税込み)", points: "加算ポイント290pt", rating: "4.5" },
  { id: 17, image: headphone, name: "商品名I-001", company: "メーカーI", price: "¥15,980(税込み)", points: "加算ポイント150pt", rating: "4.5" },
  { id: 18, image: headphone, name: "商品名I-002", company: "メーカーI", price: "¥42,800(税込み)", points: "加算ポイント420pt", rating: "4.5" },
  { id: 19, image: headphone, name: "商品名J-001", company: "メーカーJ", price: "¥76,800(税込み)", points: "加算ポイント760pt", rating: "4.5" },
  { id: 20, image: headphone, name: "商品名J-002", company: "メーカーJ", price: "¥55,800(税込み)", points: "加算ポイント550pt", rating: "4.5" }
];

const rankingProducts = [
  { id: 1, image: earphone1, name: "商品名A-001", company: "メーカーA", price: "¥49,800(税込み)", points: "加算ポイント450pt", rating: "4.5" },
  { id: 2, image: earphone1, name: "商品名A-002", company: "メーカーA", price: "¥39,800(税込み)", points: "加算ポイント380pt", rating: "4.5" },
  { id: 3, image: earphone1, name: "商品名B-001", company: "メーカーB", price: "¥15,400(税込み)", points: "加算ポイント150pt", rating: "4.5" },
  { id: 4, image: earphone1, name: "商品名B-002", company: "メーカーB", price: "¥54,780(税込み)", points: "加算ポイント520pt", rating: "4.5" },
  { id: 5, image: earphone1, name: "商品名C-001", company: "メーカーC", price: "¥29,700(税込み)", points: "加算ポイント280pt", rating: "4.5" },
  { id: 6, image: earphone1, name: "商品名C-002", company: "メーカーC", price: "¥39,600(税込み)", points: "加算ポイント380pt", rating: "4.5" },
  { id: 7, image: earphone1, name: "商品名D-001", company: "メーカーD", price: "¥29,980(税込み)", points: "加算ポイント280pt", rating: "4.5" },
  { id: 8, image: earphone1, name: "商品名D-002", company: "メーカーD", price: "¥20,900(税込み)", points: "加算ポイント200pt", rating: "4.5" },
  { id: 9, image: earphone1, name: "商品名E-001", company: "メーカーE", price: "¥49,800(税込み)", points: "加算ポイント470pt", rating: "4.5" },
  { id: 10, image: earphone1, name: "商品名E-002", company: "メーカーE", price: "¥22,000(税込み)", points: "加算ポイント220pt", rating: "4.5" },
  { id: 11, image: earphone1, name: "商品名F-001", company: "メーカーF", price: "¥18,980(税込み)", points: "加算ポイント180pt", rating: "4.5" },
  { id: 12, image: earphone1, name: "商品名F-002", company: "メーカーF", price: "¥34,800(税込み)", points: "加算ポイント340pt", rating: "4.5" },
  { id: 13, image: earphone1, name: "商品名G-001", company: "メーカーG", price: "¥45,600(税込み)", points: "加算ポイント450pt", rating: "4.5" },
  { id: 14, image: earphone1, name: "商品名G-002", company: "メーカーG", price: "¥67,800(税込み)", points: "加算ポイント670pt", rating: "4.5" },
  { id: 15, image: earphone1, name: "商品名H-001", company: "メーカーH", price: "¥88,000(税込み)", points: "加算ポイント880pt", rating: "4.5" },
  { id: 16, image: earphone1, name: "商品名H-002", company: "メーカーH", price: "¥29,800(税込み)", points: "加算ポイント290pt", rating: "4.5" },
  { id: 17, image: earphone1, name: "商品名I-001", company: "メーカーI", price: "¥15,980(税込み)", points: "加算ポイント150pt", rating: "4.5" },
  { id: 18, image: earphone1, name: "商品名I-002", company: "メーカーI", price: "¥42,800(税込み)", points: "加算ポイント420pt", rating: "4.5" },
  { id: 19, image: earphone1, name: "商品名J-001", company: "メーカーJ", price: "¥76,800(税込み)", points: "加算ポイント760pt", rating: "4.5" },
  { id: 20, image: earphone1, name: "商品名J-002", company: "メーカーJ", price: "¥55,800(税込み)", points: "加算ポイント550pt", rating: "4.5" }
];

function RecentProducts() {
  const [activeCategory, setActiveCategory] = useState('new');

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  // 表示する商品配列を選択（ItemCaseWrapper用）
  const displayProducts = activeCategory === 'ranking' ? rankingProducts : products;

  return (
    <div className="recent-products"> 
      <img className="kaitori-img" src={kaitori} alt="買取キャンペーン" />
      <h2 className="recent-products-h2">最近チェックした商品</h2>
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
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          480: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {products.slice(0, 15).map((product) => (  // slice(0, 15)を追加して最初の15個のみ表示
          <SwiperSlide key={product.id}>
            <div className="product-card-recent">
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
          <h3 
            className={`itemcate ${activeCategory === 'new' ? 'active' : ''}`}
            onClick={() => handleCategoryClick('new')}
          >
            新着アイテム
          </h3>
          <h3 
            className={`itemcate ${activeCategory === 'ranking' ? 'active' : ''}`}
            onClick={() => handleCategoryClick('ranking')}
          >
            新品総合ランキング
          </h3>
          <h3 
            className={`itemcate ${activeCategory === 'used' ? 'active' : ''}`}
            onClick={() => handleCategoryClick('used')}
          >
            中古ランキング
          </h3>
        </div>

        <ItemCaseWrapper products={displayProducts} />
        <More />
      </section>
    </div>
  );
}

// Item コンポーネント
export function Item({ products }) {
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

export function ItemWithoutRating({ products }) {
  return (
    <div className="itemcase">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <div className="product-info">
            <p className="company">{product.company}</p>
            <p className="product-name">{product.name}</p>
            <p className="points">{product.points}</p>
            <p className="price">{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function ItemCaseWrapper({ products }) {
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