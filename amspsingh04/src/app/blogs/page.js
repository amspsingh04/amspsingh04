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
  if (blog.mdxPath) return "Read analysis →";
  return "Read post →";
}

function YearTimeline({ byYear }) {
  return (
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
                    {blog.category === "football" ? (
                      <span
                        className={`${styles.badge} ${styles.badgeFootball}`}
                      >
                        Football
                      </span>
                    ) : null}
                    {blog.isPDF ? (
                      <span className={`${styles.badge} ${styles.badgePdf}`}>
                        PDF
                      </span>
                    ) : (
                      <span className={styles.badge}>
                        {blog.category === "football"
                          ? "Analytics"
                          : "Article"}
                      </span>
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
  );
}

export default function BlogsLanding() {
  const football = blogs.filter((b) => b.category === "football");
  const writing = blogs.filter(
    (b) => !b.category || b.category === "writing"
  );

  const footballByYear = groupByYear(
    [...football].sort((a, b) => new Date(b.date) - new Date(a.date))
  );
  const writingByYear = groupByYear(
    [...writing].sort((a, b) => new Date(b.date) - new Date(a.date))
  );

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h1 className={styles.title}>Writing &amp; notes</h1>
          <p className={styles.subtitle}>
            Essays, PDFs, and football analytics—newest first within each
            section.
          </p>
        </header>

        {football.length > 0 ? (
          <section
            className={styles.section}
            aria-labelledby="football-heading"
          >
            <h2 id="football-heading" className={styles.sectionTitle}>
              Football analytics
            </h2>
            <p className={styles.sectionSubtitle}>
              Data-driven match notes: code snippets, outputs, charts, and
              tables via MDX (
              <code className={styles.inlineCode}>src/content/blogs/football/</code>
              ).
            </p>
            <YearTimeline byYear={footballByYear} />
          </section>
        ) : null}

        {writing.length > 0 ? (
          <section
            className={styles.section}
            aria-labelledby="writing-heading"
          >
            <h2 id="writing-heading" className={styles.sectionTitle}>
              Writing &amp; PDFs
            </h2>
            <p className={styles.sectionSubtitle}>
              Long-form posts and embedded documents.
            </p>
            <YearTimeline byYear={writingByYear} />
          </section>
        ) : null}
      </div>
    </div>
  );
}
