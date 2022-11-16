import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="bg-black flex flex-row pl-40 py-14" style={{ backgroundColor: '#414141' }}>
      <span style={{ fontSize: '11px', marginLeft: '45px' }} className="text-white font-light">
        会員登録
      </span>
      <span style={{ fontSize: '11px', marginLeft: '45px' }} className="text-white font-light">
        運営会社
      </span>
      <span style={{ fontSize: '11px', marginLeft: '45px' }} className="text-white font-light">
        利用規約
      </span>
      <span style={{ fontSize: '11px', marginLeft: '45px' }} className="text-white font-light">
        個人情報の取扱について
      </span>
      <span style={{ fontSize: '11px', marginLeft: '45px' }} className="text-white font-light">
        特定商取引法に基づく表記
      </span>
      <span style={{ fontSize: '11px', marginLeft: '45px' }} className="text-white font-light">
        お問い合わせ
      </span>
    </div>
  );
};

export default Footer;
