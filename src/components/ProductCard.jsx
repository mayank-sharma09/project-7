import React from 'react';
import styles from './ProductCard.module.css';
import StarRating from './StarRating';

export default function ProductCard({ product, onAdd, onClick }) {
  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.imgWrap}>
        <img src={product.image} alt={product.title} className={styles.img} loading="lazy" />
      </div>
      <div className={styles.body}>
        <span className={styles.category}>{product.category}</span>
        <p className={styles.title}>{product.title}</p>
        <div className={styles.footer}>
          <div>
            <div className={styles.price}>${product.price.toFixed(2)}</div>
            <div className={styles.rating}>
              <StarRating rating={product.rating?.rate ?? 0} size={12} />
              <span>{product.rating?.rate}</span>
            </div>
          </div>
          <button
            className={styles.addBtn}
            onClick={e => { e.stopPropagation(); onAdd(product); }}
            title="Add to cart"
          >
            <i className="ti ti-shopping-cart-plus" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
