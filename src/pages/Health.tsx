import React from 'react';
import RecommendedCard from '../components/RecommendedCard/RecommendedCard';
import RecommendedNews from '../components/RecommendedNews/RecommendedNews';
import ButtonExtra from '../components/ButtonExtra/ButtonExtra';
import ButtonScrollTop from '../components/ButtonScrollTop/ButtonScrollTop';
import useRecommend from '../hooks/recommend';
import Loading from '../components/Loading/Loading';
import { useLoadMore } from '../hooks/common';
const Health: React.FC = () => {
  const { recommendData, isLoading } = useRecommend();
  const { loadMore, handleLoadMore } = useLoadMore();

  if (isLoading) {
    return <Loading />;
  }

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
          {loadMore
            ? recommendData?.recommend_news.map((recommend, index) => {
                return <RecommendedNews recommend={recommend} key={index} />;
              })
            : recommendData?.recommend_news.slice(0, 8).map((recommend, index) => {
                return <RecommendedNews recommend={recommend} key={index} />;
              })}
          <ButtonScrollTop />
        </div>
        {!loadMore && <ButtonExtra handleLoadMore={handleLoadMore} />}
      </div>
    </div>
  );
};

export default Health;
