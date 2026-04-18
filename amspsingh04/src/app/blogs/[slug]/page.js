import Link from "next/link";
import blogs from "../blogsData";
import MdxRemoteBodyLazy from "@/components/mdx/MdxRemoteBodyLazy";
import { serializeBlogMdx } from "@/lib/compileBlogMdx";
import styles from "./article.module.css";

export async function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

function formatDisplayDate(isoDate) {
  const d = new Date(`${isoDate}T12:00:00`);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogDetail({ params }) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className={styles.shell}>
        <div className={styles.inner}>404 — Blog not found</div>
      </div>
    );
  }

  let serialized = null;
  if (blog.mdxPath) {
    try {
      serialized = await serializeBlogMdx(blog.mdxPath);
    } catch {
      serialized = null;
    }
  }

  return (
    <div className={styles.shell}>
      <div className={styles.inner}>
        <Link href="/blogs" className={styles.back}>
          ← All posts
        </Link>

        <div className={styles.meta}>
          <time className={styles.date} dateTime={blog.date}>
            {formatDisplayDate(blog.date)}
          </time>
          <div className={styles.badges}>
            {blog.isPDF ? (
              <span className={`${styles.badge} ${styles.badgePdf}`}>PDF</span>
            ) : (
              <span className={styles.badge}>Article</span>
            )}
          </div>
        </div>

        <h1 className={styles.title}>{blog.title}</h1>
        <p className={styles.author}>By {blog.author}</p>

        {serialized?.compiledSource ? (
          <div className={styles.body}>
            <MdxRemoteBodyLazy
              compiledSource={serialized.compiledSource}
              scope={serialized.scope}
              frontmatter={serialized.frontmatter}
            />
          </div>
        ) : blog.mdxPath ? (
          <p>Could not load this post. Check that the MDX file exists.</p>
        ) : blog.isPDF ? (
          <iframe
            className={styles.pdfFrame}
            src={blog.pdfSrc}
            title={blog.title}
          />
        ) : (
          <div className={`${styles.body} ${styles.plainBody}`}>
            <p>{blog.content}</p>
          </div>
        )}
      </div>
    </div>
  );
}
