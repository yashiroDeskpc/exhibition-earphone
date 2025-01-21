import React from "react";
import member from "../img/mini_web_member.webp";


// 画像インポート

import imgblue from "../img/baseline-bluetooth.png"
import earphoneid from "../img/baseline-earphone.png"
import headid from "../img/baseline-headset.png"
import gaming from "../img/baseline-gaming.png"
import player from "../img/baseline-smartphone.png"
import AMPDAC from "../img/baseline-amp.png"
import cable from "../img/baseline-outlet.png"
import spi from "../img/baseline-speaker.png"
import jisaku from "../img/baseline-settings.png"
import akuse from "../img/baseline-music_video.png"
import out from "../img/baseline-outlet.png"
import tyuko from "../img/baseline-loop.png"

const leftcatecon = [
    { id: 0, img: imgblue, alt: "eイヤホンワイヤレス", catename: "ワイヤレス" },
    { id: 1, img: earphoneid, alt: "eイヤホン有線イヤホン", catename: "有線イヤホン" },
    { id: 2, img: headid, alt: "eイヤホン有線ヘッドホン", catename: "有線ヘッドホン" },
    { id: 3, img: gaming, alt: "eイヤホンゲーミング", catename: "ゲーミング" },
    { id: 4, img: player, alt: "eイヤホンプレイヤー", catename: "プレイヤー" },
    { id: 5, img: AMPDAC, alt: "eイヤホンAMPDAC", catename: "AMP・DAC" },
    { id: 6, img: cable, alt: "eイヤホンケーブル", catename: "ケーブル" },
    { id: 7, img: spi, alt: "eイヤホンスピーカー", catename: "スピーカー" },
    { id: 8, img: jisaku, alt: "eイヤホン修理自作", catename: "修理・自作" },
    { id: 9, img: akuse, alt: "eイヤホン雑貨アクセサリー", catename: "雑貨アクセサリー" },
    { id: 10, img: out, alt: "eイヤホンアウトレット", catename: "アウトレット" },
    { id: 11, img: tyuko, alt: "eイヤホン中古", catename: "中古" },
];

function Sidesearch({ img, alt, catename }) {
    return (
        <div className="side-item">
            <img className="cateimg" src={img} alt={alt} />
            <a href="#">
                <p className="catename">{catename}</p>
            </a>
        </div>
    );
}

export default function CategSearch() {
    return (
        <div className="leftbrandcate">
            <h2 className="info-title">カテゴリーから探す</h2>
            <div className="sidecateg">
                {leftcatecon.map((cate) => (
                    <Sidesearch key={cate.id} img={cate.img} alt={cate.alt} catename={cate.catename} />
                ))}
            </div>
        </div>
    );
}