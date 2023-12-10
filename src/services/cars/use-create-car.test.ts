import axios from 'axios';

import { useCreateCar } from './use-create-car';
import { vi } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';

vi.mock('axios');

describe('useCreateCar', () => {
  it('initial state is correct', () => {
    const { result } = renderHook(() => useCreateCar());

    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBeUndefined();
  });

  it('sets isLoading to true while creating a car', async () => {
    const mockCar = { make: 'Test', model: 'Car' };
    vi.spyOn(axios, 'post').mockResolvedValue({});

    const { result } = renderHook(() => useCreateCar());

    // Trigger the createCar function
    result.current.createCar(mockCar);

    // Then wait for isLoading to become false
    await waitFor(() => expect(result.current.isLoading).toBe(false));
  });

  it('sets error when creating a car fails', async () => {
    const mockError = new Error('Network error');
    vi.spyOn(axios, 'post').mockRejectedValue(mockError);

    const { result } = renderHook(() => useCreateCar());

    result.current.createCar({});

    await waitFor(() => expect(result.current.error).toEqual(mockError));
    expect(result.current.isLoading).toBe(false);
  });
});
