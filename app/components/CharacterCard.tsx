import { Character } from "../types";
import Image from "next/image";
import { StatusBadge } from "./StatusBadge";
import { Heart } from "lucide-react";

type CharacterCardProps = {
  character: Character;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
  onClick: () => void;
};

export const CharacterCard = ({ character, isFavorite, onToggleFavorite, onClick }: CharacterCardProps) => {
  return (
    <div
      className="bg-linear-to-br from-slate-800 to-slate-900 rounded-xl cursor-pointer overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
      onClick={onClick}
      role="article"
      aria-label={`Character ${character.name}`}
    >
      <div className="relative overflow-hidden">
        <Image
          src={character.image}
          alt={`Image of ${character.name}`}
          className="w-full h-48 object-fit group-hover:scale-110 transition-transform duration-300"
          width={200}
          height={200}
        />
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(character.id);
          }}
          className="absolute top-3 right-3 p-2 bg-slate-900/80 cursor-pointer backdrop-blur-sm rounded-full hover:bg-slate-900 transition-colors"
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart
            size={18}
            className={isFavorite ? 'fill-red-500 text-red-500' : 'text-white'}
          />
        </button>
      </div>

      <div className="p-4 space-y-3">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold text-white truncate mb-0">
            {character.name}
          </h3>
          <span className="text-base font-semibold text-slate-300">{character.gender}</span>
        </div>

        <div className="flex items-center gap-2">
          <StatusBadge status={character.status} />
          <p className="text-base text-slate-400">{character.species}</p>
        </div>

        <div className="text-sm">
          <p className="truncate">Origin: {character.origin.name}</p>
        </div>
        <div className="text-sm">
          <p className="truncate">Location: {character.location.name}</p>
        </div>
      </div>
    </div>
  );
};