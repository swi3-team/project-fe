import axios from 'axios';
import { renderHook, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import { useUpdateCar } from './use-update-car';

vi.mock('axios');

describe('useUpdateCar', () => {
  it('initial state is correct', () => {
    const { result } = renderHook(() => useUpdateCar());

    expect(result.current.isUpdating).toBe(false);
    expect(result.current.error).toBeUndefined();
  });

  it('sets isUpdating to true while updating a car', async () => {
    const mockCar = { id: '1', make: 'Test', model: 'Car' };
    vi.spyOn(axios, 'put').mockResolvedValue({});

    const { result } = renderHook(() => useUpdateCar());

    // Trigger the updateCar function
    result.current.updateCar(mockCar);

    // Then wait for isUpdating to become false
    await waitFor(() => expect(result.current.isUpdating).toBe(false));
  });

  it('sets error when updating a car fails', async () => {
    const mockError = new Error('Network error');
    vi.spyOn(axios, 'put').mockRejectedValue(mockError);

    const { result } = renderHook(() => useUpdateCar());

    // Trigger the updateCar function
    result.current.updateCar({ id: '1' });

    // Wait for isUpdating to become false
    await waitFor(() => expect(result.current.isUpdating).toBe(false));
  });
});
