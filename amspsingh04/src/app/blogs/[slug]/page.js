import blogs from '../blogsData';

export async function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export default function BlogDetail({ params }) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    return <div style={{ padding: '2rem', color: 'white' }}>404 - Blog not found</div>;
  }

  return (
    <div style={{ padding: '2rem', background: '#111', minHeight: '100vh', color: 'white' }}>
      <h1 style={{ color: 'gold' }}>{blog.title}</h1>
      <p><strong>Date:</strong> {blog.date}</p>
      <p><strong>Author:</strong> {blog.author}</p>
      <div style={{ marginTop: '1.5rem' }}>
        {blog.isPDF ? (
          <iframe
            src={blog.pdfSrc}
            title={blog.title}
            width="100%"
            height="600px"
            style={{ border: '1px solid #444', borderRadius: '6px' }}
          />
        ) : (
          <p style={{ whiteSpace: 'pre-wrap' }}>{blog.content}</p>
        )}
      </div>
    </div>
  );
}
