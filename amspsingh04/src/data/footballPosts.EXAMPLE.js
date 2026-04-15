/**
 * NOT imported by the app — reference only.
 * When ready to go live: copy rows into footballPosts.js default export.
 * For each row, duplicate _templates/GENERAL-POST.mdx → football/<slug>.mdx and edit.
 */

// Each mdxPath file = a copy of _templates/GENERAL-POST.mdx, edited for that post.
const exampleFootballPosts = [
  {
    id: 1,
    slug: "football-statsbomb-open-data",
    title: "Data analytics in football using StatsBomb open data",
    date: "2026-04-20",
    author: "Shourya Pratap Singh",
    summary:
      "How to start a reproducible analytics workflow with open event data: load events, inspect outputs, and reserve space for charts and tables.",
    mdxPath: "football/statsbomb-open-data.mdx",
  },
  {
    id: 2,
    slug: "football-argentina-saudi-2022",
    title: "A data analytics view on Argentina vs Saudi Arabia, World Cup 2022",
    date: "2026-04-24",
    author: "Shourya Pratap Singh",
    summary:
      "Framing the famous upset with progression, shot quality, and defensive pressure—structured for code, outputs, and visuals.",
    mdxPath: "football/argentina-saudi-2022.mdx",
  },
];

export default exampleFootballPosts;
