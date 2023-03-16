import styles from './GridItem.module.css';

const GridItem = ({ item }) => {
  return (
    <div className={styles.gridItem}>
      <img
        className={styles.gridItemImage}
        src={item.picture}
        alt={''}
        onError={(event) => (event.target.style.display = 'none')}
      />
      <span className={styles.gridItemTitle}>{item.title}</span>
      <div className={styles.gridItemOverlay}></div>
    </div>
  );
};

export default GridItem;
