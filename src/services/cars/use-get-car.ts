import axios from 'axios';
import { useEffect, useState } from 'react';
import { Car } from '../../types';
import { API_URL } from '../constants';

export const useGetCar = (id: string) => {
  const [carData, setCarData] = useState<Car>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    const fetchCar = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${API_URL}/cars/${id}`);

        setCarData(response.data);
      } catch (error: unknown) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCar();
  }, [id]);

  return { data: carData, isLoading, error };
};
