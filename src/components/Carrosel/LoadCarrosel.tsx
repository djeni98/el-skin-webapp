import { Suspense } from 'react';
import { carouselService } from '../../service/carroselService';
import Carrosel from './Carrosel';

export default async function LoadCarrosel() {
  const { data: items, error } = await carouselService.getCarouselItems();

  return (
    <Suspense fallback={<p>Carregando...</p>}>
      { error && <p>Ocorreu um erro: {error}</p> }
      { !error && items != null && <Carrosel items={items} />}
    </Suspense>
  );
}