import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const RecommendItem = ({ image, alt }) => (
    <div className="recommend-item">
        <img src={image} alt={alt} />
    </div>
);

const Recommend = () => {
    const recommendItems = [
        { image: '/path/to/image1.jpg', alt: '商品1' },
        { image: '/path/to/image2.jpg', alt: '商品2' },
        { image: '/path/to/image3.jpg', alt: '商品3' },
    ];

    return (
        <div className="recommend-section">
            <h2>おすすめ・特集</h2>
            <div className='recommend-box'>
            </div>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
            >
                {recommendItems.map((item, index) => (
                    <SwiperSlide key={index}>
                        <RecommendItem {...item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Recommend;