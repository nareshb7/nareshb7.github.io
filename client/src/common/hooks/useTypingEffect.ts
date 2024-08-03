import { useState, useEffect } from 'react';

const useTypingEffect = (text: string, speed: number) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(displayText + text[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [displayText, index, text, speed]);

  return displayText;
};

export default useTypingEffect;

export const useMultipleTypingEffect = (texts: string[], speed: number) => {
    const [displayText, setDisplayText] = useState(['']);
    const [index, setIndex] = useState(0);
    const [lineNo, setLineNo] = useState(0);
  
    useEffect(() => {
      if (lineNo < texts.length) {
        if (index < texts[lineNo].length) {
          const timeout = setTimeout(() => {
            const newDisplayText = [...displayText];
            newDisplayText[lineNo] = (newDisplayText[lineNo] || '') + texts[lineNo][index];
            setDisplayText(newDisplayText);
            setIndex(index + 1);
          }, speed);
          return () => clearTimeout(timeout);
        } else {
          setLineNo(lineNo + 1);
          setIndex(0);
          setDisplayText(prev => [...prev, '']);
        }
      }
    }, [displayText, index, lineNo, texts, speed]);
  
    return displayText;
  };
  
