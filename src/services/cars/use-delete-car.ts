import { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../constants';

export const useDeleteCar = () => {
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [error, setError] = useState<Error>();

  const deleteCar = async (id: string) => {
    setIsDeleting(true);

    try {
      await axios.delete(`${API_URL}/cars/${id}`);
    } catch (error: unknown) {
      setError(error as Error);
    } finally {
      setIsDeleting(false);
    }
  };

  return { isDeleting, error, deleteCar };
};
