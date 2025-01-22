import { useState } from 'react';
import Header from './component/header';
import Footer from './component/footer';
import SliderComponent from './component/swiper';
import Content from './component/side';
import Checked from './component/maincol1';
import Reviewcol from './component/review';
import News from './component/news';
import Guidance from './component/guidance';
import Sougo from './component/guidance';
import Toppage from './component/Toppage';
import { BrowserRouter, Route, Routes, Link } from 'react-router';
import Highpur from './LP/highpur';
import Purcheck from './LP/purcheck';
import LP from './LP/LP';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Toppage />} />
      <Route path="/LP" element={<LP />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

