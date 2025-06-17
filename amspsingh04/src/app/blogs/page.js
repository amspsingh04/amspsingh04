import Link from 'next/link';
import blogs from './blogsData';

export default function BlogsLanding() {
  return (
    <div style={{ padding: '2rem', background: '#111', minHeight: '100vh', color: 'white' }}>
      <h1 style={{ textAlign: 'center' }}> My Blogs</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center' }}>
        {blogs.map((blog) => (
          <Link key={blog.id} href={`/blogs/${blog.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{
              width: '280px',
              padding: '1rem',
              background: '#1f1f1f',
              borderRadius: '8px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
            }}>
              <h3 style={{ color: 'gold' }}>{blog.title}</h3>
              <p><strong>Date:</strong> {blog.date}</p>
              <p><strong>Author:</strong> {blog.author}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
