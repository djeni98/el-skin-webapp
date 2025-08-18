import { API_CONFIG } from '../config/APIConfig';
import apiFetch from './apiFetch';
import { IProduct, productService } from './productService';

const mockProducts: IProduct[] = [
  {
    id: '1',
    name: 'Protetor Solar',
    description: 'Protetor solar facial FPS 60',
    price: 89.99,
    image: '/images/protetor.jpg',
    tags: [ 'protection', 'face' ]
  },
  {
    id: '2',
    name: 'Hidratante Facial',
    description: 'Hidratante facial com ácido hialurônico',
    price: 79.99,
    image: '/images/hidratante.jpg',
    tags: [ 'face' ]
  }
];

jest.mock('./apiFetch', () => ({
  get: jest.fn(),
}));

const mockApi = apiFetch as jest.Mocked<typeof apiFetch>;

test('getProducts', async () => {
  const mockedValue = { data: mockProducts };
  mockApi.get.mockResolvedValue(mockedValue);

  // act
  const result = await productService.getProducts();

  // assert
  expect(mockApi.get).toHaveBeenCalledWith(API_CONFIG.ENDPOINTS.PRODUCTS);
  expect(result).toEqual(mockedValue);
});

test('getProductById', async () => {
  // arrange
  const mockedValue = { data: mockProducts[1] };
  mockApi.get.mockResolvedValue(mockedValue);

  // act
  const result = await productService.getProductById('2');

  // assert
  expect(mockApi.get).toHaveBeenCalledWith(`${API_CONFIG.ENDPOINTS.PRODUCTS}/2`);
  expect(result).toEqual(mockedValue);
});