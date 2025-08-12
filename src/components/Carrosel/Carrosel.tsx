import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { useGetCarouselItemsQuery } from '../../store/api/apiSlice';


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
        <CarroselBackgroundContainer style={getStyleForImgCarrosel(item.backgroundImage)}>
          <CarroselContainer>
            <CarroselButton onClick={previousItem} data-testid='previous-item'>
              <FontAwesomeIcon icon={faArrowLeft} />
            </CarroselButton>

            {item.textPosition === 'right' && <Spacer />}

            <CarroselTextSection>
              <CarroselSubtitle>{item.subtitle}</CarroselSubtitle>
              <CarroselTitle data-testid='carrosel-title'>{item.title}</CarroselTitle>
              <CarroselDescription>{item.description}</CarroselDescription>
              <BuyButton>
                comprar agora
                <FontAwesomeIcon icon={faArrowRight} />
              </BuyButton>
            </CarroselTextSection>

            {item.textPosition === 'left' && <Spacer />}

            <CarroselButton data-testid='next-item' onClick={nextItem}>
              <FontAwesomeIcon icon={faArrowRight} />
            </CarroselButton>
          </CarroselContainer>
        </CarroselBackgroundContainer>
      }
    </>
  );
}

const CarroselBackgroundContainer = styled.div`
  max-width: 100%;
  min-height: 500px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 40%, transparent 60%),
              linear-gradient(45deg, #f8f6f3 0%, #e8e4e0 100%);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;

  display: flex;
  align-items: center;
`;

const CarroselContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  flex: 1;
`;

const CarroselTextSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  color: #8B4A8B;
`;

const CarroselSubtitle = styled.span`
  display: block;
  font-size: 24px;
  font-weight: 400;
`;

const CarroselTitle = styled.h1`
  font-size: 48px;
  font-weight: 700;
  margin: 0;
  line-height: 1.1;
`;

const CarroselDescription = styled.p`
  font-size: 16px;
  margin-bottom: 32px;
  max-width: 400px;
`;

const Spacer = styled.div`
  flex: 1;
`;

const BuyButton = styled.button`
  background: ${props => props.theme.buyButton?.normal};
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 16px;
  
  &:hover {
    background-color: ${props => props.theme.buyButton?.hover};
  }
`;

const CarroselButton = styled.button`
  background-color: rgba(255, 255, 255, 0.5);
  color: #fff;
  font-size: 24px;
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgba(255, 255, 255, 0.35);
  }
`;

export default Carrosel;