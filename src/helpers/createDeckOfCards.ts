import { NAMES, SUITS } from '../constants/global';
import { DeckInitialState } from '../provider/DeckProvider';
import { CardStack } from '../types/global';
import { remainingAces } from './remainingAces';
import { shuffledDeck } from './shuffledDeck';

export function createDeckOfCards() {
  const deck: CardStack = [];

  for (const name of NAMES) {
    for (const suit of SUITS) {
      const card = { name, suit };
      deck.push(card);
    }
  }

  const initialDeck = shuffledDeck(deck);

  return {
    acesRemaining: remainingAces(initialDeck),
    cardStack: initialDeck.splice(0, 5),
    deck: initialDeck,
    gameStatus: 'playing',
  } as Omit<DeckInitialState, 'pickedDeck' | 'resetGame'>;
}
