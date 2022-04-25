import { useContext } from 'react';
import { DeckContext } from '../provider/DeckProvider';

export function Footer() {
  const { pickedDeck, resetGame, acesRemaining } = useContext(DeckContext);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <button
        disabled={!acesRemaining}
        onClick={pickedDeck}
        className="bg-yellow-300 rounded-xl w-80 h-28 text-6xl"
      >
        DEAL
      </button>
      <button
        onClick={resetGame}
        className="text-yellow-300 m-5 text-lg rounded-xl border-2 border-yellow-300 w-28 h-12"
      >
        Reset
      </button>
    </div>
  );
}
