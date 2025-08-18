import { API_CONFIG } from '../config/APIConfig';
import apiFetch from './apiFetch';
 
export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  tags: string[];
}
 
export const productService = {
  async getProducts() {
    return await apiFetch.get<IProduct[]>(API_CONFIG.ENDPOINTS.PRODUCTS);
  },
 
  async getProductById(id: string) {
    return await apiFetch.get<IProduct>(`${API_CONFIG.ENDPOINTS.PRODUCTS}/${id}`);
  },
};
