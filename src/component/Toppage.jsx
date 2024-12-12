import Header from '../component/header'
import Footer from '../component/footer'
import SliderComponent from '../component/swiper'
import Content from '../component/side'
import RecentProducts from '../component/maincol1'
import Reviewcol from '../component/review'
import News from '../component/news'
import Guidance from '../component/guidance'
import  Sougo  from '../component/guidance'

function Toppage() {
    return (
        <>
        <Header />
        <SliderComponent />
        <div className='grid-container'>
        <div className="productcate" id='productcateleft'>
        <Content />
        </div>
        <div className="productcate" id='productcateright'>
        <RecentProducts />
        </div>
        </div>
        <Reviewcol />
        <News />
        <Guidance />
        <Sougo />
        <Footer />
        </>
    )
}

export default Toppage;