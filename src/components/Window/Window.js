import styles from './Window.module.css';

const Window = (props) => {
  return (
    <div className={styles.windowContainer}>
      <div className={styles.windowHeader}>
        {['#FF605C', '#FFBD44', '#00CA4E'].map((e) => (
          <div style={{ backgroundColor: e }}></div>
        ))}
      </div>
      {props.children}
    </div>
  );
};

export default Window;
