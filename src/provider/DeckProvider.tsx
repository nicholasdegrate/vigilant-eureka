import { createContext, FunctionComponent, useState } from 'react';
import { createDeckOfCards } from '../helpers/createDeckOfCards';
import { remainingAces } from '../helpers/remainingAces';
import { CardStack } from '../types/global';

export interface DeckInitialState {
  deck: CardStack;
  cardStack: CardStack;
  acesRemaining: number;
  pickedDeck?(): void;
  resetGame?(): void;
  gameStatus: 'game over' | 'lose' | 'winner' | 'playing';
}

const initialState: DeckInitialState = {
  deck: [],
  cardStack: [],
  acesRemaining: 0,
  gameStatus: 'playing',
};

export const DeckContext = createContext<DeckInitialState>(initialState);

export const DeckProvider: FunctionComponent = ({ children }) => {
  const [{ deck, cardStack, acesRemaining, gameStatus }, setDeck] = useState(() =>
    createDeckOfCards()
  );

  const pickedDeck = () => {
    setDeck(({ deck, gameStatus }) => {
      const aces = remainingAces(deck);
      const stack = deck.splice(0, 5);

      if (deck.length > 5 && aces === 0) {
        gameStatus = 'game over';
      } else if (!deck.length && aces > 0) {
        gameStatus = 'winner';
      } else if (!deck.length && aces === 0) {
        gameStatus = 'lose';
      }

      return {
        acesRemaining: aces,
        cardStack: stack,
        deck,
        gameStatus,
      };
    });
  };

  const resetGame = () => {
    setDeck(() => createDeckOfCards());
  };

  return (
    <DeckContext.Provider
      value={{ deck, cardStack, pickedDeck, resetGame, acesRemaining, gameStatus }}
    >
      {children}
    </DeckContext.Provider>
  );
};
