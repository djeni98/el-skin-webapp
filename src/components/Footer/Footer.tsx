import { faFacebook, faInstagram, faLinkedin, faPinterest, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles.module.css';
import Link from 'next/link';

function Footer() {
  const socialMediaList = [
    { icon: faInstagram, name: 'Instagram', href: 'https://instagram.com/' },
    { icon: faFacebook, name: 'Facebook', href: 'https://facebook.com/' },
    { icon: faYoutube, name: 'Youtube', href: 'https://youtube.com' },
    { icon: faPinterest, name: 'Pinterest', href: 'https://pinterest.com/' },
    { icon: faTwitter, name: 'Twitter', href: 'https://twitter.com/' },
    { icon: faLinkedin, name: 'LinkedIn', href: 'https://linkedin.com/' }
  ];

  const groupLinks = [
    { 
      groupTitle: 'Sobre a AL SKIN', 
      links: [
        { name: 'quem somos', href: '/about' },
        { name: 'time AL SKIN', href: '/time' },
        { name: 'carreiras', href: '/carreiras' }
      ]
    },
    { 
      groupTitle: 'Loja AL SKIN', 
      links: [
        { name: 'lojas físicas', href: '/lojas-fisicas' },
        { name: 'devolução', href: '/devolucao' },
      ]
    },
    { 
      groupTitle: 'Atendimento', 
      links: [
        { name: 'oi@alskin.com.br', href: 'mailto:oi@alskin.com.br' },
        { name: 'ajuda', href: 'ajuda' },
      ]
    },
    { 
      groupTitle: 'Blog AL SKIN', 
      links: [
        { name: 'minha pele', href: '/post-minha-pele' },
        { name: 'ingredientes', href: '/post-ingredientes' },
      ]
    },
  ];

  return (
    <footer>
      <div className={styles.footer_top_section}>
        <div className={styles.social_media}>
          { socialMediaList.map((item) => (
            <a className={styles.social_media_item} href={item.href} key={item.name}><FontAwesomeIcon icon={item.icon} /></a>
          ))}
        </div>

        <div className={styles.links}>
          { groupLinks.map((groupLink) => (
            <div className={styles.link_column_group} key={groupLink.groupTitle}>
              <span className={styles.group_title}>{groupLink.groupTitle}</span>
              { groupLink.links.map((link) => (
                <Link className={styles.link_item} href={link.href} key={link.href}>- {link.name}</Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.footer_bottom_section}>
        <span className={styles.logo_footer}>AL SKIN</span>
        <span>2023 AL SKIN. Todos os direitos reservados.</span>
        <span>Av. Sete de Setembro, 467 - São Paulo/SP  - CEP: 05324-980.</span>
      </div>
    </footer>
  );
}

export default Footer;