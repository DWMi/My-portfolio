import React, { useState, useEffect, useRef } from "react";

const Typewriter = ({ text }) => {
  const [currentText, setCurrentText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const intervalRef = useRef();

  useEffect(() => {
    let currentIndex = 0;
    const totalDelay = 2000;
    let remainingDelay = totalDelay;

    const animateText = () => {
      setCurrentText(text.slice(0, currentIndex + 1));
      currentIndex++;

      if (currentIndex >= text.length) {
        return;
      }

      const avgDelay = totalDelay / text.length;
      const charDelay = remainingDelay / (text.length - currentIndex) 
      remainingDelay -= charDelay;

      intervalRef.current = setTimeout(animateText, charDelay);
    };

    intervalRef.current = setTimeout(animateText, remainingDelay);



    return () => {
      clearTimeout(intervalRef.current);
    };
  }, [text]);

  return (
    <div className="aboutInfo">
      {currentText}
    </div>
  );
};

export default Typewriter;
