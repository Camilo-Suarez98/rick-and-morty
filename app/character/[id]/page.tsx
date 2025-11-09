"use client";
import { useEffect, useState } from "react";
import { getCharacterById, getEpisodesByCharacterId } from "../../lib/api";
import { Character } from "../../types";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MoveLeft } from "lucide-react";
import { useFavorites } from "../../lib/hooks";
import { AddToFavoriteButton } from "@/app/components/AddToFavoriteButton";
import { StatusBadge } from "@/app/components/StatusBadge";
import { Episode } from "../../types";
import { groupEpisodesBySeason } from "@/app/lib/groupEpisodesBySeason";

export default function CharacterDetailPage() {
  const params = useParams();
  const [character, setCharacter] = useState<Character | null>(null);
  const { favorites, toggleFavorite } = useFavorites();
  const [episodesDetail, setEpisodesDetail] = useState<Episode | Episode[]>([]);
  const groupedEpisodes = groupEpisodesBySeason(episodesDetail);
  const seasons = Object.keys(groupedEpisodes).sort();

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const data = await getCharacterById(params.id as string);
        setCharacter(data);
      } catch (error) {
        console.error('Failed to fetch character', error);
      }
    };
    fetchCharacter();
  }, [params.id]);

  useEffect(() => {
    if (!character?.episode || character.episode.length === 0) return;

    const fetchEpisodes = async () => {
      try {
        const episodeIds = character.episode.map((url: string) => url.split('/').pop()).join(',');
        const episodesResponse = await getEpisodesByCharacterId(episodeIds);
        setEpisodesDetail(episodesResponse);
      } catch (error) {
        console.error('Failed to fetch episodes', error);
      }
    };
    fetchEpisodes();
  }, [character?.id, character?.episode]);
  console.log('episodes', episodesDetail);

  return (
    <div className="p-6 mx-auto max-w-7xl text-white">
      <div className="relative flex items-center justify-between gap-2 mb-6">
        <Link
          href="/"
          className="text-cyan-400 flex items-center gap-2"
        >
          <MoveLeft />
          Back to list
        </Link>
      </div>
      <div className="bg-linear-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden border border-slate-700/50">
        <div className="flex flex-col md:flex-row">
          {character && (
            <Image
              src={character?.image}
              alt={`Image of ${character?.name}`}
              width={192}
              height={192}
              className="w-full md:w-64 h-64 object-cover"
            />
          )}
          <div className="p-4 flex-1 space-y-4 md:p-8">
            <div className="relative flex items-center justify-between">
              <h1 className="text-4xl font-bold text-white">{character?.name}</h1>
              {character && (
                <AddToFavoriteButton
                  onToggleFavorite={toggleFavorite}
                  isFavorite={favorites.includes(character.id)}
                  character={character}
                  size={24}
                />
              )}
            </div>

            <div className="flex items-center gap-3">
              {character && (
                <>
                  <StatusBadge status={character.status} />
                  <span className="text-slate-500">•</span>
                  <p className="text-sm opacity-80">{character?.species}</p>
                  <span className="text-slate-500">•</span>
                  <p className="text-sm opacity-80">{character?.gender}</p>
                </>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div>
                <p className="text-sm text-slate-400">Origin</p>
                <p className="text-white font-medium">{character?.origin.name}</p>
              </div>
              <div>
                <p className="text-sm text-slate-400">Last known location</p>
                <p className="text-white font-medium">{character?.location.name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Episodes</h2>
        <div className="space-y-6">
          {seasons.map(season => (
            <div key={season}>
              <h3 className="text-lg font-semibold text-cyan-400 mb-3">Season {season.substring(1)}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {groupedEpisodes[season].map(episode => (
                  <div
                    key={episode.id}
                    className="bg-slate-900 p-4 rounded-lg border border-slate-700/50 hover:border-cyan-500/50 transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-white font-medium">{episode.name}</p>
                        <p className="text-sm text-slate-400">{episode.episode}</p>
                      </div>
                      <span className="text-xs text-slate-500">{episode.air_date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
