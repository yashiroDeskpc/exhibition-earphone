import React from 'react';

function Question() {
    return (
        <div className="question">
            <h2>よくある質問</h2>
            <div className="faq-item">
                <h3>Q1. 宅配買取は有料ですか？</h3>
                <p>e☆イヤホンの買取は店頭でも宅配でも完全無料でご利用いただけます。どうぞ安心して、ご利用ください。</p>
            </div>
            <div className="faq-item">
                <h3>Q2. 本人確認書類とはどういったものですか？</h3>
                <p>「氏名」「現住所」「生年月日(年齢)」が確認できる書類（運転免許証、健康保険証、パスポート、在留カード、住民基本台帳カード、学生証など）です。</p>
            </div>
            <div className="faq-item highlighted">
                <h3>Q3. 買取上限金額ってなに？</h3>
                <p>商品がいくらで売れるかの目安の金額です。実際に査定員が査定させていただき、傷や汚れの有無、付属品の欠品、動作不良等があれば買取上限金額から減額となり、減額後の金額が査定額となります。</p>
            </div>
            <div className="faq-item">
                <h3>Q4. 遠方に住んでいるのですが、買取できますか？</h3>
                <p>全国どこでも無料キットをお送りします！e☆イヤホンの無料梱包キットは日本全国どこでも無料でお届けいたします。※国内在住の方に限ります。</p>
            </div>
            <button className="more-button">よくある質問をもっと見る</button>
        </div>
    );
}

export default Question;
