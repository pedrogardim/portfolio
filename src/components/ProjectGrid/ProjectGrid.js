import styles from './ProjectGrid.module.css';

import GridItem from '../GridItem/GridItem';

const projects = [
  { title: 'Bless' },
  { title: 'Leukos' },
  { title: 'Modulab' },
  { title: 'Musabeat' },
  { title: 'Kat' },
  { title: 'Web DAW' },
  { title: 'Metrono' },
  { title: 'Pumblr' },
];

const ProjectGrid = (props) => {
  return (
    <div className={styles.gridContainer}>
      {projects.map((item, index) => (
        <GridItem
          item={item}
          index={index}
          key={item.title}
        />
      ))}
    </div>
  );
};

export default ProjectGrid;
