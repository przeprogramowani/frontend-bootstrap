import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Character } from '../../lib/rick-and-morty-api-client';

const CharacterDetails = () => {
  const character = useLoaderData() as Character;

  return (
    <>
      <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
        <div className="flex flex-row space-x-4" data-testid="character-details">
          <div>
            <img
              src={character.image}
              alt={`${character.name} - Profile Image`}
              className="rounded-md"
            />
          </div>
          <div className="flex-grow">
            <p className="font-bold text-3xl border-b border-gray-300 pb-4 mb-4">
              {character.name}
            </p>
            <p>Status: {character.status}</p>
            <p>Type: {character.species}</p>
            <p>Location: {character.location?.name}</p>
          </div>
        </div>
      </div>
      <Link
        to={`/`}
        className="bg-blue-500 rounded-md px-4 py-2 text-white hover:bg-blue-400"
        data-testid="characters-list-link"
      >
        Back to list
      </Link>
    </>
  );
};

export default CharacterDetails;
