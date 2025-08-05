import img1 from '../../assets/img-sobre-1.png';
import img2 from '../../assets/img-sobre-2.png';
import img3 from '../../assets/img-sobre-3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import styled from 'styled-components';

function Sobre() {
  const content = [
    {
      title: 'Quem somos',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. '
    },
    {
      title: 'Por que existimos?',
      description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. '
    },
    {
      title: 'O que a gente faz?',
      description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
    }
  ];

  return (
    <section>
      <SobreContainer>
        <Column>
          <PageTitle>Sobre a AL SKIN</PageTitle>
          { content.map((subsection) => (
            <React.Fragment key={subsection.title}>
              <Title>{subsection.title}</Title>
              <Description>{subsection.description}</Description>
            </React.Fragment>
          ))}
          <LeftColumnImage src={img1} alt="Imagem ilustrativa" />
        </Column>

        <Column>
          <RightColumnImage src={img2} alt="Imagem ilustrativa" />
          
          <Title>
            Vamos Conversar?
          </Title>
          <Description>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
          </Description>

          <FaleConoscoButton>
            <FontAwesomeIcon icon={faMessage} />
            Fale conosco
          </FaleConoscoButton>
        </Column>
      </SobreContainer>

      <FooterImageContainer>
        <img src={img3} alt="Imagem ilustrativa" />
      </FooterImageContainer>
    </section>
  );
}

const SobreContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  display: flex;
  gap: 32px;

  font-size: 16px;
  margin-top: 8px;
  margin-bottom: 3rem;
`;

const PageTitle = styled.h2`
  margin-top: 2rem;
`;

const Column = styled.div`
  flex: 1;
`;

const Title = styled.p`
  text-transform: uppercase;
  margin-bottom: 0;
`;

const Description = styled.p`
  margin-top: 0;
`;

const LeftColumnImage = styled.img`
  width: 90%;
  margin-top: 1rem;
`;

const RightColumnImage = styled.img`
  width: 100%;
  margin-bottom: 3rem;
`;

const FaleConoscoButton = styled.button`
  flex-grow: 0;
  background: #94426E;
  color: white;
  padding: 24px 60px;
  border-radius: 8px;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 3rem;
`;

const FooterImageContainer = styled.div`
  width: 100%;
  max-height: 600px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default Sobre;