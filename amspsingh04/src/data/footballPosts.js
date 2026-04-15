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
];

export default footballPosts;
