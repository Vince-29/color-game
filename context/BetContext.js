import React, { createContext, useContext, useState } from 'react';

const BetContext = createContext();

export const BetProvider = ({ children }) => {
  const [bet, setBet] = useState('');
  const [color, setColor] = useState('');
  const [gameIsOver, setGameIsOver] = useState(true);
  const [earnings, setEarnings] = useState(0);

  function handleBet(bet) {
    setBet(bet);
  }

  function handleColor(color) {
    setColor(color);
  }

  function gameOverHandler(numberOfRounds) {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }

  function startNewGameHandler() {
    setUserNumber(0);
    setGuessRounds(0);
  }

  function handleEarnings(earnings) {
    setEarnings(earnings);
  }

  const value = {
    bet,
    color,
    earnings,
    gameIsOver,
    handleBet,
    handleColor,
    handleEarnings,
    gameOverHandler,
    startNewGameHandler,
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
