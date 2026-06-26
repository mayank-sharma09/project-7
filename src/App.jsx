import React, { useState, useMemo, useCallback } from 'react';
import styles from './App.module.css';

import LoginPage from './components/LoginPage';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ProductGrid from './components/ProductGrid';
import CartDrawer from './components/CartDrawer';
import ProductModal from './components/ProductModal';
import Toast from './components/Toast';

import { useCart } from './hooks/useCart';
import { useProducts } from './hooks/useProducts';

export default function App() {
  const [user, setUser] = useState(null);

  // Products & categories
  const { products, categories, loading } = useProducts();

  // Filters
  const [selCat, setSelCat] = useState('all');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('default');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [minRating, setMinRating] = useState(0);

  // UI state
  const [cartOpen, setCartOpen] = useState(false);
  const [detailProduct, setDetailProduct] = useState(null);
  const [toast, setToast] = useState('');

  // Cart
  const { cart, addToCart, setQty, removeFromCart, cartCount, cartTotal } = useCart();

  const showToast = useCallback((msg) => {
    setToast(msg);
    setTimeout(() => setToast(''), 2500);
  }, []);

  const handleAddToCart = useCallback((product) => {
    addToCart(product);
    showToast(`"${product.title.slice(0, 30)}…" added to cart`);
  }, [addToCart, showToast]);

  const handleClearFilters = () => {
    setSelCat('all');
    setSearch('');
    setSort('default');
    setMinPrice('');
    setMaxPrice('');
    setMinRating(0);
  };

  const filteredProducts = useMemo(() => {
    return products
      .filter(p => selCat === 'all' || p.category === selCat)
      .filter(p => !search || p.title.toLowerCase().includes(search.toLowerCase()))
      .filter(p => !minPrice || p.price >= parseFloat(minPrice))
      .filter(p => !maxPrice || p.price <= parseFloat(maxPrice))
      .filter(p => !minRating || (p.rating?.rate ?? 0) >= minRating)
      .sort((a, b) => {
        if (sort === 'price-asc') return a.price - b.price;
        if (sort === 'price-desc') return b.price - a.price;
        if (sort === 'rating') return (b.rating?.rate ?? 0) - (a.rating?.rate ?? 0);
        if (sort === 'name') return a.title.localeCompare(b.title);
        return 0;
      });
  }, [products, selCat, search, minPrice, maxPrice, minRating, sort]);

  if (!user) {
    return <LoginPage onLogin={setUser} />;
  }

  return (
    <div className={styles.app}>
      <Navbar
        user={user}
        cartCount={cartCount}
        onCartOpen={() => setCartOpen(true)}
        onLogout={() => setUser(null)}
      />

      <div className={styles.layout}>
        <Sidebar
          categories={categories}
          selCat={selCat}
          onCatChange={setSelCat}
          minPrice={minPrice}
          maxPrice={maxPrice}
          onMinPrice={setMinPrice}
          onMaxPrice={setMaxPrice}
          minRating={minRating}
          onRatingChange={setMinRating}
          onClearFilters={handleClearFilters}
        />

        <main className={styles.main}>
          {/* Toolbar */}
          <div className={styles.toolbar}>
            <div className={styles.searchBox}>
              <i className="ti ti-search" />
              <input
                type="text"
                placeholder="Search products…"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
              {search && (
                <button className={styles.clearSearch} onClick={() => setSearch('')}>
                  <i className="ti ti-x" />
                </button>
              )}
            </div>

            <select
              className={styles.sortSelect}
              value={sort}
              onChange={e => setSort(e.target.value)}
            >
              <option value="default">Sort: Default</option>
              <option value="price-asc">Price: Low → High</option>
              <option value="price-desc">Price: High → Low</option>
              <option value="rating">Top rated</option>
              <option value="name">Name A–Z</option>
            </select>

            <span className={styles.countTag}>
              {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
            </span>
          </div>

          <ProductGrid
            products={filteredProducts}
            loading={loading}
            onAdd={handleAddToCart}
            onProductClick={setDetailProduct}
          />
        </main>
      </div>

      {cartOpen && (
        <CartDrawer
          cart={cart}
          onClose={() => setCartOpen(false)}
          onQty={setQty}
          onRemove={removeFromCart}
          total={cartTotal}
        />
      )}

      {detailProduct && (
        <ProductModal
          product={detailProduct}
          onClose={() => setDetailProduct(null)}
          onAdd={handleAddToCart}
        />
      )}

      <Toast message={toast} />
    </div>
  );
}
