import { API_CONFIG } from '../config/APIConfig';
import apiFetch from './apiFetch';
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

jest.mock('./apiFetch', () => ({
  get: jest.fn(),
}));

const mockApi = apiFetch as jest.Mocked<typeof apiFetch>;

test('getCarouselItems', async () => {
  const mockedValue = { data: mockCarouselItems };
  mockApi.get.mockResolvedValue(mockedValue);

  // act
  const result = await carouselService.getCarouselItems();

  // assert
  expect(mockApi.get).toHaveBeenCalledWith(API_CONFIG.ENDPOINTS.CAROUSEL);
  expect(result).toEqual(mockedValue);
});