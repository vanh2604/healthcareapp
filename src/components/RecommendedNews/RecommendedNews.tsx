import React from 'react';
import './recommendednews.scss';
import { IRecommendNew } from '../../interfaces/recommend';

interface RecommendProps {
  recommend: IRecommendNew;
}

const RecommendedNews: React.FC<RecommendProps> = (props) => {
  const { recommend } = props;
  return (
    <div style={{ width: '240px' }} className="mb-2 mr-2">
      <div className="relative news">
        <img className="w-full h-full" src={recommend.imgUrl}></img>
        <div className="info">{recommend.date}</div>
      </div>
      <div className="title">{recommend.title}</div>
      <div className="tag">{recommend.tag}</div>
    </div>
  );
};

export default RecommendedNews;
