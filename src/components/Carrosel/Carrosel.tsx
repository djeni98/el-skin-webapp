import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import './Carrosel.css';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { carouselService } from '../../service/carroselService';

interface ICarouselItem {
  subtitle: string;
  title: string;
  description: string;
  backgroundImage: string;
  textPosition: 'left' | 'right';
}

function Carrosel() {
  const [items, setItems] = useState<ICarouselItem[]>([]);
  const [idxItemAtual, setIdxItemAtual] = useState(0);

  function previousItem() {
    setIdxItemAtual((prevIdx) => (prevIdx === 0 ? items.length - 1 : prevIdx - 1));
  }

  function nextItem() {
    setIdxItemAtual((prevIdx) => (prevIdx === items.length - 1 ? 0 : prevIdx + 1));
  }

  async function requestCarroselItems() {
    const newItems = await carouselService.getCarouselItems();
    setItems(newItems);
  }

  function getStyleForImgCarrosel(img: string) {
    return { backgroundImage: `url(${img})` };
  }

  useEffect(() => {
    if (items.length === 0) { return; }
    const timer = setInterval(() => { nextItem(); }, 3000);
    return () => { clearInterval(timer); };
  }, [items]);

  useEffect(() => {
    requestCarroselItems();
  }, []);

  const item = items.length > 0 ? items[idxItemAtual] : null;

  return (
    <>
      {item &&
        <div className="img-carrosel" style={getStyleForImgCarrosel(item.backgroundImage)}>
          <div className="container flex-1">
            <button className='carrosel-button' onClick={previousItem} data-testid='previous-item'>
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>

            {item.textPosition === 'right' && <div className='flex-1' />}

            <div className='carrosel-text'>
              <span className='carrosel-subtitle'>{item.subtitle}</span>
              <h1 className='carrosel-title' data-testid='carrosel-title'>{item.title}</h1>
              <p className='carrosel-description'>{item.description}</p>
              <button className='carrosel-buy-button'>
                comprar agora
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>

            {item.textPosition === 'left' && <div className='flex-1' />}

            <button className='carrosel-button' data-testid='next-item' onClick={nextItem}>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      }
    </>
  );
}

export default Carrosel;