import { filter, size } from 'lodash';
import { CardStack } from '../types/global';

export function remainingAces(deck: CardStack) {
  return size(filter(deck, ['name', 'A']));
}
