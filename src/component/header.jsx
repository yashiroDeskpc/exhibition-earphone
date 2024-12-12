import React, { useState } from 'react';
import Logo from '../img/eearphoneLogo.svg';
import { FaSearch } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

function Header() {
    return (
        <header>
            <h1>世界中のイヤホン・ヘッドホンが試聴・買取・購入ができる専門店</h1>
            <div className='h_top'>
                <img className='img_logo' src={Logo} alt="e☆イヤホン" />
                <div className='search_window'>
                    <select name="search_type" className="search_type">
                        <option value="1">新品</option>
                        <option value="2">中古</option>
                        <option value="3">買取</option>
                    </select>
                    <div className='search_box_wrapper'>
                        <input className='search_text' type="search" placeholder='キーワード検索' name='s'/>
                        <FaSearch className='search_icon'/>
                    </div>
                    <button className='kaitori_btn'>買取金額検索</button>
                </div>
                <ul className="mypage">
                    <li>
                        <div className="container">
                            <IoPerson />
                            <p>ログイン</p>
                        </div>
                    </li>
                    <li>
                        <div className="container">
                            <FaHeart />
                            <p>お気に入り</p>
                        </div>
                    </li>
                    <li>
                        <div className="container">
                            <FaShoppingCart />
                            <p>カート</p>
                        </div>
                    </li>
                </ul>
            </div>
            <nav className="header_nav">
                <ul>
                    <li>購入&#x2304;</li>
                    <li>中古&#x2304;</li>
                    <li>修理&#x2304;</li>
                    <li>カスタムIEM&#x2304;</li>
                    <li>店舗一覧&#x2304;</li>
                    <li>商品を探す&#x2304;</li>
                    <li>お得なキャンペーン&#x2304;</li>
                </ul>
                <div className="header_info">
                    <div className="info_top">
                        <span className="info_blue">新品3,000円以上で送料無料</span>
                        <span className="info_blue">16:00までのご注文で即日出荷</span>
                    </div>
                    <div className="info_bottom">
                        <a href="#">ご利用ガイド</a>
                        <a href="#">お問い合わせ</a>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;