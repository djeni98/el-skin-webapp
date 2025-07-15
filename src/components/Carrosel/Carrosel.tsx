import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';
import { useEffect, useState } from 'react';
import './Carrosel.css';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface ICarouselItem {
  subtitle: string;
  title: string;
  description: string;
  backgroundImage: string;
  textPosition: 'left' | 'right';
}

function Carrosel() {
  const items: ICarouselItem[] = [    {
    subtitle:'confira nossa linha',
    title:'corporal',
    description: 'com benefícios além da hidratação',
    backgroundImage: img1,
    textPosition: 'left'
  },
  {
    subtitle:'toda linha',
    title:'anti-age',
    description: 'use o cupom ANTIAGE15',
    backgroundImage: img2,
    textPosition: 'left'
  },
  {
    subtitle:'',
    title:'kits incríveis',
    description: 'até 50% OFF',
    backgroundImage: img3,
    textPosition: 'right'
  }];

  const [idxItemAtual, setIdxItemAtual] = useState(0);

  function previousItem() {
    setIdxItemAtual((prevIdx) => (prevIdx === 0 ? items.length - 1 : prevIdx - 1));
  }

  function nextItem() {
    setIdxItemAtual((prevIdx) => (prevIdx === items.length - 1 ? 0 : prevIdx + 1));
  }

  function getStyleForImgCarrosel(img: string) {
    return {backgroundImage: `url(${img})`};
  }

  const item = items[idxItemAtual];

  useEffect(() => {
    const timer = setInterval(() => { nextItem(); }, 3000);
    return () => { clearInterval(timer); };
  }, []);
  
  return (
    <div className="img-carrosel" style={getStyleForImgCarrosel(item.backgroundImage)}>
      <div className="container flex-1">
        <button className='carrosel-button' onClick={previousItem}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>

        { item.textPosition === 'right' && <div className='flex-1' /> }

        <div className='carrosel-text'>
          <span className='carrosel-subtitle'>{item.subtitle}</span>
          <h1 className='carrosel-title'>{item.title}</h1>
          <p className='carrosel-description'>{item.description}</p>
          <button className='carrosel-buy-button'>
            comprar agora
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>

        { item.textPosition === 'left' && <div className='flex-1' /> }

        <button className='carrosel-button'>
          <FontAwesomeIcon icon={faArrowRight} onClick={nextItem} />
        </button>
      </div>
    </div>
  );
}

export default Carrosel;