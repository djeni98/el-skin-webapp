import img1 from '../../assets/img-sobre-1.png';
import img2 from '../../assets/img-sobre-2.png';
import img3 from '../../assets/img-sobre-3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import styles from './styles.module.css';
import Image from 'next/image';


export default function Sobre() {
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
      <div className={styles.sobre_container}>
        <div className={styles.column}>
          <h2 className={styles.page_title}>Sobre a AL SKIN</h2>
          { content.map((subsection) => (
            <React.Fragment key={subsection.title}>
              <p className={styles.title}>{subsection.title}</p>
              <p className={styles.description}>{subsection.description}</p>
            </React.Fragment>
          ))}
          <Image className={styles.left_column_image} src={img1} width={500} height={750} alt='Imagem ilustrativa' />
        </div>

        <div className={styles.column}>
          <Image className={styles.right_column_image} src={img2} width={572} height={858} alt='Imagem ilustrativa' />
          
          <p className={styles.title}>
            Vamos Conversar?
          </p>
          <p className={styles.description}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
          </p>

          <button className={styles.fale_conosco_button}>
            <FontAwesomeIcon icon={faMessage} />
            Fale conosco
          </button>
        </div>
      </div>

      <div className={styles.footer_image_container}>
        <Image src={img3} width={1440} height={1053} alt='Imagem ilustrativa' />
      </div>
    </section>
  );
}