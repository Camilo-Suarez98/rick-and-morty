"use client";
import { getCharacters } from "./lib/api";
import { useEffect, useState } from "react";
import { Character } from "./types";
import { CharacterCard } from "./components/CharacterCard";
import { useRouter } from "next/navigation";

export default function Home() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const characters = async () => {
      const data = await getCharacters("?page=1");
      setCharacters(data.results);
    };
    characters();
  }, []);

  const onToggleFavorite = (id: number) => {
    setIsFavorite(!isFavorite);
    const favoriteCharacters = localStorage.getItem("favoriteCharacters");
    if (favoriteCharacters) {
      const favoriteCharactersArray = JSON.parse(favoriteCharacters);
      if (favoriteCharactersArray.includes(id)) {
        localStorage.setItem("favoriteCharacters", JSON.stringify(favoriteCharactersArray.filter((item: number) => item !== id)));
      } else {
        localStorage.setItem("favoriteCharacters", JSON.stringify([...favoriteCharactersArray, id]));
      }
    } else {
      localStorage.setItem("favoriteCharacters", JSON.stringify([id]));
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col items-center justify-between p-8 bg-white dark:bg-black">
        <h1 className="text-3xl font-bold text-transparent mb-8 bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">Rick and Morty</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {characters.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              isFavorite={isFavorite}
              onToggleFavorite={() => onToggleFavorite(character.id)}
              onClick={() => { router.push(`/character/${character.id}`) }}
            />
          ))}
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={() => getCharacters("?page=2")}>Next</button>
      </main>
    </div>
  );
};
