import Link from "next/link";
import blogs from "./blogsData";
import styles from "./page.module.css";

function formatDisplayDate(isoDate) {
  const d = new Date(`${isoDate}T12:00:00`);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function groupByYear(sortedBlogs) {
  const map = new Map();
  for (const blog of sortedBlogs) {
    const year = blog.date.slice(0, 4);
    if (!map.has(year)) map.set(year, []);
    map.get(year).push(blog);
  }
  return [...map.entries()].sort((a, b) => Number(b[0]) - Number(a[0]));
}

function ctaLabel(blog) {
  if (blog.isPDF) return "Open document →";
  if (blog.mdxPath) return "Read post →";
  return "Read post →";
}

export default function BlogsLanding() {
  const sorted = [...blogs].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  const byYear = groupByYear(sorted);

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h1 className={styles.title}>Writing &amp; notes</h1>
          <p className={styles.subtitle}>
            Essays and PDFs, newest first. Football analytics lives on{" "}
            <Link href="/football" className={styles.inlineLink}>
              /football
            </Link>
            .
          </p>
        </header>

        <div className={styles.timeline}>
          {byYear.map(([year, yearBlogs]) => (
            <section
              key={year}
              className={styles.yearBlock}
              aria-labelledby={`year-${year}`}
            >
              <div className={styles.yearRail}>
                <h2 id={`year-${year}`} className={styles.yearLabel}>
                  {year}
                </h2>
              </div>
              <div className={styles.tileGrid}>
                {yearBlogs.map((blog) => (
                  <Link
                    key={blog.id}
                    href={`/blogs/${blog.slug}`}
                    className={styles.cardLink}
                  >
                    <article className={styles.card}>
                      <div className={styles.cardMeta}>
                        <time className={styles.date} dateTime={blog.date}>
                          {formatDisplayDate(blog.date)}
                        </time>
                        {blog.isPDF ? (
                          <span className={`${styles.badge} ${styles.badgePdf}`}>
                            PDF
                          </span>
                        ) : (
                          <span className={styles.badge}>Article</span>
                        )}
                      </div>
                      <h3 className={styles.cardTitle}>{blog.title}</h3>
                      {blog.summary ? (
                        <p className={styles.cardSummary}>{blog.summary}</p>
                      ) : null}
                      <div className={styles.cardFooter}>
                        <span className={styles.authorLabel}>By</span>
                        {blog.author}
                        <div className={styles.cta}>{ctaLabel(blog)}</div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
