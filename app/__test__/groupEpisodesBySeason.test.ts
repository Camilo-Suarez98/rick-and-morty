import { groupEpisodesBySeason } from "../lib/groupEpisodesBySeason";
import { Episode } from "../types";

describe("groupEpisodesBySeason", () => {
  it("agrupa y ordena los episodios correctamente", () => {
    const episodes: Episode[] = [
      { id: 1, name: "Episode A", episode: "S01E01", air_date: "December 2, 2013" },
      { id: 2, name: "Episode B", episode: "S01E02", air_date: "December 9, 2013" },
      { id: 3, name: "Episode C", episode: "S02E01", air_date: "December 16, 2014" },
    ];

    const result = groupEpisodesBySeason(episodes);

    expect(Object.keys(result)).toEqual(["S01", "S02"]);
    expect(result["S01"].map((e) => e.episode)).toEqual(["S01E01", "S01E02"]);
    expect(result["S02"].map((e) => e.episode)).toEqual(["S02E01"]);
  });
});