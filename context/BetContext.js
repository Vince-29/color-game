import React, { createContext, useContext, useState, useEffect } from 'react';

const BetContext = createContext();

export const BetProvider = ({ children }) => {
  const [bet, setBet] = useState('');
  const [color, setColor] = useState('');
  const [gameIsOver, setGameIsOver] = useState(false);
  const [earnings, setEarnings] = useState(20);
  const [results, setResults] = useState([]);

  // Reset game if earnings drops to 0
  useEffect(() => {
    if (earnings <= 0) {
      setGameIsOver(true);
    }
  }, [earnings]);

  function handleBet(value) {
    setBet(value);
  }

  function handleColor(selectedColor) {
    setColor(selectedColor);
  }

  function generateRandomColors() {
    const availableColors = [
      'red',
      'green',
      'blue',
      'yellow',
      'purple',
      'pink',
      'orange',
      'aqua',
      'gray',
    ];

    const randomResults = [];
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * availableColors.length);
      randomResults.push(availableColors[randomIndex]);
    }

    setResults(randomResults);
    calculateEarnings(randomResults);
  }

  function calculateEarnings(results) {
    if (!color || !bet) return;

    const betAmount = parseInt(bet, 10);
    if (isNaN(betAmount)) return;

    const matches = results.filter((result) => result === color).length;

    if (matches === 3) {
      setEarnings((prev) => prev + betAmount * 3);
    } else if (matches === 2) {
      setEarnings((prev) => prev + betAmount * 2);
    } else if (matches === 1) {
      setEarnings((prev) => prev + betAmount);
    } else {
      setEarnings((prev) => prev - betAmount);
    }
  }

  function resetGame() {
    setBet('');
    setColor('');
    setGameIsOver(false);
    setEarnings(20);
    setResults([]);
  }

  const value = {
    bet,
    color,
    earnings,
    gameIsOver,
    results,
    handleBet,
    handleColor,
    generateRandomColors,
    resetGame,
  };

  return <BetContext.Provider value={value}>{children}</BetContext.Provider>;
};

export const useBet = () => {
  const context = useContext(BetContext);
  if (!context) {
    throw new Error('useBet must be used within a BetProvider');
  }
  return context;
};
