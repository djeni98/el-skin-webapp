import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

function NotFound() {
  return (
    <NotFoundSection>
      <div>
        <h2>Página não encontrada!</h2>
        <p>A página que está tentando acessar não existe.</p>

        <BackHomeLink href='/'>
          <FontAwesomeIcon icon={faHome} />
          Voltar para o início
        </BackHomeLink>
      </div>
    </NotFoundSection>
  );
}

const NotFoundSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 4rem;
  margin-bottom: 8rem;
`;

const BackHomeLink = styled.a`
  background: #94426E;
  color: white;
  padding: 24px 60px;
  border-radius: 8px;
  font-size: 16px;
  display: inline-flex;
  align-items: center;
  gap: 24px;
  margin-top: 3rem;
  text-decoration: none;

  &:hover {
    background: #662e4c;
  }
`;

export default NotFound;