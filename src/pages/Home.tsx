import React from 'react';
import ButtonExtra from '../components/ButtonExtra/ButtonExtra';
import Meal from '../components/MealHistory/Meal';
import Option from '../components/Option/Option';
import ButtonScrollTop from '../components/ButtonScrollTop/ButtonScrollTop';
import LineChart from '../components/LineChart/LineChary';
import CircularBar from '../components/CircularProgressBar/CircularBar';
import useHealth from '../hooks/health';
import Loading from '../components/Loading/Loading';
import { useLoadMore } from '../hooks/common';
const options = {
  // responsive: false,
  scales: {
    y: {
      display: false
    }
  },
  plugins: {
    legend: {
      display: false
    }
  },
  maintainAspectRatio: false
};
const Home: React.FC = () => {
  const { healthData, isLoading } = useHealth();
  const { loadMore, handleLoadMore } = useLoadMore();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="flex flex-row mt-11">
        <div style={{ width: '540px', height: '316px' }} className="relative">
          <img className="w-full h-full" alt="" src="./assets/Photo/d01.jpg" />
          <CircularBar archivementRate={healthData?.achievement_rate} />
        </div>
        <div style={{ height: '316px', backgroundColor: '#2E2E2E' }} className="flex-1">
          <LineChart option={options} />
        </div>
        {/*<CircularBar />*/}
      </div>
      <div className="bg-white px-48 pt-6 pb-16">
        <div className="flex flex-row justify-center pb-6">
          <Option />
          <Option />
          <Option />
          <Option />
        </div>
        <div className="flex flex-row flex-wrap relative">
          {loadMore
            ? healthData?.meal_history.map((meal, index) => {
                return <Meal meal={meal} key={index} />;
              })
            : healthData?.meal_history.slice(0, 8).map((meal, index) => {
                return <Meal meal={meal} key={index} />;
              })}
          <ButtonScrollTop />
        </div>
        {!loadMore && <ButtonExtra handleLoadMore={handleLoadMore} />}
      </div>
    </div>
  );
};

export default Home;
