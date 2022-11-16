import React from 'react';
import './recommnededCard.scss';
const RecommendedCard: React.FC = () => {
  return (
    <div className="recommend-card mr-8 last:mr-0">
      <div className="title">RECOMMENDED</div>
      <div className="title">COLUMN</div>
      <div className="hr"></div>
      <div className="desc">オススメ</div>
    </div>
  );
};

export default RecommendedCard;
