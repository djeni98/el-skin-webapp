import styled from 'styled-components';

function PromoBanner() {
  return (
    <Banner>
      <BannerContainer>
        <Title>primeira compra?</Title>
        <span>
          <BoldFont>R$25</BoldFont> OFF A PARTIR DE <BoldFont>R$200</BoldFont>
        </span>
        <CodigoPromo>PRIMEIRA25</CodigoPromo>
      </BannerContainer>
    </Banner>
  );
}

const Banner = styled.div`
  background-color: #DC995E;
  padding: 0.5rem;
`;

const BannerContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;

  justify-content: left;
  gap: 3rem;
`;

const Title = styled.span`
  font-weight: 700;
  color: #fff;
`;

const BoldFont = styled.span`
  font-weight: 700;
`;

const CodigoPromo = styled.span`
  padding: 2px 16px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: 700;
`;

export default PromoBanner;