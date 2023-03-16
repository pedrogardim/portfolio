import { colorMap, colorPalette } from '../data';

import Word from '../components/Word/Word';

export const createText = (text) => {
  let isString = false;
  let isComment = false;

  const splitedText = text.split(/(\s+|'+|\)+|\(+|\.+|:+|,+|]+|\[+)/);

  let letterCount = 0;

  const content = splitedText.map((word, wordIndex) => {
    if (word === `'`) isString = !isString;
    if (word.includes('//')) isComment = true;
    if (/\n/.test(word)) isComment = false;

    if (wordIndex > 0 && splitedText[wordIndex - 1])
      letterCount += splitedText[wordIndex - 1].length;

    const wordColor =
      colorMap[word] ||
      colorMap[wordIndex] ||
      ((splitedText[wordIndex + 1] === ':' ||
        splitedText[wordIndex - 1] === '.') &&
        colorPalette.lightBlue) ||
      (isString && colorPalette.salmon) ||
      (+parseInt(word) && colorPalette.lime) ||
      (isComment && colorPalette.gray);

    if (!word) return;

    return (
      <Word
        key={wordIndex}
        index={wordIndex}
        wordColor={wordColor}
        letterCount={letterCount}
      >
        {word}
      </Word>
    );
  });

  return content;
};
