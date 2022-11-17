import { useEffect, useState } from 'react';
import { mealService } from '../service';
import { IMealResponse } from '../interfaces/meal';

const { getHealInfo } = mealService;
const useHealth = () => {
  const [healthData, setHealthData] = useState<IMealResponse>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getHealthData = async () => {
    try {
      setIsLoading(true);
      const data = await getHealInfo();
      setHealthData(data);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getHealthData();
  }, []);

  return {
    healthData,
    isLoading
  };
};

export default useHealth;
