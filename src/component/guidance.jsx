import React from "react";

function Guidance(){
    return(
    <>
    <section className="guide">
        <div className="guide-container">
        <h2>e☆イヤホンのご案内</h2>
        <div className="guidecol">
            <div className="guide-flex">
                <div className="guide-item">
                    <h3>16時までのご注文は即日出荷</h3>
                    <p>
                        16時までのご注文で入金が確認できれば当日中に出荷いたします。
                        ※名古屋大須店にある商品については15時までのご注文分が当日発送となります。
                        クレジットカードや代金引換ならば、確認作業がスムーズなため、最速での出荷が可能です
                    </p>
                </div>

                <div className="guide-item">
                    <h3>お支払い方法</h3>
                    <p>
                        各種クレジットカード(一括・分割・リボ)、Amazon Pay、楽天ペイ、銀行振込、代金引換、コンビニ決済、などがお選びいただけます。
                    </p>
                    <div className="payment-icons">
                        <img src="/path/to/visa.png" alt="VISA" />
                        <img src="/path/to/mastercard.png" alt="Mastercard" />
                        <img src="/path/to/jcb.png" alt="JCB" />
                        {/* 他の決済方法のアイコン */}
                    </div>
                </div>

                <div className="guide-item">
                    <h3>新品3千円以上お買上で送料無料</h3>
                    <p>
                        新品商品は3千円以上お買い上げで全国送料無料にて配送します。
                        中古商品に関してはご利用ガイドをご確認ください。
                    </p>
                    <p className="guide-link">▶ ご利用ガイド</p>
                </div>
            </div>
            <p className="year-round">
                <span>年中無休で毎日出荷</span>
                e☆イヤホンは年中無休で営業しています。休まず出荷いたします。
            </p>
        </div>
        </div>
    </section>
    </>
    )
}

export default Guidance;