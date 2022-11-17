import { useEffect, useState } from 'react';
import { recordService } from '../service';
import { IRecordResponse } from '../interfaces/record';

const { getRecordInfo } = recordService;
const useRecord = () => {
  const [recordData, setRecordData] = useState<IRecordResponse>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getRecordData = async () => {
    try {
      setIsLoading(true);
      const data = await getRecordInfo();
      setRecordData(data);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getRecordData();
  }, []);

  return {
    recordData,
    isLoading
  };
};

export default useRecord;
