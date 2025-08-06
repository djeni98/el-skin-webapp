import { faFacebook, faInstagram, faLinkedin, faPinterest, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

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
        { name: 'quem somos', href: '/quem-somos' },
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
      <FooterTopSection>
        <SocialMedia>
          { socialMediaList.map((item) => (
            <SocialMediaItem href={item.href} key={item.name}><FontAwesomeIcon icon={item.icon} /></SocialMediaItem>
          ))}
        </SocialMedia>

        <Links>
          { groupLinks.map((groupLink) => (
            <LinkColumnGroup key={groupLink.groupTitle}>
              <GroupTitle>{groupLink.groupTitle}</GroupTitle>
              { groupLink.links.map((link) => (
                <LinkItem href={link.href} key={link.href}>- {link.name}</LinkItem>
              ))}
            </LinkColumnGroup>
          ))}
        </Links>
      </FooterTopSection>

      <FooterBottomSection>
        <LogoFooter>AL SKIN</LogoFooter>
        <span>2023 AL SKIN. Todos os direitos reservados.</span>
        <span>Av. Sete de Setembro, 467 - São Paulo/SP  - CEP: 05324-980.</span>
      </FooterBottomSection>
    </footer>
  );
}

const FooterTopSection = styled.div`
  padding: 5rem 3rem;
  background-color: #F5F5F5;
`;

const SocialMedia = styled.div`
  display: flex;
  gap: 32px;
  justify-content: center;
`;

const SocialMediaItem = styled.a`
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  color: #fff;
  background-color: #6F6E6E;

  &:hover {
    background-color: #999696;
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: center;
  gap: 6rem;
  margin-top: 5rem;
`;

const LinkColumnGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 6px;
`;

const GroupTitle = styled.span`
  font-size: 16px;
  text-decoration: underline;
`;

const LinkItem = styled.a`
  text-decoration: none;
  color: #878787;
`;


const FooterBottomSection = styled.div`
  background-color: #222222;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 5rem 3rem;
  color: #fff;
`;

const LogoFooter = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

export default Footer;