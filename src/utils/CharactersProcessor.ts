import { Character } from '../../lib/rick-and-morty-api-client';

export function getTopCharacters(characters: Character[], top: number): Character[] {
  return characters.slice(0, top);
}
