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
    return (
        <div className="recommend-section">
            
            <h2>おすすめ・特集</h2>
            <div className='recommend-box'>
                <img className='recommend-img' src={image} alt={alt}/>
                <img className='recommend-img' src={image} alt={alt} />
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