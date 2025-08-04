import { API_CONFIG } from '../config/APIConfig';
import api from './api';
import { carouselService, ICarouselItem } from './carroselService';

const mockCarouselItems: ICarouselItem[] = [
  {
    subtitle: '',
    title: 'Primeiro item',
    description: 'Super desconto',
    backgroundImage: '/images/item1.png',
    textPosition: 'left'
  },
  {
    subtitle: 'sem juros!',
    title: 'Segundo item',
    description: 'Parcelado',
    backgroundImage: '/images/item2.png',
    textPosition: 'right'
  },
];

jest.mock('./api', () => ({
  get: jest.fn(),
}));

const mockApi = api as jest.Mocked<typeof api>;

test('getCarouselItems', async () => {
  mockApi.get.mockResolvedValue({ data: mockCarouselItems });

  // act
  const result = await carouselService.getCarouselItems();

  // assert
  expect(mockApi.get).toHaveBeenCalledWith(API_CONFIG.ENDPOINTS.CAROUSEL);
  expect(result).toEqual(mockCarouselItems);
});