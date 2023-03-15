const Word = ({ children, index, wordColor, letterCount }) => {
  return (
    <span
      style={{ color: wordColor }}
      onClick={() => console.log(index)}
    >
      {children}
    </span>
  );
};

export default Word;
