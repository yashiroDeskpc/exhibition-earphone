import purimg1 from '../img/purimg1.jpg';
import purimg2 from '../img/purimg2.jpg';
import purimg3 from '../img/purimg3.jpg';
import purimg4 from '../img/purimg4.jpg';
import cleaning1 from '../img/cleaning.jpg';
import cleaning2 from '../img/cleaning2.jpg';
import cleaning3 from '../img/cleaning3.jpg';
import cleaning4 from '../img/cleaning4.jpg';


function Col3_item() {
    return (
        <div className='col3_item'>
            <div className='col3_itemback'>
                <p>イヤホンを<span>より高く売るコツ</span></p>
            <div className='col3_item_text'>
                <img src={purimg1} alt="purimg1" />
                <img src={purimg2} alt="purimg2" />
                <img src={purimg3} alt="purimg3" />
                <img src={purimg4} alt="purimg4" />
            </div>
            </div>

            <div className='col3_itemback'>
                <p>自宅でできる<span>クリーキングで査定UP</span></p>
            <div className='col3_item_text'>
                <img src={cleaning1} alt="cleaning1" />
                <img src={cleaning2} alt="cleaning2" />
                <img src={cleaning3} alt="cleaning3" />
                <img src={cleaning4} alt="cleaning4" />
            </div>
            </div>
        </div>
    )
}

function Highpur() {
    return (
        <div className="highpur-list">
            <h2>売るなら今！</h2>
            <h3>e☆イヤホンSelect</h3>
            <h3>今月の高価買取リスト</h3>
            
            <table className="highpur-table">
                <thead>
                    <tr>
                        <th>メーカー・商品名</th>
                        <th>買取強化中!</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>??????????</td>
                        <td className="price">¥11,000</td>
                    </tr>
                    <tr>
                        <td>??//a</td>
                        <td className="price">¥9,800</td>
                    </tr>
                    <tr>
                        <td>avt974k</td>
                        <td className="price">¥59,800</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}


function Precautions() {
    return (
        <>
        <div className="precautions">
            <h3 className="pretitle">【未開封・同一商品複数点の買取につきまして】</h3>
            <p>
                未開封品・同一商品複数点の買取につきましては、購入証明のご提示をお願いしております。警察署により、未開封商品および同一商品複数点の買取ご利用の際は、購入証明書レシート・納品書等）の確認をするよう指導されております。（※ご利用日の間隔が短く、同一商品を買取に出される場合も同様です。）それに伴い、同一商品2点目以降の買取上限金額をお下げする場合がございます。
            </p>

            <h3>【適格請求書（インボイス）発行業者の確認の実施】</h3>
            <p>
                2023年10月1日より開始されるインボイス制度に伴い、 買取申込書に該当可否の項目を追加いたしました。 買取りに出されるお品物が下記条件いずれかに該当する場合、 「適格請求書発行事業者」となります。 ・お客様にて個人事業もしくは法人として販売していた在庫商品 ・買取業者へ販売を目的に購入している商品 ※基本的に適格請求書 （インボイス） 発行事業者は一部の法人・個人事業主のお客様が対象となります。 ※個人使用が目的だった商品は該当にはなりません。 適格請求書発行事業者の場合はお査定後にご請求書をお客様にて発行していただき、 ご入金とさせていただきます。 お手数ではございますが、 ご確認のほど何卒よろしくお願いいたします。
            </p>
        </div>
        </>     
    );
}


function Col3() {
    return (
        <>
        <Col3_item />
        <Highpur />
        <Precautions />
        </>
    )
};

export default Col3;