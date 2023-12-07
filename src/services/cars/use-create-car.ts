/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../constants';

export const useCreateCar = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<Error>();

  const createCar = async (c: any) => {
    setIsSubmitting(true);
    try {
      await axios.post(`${API_URL}/cars/`, c);
    } catch (error: unknown) {
      setError(error as Error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return { isSubmitting, error, createCar };
};
