import { ApiResponse, Character } from "../types";

const API_BASE_URL = "https://rickandmortyapi.com/api";

export const getCharacters = async (params?: string): Promise<ApiResponse<Character>> => {
  const response = await fetch(`${API_BASE_URL}/character/${params}`,
    {
      next: { revalidate: 3600 },
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch characters");
  }
  return response.json();
};

export const getCharacterById = async (id: string): Promise<Character> => {
  const response = await fetch(`${API_BASE_URL}/character/${id}`,
    {
      next: { revalidate: 3600 },
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch character");
  }
  return response.json();
};
