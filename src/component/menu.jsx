import { useState } from "react";
import '../app.css'
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart, FaPlus, FaMinus } from "react-icons/fa6";
import { IoSearch,IoPerson } from "react-icons/io5";
import { BrowserRouter, Route, Routes, Link } from 'react-router';



function HamburgerMenu() {
    const [ isOpen, setIsOpen ] = useState(false);
    const [openSections, setOpenSections] = useState({
        new: false,
        used: false,
        purchase: false,
        repair: false
    });

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const toggleSection = (section) => {
        setOpenSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    }

    return(
        <>
        <div className="hamburger-menu">
            <div className={`header_btn ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className={`line1 ${isOpen ? 'open' : ''}`}></div>
                <div className={`line2 ${isOpen ? 'open' : ''}`}></div>
                <div className={`line3 ${isOpen ? 'open' : ''}`}></div>
            </div>

            <div className={`menu ${isOpen ? 'open' : ''}`}>
                {/* 閉じるボタンとサーチ */}
                <div className="menu-header">
                <select name="search_type" className="search_type">
                        <option value="1">新品</option>
                        <option value="2">中古</option>
                        <option value="3">買取</option>
                    </select>
                    <div className="search-box">
                        <input type="text" placeholder="なにをお探しですか？" />
                        <IoSearch className="search-icon" />
                    </div>
                </div>

                {/* ログインエリア */}
                <div className="login-area">
                    <div className="login-icons">
                        <div className="login-item">
                            <IoPerson />
                            <span>ログイン</span>
                        </div>
                        <div className="login-item">
                            <FaHeart />
                            <span>お気に入り</span>
                        </div>
                    </div>
                </div>

                {/* カテゴリーリスト */}
                <div className="category-list">
                    <div className="category-section">
                        <div 
                            className="section-header" 
                            onClick={() => toggleSection('new')}
                        >
                            <h4>カテゴリ</h4>
                            {openSections.new ? <FaMinus /> : <FaPlus />}
                        </div>
                        <ul className={openSections.new ? 'open' : ''}>
                            <li>ワイヤレス</li>
                            <li>有線イヤホン</li>
                            <li>有線ヘッドホン</li>
                            <li>ゲーミング</li>
                            <li>プレイヤー</li>
                            <li>AMP・DAC</li>
                            <li>ケーブル</li>
                            <li>スピーカー</li>
                            <li>修理・自作</li>
                            <li>雑貨アクセサリー</li>
                            <li>アウトレット</li>
                        </ul>
                    </div>

                    <div className="category-section">
                        <div 
                            className="section-header" 
                            onClick={() => toggleSection('used')}
                        >
                            <h4>中古</h4>
                            {openSections.used ? <FaMinus /> : <FaPlus />}
                        </div>
                        <ul className={openSections.used ? 'open' : ''}>
                            <li>中古ワイヤレス</li>
                            <li>中古イヤホン</li>
                            <li>中古ヘッドホン</li>
                            <li>中古プレイヤー</li>
                            <li>中古アンプ</li>
                            <li>中古スピーカー</li>
                            <li>中古アクセサリー</li>
                        </ul>
                    </div>
                    <div className="category-section">
                        <div 
                            className="section-header" 
                            onClick={() => toggleSection('purchase')}
                        >
                            <h4>買取</h4>
                            {openSections.purchase ? <FaMinus /> : <FaPlus />}
                        </div>
                        <ul className={openSections.purchase ? 'open' : ''}>
                        <li><Link to="/LP" className='menu-lp-nav'>eイヤホンの買取サービス</Link></li>
                            <li>無料査定のお申込み</li>
                            <li>買取査定を調べる</li>
                            <li>買取Q&A</li>
                        </ul>
                    </div>
                    <div className="category-section">
                        <div 
                            className="section-header" 
                            onClick={() => toggleSection('repair')}
                        >
                            <h4>修理</h4>
                            {openSections.repair ? <FaMinus /> : <FaPlus />}
                        </div>
                        <ul className={openSections.repair ? 'open' : ''}>
                            <li>e☆イヤホンクリニック</li>
                        </ul>
                    </div>
                    <div className="category-item">
                        <span>カスタムIEM</span>
                        <FaPlus style={{color:"#f58026"}} />
                    </div>
                    <div className="category-item">
                        <span>ブランド一覧</span>
                        <FaPlus style={{color:"#f58026"}} />
                    </div>
                    <div className="category-item">
                        <span>店舗案内</span>
                        <FaPlus style={{color:"#f58026"}} />
                    </div>
                    <div className="category-item">
                        <span>商品検索</span>
                        <FaPlus style={{color:"#f58026"}} />
                    </div>
                    <div className="category-item">
                        <span>キャンペーン一覧</span>
                        <FaPlus style={{color:"#f58026"}} />
                    </div>
                </div>

                {/* SNSリンク */}
                <div className="sns-links">
                    <a href="#" className="sns-icon">Blog</a>
                    <a href="#" className="sns-icon">YouTube</a>
                    <a href="#" className="sns-icon">X</a>
                    <a href="#" className="sns-icon">Instagram</a>
                </div>
            </div>
        </div>
        </>
    )
}

export default HamburgerMenu;