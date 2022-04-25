import { useContext } from 'react';
import { DeckContext } from '../provider/DeckProvider';
import { Card } from './Card';

export function CardHolder() {
  const { cardStack } = useContext(DeckContext);

  return (
    <div className="h-1/2 flex justify-center items-center">
      {cardStack.map(({ name, suit }) => (
        <Card key={`${suit} ${name}`} name={name} suit={suit} />
      ))}
    </div>
  );
}
