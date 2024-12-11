import { useState } from 'react'
import Header from'./component/header'
import Footer from './component/footer'
import SliderComponent from './component/swiper'
import Content from './component/side'
import './App.css'
import Checked from './component/maincol1'
import Reviewcol from './component/review'
import News from './component/news'

function App() {

  return (
    <>
    <Header />
    <SliderComponent />
    <div className='grid-container'>
    <div className="productcate" id='productcateleft'>
    <Content />
    </div>
    <div className="productcate" id='productcateright'>
    <Checked />
    </div>
    </div>
    <Reviewcol />
    <News />
    <Footer />
    </>
  )
}

export default App

