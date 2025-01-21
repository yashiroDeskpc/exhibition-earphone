import headphone from '../img/headphone1.png';







const purproducts = [
    { id: 1, image: headphone, name: "商品名",  price: "￥105,100", purdays: "買取日:2024/11/12" },
    { id: 2, image: headphone, name: "商品名",  price: "￥1,105,100", purdays: "買取日:2024/01/12" },
    { id: 3, image: headphone, name: "商品名", price: "￥304,500", purdays: "買取日:2024/08/12" },
    { id: 4, image: headphone, name: "商品名", price: "￥195,100",  purdays: "買取日:2024/05/23" },
  ];

const purproducts2 =[
    { id: 1, image: headphone, name: "商品名",  price: "￥105,100", purdays: "買取日:2024/11/12" },
    { id: 2, image: headphone, name: "商品名",  price: "￥1,105,100", purdays: "買取日:2024/01/12" },
    { id: 3, image: headphone, name: "商品名", price: "￥304,500", purdays: "買取日:2024/08/12" },
    { id: 4, image: headphone, name: "商品名", price: "￥195,100",  purdays: "買取日:2024/05/23" },
]


function Highpur() {
    return (
        <div className='highpur'>
            <p><span>店頭</span>＆<span>宅配</span>買取<span>強化中!!</span></p>
            <h2>専門店だからできる高価買取</h2>
            <div className='highpur_list'>
                {purproducts.map((purproduct) => (
                    <div key={purproduct.id} className="highpur_list_item">
                        <img src={purproduct.image} alt={purproduct.name} className="product-image" />
                        <p>{purproduct.purdays}</p>
                        <p>{purproduct.name}</p>
                        <p>{purproduct.price}</p>
                    </div>
                ))}
            </div>
            <div className='highpur_list'>
                {purproducts2.map((purproduct2) => (
                    <div key={purproduct2.id} className="highpur_list_item">
                        <img src={purproduct2.image} alt={purproduct2.name} className="product-image" />
                        <p>{purproduct2.purdays}</p>
                        <p>{purproduct2.name}</p>
                        <p>{purproduct2.price}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Highpur;