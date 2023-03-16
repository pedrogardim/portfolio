import styles from './Grid.module.css';

import GridItem from '../GridItem/GridItem';

const Grid = ({ data }) => {
  return (
    <div className={styles.gridContainer}>
      {data.map((item, index) => (
        <GridItem
          item={item}
          index={index}
          key={item.title}
        />
      ))}
    </div>
  );
};

export default Grid;
