import { CardStack } from '../types/global';

export function shuffledDeck(stack: CardStack) {
  for (let i = stack.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [stack[i], stack[j]] = [stack[j], stack[i]];
  }

  return stack;
}
