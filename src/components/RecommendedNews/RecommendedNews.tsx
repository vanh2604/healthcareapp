import React from 'react';
import './recommendednews.scss';

const RecommendedNews: React.FC = () => {
  return (
    <div className="relative news mb-2 mr-2">
      <img className="w-full h-full" src="./assets/Photo/column-1.jpg"></img>
      <div className="info">2021.05.17 23:25</div>
    </div>
  );
};

export default RecommendedNews;
