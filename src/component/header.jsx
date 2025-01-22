import React, { useState } from 'react';
import Logo from '../img/eearphoneLogo.svg';
import { FaSearch } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import ModalWindow from '../modalwindow';
import { BrowserRouter, Route, Routes, Link } from 'react-router';




function Header() {
    return (
        <header>
            <h1 className='top-h1'>世界中のイヤホン・ヘッドホンが試聴・買取・購入ができる専門店</h1>
            <div className='h_top'>
                <div className='img_logolink'>
                <Link to='/'><img className='img_logo' src={Logo} alt="e☆イヤホン" /></Link>
                </div>
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
            <div className="cp_menu">

            <div className="menu_item">
                    <label htmlFor="menu01">カテゴリー&#x2304;</label>
                    <ul className="menu_content">
                    <li><a href="">ワイヤレス</a></li>
                    <li><a href="">有線イヤホン</a></li>
                    <li><a href="">有線ヘッドホン</a></li>
                    <li><a href="">ゲーミング</a></li>
                    <li><a href="">プレイヤー</a></li>
                    <li><a href="">AMP・DAC</a></li>
                    <li><a href="">ケーブル</a></li>
                    <li><a href="">スピーカー</a></li>
                    <li><a href="">修理・自作</a></li>
                    <li><a href="">雑貨アクセサリー</a></li>
                    <li><a href="">アウトレット</a></li>
                    <li><a href="">中古</a></li>
                    </ul>
                </div>

                <div className="menu_item">
                    <label htmlFor="menu01">買取&#x2304;</label>
                    <ul className="menu_content">
                        <li><Link to="/LP" className='reactlink'>eイヤホンの買取サービス</Link></li>
                    <li><a href="#">無料査定のお申込み</a></li>
                    <li><a href="#">買取価格を調べる</a></li>
                    <li><a href="#">買取Q&A</a></li>
                    <li><a href="#" id='modal-id'><ModalWindow triggerElement="a" /></a></li>
                    </ul>
                </div>
                <div className="menu_item">
                    <label htmlFor="menu02">中古&#x2304;</label>
                    <ul className="menu_content">
                    <li><a href="#">中古ワイヤレス</a></li>
                    <li><a href="#">中古イヤホン</a></li>
                    <li><a href="#">中古ヘッドホン</a></li>
                    <li><a href="#">中古プレイヤー</a></li>
                    <li><a href="#">中古アンプ</a></li>
                    <li><a href="#">中古ケーブル</a></li>
                    <li><a href="#">中古スピーカー</a></li>
                    <li><a href="#">中古アクセサリー</a></li>
                    </ul>
                </div>
                    <div className="menu_item">
                    <label htmlFor="menu03">修理&#x2304;</label>
                    <ul className="menu_content">
                    <li><a href="#">e☆イヤホンクリニック</a></li>
                    </ul>
                </div>
                    <div className="menu_item">
                    <label htmlFor="menu04">カスタムIEM&#x2304;</label>
                    <ul className="menu_content">
                    <li><a href="#">カスタムIEMとは?</a></li>
                    <li><a href="#">ブランド一覧</a></li>
                    </ul>
                </div>
                    <div className="menu_item">
                    <label htmlFor="menu05">店舗一覧&#x2304;</label>
                    <ul className="menu_content">
                    <li><a href="#"></a></li>

                    </ul>
                </div>
                    <div className="menu_item">
                    <label htmlFor="menu06">商品を探す&#x2304;</label>
                    <ul className="menu_content">
                    <li><a href="#">ブランドから探す</a></li>
                    <li><a href="#">ランキングから探す</a></li>
                    <li><a href="#">キャンペーンから探す</a></li>
                    <li><a href="#">レビューから探す</a></li>
                    <li><a href="#">特集から探す</a></li>
                    </ul>
                </div>
            </div> 
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


