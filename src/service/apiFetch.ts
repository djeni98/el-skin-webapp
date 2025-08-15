import { API_CONFIG } from '../config/APIConfig';

const apiFetch = {
  async get<T>(endpoint: string): Promise<{ data?: T, error?: string }> {
    try {
      console.log(`Requesting: ${endpoint}`);
      const response = await fetch(API_CONFIG.BASE_URL + endpoint);

      console.log(`Checking status: ${response.status}`);
      if (!response.ok) {
        return { error: await response.text() };
      }

      console.log('Retrieving data...');
      const json = await response.json();
      return { data: json as T };
    } catch (e) {
      console.log(`Error: ${e}`);
      return { error: `Erro inesperado: ${e}` };
    }
  },
};

export default apiFetch;