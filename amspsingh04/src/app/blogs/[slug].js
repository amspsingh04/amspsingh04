// pages/blogs/[slug].js
import { useRouter } from 'next/router';
import blogs from './blogsData';

export default function BlogDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return <p>404 - Blog not found</p>;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{blog.title}</h1>
      <p><strong>Date:</strong> {blog.date}</p>
      <p><strong>Author:</strong> {blog.author}</p>
      <div style={{ whiteSpace: 'pre-wrap' }}>
        {blog.isPDF ? (
          <iframe
            src={blog.pdfSrc}
            width="100%"
            height="600px"
            title={blog.title}
          />
        ) : (
          blog.content
        )}
      </div>
    </div>
  );
}
