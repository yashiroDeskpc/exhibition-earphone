import Header from '../component/header'
import Footer from '../component/footer'
import SliderComponent from '../component/swiper'
import Bannar from '../component/side'
import RecentProducts from '../component/maincol1'
import Reviewcol from '../component/review'
import News from '../component/news'
import Guidance from '../component/guidance'
import Recommend from '../component/recommend'
import BrandSearch from '../component/BrandSearch'
import CategSearch from '../component/categ'
import HamburgerMenu from './menu'
import '../App.css';

function Toppage() {
    return (
        <>
        <div className='header-top'>
        <HamburgerMenu />
        <Header />
        <SliderComponent />
        <div className='grid-container'>
        <div className="productcate" id='productcateleft'>
        <Bannar />
        <CategSearch />
        <BrandSearch />
        </div>
        <div className="productcate" id='productcateright'>
        <RecentProducts />
        </div>
        </div>
        <Reviewcol />
        <News />
        <Recommend />
        <Guidance />
        </div>
        <Footer />
        </>
    )
}

export default Toppage;