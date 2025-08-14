import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.css';
import Link from 'next/link';

function NotFound() {
  return (
    <section className={styles.not_found_section}>
      <div>
        <h2>Página não encontrada!</h2>
        <p>A página que está tentando acessar não existe.</p>

        <Link className={styles.back_home_link} href='/'>
          <FontAwesomeIcon icon={faHome} />
          Voltar para o início
        </Link>
      </div>
    </section>
  );
}

export default NotFound;