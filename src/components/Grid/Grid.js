import styles from './Grid.module.css';

import GridItem from '../GridItem/GridItem';

const Grid = ({ data, onSelect }) => {
  return (
    <div className={styles.gridContainer}>
      {data.map((item, index) => (
        <GridItem
          item={item}
          index={index}
          key={item.title}
          onSelect={() => onSelect(index)}
        />
      ))}
    </div>
  );
};

export default Grid;
