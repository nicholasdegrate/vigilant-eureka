import React, { useContext, useState } from 'react';
import { CardHolder } from './components/CardHolder';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import Confetti from 'react-confetti';
import styles from './App.module.css';
import { DeckContext } from './provider/DeckProvider';
import {CardStack} from "./types/global";
import {createDeckOfCards} from "./helpers/createDeckOfCards";

const App: React.FC = () => {
  const { gameStatus } = useContext(DeckContext);

  return (
    <div className={styles.body}>
      {gameStatus === 'winner' && <Confetti />}
      <Header />
      <CardHolder />
      <Footer />
    </div>
  );
};

export default App;
