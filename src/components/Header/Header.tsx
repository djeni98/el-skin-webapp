import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
 
function Header() {
  const navLinks = [
    { name: 'Categorias', href: '/categorias' },
    { name: 'Tipo de pele', href: '/tipo-pele' },
    { name: 'Necessidade', href: '/necessidade' },
    { name: 'Ingredientes', href: '/ingredientes' },
  ];

  const [textoBusca, setTextoBusca] = useState('valor inicial do texto');
  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTextoBusca(e.target.value);
  }

  function onClickSearch(): void {
    console.log(`Você pesquisou por: ${textoBusca}`);
  }

  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="logo">
            <span>AL SKIN</span>
          </div>
 
          <div className="search-bar">
            <input
              type="text"
              placeholder="O que você está procurando?"
              className="search-input"
              onChange={handleOnChange}/>
            <button className="search-button" onClick={onClickSearch} >
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
 
          <div className="header-actions">
            <button className="cart-button">
              <FontAwesomeIcon icon={faCartShopping} />
            </button>
          </div>
        </div>
      </div>
 
      <nav className="header-nav">
        <div className="container">
          <div className='header-nav-itens'>
            { navLinks.map((navLink) => (
              <a className="header-nav-item" href={navLink.href} key={navLink.href} >{navLink.name}</a>
            ))}
          </div>

          <div className='promo-link-container'>
            <a className="promo-link" href="/kits-50-off">Kits 50% off</a>
          </div>
        </div>
      </nav>
    </header>
  );
}
 
export default Header;
 
 