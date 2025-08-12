import '@testing-library/jest-dom';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { ICarouselItem } from '../../service/carroselService';
import Carrosel from './Carrosel';

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
  {
    subtitle: '',
    title: 'Terceiro item',
    description: 'Pague com pix',
    backgroundImage: '/images/item3.png',
    textPosition: 'right'
  },
];


jest.mock('../../store/api/apiSlice', () => ({
  useGetCarouselItemsQuery: () => ({
    data: mockCarouselItems,
    isLoading: false,
    error: false,
  })
}));

const renderWithAct = async () => {
  let component;
  await act(async () => {
    component = render(<Carrosel />);
  });
  return component;
};

test('componente Carrosel deve ser renderizado', async () => {
  await renderWithAct();

  const firstItem = mockCarouselItems[0];
  expect(screen.getByText(firstItem.title)).toBeInTheDocument();
});

test('Deve avançar para o próximo item ao clicar no botão de próximo', async () => {
  await renderWithAct();

  const nextButton = screen.getByTestId('next-item');
  fireEvent.click(nextButton);

  const secondItem = mockCarouselItems[1];
  expect(screen.getByText(secondItem.title)).toBeInTheDocument();
});

test('Deve voltar para o item anterior ao clicar no botão de anterior', async () => {
  await renderWithAct();

  const nextButton = screen.getByTestId('previous-item');
  fireEvent.click(nextButton);

  const thirdItem = mockCarouselItems[2];
  expect(screen.getByText(thirdItem.title)).toBeInTheDocument();
});



