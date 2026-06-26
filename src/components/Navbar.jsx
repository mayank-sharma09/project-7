import React from 'react';
import styles from './Navbar.module.css';

export default function Navbar({ user, cartCount, onCartOpen, onLogout, onFilterOpen, activeFilterCount }) {
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        {/* Mobile filter toggle */}
        <button className={styles.filterToggle} onClick={onFilterOpen} aria-label="Open filters">
          <i className="ti ti-adjustments-horizontal" />
          {activeFilterCount > 0 && (
            <span className={styles.filterBadge}>{activeFilterCount}</span>
          )}
        </button>
        <div className={styles.logo}>
          Shop<span className={styles.logoAccent}>Arc</span>
        </div>
      </div>

      <div className={styles.actions}>
        {user && (
          <div className={styles.userChip}>
            <div className={styles.avatar}>{user.username.slice(0, 2).toUpperCase()}</div>
            <span className={styles.username}>{user.username}</span>
          </div>
        )}

        <button className={styles.cartBtn} onClick={onCartOpen} aria-label="Open cart">
          <i className="ti ti-shopping-cart" />
          {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
          <span className={styles.btnLabel}>Cart</span>
        </button>

        <button className={styles.logoutBtn} onClick={onLogout} aria-label="Sign out">
          <i className="ti ti-logout" />
          <span className={styles.btnLabel}>Sign out</span>
        </button>
      </div>
    </nav>
  );
}
