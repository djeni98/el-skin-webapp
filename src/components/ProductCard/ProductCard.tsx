import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { createRef } from 'react';
import { IProduct } from '../../service/productService';
import { formatPrice } from '../../formatters/price';
import styled from 'styled-components';

export interface IProductCardProps {
  product: IProduct,
  onProductClick: (productId: string) => void;
  onBuyClick: (productId: string, event: React.MouseEvent) => void;
}

function ProductCard(props: Readonly<IProductCardProps>) {
  const { product, onProductClick, onBuyClick } = props;

  function handleKeyDownInProduct(event: React.KeyboardEvent) {
    const activateKeys = ['Enter', ' '];

    if (!activateKeys.includes(event.key)) {
      return;
    }

    if (event.target !== cardDiv.current) {
      return;
    }

    onProductClick(product.id);
  }

  const cardDiv = createRef<HTMLDivElement>();

  return (
    /* Div usando role button, pois não pode usar button dentro de button */
    <StyledProductCard
      data-testid='product-card'
      ref={cardDiv}
      role='button' tabIndex={0}
      onClick={() => onProductClick(product.id)}
      onKeyDown={(e) => handleKeyDownInProduct(e)}
    >
      <ProductImageContainer>
        <img src={product.image} alt={product.name} />
      </ProductImageContainer>

      <Title>{product.name}</Title>
      <Description>{product.description}</Description>

      <ProductTagsList>
        { product.tags.map((tag) => (
          <ProductTag tag={tag} key={tag}>{tag}</ProductTag>
        ))}
      </ProductTagsList>
      
      <BuySection>
        <ProductPrice>{formatPrice(product.price)}</ProductPrice>
        <BuyButton data-testid='buy-button' onClick={(e) => onBuyClick(product.id, e)}>
          comprar 
          <FontAwesomeIcon icon={faShoppingBag} />
        </BuyButton>
      </BuySection>
    </StyledProductCard>
  );
}

const StyledProductCard = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 240px;
  align-items: start;
  gap: 6px;
  cursor: pointer;
  padding: 16px;
  margin: -16px;
  border-radius: 8px;

  &:hover {
    border-radius: 8px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }
`;

const ProductImageContainer = styled.div`
  width: 100%;
  border-radius: 8px;
  height: 240px;
  background-color: #C8B99C;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Title = styled.span`
  font-weight: 700;
  font-size: 20px;
`;

const Description = styled.span`
  color: #878787;
  text-align: left;
`;

const ProductTagsList = styled.div`
  margin-top: 6px;
  display: flex;
  gap: 8px 16px;
  flex-wrap: wrap;
`;

const getBackgroundForTag = (tag: string) => {
  if (['protection', 'exfoliation', 'hydration'].includes(tag)) {
    return '#5ED4DC';
  }
  return '#DC5EB1';
};

const ProductTag = styled.span<{ tag: string }>`
  padding: 2px 16px;
  padding-bottom: 4px;
  color: #fff;
  border-radius: 8px;
  font-weight: 700;
  min-width: 60px;
  font-size: 13px;
  text-align: center;
  background-color: ${ props => getBackgroundForTag(props.tag) };
`;

const BuySection = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 16px;
  align-items: end;
`;

const ProductPrice = styled.span`
  font-size: 20px;
  font-weight: 700;
`;

const BuyButton = styled.button`
  background-color: ${props => props.theme.buyButton?.normal};
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  gap: 8px;
  padding: 8px;
  border-radius: 8px;

  &:hover {
    background-color: ${props => props.theme.buyButton?.hover};
  }
`;

export default ProductCard;