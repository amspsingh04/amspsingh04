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
    (a, b) => new Date(a.date) - new Date(a.date)
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
        <h1 className={styles.visuallyHidden}>Football analytics</h1>

        {!hasPosts ? (
          <p className={styles.emptyState}>No posts yet.</p>
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
                      <div className={styles.postCta}>Read →</div>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}

        <Link href="/blogs" className={styles.linkBlogs}>
          ← Writing &amp; (blogs)
        </Link>
      </div>
    </div>
  );
}
