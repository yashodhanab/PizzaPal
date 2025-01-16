import * as React from "react";
import styles from './ViewButton.module.css';

export default function ViewButton() {
  return (
    <div className={styles.buttonContainer}>
      <button 
        className={styles.actionButton}
        onClick={() => {}}
        tabIndex={0}
        role="button"
        aria-label="View all items"
      >
        View All
      </button>
    </div>
  );
}