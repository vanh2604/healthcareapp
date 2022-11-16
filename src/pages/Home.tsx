import React, { useEffect } from 'react';
import ButtonExtra from '../components/ButtonExtra/ButtonExtra';
import Meal from '../components/MealHistory/Meal';
import Option from '../components/Option/Option';
import ButtonScrollTop from '../components/ButtonScrollTop/ButtonScrollTop';
import LineChart from '../components/LineChart/LineChary';
import CircularBar from '../components/CircularProgressBar/CircularBar';
import { mealService } from '../service';

const { getHealInfo } = mealService;
const Home: React.FC = () => {
  useEffect(() => {
    getHealInfo().then((res) => {
      console.log(res);
    });
  }, []);
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
  return (
    <div>
      <div className="flex flex-row mt-11">
        <div style={{ width: '540px', height: '316px' }} className="relative">
          <img className="w-full h-full" alt="" src="./assets/Photo/d01.jpg" />
          <CircularBar />
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
          <Meal />
          <Meal />
          <Meal />
          <Meal />
          <Meal />
          <Meal />
          <Meal />
          <Meal />
          <ButtonScrollTop />
        </div>
        <ButtonExtra />
      </div>
    </div>
  );
};

export default Home;
