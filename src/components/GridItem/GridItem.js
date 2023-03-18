import styles from './GridItem.module.css';

const GridItem = ({ item, onSelect }) => {
  return (
    <button
      className={styles.gridItem}
      onClick={onSelect}
    >
      <img
        className={styles.gridItemImage}
        src={item.picture}
        alt={''}
        onError={(event) => (event.target.style.display = 'none')}
      />
      <span className={styles.gridItemTitle}>{item.title}</span>
      <div className={styles.gridItemOverlay}></div>
    </button>
  );
};

export default GridItem;
