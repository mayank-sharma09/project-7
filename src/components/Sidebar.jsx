import React from 'react';
import styles from './Sidebar.module.css';

const RATING_OPTIONS = [
  { value: 0, label: 'All ratings' },
  { value: 3, label: '3+ ★' },
  { value: 3.5, label: '3.5+ ★' },
  { value: 4, label: '4+ ★' },
  { value: 4.5, label: '4.5+ ★' },
];

export default function Sidebar({
  open, onClose,
  categories, selCat, onCatChange,
  minPrice, maxPrice, onMinPrice, onMaxPrice,
  minRating, onRatingChange,
  onClearFilters,
}) {
  return (
    <aside className={`${styles.sidebar} ${open ? styles.open : ''}`}>
      {/* Mobile header */}
      <div className={styles.mobileHeader}>
        <span className={styles.mobileTitle}>
          <i className="ti ti-adjustments-horizontal" /> Filters
        </span>
        <button className={styles.mobileClose} onClick={onClose} aria-label="Close filters">
          <i className="ti ti-x" />
        </button>
      </div>

      {/* Category */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Category</h3>
        <button
          className={`${styles.catBtn} ${selCat === 'all' ? styles.active : ''}`}
          onClick={() => onCatChange('all')}
        >
          <i className="ti ti-layout-grid" />
          All products
        </button>
        {categories.map(cat => (
          <button
            key={cat}
            className={`${styles.catBtn} ${selCat === cat ? styles.active : ''}`}
            onClick={() => onCatChange(cat)}
          >
            <i className="ti ti-tag" />
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </section>

      {/* Price */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Price range</h3>
        <div className={styles.priceRow}>
          <input
            className={styles.priceInput}
            type="number"
            placeholder="Min $"
            value={minPrice}
            onChange={e => onMinPrice(e.target.value)}
            min="0"
          />
          <span className={styles.priceSep}>—</span>
          <input
            className={styles.priceInput}
            type="number"
            placeholder="Max $"
            value={maxPrice}
            onChange={e => onMaxPrice(e.target.value)}
            min="0"
          />
        </div>
      </section>

      {/* Rating */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Min rating</h3>
        <div className={styles.ratingList}>
          {RATING_OPTIONS.map(opt => (
            <label key={opt.value} className={styles.ratingOpt}>
              <input
                type="radio"
                name="rating"
                checked={minRating === opt.value}
                onChange={() => onRatingChange(opt.value)}
              />
              <span>{opt.label}</span>
            </label>
          ))}
        </div>
      </section>

      <button className={styles.clearBtn} onClick={onClearFilters}>
        <i className="ti ti-filter-off" />
        Clear all filters
      </button>
    </aside>
  );
}
