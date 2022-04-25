import { useContext } from 'react';
import { DeckContext } from '../provider/DeckProvider';
import winner from '../assets/winner.svg';
import { gameStatusResult } from '../constants/global';

export function Header() {
  const { deck, acesRemaining, gameStatus } = useContext(DeckContext);
  return (
    <div className="relative">
      <div className="h-1/6 min-h-123 p-2 w-1/2 justify-center text-center items-center text-white flex max-w-xs bg-black m-auto border-2 border-yellow-300">
        <div className="m-3">
          <h1 className="text-5xl">{deck.length}</h1>
          <h2 className="text-xl">Card Left</h2>
        </div>
        <div className="m-3">
          <h1 className="text-5xl">{acesRemaining}</h1>
          <h2 className="text-xl">Aces Remaining</h2>
        </div>
      </div>
      {gameStatus === 'winner' && (
        <img className="absolute m-auto left-0 right-0 max-h-24	" src={winner} alt={'winner'} />
      )}
      <p className="mt-3 text-center text-white text-2xl w-full absolute m-auto left-0 right-0 max-h-24">
        {gameStatusResult[gameStatus]}
      </p>
    </div>
  );
}
