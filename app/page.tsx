"use client";
import { getCharacters } from "./lib/api";
import { useEffect, useState } from "react";
import { Character } from "./types";
import { CharacterCard } from "./components/CharacterCard";
import { useRouter } from "next/navigation";
import { useFavorites } from "./lib/hooks";
import { Pagination } from "./components/Pagination";
import { useDebounce } from "./lib/hooks";
import { Filter } from "./components/Filters";

export default function Home() {
  const router = useRouter();
  const { favorites, toggleFavorite } = useFavorites();
  const [characters, setCharacters] = useState<Character[]>([]);
  const [filters, setFilters] = useState({
    status: '',
    gender: '',
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const debounceSearch = useDebounce(searchTerm, 300);

  useEffect(() => {
    const characters = async () => {
      const params = new URLSearchParams({
        page: currentPage.toString(),
        ...(debounceSearch && { name: debounceSearch }),
        ...(filters.status && { status: filters.status }),
        ...(filters.gender && { gender: filters.gender }),
      });
      const data = await getCharacters(params);
      setCharacters(data.results);
      setTotalPages(data.info.pages);
    };
    characters();
  }, [debounceSearch, filters, currentPage]);

  return (
    <div className="max-w-7xl mx-auto min-h-screen flex items-center justify-center font-sans">
      <main className="flex min-h-screen w-full flex-col items-center justify-between p-4">
        <Filter
          filters={filters}
          setFilters={setFilters}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {characters.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              isFavorite={favorites.includes(character.id)}
              onToggleFavorite={() => toggleFavorite(character.id)}
              onClick={() => { router.push(`/character/${character.id}`) }}
            />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </main>
    </div>
  );
};
