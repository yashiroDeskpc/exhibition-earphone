import Header from "../component/header";
import Footer from "../component/footer";
import Categ_search from "../component/side";
import Kawari from "./swiper";
import "./purchase.css";

function Purchase() {
  return (
    <>
      <Header />
      <Categ_search />
      <Kawari />
      <Footer />
    </>
  );
}

export default Purchase;