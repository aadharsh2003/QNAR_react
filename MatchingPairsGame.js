import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./MatchingPairsGame.css";

function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // Swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function MatchingPairsGame() {
  const location = useLocation();
  const pairs = location.state?.pairs || [];

  // Extract leftItems from the pairs
  const leftItems = pairs.map(pair => pair.col1);

  // State to hold the shuffled right items
  const [rightItems, setRightItems] = useState([]);

  useEffect(() => {
    // Shuffle the right items only once on component mount
    setRightItems(shuffle([...pairs.map(pair => pair.col2)]));
  }, [pairs]);

  const [selectedLeft, setSelectedLeft] = useState(null);
  const [selectedRight, setSelectedRight] = useState(null);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [incorrectPairs, setIncorrectPairs] = useState([]);
  const leftRefs = useRef([]);
  const rightRefs = useRef([]);

  const handleLeftClick = (index) => {
    setSelectedLeft(index);
  };

  const handleRightClick = (index) => {
    setSelectedRight(index);

    if (selectedLeft !== null) {
      const isMatch = rightItems[index] === pairs[selectedLeft].col2;

      if (isMatch) {
        setMatchedPairs([...matchedPairs, { left: selectedLeft, right: index }]);
      } else {
        setIncorrectPairs([...incorrectPairs, { left: selectedLeft, right: index }]);
        setTimeout(() => setIncorrectPairs([]), 1000);
      }
      setSelectedLeft(null);
      setSelectedRight(null);
    }
  };

  const getLineCoordinates = (leftIndex, rightIndex) => {
    const leftButton = leftRefs.current[leftIndex].getBoundingClientRect();
    const rightButton = rightRefs.current[rightIndex].getBoundingClientRect();

    const startX = leftButton.right + window.scrollX;
    const startY = leftButton.top + leftButton.height / 2 + window.scrollY;
    const endX = rightButton.left + window.scrollX;
    const endY = rightButton.top + rightButton.height / 2 + window.scrollY;

    return { startX, startY, endX, endY };
  };

  return (
    <div className="game-container">
      <h2>Matching Pairs Game</h2>
      <div className="game-board">
        <div className="left-column">
          {leftItems.map((item, index) => (
            <div
              key={index}
              className={`item ${selectedLeft === index ? "selected" : ""} ${
                matchedPairs.some((pair) => pair.left === index) ? "matched" : ""
              }`}
              onClick={() => handleLeftClick(index)}
              ref={(el) => (leftRefs.current[index] = el)}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="right-column">
          {rightItems.map((item, index) => (
            <div
              key={index}
              className={`item ${selectedRight === index ? "selected" : ""} ${
                matchedPairs.some((pair) => pair.right === index) ? "matched" : ""
              } ${incorrectPairs.some((pair) => pair.right === index) ? "incorrect" : ""}`}
              onClick={() => handleRightClick(index)}
              ref={(el) => (rightRefs.current[index] = el)}
            >
              {item}
            </div>
          ))}
        </div>
        <svg className="line-container">
          {matchedPairs.map((pair, i) => {
            const { startX, startY, endX, endY } = getLineCoordinates(
              pair.left,
              pair.right
            );
            return (
              <line
                key={i}
                x1={startX}
                y1={startY}
                x2={endX}
                y2={endY}
                stroke="green"
                strokeWidth="2"
              />
            );
          })}
        </svg>
      </div>
    </div>
  );
}

export default MatchingPairsGame;
