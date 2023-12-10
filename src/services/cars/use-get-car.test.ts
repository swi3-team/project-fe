import axios from 'axios';
import { renderHook, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import { useGetCar } from './use-get-car';

vi.mock('axios');

describe('useGetCar', () => {
  it('initial state is correct', () => {
    const { result } = renderHook(() => useGetCar('1'));

    expect(result.current.data).toBeUndefined();
    expect(result.current.error).toBeUndefined();
  });

  it('sets isLoading to true while fetching car data', async () => {
    const carId = '1';
    const mockCarData = { id: carId, make: 'Test', model: 'Car' };
    vi.spyOn(axios, 'get').mockResolvedValue({ data: mockCarData });

    const { result } = renderHook(() => useGetCar(carId));

    // Wait for isLoading to become true
    await waitFor(() => expect(result.current.isLoading).toBe(true));

    // Then wait for isLoading to become false
    await waitFor(() => expect(result.current.isLoading).toBe(false));

    expect(result.current.data).toEqual(mockCarData);
    expect(result.current.error).toBeUndefined();
  });

  it('sets error when fetching car data fails', async () => {
    const mockError = new Error('Network error');
    vi.spyOn(axios, 'get').mockRejectedValue(mockError);

    const { result } = renderHook(() => useGetCar('1'));

    // Wait for isLoading to become false
    await waitFor(() => expect(result.current.isLoading).toBe(false));

    expect(result.current.error).toEqual(mockError);
    expect(result.current.data).toBeUndefined();
  });
});
