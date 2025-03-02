import styles from './Card.module.css';

export default function Card({ title, imageSrc, prepTime }) {
    return (
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <img
              loading="lazy"
              src={imageSrc}
              className={styles.foodImage}
              alt={title}
            />
          </div>
          <div className={styles.contentWrapper}>
            <div className={styles.contentContainer}>
              <h2 className={styles.title}>{title}</h2>
              <div className={styles.timeContainer}>
                <span className={styles.timeText}>{prepTime}</span>
              </div>
            </div>
          </div>
        </div>
      );
};
