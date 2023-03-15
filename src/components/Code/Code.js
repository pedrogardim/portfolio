import { useEffect, useState, useMemo } from 'react';

import { createText } from '../../utils/textUtils';

import styles from './Code.module.css';

const Code = ({ text }) => {
  //const title = useMemo(generateText, [])

  const [counter, setCounter] = useState(0);

  const splitedText = useMemo(() => text.slice(0, counter), [counter, text]);

  useEffect(() => {
    setCounter(0);
    const timer = setInterval(() => {
      setCounter((prev) => {
        if (prev === text.length) {
          clearInterval(timer);
        }
        return prev + (prev < text.length ? 1 : 0);
      });
    }, 20);
  }, [text]);

  return (
    <div className={styles.codeContainer}>
      <code className={styles.codeText}>
        {createText(splitedText)}
        {/* <div className={styles.titleCursor} /> */}
      </code>
    </div>
  );
};

export default Code;
