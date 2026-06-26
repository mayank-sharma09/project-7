import React from 'react';
import styles from './CartDrawer.module.css';

export default function CartDrawer({ cart, onClose, onQty, onRemove, total }) {
  const totalQty = cart.reduce((s, i) => s + i.qty, 0);

  return (
    <>
      <div className={styles.overlay} onClick={onClose} />
      <div className={styles.drawer}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <i className="ti ti-shopping-cart" />
            Cart {totalQty > 0 && <span className={styles.count}>({totalQty})</span>}
          </h2>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close cart">
            <i className="ti ti-x" />
          </button>
        </div>

        <div className={styles.items}>
          {cart.length === 0 ? (
            <div className={styles.empty}>
              <i className="ti ti-shopping-cart-off" style={{ fontSize: 40, opacity: 0.25, display: 'block', marginBottom: 10 }} />
              <p>Your cart is empty</p>
              <p style={{ fontSize: 13 }}>Add some products to get started.</p>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} className={styles.item}>
                <img src={item.image} alt={item.title} className={styles.itemImg} />
                <div className={styles.itemInfo}>
                  <p className={styles.itemTitle}>{item.title}</p>
                  <p className={styles.itemPrice}>${(item.price * item.qty).toFixed(2)}</p>
                  <div className={styles.qtyRow}>
                    <button className={styles.qtyBtn} onClick={() => onQty(item.id, item.qty - 1)}>−</button>
                    <span className={styles.qtyVal}>{item.qty}</span>
                    <button className={styles.qtyBtn} onClick={() => onQty(item.id, item.qty + 1)}>+</button>
                    <button
                      className={styles.removeBtn}
                      onClick={() => onRemove(item.id)}
                      title="Remove item"
                    >
                      <i className="ti ti-trash" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className={styles.footer}>
            <div className={styles.totalRow}>
              <span>Total</span>
              <span className={styles.totalAmt}>${total.toFixed(2)}</span>
            </div>
            <button className={styles.checkoutBtn}>
              <i className="ti ti-credit-card" />
              Proceed to checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
