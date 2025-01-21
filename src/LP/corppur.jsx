import corppur_img from '../img/purplan.svg';



function Corppur() {
    return (
        <>
        <div className='corppur'>
            <h2>e☆イヤホンの法人買取</h2>
            <p>大量の同一商品の在庫整理や在庫処分、その他展示機サンプルなどで使用されたお品物も買取しております。ポータブルオーディオの専門知識を持ち、取引経験豊富な専任担当者がご対応いたします。お見積、取引方法、取引期間も柔軟にご提案いたします。
            </p>
        </div>
        <div className="corppur_img">
            <img className='corppur_img1' src={corppur_img} alt="corppur_img"  />
        </div>
        <button className="corppur_btn">法人買取の詳細はこちら</button>
        </>
    )
}

export default Corppur;