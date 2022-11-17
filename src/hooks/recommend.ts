import { useEffect, useState } from 'react';
import { recommendService } from '../service';
import { IRecommendResponse } from '../interfaces/recommend';

const { getRecommendInfo } = recommendService;
const useRecommend = () => {
  const [recommendData, setRecommendData] = useState<IRecommendResponse>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getRecommendData = async () => {
    try {
      setIsLoading(true);
      const data = await getRecommendInfo();
      setRecommendData(data);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getRecommendData();
  }, []);

  return {
    recommendData,
    isLoading
  };
};

export default useRecommend;
