import { useState, useEffect } from 'react';

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Promise.all([
      fetch('https://fakestoreapi.com/products').then(r => r.json()),
      fetch('https://fakestoreapi.com/products/categories').then(r => r.json()),
    ])
      .then(([prods, cats]) => {
        setProducts(prods);
        setCategories(cats);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { products, categories, loading, error };
}
