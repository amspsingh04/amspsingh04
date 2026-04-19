/**
 * Published football analytics posts (MDX under src/content/blogs/football/).
 * Oldest-first on /football when you add entries here.
 *
 * To add a post: duplicate _templates/GENERAL-POST.mdx → football/<slug>.mdx,
 * then append an object below (see footballPosts.EXAMPLE.js).
 */
const footballPosts = [
  {
    id: 1,
    slug: "statsbomb-open-data-intro",
    title:
      "Football data analytics — everything you can do with StatsBomb data, and other datasets",
    date: "2026-04-20",
    author: "Shourya Pratap Singh",
    summary:
      "Question-driven match retelling with on-ball and off-ball context; what we can ask of open data, starting from El Clásico 2017 at the Bernabéu—an updating series opener.",
    mdxPath: "football/statsbomb-open-data-intro.mdx",
  },
  {
    id: 2,
    slug: "arg_vs_sau",
    title: "Data analytics view on Argentina 1-2 Saudi Arabia, World Cup 2022",
    date: "2026-04-24",
    author: "Shourya Pratap Singh",
    summary:
      "Progression, defensive line, and shot quality around the upset—structured for reproducible breakdowns.",
    mdxPath: "football/arg_vs_sau.mdx",
  },
  {
    id: 3,
    slug: "fcb-5-0-rma-2010",
    title: "Data analytics view on FC Barcelona 5–0 Real Madrid, November 2010",
    date: "2026-04-27",
    author: "Shourya Pratap Singh",
    summary:
      "Threat, possession rhythm, and shot quality through open event data—revisiting one of the defining Clásicos of the Guardiola era.",
    mdxPath: "football/fcb-5-0-rma-2010.mdx",
  },
  {
    id: 4,
    slug: "striker-fcb-2026",
    title: "Which striker should FC Barcelona sign in 2026?",
    date: "2026-05-04",
    author: "Shourya Pratap Singh",
    summary:
      "Scouting-style lens on finishing, movement, and fit with Barcelona’s patterns—built for reproducible comparisons.",
    mdxPath: "football/striker-fcb-2026.mdx",
  },
  {
    id: 5,
    slug: "rma-three-peat",
    title: "Data analytics view on Champions League Finals 2016-17-18: How RMA changed over the course of their three peat",
    date: "2026-05-09",
    author: "Shourya Pratap Singh",
    summary:
      "Structuring analysis of the 3 UCL finals: control, transitions, and how the stats back the eye test for that Madrid side.",
    mdxPath: "football/rma-three-peat.mdx",
  },
  {
    id: 6,
    slug: "euros-2021-2024",
    title: "Euro 2021 vs Euro 2024 — analytics notes across tournaments",
    date: "2026-05-19",
    author: "Shourya Pratap Singh",
    summary:
      "Styles of play, chance creation, and defensive pressure across two editions—framed for charts, code, and takeaways.",
    mdxPath: "football/euros-2021-2024.mdx",
  },
  {
    id: 7,
    slug: "leicester-2015-pl",
    title: "Data analytics view on Leicester City’s 2015–16 Premier League title",
    date: "2026-05-26",
    author: "Shourya Pratap Singh",
    summary:
      "Shot profiles, defensive actions, and luck vs skill in the outlier season that broke the league’s hierarchy.",
    mdxPath: "football/leicester-2015-pl.mdx",
  },
  {
    id: 8,
    slug: "soccer-bowl-77",
    title: "Soccer Bowl ’77 — a data-shaped look at Pele's last game",
    date: "2026-06-02",
    author: "Shourya Pratap Singh",
    summary:
      "What we can still measure from the era’s records: tempo, scoring sequences, and context for the Cosmos vs Seattle showdown.",
    mdxPath: "football/soccer-bowl-77.mdx",
  },
  {
    id: 9,
    slug: "fra-2018-arg-2022",
    title: "France 2018 vs Argentina 2022 — contrasting World Cup winners through data",
    date: "2026-06-15",
    author: "Shourya Pratap Singh",
    summary:
      "How two champion sides built control and chance quality differently—measured with comparable event-level frameworks.",
    mdxPath: "football/fra-2018-arg-2022.mdx",
  },
  
  
  
  
];

export default footballPosts;
