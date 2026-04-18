import Link from "next/link";
import { notFound } from "next/navigation";
import footballPosts from "@/data/footballPosts";
import MdxRemoteBodyLazy from "@/components/mdx/MdxRemoteBodyLazy";
import { serializeBlogMdx } from "@/lib/compileBlogMdx";
import styles from "../article.module.css";

export async function generateStaticParams() {
  return footballPosts.map((post) => ({ slug: post.slug }));
}

function formatDisplayDate(isoDate) {
  const d = new Date(`${isoDate}T12:00:00`);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function FootballPostPage({ params }) {
  const { slug } = await params;
  const post = footballPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  let serialized = null;
  if (post.mdxPath) {
    try {
      serialized = await serializeBlogMdx(post.mdxPath);
    } catch {
      serialized = null;
    }
  }

  return (
    <div className={styles.shell}>
      <div className={styles.inner}>
        <Link href="/football" className={styles.back}>
          ← Football analytics
        </Link>

        <div className={styles.meta}>
          <time className={styles.date} dateTime={post.date}>
            {formatDisplayDate(post.date)}
          </time>
          <div className={styles.badges}>
            <span className={styles.badge}>Analytics</span>
            <span className={`${styles.badge} ${styles.badgeMuted}`}>Football</span>
          </div>
        </div>

        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.author}>By {post.author}</p>

        {serialized?.compiledSource ? (
          <div className={styles.body}>
            <MdxRemoteBodyLazy
              compiledSource={serialized.compiledSource}
              scope={serialized.scope}
              frontmatter={serialized.frontmatter}
            />
          </div>
        ) : (
          <p>
            Could not load this post. Ensure{" "}
            <code>{post.mdxPath}</code> exists under{" "}
            <code>src/content/blogs/</code>.
          </p>
        )}
      </div>
    </div>
  );
}
