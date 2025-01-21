import Header from "../component/header";
import Footer from "../component/footer";
import Kawari from "./swiper";
import Bannar from "../component/side";
import { ItemCaseWrapper } from "../component/maincol1";
import headphone from "../img/headphone1.png";
import CategSearch from "../component/categ";

const products = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  image: headphone,
  name: `商品名${index % 2 === 0 ? 'A' : 'B'}`,
  company: "会社名",
  price: "買取価格上限 0000円",
}));


function Purcateg() {
  return (<>
  <div className="purcateg">
      <Bannar />
      <CategSearch />
      </div>
      </>
  );
}

function Purchase() {
  return (
    <>
    <Header />
      <div className="purchase-container">
        <div className="common-container">
          <Purcateg />
          <ItemCaseWrapper products={products} />
          <div></div>
          <ItemCaseWrapper products={products} />
        </div>
        <h3 className="kawari-title">最近チェックした商品</h3>
        <Kawari />
      </div>
      <Footer />
    </>
  );
}
export default Purchase;