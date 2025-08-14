'use client';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import CartModal from '../CartModal/CartModal';
import { useSearch } from '../../hooks/useSearch';
import { useCart } from '../../hooks/useCart';
import styles from './styles.module.css';
 
function Header() {
  const navLinks = [
    { name: 'Categorias', href: '/categorias' },
    { name: 'Tipo de pele', href: '/tipo-pele' },
    { name: 'Necessidade', href: '/necessidade' },
    { name: 'Ingredientes', href: '/ingredientes' },
  ];

  const { getTotalItems } = useCart();
  const { search, setSearch } = useSearch();
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  
  const handleCloseCart = () => {
    setIsCartModalOpen(false);
  };

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  function onClickSearch(): void {
    console.log(`Você pesquisou por: ${search}`);
  }

  function handleOnClickCart() {
    setIsCartModalOpen(true);
  }

  return (
    <header className={styles.header}>
      <div className={styles.header_top}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <span>AL SKIN</span>
          </div>
 
          <div className={styles.search_bar}>
            <input className={styles.search_input}
              type='text'
              placeholder='O que você está procurando?'
              onChange={handleOnChange}/>
            <button className={styles.search_button} data-testid='search-button' onClick={onClickSearch} aria-label='Pesquisar'>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
 
          <div className={styles.header_actions}>
            <button className={styles.cart_button} data-testid='cart-button' onClick={handleOnClickCart} aria-label="Abrir Carrinho">
              <FontAwesomeIcon icon={faCartShopping} />
            </button>
            <span className={styles.cart_total_items}>
              {getTotalItems()}
            </span>
          </div>
        </div>
      </div>
 
      <nav className={styles.nav_bar}>
        <div className={styles.container}>
          <div className={styles.nav_items}>
            { navLinks.map((navLink) => (
              <a className={styles.nav_item} href={navLink.href} key={navLink.href} >{navLink.name}</a>
            ))}
          </div>

          <div>
            <a className={styles.promo_link} href='/kits-50-off'>Kits 50% off</a>
          </div>
        </div>
      </nav>

      <CartModal
        isOpen={isCartModalOpen}
        onClose={handleCloseCart}
      />
    </header>
  );
}
 
export default Header;
 
 