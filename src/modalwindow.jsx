import React, { useState } from "react";
import ReactDOM from "react-dom";

// 画像インポート
import houjinimg12 from './img/houjin-1-2.png';
import tenpo from './img/akb_1.jpg';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

const ModalWindow = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (e) => {
    e.preventDefault(); // デフォルトのリンク動作を防ぐ
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // 背景のスクロールを無効にする
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'; // 背景のスクロールを有効に戻す
  };

  return (
    <div className="modal-col">
      {/* リンクのテキストを「法人買取について」に設定 */}
      <a href="#" onClick={openModal} className="open-modal-button">
        法人買取について
      </a>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {/* モーダル内容 */}
        <h3>
          <img
            className="modal-houjin12"
            src={houjinimg12}
            alt="eイヤホンの法人買取専門店だからできる高額買取！法人買取もぜひeイヤホンへ！"
          />
        </h3>

        <section className="modalcol">
          <h4 className="modalh4">オーディオ機器に特化した法人買取サービス</h4>
          <p className="modaltext">
            ポータブルオーディオの専門知識を持ち取引経験豊富な専任担当者がご対応いたします。
            お見積はもちろん、取引方法、取引期間も柔軟にご提案いたします。
          </p>
          <h5>2021年度の買取実績</h5>
          <p className="modaltext2">
            買取点数：76,248点<br />
            買取成約率：97.8％
          </p>
          <h4 className="modalh4">店頭買取・宅配買取の柔軟な対応が可能です</h4>
          <div className="imgdiv">
            <img
              className="modal-imgakiba"
              src={tenpo}
              alt="秋葉原の店舗写真"
            />
          </div>
          <p className="modaltext-bold">
            eイヤホンでは秋葉原、大阪、名古屋、仙台に実店舗があり店頭買取も行っております。
            もちろん、店頭買取以外にも宅配買取も行っております。
          </p>
          <p className="modaltext">
            ☆実店舗<br />
            ・e☆イヤホン 秋葉原店 本館<br />
            ・e☆イヤホン 名古屋大須店<br />
            ・e☆イヤホン 大阪日本橋本店<br />
            ・e☆イヤホン 仙台駅前店
          </p>
          <h4 className="modalh4">eイヤホンで買い取れるお品物</h4>
          <p className="modaltext">
            イヤホン・ヘッドホン・ポータブルヘッドホンアンプ・DAC・DDC・オーディオケーブル・
            各種オーディオアクセサリ等、買い取っております。
            一部、メーカーの保証書がない、国内正規品ではない商品や、Bluetooth製品の技適マークが
            確認できないもの、PSE法に基づき買取不可の商品などがございます。また、イヤーピースや
            アダプターの単体、付属品のみの買取は行っておりません。
          </p>
          <h4 className="modalh4">法人買取事例</h4>
          <p className="modaltext">
            大量の同一商品の在庫整理や在庫処分、その他展示機サンプルなどで使用されたお品物でも買取を行っております。
          </p>
          <p className="modaltext">
            ケース①<br />
            商品点数：約1,400点　買取金額：約600万円<br />
            商品例：イヤホン、ヘッドホン、ケーブル等<br />
            <br />
            ケース②<br />
            商品点数：約2,600点　買取金額：約130万円<br />
            商品例：ワイヤレスイヤホン、ワイヤレスヘッドホン等<br />
            <br />
            ケース③<br />
            商品点数：約40点　買取金額：約100万円<br />
            商品例：展示機、サンプルのイヤホンやヘッドホン等<br />
          </p>
          <h4 className="modalh4">法人買取の手順と流れ</h4>
          <p className="modal-step">
            <span>STEP.1</span>&nbsp;お問い合わせ
          </p>
          <p className="modaltextstep">
            まずは、お電話や申込フォームよりお問い合わせください。スタッフがお話をお聞きし、仮見積もりをいたします。
          </p>
          <p className="modal-step">
            <span>STEP.2</span>&nbsp;お取引方法をご相談
          </p>
          <p className="modaltextstep">
            お取引方法をご相談させていただきます。貴社のご希望などございましたら、何なりとご相談くださいませ。
            誠心誠意心を込めて対応いたします。
          </p>
          <p className="modal-step">
            <span>STEP.3</span>&nbsp;検品後、最終金額のご確認
          </p>
          <p className="modaltextstep">
            お品物を検品させていただき、最終買取金額をご提示いたします。
          </p>
          <p className="modal-step">
            <span>STEP.4</span>&nbsp;買取金額をお支払いいたします
          </p>
          <p className="modaltextstep">
            最終買取金額を明記したご請求書を弊社までお送りください。お支払いをさせていただきます。
          </p>
          <p className="modaltext">
            ※価格検索より表示されます価格に関しましては、個人様向けの買取価格となっております。
            買取する台数により買取価格が変動する場合がございます。予めご了承ください。
            また、当店へお送りいただく送料などに関してもご相談させていただきます。
          </p>
          <p className="modaltextbtmtop">
            ご相談やお見積依頼などお気軽にお問い合わせください。専門のスタッフより折り返しご連絡させていただきます。
            お問い合わせは下記のリンク先よりお問い合わせくださいませ。
          </p>
          {/* ボタンのテキストを「法人買取の詳細」に設定 */}
          <div className="modal-btn-div">
            <button className="modal-btn" formTarget="blank">
              気軽にお問い合わせください
            </button>
          </div>
        </section>
      </Modal>
    </div>
  );
};

export default ModalWindow;
