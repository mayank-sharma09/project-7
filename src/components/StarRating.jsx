import React from 'react';

export default function StarRating({ rating, size = 13 }) {
  const full = Math.round(rating);
  return (
    <span style={{ display: 'inline-flex', gap: 1 }}>
      {[1, 2, 3, 4, 5].map(i => (
        <i
          key={i}
          className={`ti ti-star${i <= full ? '-filled' : ''}`}
          style={{ fontSize: size, color: i <= full ? '#EF9F27' : '#D1D5DB' }}
        />
      ))}
    </span>
  );
}
