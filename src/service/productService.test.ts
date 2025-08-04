import { API_CONFIG } from '../config/APIConfig';
import api from './api';
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

jest.mock('./api', () => ({
  get: jest.fn(),
}));

const mockApi = api as jest.Mocked<typeof api>;

test('getProducts', async () => {
  mockApi.get.mockResolvedValue({ data: mockProducts });

  // act
  const result = await productService.getProducts();

  // assert
  expect(mockApi.get).toHaveBeenCalledWith(API_CONFIG.ENDPOINTS.PRODUCTS);
  expect(result).toEqual(mockProducts);
});

test('getProductById', async () => {
  // arrange
  mockApi.get.mockResolvedValue({ data: mockProducts[1] });

  // act
  const result = await productService.getProductById('2');

  // assert
  expect(mockApi.get).toHaveBeenCalledWith(`${API_CONFIG.ENDPOINTS.PRODUCTS}/2`);
  expect(result).toEqual(mockProducts[1]);
});