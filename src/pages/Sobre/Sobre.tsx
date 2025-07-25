import './Sobre.css';
import img1 from '../../assets/img-sobre-1.png';
import img2 from '../../assets/img-sobre-2.png';
import img3 from '../../assets/img-sobre-3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

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
      <div className="container two-columns">
        <div className="sobre-content">
          <h2>Sobre a AL SKIN</h2>
          { content.map((subsection) => (
            <React.Fragment key={subsection.title}>
              <p className="subsection-title">{subsection.title}</p>
              <p className="subsection-description">{subsection.description}</p>
            </React.Fragment>
          ))}
          <img className="img-left-column" src={img1} alt="Imagem ilustrativa" />
        </div>

        <div className="vamos-conversar-content">
          <img className="img-right-column" src={img2} alt="Imagem ilustrativa" />
          
          <p className="subsection-title">Vamos Conversar?</p>
          <p className="subsection-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>

          <button className='fale-conosco-button'>
            <FontAwesomeIcon icon={faMessage} />
            Fale conosco
          </button>
        </div>
      </div>
      <div className="sobre-img">
        <img src={img3} alt="Imagem ilustrativa" />
      </div>
    </section>
  );
}

export default Sobre;