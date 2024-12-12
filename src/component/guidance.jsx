import React from "react";


function Guidance(){
    return(
    <>
    <section className="guide">
   <h2>e☆イヤホンのご案内</h2>
   <div className="guidecol">
    <div className="guide-flex">
        <h3 className="guide-h3">16時までのご注文は即日出荷</h3>

            <p className="guide-left">
                16時までのご注文で入金が確認できれば
                当日中に出荷いたします。※名古屋大須店にある商品については
                15時までのご注文分が当日発送と
                なります。クレジットカードや代金引換
                ならば、確認作業がスムーズなため、
                最速での出荷が可能です
            </p>

            <h3 className="guide-h3">お支払い方法</h3>
            <p className="guide-center">
                各種クレジットカード(一括・分割・リ
                ボ)、Amazon Pay、楽天ペイ、銀行振
                込、代金引換、コンビニ決済、などが
                お選びいただけます。
            </p>

            <h3 className="guide-h3">新品3千円以上お買上で送料無料</h3>
            <p>新品商品は3千円以上お買い上げ
               で全国送料無料にて配送します。中古商品に関してはご利用ガイド
               をご確認ください。
            </p>
            <p>&#9654;<span>ご利用ガイド</span></p>
      </div>
      <p><span>年中無休で毎日出荷</span>e☆イヤホンは年中無休で営業しています。休まず出荷いたします。</p>
     </div>
     </section>
     </>
    )
}

export function Sougo(){
    return(
    <>
    <div className="betu-link">
        <img src="" alt="相互リンクrakunew" />
        <img src="" alt="相互リンクリスニングラボ" />
    </div>
    </>
    )
}

export default Guidance;