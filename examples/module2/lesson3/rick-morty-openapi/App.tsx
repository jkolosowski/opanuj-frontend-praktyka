import { useEffect, useState } from 'react';
import { DefaultApi, type Character, type CharacterListResponse } from './api';

const App = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const api = new DefaultApi();
    api.getCharacters().then((response: CharacterListResponse) => {
      setCharacters(response.results ?? []);
    });
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold my-4">Articles</h1>
      <ul className="space-y-4">
        {characters.map((character) => (
          <li key={character.id} className="bg-white p-4 rounded-lg shadow-md">
            {character.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
