import Logo from '../img/eearphoneLogo.svg';
import Lp_header from '../img/lpheader.png';
import { BrowserRouter, Route, Routes, Link } from 'react-router';
import { useState } from 'react';

function Lpheader() {
    const [isOpen, setIsOpen] = useState(false); // メニューの開閉状態を管理

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
        <header>
            <div className='lp_header'>
                <Link to="/"><img className='img_logo' src={Logo} alt="e☆イヤホン" /></Link>
                <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
                <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
                    <li>買取実績</li>
                    <li>キャンペーン</li>
                    <li>高価買取リスト</li>
                    <Link to="/" style={{ textDecoration: 'none' }}><li>オンラインストア</li></Link>
                    <li id='LP_btn'>無料査定申込</li>
                </ul>
            </div>
            <h1 className='LPh1'><img src={Lp_header} alt="イヤホンの買取なら業界最大級のイヤホン・ヘッドホン買取サイト" /></h1>
        </header>
        </>
    )
}

export default Lpheader;

