import styles from './styles.module.css';

function PromoBanner() {
  return (
    <div className={styles.banner}>
      <div className={styles.banner_container}>
        <span className={styles.title}>primeira compra?</span>
        <span>
          <span className={styles.bold_font}>R$25</span> OFF A PARTIR DE <span className={styles.bold_font}>R$200</span>
        </span>
        <span className={styles.codigo_promo}>PRIMEIRA25</span>
      </div>
    </div>
  );
}

export default PromoBanner;