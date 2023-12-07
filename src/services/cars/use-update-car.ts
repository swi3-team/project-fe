import { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../constants';

export const useUpdateCar = () => {
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const [error, setError] = useState<Error>();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updateCar = async (c: any) => {
    setIsUpdating(true);
    try {
      await axios.put(`${API_URL}/cars/${c.id}`, c);
    } catch (error: unknown) {
      setError(error as Error);
    } finally {
      setIsUpdating(false);
    }
  };

  return { isUpdating, error, updateCar };
};
