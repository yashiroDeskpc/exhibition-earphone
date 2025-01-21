import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ranking from '../img/2024nenkanranking.webp';


const RecommendItem = ({ image, alt }) => (
    <div className="recommend-item">
        <img src={image} alt={alt} />
    </div>
);

const Recommend = () => {
    const fixedItems = [
        { image: ranking, alt: '固定画像1' },
        { image: ranking, alt: '固定画像2' },
    ];

    const recommendItems = [
        { image: ranking, alt: '商品1' },
        { image: ranking, alt: '商品2' },
        { image: ranking, alt: '商品3' },
        { image: ranking, alt: '商品1' },
        { image: ranking, alt: '商品2' },
        { image: ranking, alt: '商品3' },
    ];

    return (
        <div className="recommend-section">
            <h2>おすすめ・特集</h2>
            <div className='fixed-images'>
                {fixedItems.map((item, index) => (
                    <div key={index} className="fixed-item">
                        <img src={item.image} alt={item.alt} />
                    </div>
                ))}
            </div>
            <div className='recommend-box'>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    loop={true}
                >
                    {recommendItems.map((item, index) => (
                        <SwiperSlide key={index}>
                            <RecommendItem {...item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Recommend;