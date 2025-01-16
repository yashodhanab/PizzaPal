import React from 'react';
import  MenuCategory  from './MenuCategory';
import styles from './MenuSection.module.css';

export default function MenuSection(){
  const categories = [
    // 'Pizza',
    // 'Grill',
    // 'Ice Cream',
    // 'Bevrages',
    // 'Deserts',
    // 'Snacks',
    // 'Salads'
  ];

  return (
    <div className={styles.menuContainer}>
      <h1 className={styles.menuTitle}>NEW ARRIVALS</h1>
      <div className={styles.categoriesContainer}>
        {categories.map((category) => (
          <MenuCategory 
            key={category}
            title={category}
            
          />
        ))}
      </div>
    </div>
  );
};