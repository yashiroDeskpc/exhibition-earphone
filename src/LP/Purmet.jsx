import React, { useState } from "react";

// 画像インポート
import webmousikomi from "../img/webmousikomi.png";
import takuhaikit from "../img/takuhaikit.png";
import truck from "../img/truck.png";
import cash from "../img/cash.png";
import human from "../img/human.png";
import book from "../img/book.png";
import check from "../img/check.png";



const PurchaseOptions = () => {
  const [activeOption, setActiveOption] = useState("宅配買取");

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px", border: "1px solid #ccc", maxWidth: "800px", margin: "0 auto", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
      <h2 style={{ marginBottom: "20px" }}>選べる3つの買い取り方法</h2>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
        <div
          onClick={() => handleOptionClick("宅配買取")}
          style={{
            padding: "10px 20px",
            backgroundColor: activeOption === "宅配買取" ? "#f0c040" : "#fff",
            border: "1px solid #ccc",
            cursor: "pointer",
            borderTop: activeOption === "宅配買取" ? "2px solid #000" : "none",
            fontWeight: activeOption === "宅配買取" ? "bold" : "normal",
            flex: 1,
            textAlign: "center"
          }}
        >
          宅配買取
        </div>
        <div
          onClick={() => handleOptionClick("店頭買取")}
          style={{
            padding: "10px 20px",
            backgroundColor: activeOption === "店頭買取" ? "#f0c040" : "#fff",
            border: "1px solid #ccc",
            cursor: "pointer",
            borderTop: activeOption === "店頭買取" ? "2px solid #000" : "none",
            fontWeight: activeOption === "店頭買取" ? "bold" : "normal",
            flex: 1,
            textAlign: "center"
          }}
        >
          店頭買取
        </div>
        <div
          onClick={() => handleOptionClick("クイックコース")}
          style={{
            padding: "10px 20px",
            backgroundColor: activeOption === "クイックコース" ? "#f0c040" : "#fff",
            border: "1px solid #ccc",
            cursor: "pointer",
            borderTop: activeOption === "クイックコース" ? "2px solid #000" : "none",
            fontWeight: activeOption === "クイックコース" ? "bold" : "normal",
            flex: 1,
            textAlign: "center"
          }}
        >
          クイックコース
        </div>
      </div>

      {activeOption === "宅配買取" && (
        <div style={{ border: "1px solid #f0c040", padding: "50px", backgroundColor: "#fff8e1", marginBottom: "20px", maxWidth: "750px", margin: "0 auto" }}>
          <h3>宅配買取</h3>
          <p>らくらくwebでお申し込み！ご希望により段ボールなど梱包材料がご自宅に届く！</p>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px" }}>
            <div>
              <img src={webmousikomi} alt="Web申し込み" style={{ width: "80px", marginBottom: "10px" }} />
              <p>webよりお申し込み</p>
            </div>
            <div>
              <img src={takuhaikit} alt="宅配キット" style={{ width: "80px", marginBottom: "10px" }} />
              <p>[ご希望の方]宅配キット無料</p>
            </div>
            <div>
              <img src={truck} alt="梱包・発送" style={{ width: "80px", marginBottom: "10px" }} />
              <p>商品の梱包・発送</p>
            </div>
            <div>
              <img src={cash} alt="査定結果" style={{ width: "80px", marginBottom: "10px" }} />
              <p>査定結果のご連絡＆入金</p>
            </div>
          </div>
        </div>
      )}

      {activeOption === "店頭買取" && (
        <div style={{ border: "1px solid #f0c040", padding: "50px", backgroundColor: "#fff8e1", marginBottom: "20px", maxWidth: "750px", margin: "0 auto" }}>
          <h3>店頭買取</h3>
          <p>査定中は店内のイヤホン・ヘッドホンで視聴できる！数点の場合は平均10分で査定完了！</p>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px" }}>
            <div>
              <img src={human} alt="お店にレッツゴー" style={{ width: "80px", marginBottom: "10px" }} />
              <p>お店にレッツゴー!!</p>
            </div>
            <div>
              <img src={book} alt="申込書" style={{ width: "80px", marginBottom: "10px" }} />
              <p>申込書にご記入してください</p>
            </div>
            <div>
              <img src={check} alt="査定" style={{ width: "80px", marginBottom: "10px" }} />
              <p>査定をお待ちください</p>
            </div>
            <div>
              <img src={cash} alt="現金買取" style={{ width: "80px", marginBottom: "10px" }} />
              <p>その場で現金買取</p>
            </div>
          </div>
        </div>
      )}

      {activeOption === "クイックコース" && (
        <div style={{ border: "1px solid #f0c040", padding: "50px", backgroundColor: "#fff8e1", marginBottom: "20px", maxWidth: "750px", margin: "0 auto" }}>
          <h3>クイックコース</h3>
          <p>申し込みなんて面倒なのはいや！！とにかく送るから、査定してもらいたい！</p>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px" }}>
            <div>
              <img src={truck} alt="梱包" style={{ width: "80px", marginBottom: "10px" }} />
              <p>買取製品と必要書類を段ボールに梱包し発送</p>
            </div>
            <div>
              <img src={cash} alt="現金買取" style={{ width: "80px", marginBottom: "10px" }} />
              <p>その場で現金買取</p>
            </div>
          </div>
        </div>
      )}

      <div style={{ marginTop: "20px" }}>
        <button style={{ backgroundColor: "#F08300", color: "white", padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer", marginRight: "10px" }}>
          {activeOption === "宅配買取" ? "宅配買取の詳細はこちら" : activeOption === "店頭買取" ? "店頭買取の詳細はこちら" : "クイックコースの詳細はこちら"}
        </button>
        <button style={{ backgroundColor: "red", color: "white", padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer" }}>
          {activeOption === "宅配買取" ? "宅配買取のお申し込み" : activeOption === "店頭買取" ? "買取できるお店を探す" : "クイックコースのお申し込み"}
        </button>
      </div>
    </div>
  );
};

export default PurchaseOptions;