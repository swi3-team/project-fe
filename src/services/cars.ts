import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from './constants';
import { Car } from '../types';

const useGetCars = () => {
  const [data, setData] = useState<Car[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(API_URL + '/cars/all');
        setData(response.data);
      } catch (error: unknown) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, isLoading, error };
};

export default useGetCars;
