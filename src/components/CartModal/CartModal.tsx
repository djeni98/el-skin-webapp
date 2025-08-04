import { faMinus, faPlus, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './CartModal.css';
import { useCartContext } from '../../context/CartContext';
import { formatPrice } from '../../formatters/price';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function CartModal({ isOpen, onClose }: Readonly<CartModalProps>) {
  if (!isOpen) return null;
  const { items, updateQuantity, removeItem, getTotalPrice } = useCartContext();

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
    <div 
      data-testid='cart-modal-overlay'
      className="cart-modal-overlay" 
      onClick={handleBackdropClick}
      onKeyDown={handleBackdropKeyDown}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cart-modal-title"
      tabIndex={-1}
    >
      <div className="cart-modal" data-testid='cart-modal'>
        <div className="cart-modal-header">
          <h2 id="cart-modal-title">Carrinho</h2>
          <button data-testid="cart-modal-close" className="cart-modal-close" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        <div className="cart-modal-content">
          {items.length === 0 ? (
            <div className="cart-empty">
              <p>Seu carrinho está vazio</p>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {items.map((item) => (
                  <div key={item.id} className="cart-item">
                    <div className="cart-item-image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    
                    <div className="cart-item-info">
                      <h3 className="cart-item-name">{item.name}</h3>
                      
                      <div className="cart-item-controls">
                        <span className="quantity-label">Quantidade</span>
                        <div className="quantity-controls">
                          <button 
                            data-testid="decrease-quantity"
                            className="quantity-btn"
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          >
                            <FontAwesomeIcon icon={faMinus} />
                          </button>
                          <span data-testid="quantity-display" className="quantity-display">{item.quantity}</span>
                          <button 
                            data-testid="increase-quantity"
                            className="quantity-btn"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <FontAwesomeIcon icon={faPlus} />
                          </button>
                        </div>
                        
                        <button 
                          data-testid="remove-item"
                          className="remove-btn"
                          title="Remover item"
                          onClick={() => removeItem(item.id)}
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </div>
                      
                      <div data-testid="subtotal-display" className="cart-item-price">
                        {formatPrice(item.price * item.quantity)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="cart-total">
                <span className="total-label">Total</span>
                <span data-testid="total-display" className="total-price">{formatPrice(getTotalPrice())}</span>
              </div>

              <button 
                className="finalize-btn"
              >
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