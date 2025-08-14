'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useGetCarouselItemsQuery } from '../../store/api/apiSlice';
import styles from './styles.module.css';


function Carrosel() {
  const { data: items = [], isLoading, error } = useGetCarouselItemsQuery();
  const [idxItemAtual, setIdxItemAtual] = useState(0);

  function previousItem() {
    setIdxItemAtual((prevIdx) => (prevIdx === 0 ? items.length - 1 : prevIdx - 1));
  }

  function nextItem() {
    setIdxItemAtual((prevIdx) => (prevIdx === items.length - 1 ? 0 : prevIdx + 1));
  }

  function getStyleForImgCarrosel(img: string) {
    return { backgroundImage: `url(${img})` };
  }

  useEffect(() => {
    if (items.length === 0) { return; }
    const timer = setInterval(() => { nextItem(); }, 3000);
    return () => { clearInterval(timer); };
  }, [items]);

  const item = items.length > 0 ? items[idxItemAtual] : null;

  return (
    <>
      { isLoading && <p>Carregando...</p> }
      { error && <p>Ocorreu um erro: {JSON.stringify(error)}</p> }
      { item &&
        <div className={styles.carrosel_background_container} style={getStyleForImgCarrosel(item.backgroundImage)}>
          <div className={styles.carrosel_container}>
            <button className={styles.carrosel_button} onClick={previousItem} data-testid='previous-item' aria-label='Item anterior do carrosel'>
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>

            {item.textPosition === 'right' && <Spacer />}

            <div className={styles.carrosel_text_section}>
              <span className={styles.carrosel_subtitle}>{item.subtitle}</span>
              <h1 className={styles.carrosel_title} data-testid='carrosel-title'>{item.title}</h1>
              <p className={styles.carrosel_description}>{item.description}</p>
              <button className={buy_button_style}>
                comprar agora
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>

            {item.textPosition === 'left' && <Spacer />}

            <button className={styles.carrosel_button} data-testid='next-item' onClick={nextItem} aria-label='Próximo item do carrosel'>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      }
    </>
  );
}

const buy_button_style = `${styles.buy_button} buy_button_theme`;
const Spacer = () => <div className={styles.spacer} />;

export default Carrosel;