import Link from "next/link";
import footballPosts from "@/data/footballPosts";
import styles from "./page.module.css";

function formatDisplayDate(isoDate) {
  const d = new Date(`${isoDate}T12:00:00`);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/** Oldest post first, then group by calendar year (years ascending). */
function groupByYearOldestFirst(posts) {
  const sorted = [...posts].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );
  const map = new Map();
  for (const post of sorted) {
    const year = post.date.slice(0, 4);
    if (!map.has(year)) map.set(year, []);
    map.get(year).push(post);
  }
  return [...map.entries()].sort((a, b) => Number(a[0]) - Number(b[0]));
}

export default function FootballPage() {
  const byYear = groupByYearOldestFirst(footballPosts);
  const hasPosts = footballPosts.length > 0;

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h1 className={styles.title}>Football analytics</h1>
          <p className={styles.subtitle}>
            Match and data notes in MDX—code, outputs, figures, and tables.
            Nothing is published here until you register posts in{" "}
            <code className={styles.path}>src/data/footballPosts.js</code>.
          </p>
          <p className={styles.oldestNote}>
            When posts exist, they are listed <strong>oldest first</strong>{" "}
            (read like a running log).
          </p>
        </header>

        <div className={styles.templatePanel}>
          <h2>Reusable MDX template</h2>
          <p>
            One general scaffold lives at{" "}
            <code className={styles.path}>
              src/content/blogs/football/_templates/GENERAL-POST.mdx
            </code>
            . Duplicate it to a new file under{" "}
            <code className={styles.path}>football/</code> (e.g.{" "}
            <code className={styles.path}>football/my-match.mdx</code>) for each
            post. The <code className={styles.path}>_templates/</code> folder is{" "}
            <strong>not</strong> routed).
          </p>
          <ul>
            <li>
              <code className={styles.path}>HOW_TO_PUBLISH.txt</code> — step list
            </li>
            <li>
              <code className={styles.path}>src/data/footballPosts.EXAMPLE.js</code>{" "}
              — sample metadata to paste into{" "}
              <code className={styles.path}>footballPosts.js</code>
            </li>
          </ul>
        </div>

        {!hasPosts ? (
          <p className={styles.emptyState}>
            No published football posts yet. When you duplicate{" "}
            <code className={styles.path}>GENERAL-POST.mdx</code> into{" "}
            <code className={styles.path}>football/*.mdx</code> and add rows to{" "}
            <code className={styles.path}>footballPosts.js</code>, entries will
            show here.
          </p>
        ) : (
          <div className={styles.timeline}>
            {byYear.map(([year, posts]) => (
              <section key={year} className={styles.yearRow}>
                <div className={styles.yearLabel}>{year}</div>
                <div className={styles.postList}>
                  {posts.map((post) => (
                    <Link
                      key={post.id}
                      href={`/football/${post.slug}`}
                      className={styles.postLink}
                    >
                      <time
                        className={styles.postDate}
                        dateTime={post.date}
                      >
                        {formatDisplayDate(post.date)}
                      </time>
                      <h2 className={styles.postTitle}>{post.title}</h2>
                      {post.summary ? (
                        <p className={styles.postSummary}>{post.summary}</p>
                      ) : null}
                      <div className={styles.postCta}>Read analysis →</div>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}

        <Link href="/blogs" className={styles.linkBlogs}>
          ← Writing &amp; PDFs (blogs)
        </Link>
      </div>
    </div>
  );
}
