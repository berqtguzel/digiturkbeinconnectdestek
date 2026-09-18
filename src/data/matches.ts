// Design fixtures from the supplied reference. Replace with a verified feed before publishing.
export const matches = [
  {
    id: "ts-gs",
    home: { name: "Trabzonspor", logo: "/teams/trabzon.png" },
    away: { name: "Galatasaray", logo: "/teams/galatasaray.png" },
    kickoff: "2026-09-19T20:00:00+03:00",
    featured: true,
  },
  {
    id: "fb-eyup",
    home: { name: "Fenerbahçe", logo: "/teams/fenerbahce.png" },
    away: { name: "Eyüpspor", logo: "/teams/eyup.png" },
    kickoff: "2026-09-20T17:00:00+03:00",
    featured: false,
  },
  {
    id: "amed-bjk",
    home: { name: "Amedspor", logo: "/teams/amed.png" },
    away: { name: "Beşiktaş", logo: "/teams/besiktas.png" },
    kickoff: "2026-09-20T20:00:00+03:00",
    featured: false,
  },
];

export type Match = (typeof matches)[number];
