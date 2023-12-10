import { renderHook, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import { useGetOwner } from './use-get-owner';

// Mock global fetch
vi.stubGlobal('fetch', vi.fn());

describe('useGetOwner', () => {
  it('should initially have no data, not be loading, and no error', () => {
    const { result } = renderHook(() => useGetOwner('123'));

    expect(result.current.data).toBeUndefined();
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBeUndefined();
  });

  it('should set isLoading to true while fetching', async () => {
    const mockData = { id: '1', name: 'Owner Name', surname: 'Owner Surname' };
    const mockResponse = new Response(JSON.stringify(mockData), {
      status: 200,
      headers: {
        'Content-type': 'application/json',
      },
    });

    vi.spyOn(global, 'fetch').mockResolvedValue(mockResponse);

    const { result } = renderHook(() => useGetOwner('1'));

    // Trigger the fetch operation and wait for it to complete
    result.current.getOwner();

    // Wait for the hook to update after the mock API call
    await waitFor(() => expect(result.current.isLoading).toBe(false));
  });

  it('should set data after successful fetch', async () => {
    const mockData = { id: '123', name: 'Owner Name' };
    const mockResponse = new Response(JSON.stringify(mockData), {
      status: 200,
      headers: {
        'Content-type': 'application/json',
      },
    });

    vi.spyOn(global, 'fetch').mockResolvedValue(mockResponse);

    const { result } = renderHook(() => useGetOwner('123'));

    result.current.getOwner();

    await waitFor(() => expect(result.current.data).toEqual(mockData));
  });

  it('should set an error when fetch fails', async () => {
    const mockError = new Error('Failed to fetch');
    vi.spyOn(global, 'fetch').mockImplementation(() => Promise.reject(mockError));

    const { result } = renderHook(() => useGetOwner('123'));

    result.current.getOwner();

    await waitFor(() => expect(result.current.error).toEqual(mockError));
  });
});
