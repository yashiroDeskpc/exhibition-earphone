import point1 from '../img/4point1.jpg';
import point2 from '../img/4point2.jpg';
import point3 from '../img/4point3.jpg';
import point4 from '../img/4point4.png';





function Purpoint() {
    return (
        <div className='purpointcol'>
            <h2>e☆イヤホンが<br />選ばれる4つのポイント</h2>
            <div className='purpoint'>
                <img src={point1} alt="point1" />
                <img src={point2} alt="point2" />
                <img src={point3} alt="point3" />
            <img src={point4} alt="point4" />
            </div>
        </div>
    )
}

function Point2() {
    return (
        <div className="purpoint2">
            <h2>e☆イヤホンなら<br />フリマアプリより断然簡単＆楽に利用できる!</h2>
            <div className="compare-header">
                <div></div>
                <div className="compare-title">
                    <h3>e☆イヤホン</h3>
                </div>
                <div className="compare-title">
                    <h3>フリマアプリ</h3>
                </div>
            </div>
            <table className="compare-table">
                <tbody>
                    <tr>
                        <td>手数料</td>
                        <td className="highlight">無料！</td>
                        <td>売上手数料・取引手数料・<br/>振込手数料がかかる</td>
                    </tr>
                    <tr>
                        <td>送料</td>
                        <td className="highlight">無料！</td>
                        <td>基本的に出品者が<br/>送料を負担</td>
                    </tr>
                    <tr>
                        <td>梱包材</td>
                        <td className="highlight">無料！さらに梱包キットを<br/>ご自宅までお届け</td>
                        <td>出品者自身で<br/>用意する必要がある</td>
                    </tr>
                    <tr>
                        <td>商品登録作業</td>
                        <td className="highlight">なし</td>
                        <td>あり</td>
                    </tr>
                    <tr>
                        <td>クレーム対応</td>
                        <td className="highlight">なし</td>
                        <td>あり</td>
                    </tr>
                    <tr>
                        <td>出品点数</td>
                        <td className="highlight">まとめて売ると<br/>さらにお得な"まとめ売り"</td>
                        <td>1点ずつ</td>
                    </tr>
                    <tr>
                        <td>売却までの期間</td>
                        <td className="highlight">当店到着後にその日に査定</td>
                        <td>品物・価格による</td>
                    </tr>
                    <tr>
                        <td>振込に関して</td>
                        <td className="highlight">買取成約日当日から<br/>2営業日以内にお振込</td>
                        <td>振込手数料が発生する</td>
                    </tr>
                    <tr>
                        <td>手軽さ</td>
                        <td className="highlight">売りたい商品を詰めて送るだけ</td>
                        <td>購入者との価格交渉が手間</td>
                    </tr>
                    <tr>
                        <td>手軽さ</td>
                        <td className="highlight">すぐに現金化できる</td>
                        <td>商品によっては売れるまで<br/>時間がかかる。売れないことも。</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

function LPcol() {
    return (
        <>
            <Purpoint />
            <Point2 />
        </>
    )
}


export default LPcol;