import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import CartModal from '../CartModal/CartModal';
import { useCartContext } from '../../context/CartContext';
import styled from 'styled-components';
import { useSearch } from '../../hooks/useSearch';
 
function Header() {
  const navLinks = [
    { name: 'Categorias', href: '/categorias' },
    { name: 'Tipo de pele', href: '/tipo-pele' },
    { name: 'Necessidade', href: '/necessidade' },
    { name: 'Ingredientes', href: '/ingredientes' },
  ];

  const { getTotalItems } = useCartContext();
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
    <StyledHeader>
      <HeaderTop>
        <Container>
          <Logo>
            <span>AL SKIN</span>
          </Logo>
 
          <SearchBar>
            <SearchInput
              type='text'
              placeholder='O que você está procurando?'
              onChange={handleOnChange}/>
            <SearchButton data-testid='search-button' onClick={onClickSearch} >
              <FontAwesomeIcon icon={faSearch} />
            </SearchButton>
          </SearchBar>
 
          <HeaderActions>
            <CartButton data-testid='cart-button' onClick={handleOnClickCart}>
              <FontAwesomeIcon icon={faCartShopping} />
            </CartButton>
            <CartTotalItems>
              {getTotalItems()}
            </CartTotalItems>
          </HeaderActions>
        </Container>
      </HeaderTop>
 
      <NavBar>
        <Container>
          <NavItems>
            { navLinks.map((navLink) => (
              <NavItem href={navLink.href} key={navLink.href} >{navLink.name}</NavItem>
            ))}
          </NavItems>

          <div>
            <PromoLink href='/kits-50-off'>Kits 50% off</PromoLink>
          </div>
        </Container>
      </NavBar>

      <CartModal
        isOpen={isCartModalOpen}
        onClose={handleCloseCart}
      />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const HeaderTop = styled.div`
  padding: 1rem 0;
  border-bottom: 1px solid #e5e5e5;
`;

const Logo = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin: 0;
  letter-spacing: 0.5px;
`;


const SearchBar = styled.div`
  flex: 2;
  max-width: 400px;
  margin: 0 2rem;
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: 25px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease;
 
  &:focus {
    border-color: #007bff;
  }
  
  &::placeholder {
    color: #999;
  }
`;


const SearchButton = styled.button`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  padding: 0.5rem;
  border-radius: 50%;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
 
  &:hover {
    background-color: #f0f0f0;
  }
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
`;


const CartButton = styled.button`
  padding: 1rem;
  border-radius: 50%;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;


const CartTotalItems = styled.span`
  position: absolute;
  top: -8px;
  right: -16px;
  font-weight: 900;
  color:#e2454d; 
  padding: 0px 8px 2px 8px;
  background-color: #fff;
  border-radius: 50%;
  border: 1px solid #e2454d;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;


const NavBar = styled.nav`
  padding: 8px 0px;
`;

const NavItems = styled.div`
  display: flex;
  flex: 1;
  gap: 5rem;
`;

const NavItem = styled.a`
  text-decoration: none;
  color: #000;
  font-weight: 400;

  &:hover {
    text-decoration: underline;
  }
`;

const PromoLink = styled.a`
  text-decoration: none;
  color: #e2454d;
  font-weight: 700;

  &:hover {
    text-decoration: underline;
  }
`;
 
export default Header;
 
 