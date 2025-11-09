import { Episode } from "../types";

export const groupEpisodesBySeason = (
  episodes: Episode[] | Episode,
): Record<string, Episode[]> => {
  const grouped: Record<string, Episode[]> = {};

  if (!Array.isArray(episodes)) {
    episodes = [episodes];
  }

  episodes?.forEach((episode) => {
    const match = episode.episode.match(/S(\d+)E(\d+)/);
    if (!match) return;

    const season = `S${match[1]}`;

    if (!grouped[season]) {
      grouped[season] = [];
    }

    grouped[season].push(episode);
  });

  Object.keys(grouped).forEach((season) => {
    grouped[season].sort((a, b) => {
      const aEpisodeNum = parseInt(a.episode.match(/E(\d+)/)?.[1] || "0");
      const bEpisodeNum = parseInt(b.episode.match(/E(\d+)/)?.[1] || "0");
      return aEpisodeNum - bEpisodeNum;
    });
  });

  return grouped;
};
