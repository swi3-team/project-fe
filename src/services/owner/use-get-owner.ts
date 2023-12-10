import { useState } from 'react';
import { Owner } from '../../types';
import { API_URL } from '../constants';

export const useGetOwner = (id: string) => {
  const [data, setData] = useState<Owner>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error>();

  const getOwner = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(`${API_URL}/cars/owners/${id}`);
      const json = await response.json();
      setData(json);
    } catch (error: unknown) {
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  };
  return { data, isLoading, error, getOwner };
};
