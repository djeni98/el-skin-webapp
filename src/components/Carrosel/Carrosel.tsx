import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img1 from '../../assets/img1.png';
import './Carrosel.css';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Carrosel() {
  const item = {
    subtitle:'confira nossa linha',
    title:'corporal',
    description: 'com benefícios além da hidratação',
    backgroundImage: img1
  };

  function getStyleForImgCarrosel(img: string) {
    return {backgroundImage: `url(${img})`};
  }

  return (
    <div className="img-carrosel" style={getStyleForImgCarrosel(item.backgroundImage)}>
      <div className="container flex-1">
        <button className='carrosel-button'>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <div className='carrosel-text'>
          <span className='carrosel-subtitle'>{item.subtitle}</span>
          <h1 className='carrosel-title'>{item.title}</h1>
          <p className='carrosel-description'>{item.description}</p>
          <button className='carrosel-buy-button'>
            comprar agora
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>

        <div className='flex-1'>
        </div>
        <button className='carrosel-button'>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
}

export default Carrosel;