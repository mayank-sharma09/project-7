import React from 'react';
import styles from './ProductGrid.module.css';
import ProductCard from './ProductCard';

export default function ProductGrid({ products, loading, onAdd, onProductClick }) {
  if (loading) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner} />
        <p>Loading products…</p>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className={styles.empty}>
        <i className="ti ti-mood-sad" style={{ fontSize: 40, opacity: 0.3, display: 'block', marginBottom: 10 }} />
        <p>No products match your filters.</p>
        <p style={{ fontSize: 13 }}>Try adjusting the search or filters.</p>
      </div>
    );
  }

  return (
    <div className={styles.grid}>
      {products.map(p => (
        <ProductCard
          key={p.id}
          product={p}
          onAdd={onAdd}
          onClick={() => onProductClick(p)}
        />
      ))}
    </div>
  );
}
