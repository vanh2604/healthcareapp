import React from 'react';
import './meal.scss';
const Meal: React.FC = () => {
  return (
    <div className="relative w-64 h-64 meal ml-2 mb-2">
      <img className="w-full h-full" src="./assets/Photo/m01.jpg"></img>
      <div className="info">.05.21.Morning</div>
    </div>
  );
};

export default Meal;
