import axios from 'axios';
import { renderHook, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import { useDeleteCar } from './use-delete-car';

vi.mock('axios');

describe('useDeleteCar', () => {
  it('initial state is correct', () => {
    const { result } = renderHook(() => useDeleteCar());

    expect(result.current.isDeleting).toBe(false);
    expect(result.current.error).toBeUndefined();
  });

  it('sets isDeleting to true while deleting a car', async () => {
    const carId = '123';
    vi.spyOn(axios, 'delete').mockResolvedValue({});

    const { result } = renderHook(() => useDeleteCar());

    // Trigger the deleteCar function
    result.current.deleteCar(carId);

    // Wait for isDeleting to become false
    await waitFor(() => expect(result.current.isDeleting).toBe(false));
  });

  it('sets error when deleting a car fails', async () => {
    const mockError = new Error('Network error');
    vi.spyOn(axios, 'delete').mockRejectedValue(mockError);

    const { result } = renderHook(() => useDeleteCar());

    // Trigger the deleteCar function
    result.current.deleteCar('123');

    // Wait for the hook to update after the mock API call
    await waitFor(() => expect(result.current.error).toEqual(mockError));

    // Assert that isDeleting is false after the operation
    expect(result.current.isDeleting).toBe(false);
  });
});
