"use client";
import { useEffect, useState } from "react";
import { getCharacterById } from "../../lib/api";
import { Character } from "../../types";
import { useParams } from "next/navigation";
import Image from "next/image";

export default function CharacterDetailPage() {
  const params = useParams();
  const [data, setData] = useState<Character | null>(null);

  useEffect(() => {
    const character = async () => {
      const data = await getCharacterById(params.id as string);
      setData(data);
    };
    character();
  }, [params.id]);

  return (
    <div className="p-6 max-w-3xl mx-auto text-white">
      <div className="flex flex-col md:flex-row gap-6">
        <Image
          src={data?.image || ""}
          alt={`Image of ${data?.name}`}
          className="rounded-2xl w-48 h-48 object-cover"
        />
        <div>
          <h1 className="text-3xl font-bold mb-2">{data?.name}</h1>
          <p className="text-sm opacity-80">{data?.species}</p>
          <p className="text-sm opacity-80">Status: {data?.status}</p>
          <p className="text-sm opacity-80">Origin: {data?.origin.name}</p>
          <p className="text-sm opacity-80">Location: {data?.location.name}</p>
        </div>
      </div>

      {/* <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Episodes</h2>
        {Object.entries(grouped).map(([season, eps]) => (
          <div key={season} className="mb-4">
            <h3 className="text-xl font-bold mb-2">{season}</h3>
            <ul className="space-y-1">
              {eps.map((ep) => (
                <li key={ep.id} className="border-b border-gray-700 pb-1">
                  {ep.episode} — {ep.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div> */}
    </div>
  );
}
