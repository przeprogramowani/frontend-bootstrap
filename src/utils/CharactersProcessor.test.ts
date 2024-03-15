import { describe, test, expect } from 'vitest';
import { getTopCharacters } from './CharactersProcessor';
import { Character } from '../../lib/rick-and-morty-api-client';

const characters: Character[] = [
  {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
    },
    location: {
      name: 'Earth (Replacement Dimension)',
      url: 'https://rickandmortyapi.com/api/location/20',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/1'],
    url: 'https://rickandmortyapi.com/api/character/1',
    created: new Date('2017-11-04T18:48:46.250Z'),
  },
  {
    id: 2,
    name: 'Morty Smith',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
    },
    location: {
      name: 'Earth (Replacement Dimension)',
      url: 'https://rickandmortyapi.com/api/location/20',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/1'],
    url: 'https://rickandmortyapi.com/api/character/2',
    created: new Date('2017-11-04T18:50:21.651Z'),
  },
];

describe('CharactersProcessor', () => {
  test('should return empty array', () => {
    const topCharacters = getTopCharacters([], 2);
    expect(topCharacters.length).toBe(0);
  });

  test('should return two characters', () => {
    const topCharacters = getTopCharacters(characters, 1);
    expect(topCharacters.length).toBe(1);
    expect(topCharacters[0].name).toBe('Rick Sanchez');
  });
});
