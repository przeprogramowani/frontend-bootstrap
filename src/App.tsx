import React, { useEffect } from 'react';
import { ApiResponse, Character } from './types';
import { getTopCharacters } from './lib/CharactersProcessor';

const App = () => {
  const [characters, setCharacters] = React.useState<Character[]>([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((res) => res.json())
      .then((data: ApiResponse) => setCharacters(getTopCharacters(data.results, 5)));
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <h1 className="text-xl font-bold mb-4">Hello from App!</h1>
      <ul className="list-disc pl-4">
        {characters.map((character) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
