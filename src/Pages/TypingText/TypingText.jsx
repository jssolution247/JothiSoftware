import { useEffect, useState } from "react";

const TypingText = () => {
  const texts = [
    "SEO",
    "Google Ads",
    "Social Media Marketing",
    "Website Development",
  ];

  const [visibleTexts, setVisibleTexts] = useState([]);
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index >= texts.length) {
      return;
    }

    const text = texts[index];

    if (currentText.length < text.length) {
      const timer = setTimeout(() => {
        setCurrentText(text.substring(0, currentText.length + 1));
      }, 100);

      return () => clearTimeout(timer);
    }

    // Finished typing current text
    const timer = setTimeout(() => {
      setVisibleTexts((prev) => [...prev, text]);

      setCurrentText("");
      setIndex((prev) => prev + 1);
    }, 800);

    return () => clearTimeout(timer);
  }, [currentText, index]);

  return (
    <span className="typing-text">
      {visibleTexts.map((item, index) => (
        <span key={index}>
          {index > 0 && ", "}
          {item}
        </span>
      ))}

      {currentText && (
        <>
          {visibleTexts.length > 0 && ", "}
          {currentText}
          <span className="cursor">|</span>
        </>
      )}
    </span>
  );
};

export default TypingText;