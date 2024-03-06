import { Character } from '../types';

export function getTopCharacters(
  characters: Character[],
  top: number,
): Character[] {
  return characters.slice(0, top);
}
