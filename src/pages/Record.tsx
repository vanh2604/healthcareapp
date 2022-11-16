import React from 'react';
import '../styles/record-page.scss';
import LineChart from '../components/LineChart/LineChary';
import Diary from '../components/Diary/Diary';
import ButtonExtra from '../components/ButtonExtra/ButtonExtra';
import ButtonScrollTop from '../components/ButtonScrollTop/ButtonScrollTop';
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
    },
    title: {
      display: true,
      text: 'BODY RECORD 2021.05.21',
      font: {
        size: 20
      }
    }
  },
  maintainAspectRatio: false
};
const Record: React.FC = () => {
  return (
    <div className="mt-28 app-container-body pb-16">
      <div className="flex flex-wrap justify-center">
        <div className="button-tittle mr-10">
          <div className="w-full h-full relative overflow-hidden">
            <img className="w-full h-full img" src="./assets/Photo/MyRecommend-1.jpg" />
            <div className="absolute w-full h-full faded"></div>
            <div className="title absolute">BODY RECORD</div>
            <div className="desc absolute">自分のカラダの記録</div>
          </div>
        </div>
        <div className="button-tittle mr-10">
          <div className="w-full h-full relative overflow-hidden">
            <img className="w-full h-full img" src="./assets/Photo/MyRecommend-2.jpg" />
            <div className="absolute w-full h-full faded"></div>
            <div className="title absolute">MY EXERCISE</div>
            <div className="desc absolute">自分の運動の記録</div>
          </div>
        </div>
        <div className="button-tittle">
          <div className="w-full h-full relative overflow-hidden">
            <img className="w-full h-full img" src="./assets/Photo/MyRecommend-3.jpg" />
            <div className="absolute w-full h-full faded"></div>
            <div className="title absolute">MY DIARY</div>
            <div className="desc absolute">自分の日記</div>
          </div>
        </div>
      </div>
      <div className="mt-10 relative">
        <div style={{ height: '316px', backgroundColor: '#2E2E2E' }} className="flex-1">
          <LineChart option={options} />
        </div>
        <ButtonScrollTop />
      </div>
      <div style={{ backgroundColor: '#2E2E2E', fontSize: '15px' }} className="mt-10 p-4">
        <div className="text-white flex justify-start items-center mb-2">
          <div className="mr-4">
            MY <br /> Excercise
          </div>
          <div>2021.05.21</div>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-3">
          <div
            className="flex flex-row justify-between"
            style={{ borderBottom: '1px solid #777777' }}
          >
            <div>
              <ul className="text-white list-disc list-inside">
                <li>家事全般（立位・軽い)</li>
              </ul>
              <div style={{ color: '#FFCC21' }}>26kcal</div>
            </div>
            <div style={{ color: '#FFCC21' }}>10 min</div>
          </div>
          <div
            className="flex flex-row justify-between"
            style={{ borderBottom: '1px solid #777777' }}
          >
            <div>
              <ul className="text-white list-disc list-inside">
                <li>家事全般（立位・軽い)</li>
              </ul>
              <div style={{ color: '#FFCC21' }}>26kcal</div>
            </div>
            <div style={{ color: '#FFCC21' }}>10 min</div>
          </div>{' '}
          <div
            className="flex flex-row justify-between"
            style={{ borderBottom: '1px solid #777777' }}
          >
            <div>
              <ul className="text-white list-disc list-inside">
                <li>家事全般（立位・軽い)</li>
              </ul>
              <div style={{ color: '#FFCC21' }}>26kcal</div>
            </div>
            <div style={{ color: '#FFCC21' }}>10 min</div>
          </div>{' '}
          <div
            className="flex flex-row justify-between"
            style={{ borderBottom: '1px solid #777777' }}
          >
            <div>
              <ul className="text-white list-disc list-inside">
                <li>家事全般（立位・軽い)</li>
              </ul>
              <div style={{ color: '#FFCC21' }}>26kcal</div>
            </div>
            <div style={{ color: '#FFCC21' }}>10 min</div>
          </div>
        </div>
      </div>
      <div>
        <div style={{ fontSize: '22px' }}>MY DIARY</div>
        <div className="grid grid-cols-4 gap-4">
          <Diary />
          <Diary />
          <Diary />
          <Diary />
          <Diary />
          <Diary />
          <Diary />
          <Diary />
        </div>
      </div>
      <ButtonExtra />
    </div>
  );
};

export default Record;
