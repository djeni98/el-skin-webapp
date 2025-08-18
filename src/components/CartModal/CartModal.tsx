'use client';

import { faMinus, faPlus, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { formatPrice } from '../../formatters/price';
import { useCart } from '../../hooks/useCart';
import styles from './styles.module.css';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function CartModal({ isOpen, onClose }: Readonly<CartModalProps>) {
  if (!isOpen) return null;
  const { items, updateQuantity, removeItem, getTotalPrice } = useCart();

  function handleBackdropClick(e: React.MouseEvent) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  function handleBackdropKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Escape') {
      onClose();
    }
  }

  return (
    <div className={styles.cart_modal_overlay} 
      data-testid='cart-modal-overlay'
      onClick={handleBackdropClick}
      onKeyDown={handleBackdropKeyDown}
      role='dialog'
      aria-modal='true'
      aria-labelledby='cart-modal-title'
      tabIndex={-1}
    >
      <div className={styles.cart_modal} data-testid='cart-modal'>
        <div className={styles.cart_modal_header}>
          <h2 id='cart-modal-title'>Carrinho</h2>
          <button className={styles.cart_modal_close} data-testid='cart-modal-close' onClick={onClose} aria-label='Fechar modal do carrinho'>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        <div className={styles.cart_modal_content}>
          {items.length === 0 ? (
            <div className={styles.cart_empty}>
              <p>Seu carrinho está vazio</p>
            </div>
          ) : (
            <>
              <div className={styles.cart_items}>
                {items.map((item) => (
                  <div className={styles.cart_item} key={item.id}>
                    <div className={styles.cart_item_image}>
                      <img src={item.image} alt={item.name} />
                    </div>
                    
                    <div className={styles.cart_item_info}>
                      <h3 className={styles.cart_item_name}>{item.name}</h3>
                      
                      <div className={styles.cart_item_controls}>
                        <span className={styles.quantity_label}>Quantidade</span>
                        <div className={styles.quantity_controls}>
                          <button className={styles.quantity_btn} 
                            data-testid='decrease-quantity'
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            aria-label="Diminuir quantidade do item"
                          >
                            <FontAwesomeIcon icon={faMinus} />
                          </button>
                          <span className={styles.quantity_display} data-testid='quantity-display'>{item.quantity}</span>
                          <button className={styles.quantity_btn}  
                            data-testid='increase-quantity'
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            aria-label="Aumentar quantidade do item"
                          >
                            <FontAwesomeIcon icon={faPlus} />
                          </button>
                        </div>
                        
                        <button className={styles.remove_btn} 
                          data-testid='remove-item'
                          title='Remover item'
                          onClick={() => removeItem(item.id)}
                          aria-label="Remover item"
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </div>
                      
                      <div className={styles.cart_item_price} data-testid='subtotal-display'>
                        {formatPrice(item.price * item.quantity)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.cart_total}>
                <span className={styles.total_label}>Total</span>
                <span className={styles.total_price} data-testid='total-display'>{formatPrice(getTotalPrice())}</span>
              </div>

              <button className={styles.finalize_btn}>
                Finalizar compra
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartModal;