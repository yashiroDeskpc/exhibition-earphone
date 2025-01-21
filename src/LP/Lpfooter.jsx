import React from "react";
import Logo from '../img/eearphoneLogo.svg';
import storeinfo from '../img/storeinfo.jpg';

export const Lpfooter = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px", backgroundColor: "#fff" }}>
      <button style={{ backgroundColor: "red", color: "white", padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer" }}>
        今すぐ無料査定のお申し込み
      </button>
      <div style={{ marginTop: "20px" }}>
        <img className="img_logo" src={Logo} alt="eイヤホン" style={{ width: "200px" }} />
      </div>
      <div style={{ marginTop: "10px", fontSize: "14px", color: "#333" }}>
        <p>イヤホン・ヘッドホン専門店 e☆イヤホン WEB本店</p>
        <p>このWEBサイトに掲載されている記事・写真・図表などの転載・複製の一切を禁じます。</p>
        <p>Copyright© e☆イヤホン All rights reserved.</p>
      </div>
    </div>
  );
};

const StoreIntroduction = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>店舗紹介</h2>
      <p>e☆イヤホンは全国5拠点を展開。お近くにお越しの際はぜひお気軽にご来店ください。宅配買取は全国どこからでもご利用いただけます。</p>
      <img src={storeinfo} alt="店舗情報" style={{margin: "0 auto"}} />
      <button style={{ marginTop: "20px", backgroundColor: "green", color: "white", padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer" }}>
        店舗の詳細はこちら
      </button>
    </div>
  );
};




export default StoreIntroduction;