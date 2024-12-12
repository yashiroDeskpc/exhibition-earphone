import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Scrollbar } from "swiper/modules";
import headphone from "../img/headphone1.png";


export default function kawari(){
const products = [
    { id: 1, image: headphone, name: "商品名A", company: "B社", price: "¥65,540(税込み)", points: "加算ポイント120pt", rating: "4.0" },
    { id: 2, image: headphone, name: "商品名B", company: "B社", price: "¥65,540(税込み)", points: "加算ポイント120pt", rating: "4.0" },
    { id: 3, image: headphone, name: "商品名C", company: "B社", price: "¥65,540(税込み)", points: "加算ポイント120pt", rating: "4.0" },
    { id: 4, image: headphone, name: "商品名D", company: "B社", price: "¥65,540(税込み)", points: "加算ポイント120pt", rating: "4.0" },
    { id: 5, image: headphone, name: "商品名E", company: "B社", price: "¥65,540(税込み)", points: "加算ポイント120pt", rating: "4.0" },
];

return(
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
      )
}