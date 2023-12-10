// Generated by CodiumAI

import axios from 'axios';
import { useGetBrands } from './use-get-brands';
import { vi } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';

describe('useGetBrands', () => {
  // Test for initial state and structure
  it('should return an object with data, isLoading, and error properties', async () => {
    const mockData = [{ id: 1, name: 'Brand 1', country: 'Country 1' }];
    vi.spyOn(axios, 'get').mockResolvedValue({ data: mockData });

    const { result } = renderHook(() => useGetBrands());

    // Initially, isLoading should be true and data should be an empty array
    expect(result.current.isLoading).toBe(true);
    expect(result.current.data).toEqual([]);
    expect(result.current.error).toBeUndefined();

    // Wait for the hook to update after the mock API call
    await waitFor(() => expect(result.current.data).toEqual(mockData));

    // After the API call, isLoading should be false
    expect(result.current.isLoading).toBe(false);
  });

  // Test for isLoading being true initially
  it('should set isLoading to true before making the API call', () => {
    vi.spyOn(axios, 'get').mockResolvedValue({ data: [] });

    const { result } = renderHook(() => useGetBrands());

    expect(result.current.isLoading).toBe(true);
  });

  // Test for setting error when API call fails
  it('should set error to the caught error when API call fails', async () => {
    const mockError = new Error('API Error');
    vi.spyOn(axios, 'get').mockRejectedValue(mockError);

    const { result } = renderHook(() => useGetBrands());

    // Wait for the hook to update after the mock API call
    await waitFor(() => expect(result.current.error).toEqual(mockError));

    // isLoading should be false after the API call, even if it fails
    expect(result.current.isLoading).toBe(false);
  });

  // Test for isLoading remaining true during a long API call
  it('should keep isLoading as true until the API call is completed', async () => {
    vi.spyOn(axios, 'get').mockImplementation(() => new Promise(() => {})); // Mock long API call

    const { result } = renderHook(() => useGetBrands());

    expect(result.current.isLoading).toBe(true);

    // Optionally, you can wait for some time and check if isLoading is still true
    // Note: This does not wait for the API call to complete, as it never will in this mock
    await new Promise((resolve) => setTimeout(resolve, 100));
    expect(result.current.isLoading).toBe(true);
  });
});