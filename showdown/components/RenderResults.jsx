import React, { useState, useEffect } from "react";

export default function RenderResults({ results }) {
  const [currentTextIndex, setCurrentTextIndex] = useState(-1);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setCurrentTextIndex(0);
    setShowText(true);
    const showTimer = setTimeout(() => {
      setShowText(false);
    }, 8000);

    return () => clearTimeout(showTimer);
  }, [results]);

  useEffect(() => {
    if (currentTextIndex < 4) {
      const textTimer = setTimeout(() => {
        setCurrentTextIndex((prevIndex) => prevIndex + 1);
      }, 2000);
      return () => clearTimeout(textTimer);
    }
  }, [currentTextIndex]);

  if (!results) {
    return <></>;
  }
  const texts = [
    `Player used ${results["p1-move"]}`,
    `Player's attack ${results["p1-result"]}!`,
    `Foe used ${results["p2-move"]}`,
    `Foe's attack ${results["p2-result"]}!`,
  ];

  return (
    <div className="border border-black">
      {showText && (
        <p className="m-0 text-black text-center">{texts[currentTextIndex]}</p>
      )}
    </div>
  );
}
