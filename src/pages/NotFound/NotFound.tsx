import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NotFound.css';
import { faHome } from '@fortawesome/free-solid-svg-icons';

function NotFound() {
  return (
    <section className='not-found-section container'>
      <div className='not-fount-content'>
        <h2>Página não encontrada!</h2>
        <p>A página que está tentando acessar não existe.</p>

        <a className="back-home-link" href='/'>
          <FontAwesomeIcon icon={faHome} />
          Voltar para o início
        </a>
      </div>
    </section>
  );
}

export default NotFound;