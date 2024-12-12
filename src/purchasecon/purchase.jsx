import Header from "../component/header";
import Footer from "../component/footer";
import Categ_search from "../component/side";
import { RecentCheckedProducts } from "../component/maincol1";

function Purchase() {
  return (
    <>
      <Header />
      <Categ_search />
      <RecentCheckedProducts />
      <Footer />
    </>
  );
}

export default Purchase;