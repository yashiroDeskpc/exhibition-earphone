import React, { useState } from "react";
import { More } from "./maincol1";
import staff from "../img/staff.png"
import reviewitem from "../img/reviewitem.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Grid } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/grid';

const staffreview = [
    {id:1,Image:reviewitem,brandname:"ブランド名",itemname:"商品名",
        category1:"ロック",category2:"ドンシャリ",category3:"おしゃれ",
        review:"低音好き必見!極上の音質を提供するイヤホン",
        staffimg:staff,stuffname:"スタッフ名",
        stafflocation:"スタッフが働いている店舗",
    },
    {id:2,Image:reviewitem,brandname:"ブランド名",itemname:"商品名",
        category1:"ロック",
        review:"このイヤホンは重低音が際立っており、音楽の深みを増します。低音好きにはたまらない一品です。",
        staffimg:staff,staffname:"スタッフ名",
        stafflocation:"ゲーミング AKIBA",
    },
    {id:3,Image:reviewitem,brandname:"ブランド名",itemname:"商品名",
        category1:"EDM",category2:"HIPHOP",category3:"かっこいい",
        review:"このイヤホンは重低音が際立っており、音楽の深みを増します。低音好きにはたまらない一品です。",
        staffimg:staff,staffname:"スタッフ名",
        stafflocation:"秋葉原店本館",
    }
]

const allreview = [
    {id:1,image:reviewitem,brandname:"ブランド名",itemid:"商品名",
        title:"驚きの低音体験!",review:"このイヤホンは、特に低音が際立っており、まるでライブ会場にいるかのような臨場感を味わえます。深みのある音が心地よく響き、音楽の新たな一面を発見できます。特にベース.",
        author:"アカウント名",star:"★★★★",point:4.0,
    },
    {id:2,image:reviewitem,brandname:"ブランド名",itemid:"商品名",
        title:"音質が素晴らしい！",review:"高音から低音まで、バランスの取れた音質が魅力です。長時間の使用でも疲れにくく、音楽を存分に楽しめます。",
        author:"レビュアー2",star:"★★★★★",point:5.0,
    },
    {id:3,image:reviewitem,brandname:"ブランド名",itemid:"商品名",
        title:"コスパ最高",review:"この価格帯とは思えない高品質なサウンドが楽しめます。音の解像度が高く、細かい音の表現も素晴らしいです。",
        author:"音楽愛好家",star:"★★★★",point:4.0,
    },
    {id:4,image:reviewitem,brandname:"ブランド名",itemid:"商品名",
        title:"デザインも機能も◎",review:"見た目がスタイリッシュで、音質も申し分ありません。装着感も良く、日常使いにぴったりです。",
        author:"デザイン重視",star:"★★★★★",point:5.0,
    },
    {id:5,image:reviewitem,brandname:"ブランド名",itemid:"商品名",
        title:"期待以上の性能",review:"レビューを見て購入を決めましたが、期待以上の性能でした。特に空間音響の表現力が素晴らしいです。",
        author:"サウンドマニア",star:"★★★★",point:4.0,
    },
    {id:6,image:reviewitem,brandname:"ブランド名",itemid:"商品名",
        title:"音楽がより楽しく",review:"これまで使っていたイヤホンとは一線を画す音質です。音楽がより立体的に聴こえ",
        author:"音楽ファン",star:"★★★★★",point:5.0,
    }
]


const ReviewItem = ({ item }) => (
    <div key={item.id} className="allreview-item">
        <img src={item.image} alt="reviewitem" className="allreview-image" />
        <div className="allreview-text">
            <p className="brandname">{item.brandname}</p>
            <p className="itemname">{item.itemid}</p>
        </div>
        <div className="allreview-review">
            <p className="title">{item.title}</p>
            <p className="review">{item.review}</p>
            <p className="author">{item.author}</p>
            <div className="rating-container">
                <span className="star">{item.star}</span>
                <span className="point">{item.point}</span>
            </div>
        </div>
    </div>
);


function StaffReview() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [showNavigation, setShowNavigation] = useState(false);

    const handleItemClick = (index) => {
        setActiveIndex(index);
        setShowNavigation(true);
    };

    return (
        <>
            <section className="staff-review">
                <h3 className="itemcate">スタッフレビュー</h3>
                <div className="staff-review-tabs">
                    <h4 className={`staff ${activeIndex === 0 ? 'active' : ''}`} onClick={() => handleItemClick(0)}>新着</h4>
                    <h4 className={`staff ${activeIndex === 1 ? 'active' : ''}`} onClick={() => handleItemClick(1)}>人気</h4>
                </div>

                <div className="staff-review-wrapper">
                    <Swiper
                        className="staff-swiper"
                        spaceBetween={10}
                        slidesPerView={1}
                        modules={[Navigation, Pagination]}
                        navigation={showNavigation ? true : false}
                        pagination={{ 
                            clickable: true
                        }}
                        breakpoints={{
                            470: {
                                slidesPerView: 1,
                            },
                            500: {
                                slidesPerView: 2,
                            },
                            1200: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {staffreview.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="staff-reviewitem card">
                                    <img src={item.Image} alt="itemimage" />
                                    <div className="staff-reviewtext">
                                        <p className="brandname">{item.brandname}</p>
                                        <p className="itemname">{item.itemname}</p>
                                    </div>
                                    <div className="staff-review-category">
                                        <p className="category1">{item.category1}</p>
                                        <p className="category2">{item.category2}</p>
                                        <p className="category3">{item.category3}</p>
                                    </div>
                                    <div className="staff-review-review">
                                        <p className="review">{item.review}</p>
                                    </div>
                                    <div className="staff-review-stuff">
                                        <img src={item.staffimg} alt="stuffimage" />
                                        <p className="stuffname">{item.stuffname}</p>
                                        <p className="stufflocation">{item.stafflocation}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <More />
            </section>
        </>
    );
}

const AllReview = () => {
    const [showNavigation, setShowNavigation] = useState(false);

    return (
        <>
            <h3 className="allreview">総合レビュー</h3>
            <div className="allreview-wrapper">
                <Swiper
                    className="allreview-swiper"
                    spaceBetween={20}
                    slidesPerView={3}
                    grid={{
                        rows: 2,
                        fill: 'row'
                    }}
                    modules={[Pagination, Grid, Navigation]}
                    navigation={showNavigation ? true : false}
                    pagination={{ 
                        clickable: true
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            grid: {
                                rows: 1
                            }
                        },
                        768: {
                            slidesPerView: 2,
                            grid: {
                                rows: 1
                            }
                        },
                        1024: {
                            slidesPerView: 3,
                            grid: {
                                rows: 2
                            }
                        }
                    }}
                >
                    {allreview.map((item) => (
                        <SwiperSlide key={item.id}>
                            <ReviewItem item={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <More />
            </div>
        </>
    );
}

export default function Reviewcol() {
    return (
        <>
            <StaffReview />
            <AllReview />
        </>
    );
}