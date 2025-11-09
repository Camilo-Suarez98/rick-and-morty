"use client";
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";

export const Header = () => {
  const router = useRouter();

  return (
    <nav className="bg-slate-900/50 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <h1 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500 md:mb-0">
            Rick & Morty Explorer
          </h1>

          <div className="flex gap-2">
            <button
              onClick={() => router.push("/")}
              className="px-4 py-2 rounded-lg cursor-pointer transition-colors bg-slate-800 text-slate-300 hover:bg-cyan-500 hover:text-white"
            >
              Characters
            </button>
            <button
              onClick={() => router.push("/favorites")}
              className="px-4 py-2 rounded-lg cursor-pointer transition-colors flex items-center gap-2 bg-slate-800 text-slate-300 hover:bg-cyan-500 hover:text-white"
            >
              <Heart size={18} />
              Favorites
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
