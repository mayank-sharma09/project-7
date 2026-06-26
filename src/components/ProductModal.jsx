import React from 'react';
import styles from './ProductModal.module.css';
import StarRating from './StarRating';

export default function ProductModal({ product, onClose, onAdd }) {
  if (!product) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
          <i className="ti ti-x" />
        </button>

        <div className={styles.inner}>
          <div className={styles.imgWrap}>
            <img src={product.image} alt={product.title} className={styles.img} />
          </div>

          <div className={styles.info}>
            <span className={styles.category}>{product.category}</span>
            <h2 className={styles.title}>{product.title}</h2>

            <div className={styles.ratingRow}>
              <StarRating rating={product.rating?.rate ?? 0} size={15} />
              <span className={styles.ratingText}>
                {product.rating?.rate} · {product.rating?.count} reviews
              </span>
            </div>

            <p className={styles.desc}>{product.description}</p>

            <div className={styles.price}>${product.price.toFixed(2)}</div>

            <button
              className={styles.addBtn}
              onClick={() => { onAdd(product); onClose(); }}
            >
              <i className="ti ti-shopping-cart-plus" />
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
