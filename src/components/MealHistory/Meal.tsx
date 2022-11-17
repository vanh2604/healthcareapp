import React from 'react';
import './meal.scss';
import { IMealHistory } from '../../interfaces/meal';

interface MealProps {
  meal: IMealHistory;
}

const Meal: React.FC<MealProps> = (props) => {
  const { meal } = props;
  return (
    <div className="relative w-64 h-64 meal ml-2 mb-2">
      <img className="w-full h-full" src={meal.imgUrl}></img>
      <div className="info">{meal.time}</div>
    </div>
  );
};

export default Meal;
