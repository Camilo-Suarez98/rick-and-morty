import { Heart } from "lucide-react";
import { Character } from "../types";

type AddToFavoriteButtonProps = {
  onToggleFavorite: (id: number) => void;
  isFavorite: boolean;
  character: Character;
  size?: number;
};

export const AddToFavoriteButton = ({
  onToggleFavorite,
  isFavorite,
  character,
  size = 18,
}: AddToFavoriteButtonProps) => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onToggleFavorite(character.id);
      }}
      className="absolute top-3 right-3 p-2 bg-slate-800 cursor-pointer backdrop-blur-sm rounded-full transition-colors hover:bg-cyan-500 hover:text-white"
      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
    >
      <Heart
        size={size}
        className={isFavorite ? "fill-red-500 text-red-500" : "text-white"}
      />
    </button>
  );
};
