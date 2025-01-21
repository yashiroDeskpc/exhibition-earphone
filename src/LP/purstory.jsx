// お客様体験談

import purstory1 from "../img/purstory1.png"
import purstory2 from "../img/purstory2.png"

import React from "react";

const Purstory = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>お客様体験談</h2>
      <p>体験談は外部リンクです</p>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <div style={{ width: "300px", border: "1px solid #ccc", borderRadius: "8px", overflow: "hidden" }}>
          <img src={purstory1} alt="Headphones" style={{ width: "100%" }} />
          <div style={{ padding: "10px" }}>
            <p>大きなメリットと言えるのは、やっぱり送料・手数料・キャンセル料が無料！</p>
            <p>e☆イヤホンの宅配買取サービスを利用して実際にイヤホンを売ってみた結果金額と流れを紹介</p>
          </div>
        </div>
        <div style={{ width: "300px", border: "1px solid #ccc", borderRadius: "8px", overflow: "hidden" }}>
          <img src={purstory2} alt="Earphones" style={{ width: "100%" }} />
          <div style={{ padding: "10px" }}>
            <p>一言で伝えるなら、「フリマアプリよりもラクなわりに、査定額も結構高い」</p>
            <p>イヤホンにまみれすぎたので、イヤホン専門店の買い取りサービスに出したら結構な買取額になった</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purstory;