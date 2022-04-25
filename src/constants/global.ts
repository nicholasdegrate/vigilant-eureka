import { DeckInitialState } from '../provider/DeckProvider';

export const NAMES = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
export const SUITS = ['Heart', 'Diamond', 'Spade', 'Clover'];
export const gameStatusResult: Record<DeckInitialState['gameStatus'], string> = {
  lose: 'you lost. please try again',
  'game over': 'Game Over.',
  playing: '',
  winner: '',
};
