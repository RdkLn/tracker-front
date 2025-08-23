import { apiClient } from '../../../lib/client';

export const getDaysTrained = (userId: number): Promise<{ data: string[] }> => {
  return apiClient.get<string[]>(import.meta.env.VITE_BACKEND_API_URL + '/workouts/days-trained', {
    params: { userId: userId },
  });
};
