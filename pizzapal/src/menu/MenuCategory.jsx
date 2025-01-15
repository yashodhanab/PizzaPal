import React from 'react';
import styles from './MenuCategory.module.css';

export default function MenuCategory({ title }) {
  return (
    <button 
      className={styles.menuCategory}
      tabIndex={0}
      role="button"
      aria-label={`View ${title} menu`}
    >
      {title}
    </button>
  );
};

