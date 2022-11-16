import React from 'react';
import RecommendedCard from '../components/RecommendedCard/RecommendedCard';
import RecommendedNews from '../components/RecommendedNews/RecommendedNews';
import ButtonExtra from '../components/ButtonExtra/ButtonExtra';
import ButtonScrollTop from '../components/ButtonScrollTop/ButtonScrollTop';
const Health: React.FC = () => {
  return (
    <div>
      <div className="mt-28 app-container-body">
        <div className="flex flex-row flex-wrap items-center justify-center">
          <RecommendedCard />
          <RecommendedCard />
          <RecommendedCard />
          <RecommendedCard />
        </div>
        <div className="flex flex-row flex-wrap justify-center mt-10 relative">
          <RecommendedNews />
          <RecommendedNews />
          <RecommendedNews />
          <RecommendedNews />
          <RecommendedNews />
          <RecommendedNews />
          <RecommendedNews />
          <RecommendedNews />
          <ButtonScrollTop />
        </div>
        <ButtonExtra />
      </div>
    </div>
  );
};

export default Health;
