"use client";
import { useEffect } from "react";
import { CharacterCard } from "../components/CharacterCard";
import { useRouter } from "next/navigation";
import { useFavorites } from "../lib/hooks";
import { getFavoriteCharacters } from "../lib/api";
import { useState } from "react";
import { Character } from "../types";
import Loading from "./loading";
import Error from "./_error";

export default function Favorites() {
  const router = useRouter();
  const { favorites, toggleFavorite } = useFavorites();
  const [favoritesCharactersByUser, setFavoritesCharactersByUser] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchFavorites = async () => {
      if (favorites.length === 0) {
        setFavoritesCharactersByUser([]);
        setLoading(false);
        return;
      }
      try {
        const favoritesCharacters = await getFavoriteCharacters(favorites.join(","));
        setFavoritesCharactersByUser(Array.isArray(favoritesCharacters) ? favoritesCharacters : [favoritesCharacters]);
      } catch (error) {
        console.error("Error fetching favorite characters:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchFavorites();
  }, [favorites]);

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <div className="p-6 mx-auto max-w-7xl text-white">
      <h1 className="text-4xl font-bold mb-4 text-center">Favorite Characters</h1>
      {favoritesCharactersByUser.length === 0 && (
        <div className="mt-8 flex items-center justify-center">
          <p className="text-center text-2xl text-slate-500">No favorite characters found</p>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {favoritesCharactersByUser?.map((character: Character) => (
          <CharacterCard
            key={character.id}
            character={character}
            isFavorite={favorites.includes(character.id)}
            onToggleFavorite={() => toggleFavorite(character.id)}
            onClick={() => { router.push(`/character/${character.id}`) }}
          />
        ))}
      </div>
    </div>
  );
}