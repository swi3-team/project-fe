import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../constants';
import { Car } from '../../types';

const useGetCars = () => {
  const [data, setData] = useState<Car[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error>();

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(API_URL + '/cars/');
      setData(response.data);
    } catch (error: unknown) {
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading, error, refetch: fetchData };
};

export default useGetCars;
