import { API_CONFIG } from '../config/APIConfig';
import apiFetch from './apiFetch';
 
export interface ICarouselItem {
  subtitle: string;
  title: string;
  description: string;
  backgroundImage: string;
  textPosition: 'left' | 'right';
}
 
export const carouselService = {
  async getCarouselItems() {
    return await apiFetch.get<ICarouselItem[]>(API_CONFIG.ENDPOINTS.CAROUSEL);
  },
};