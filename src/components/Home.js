import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get('/posts');
        setPosts(response.data);
      } catch (err) {
        setError('Failed to fetch posts');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="home">
      <h1>Latest Posts</h1>
      <div className="posts-grid">
        {posts.map(post => (
          <div key={post._id} className="post-card">
            {post.image && (
              <img src={`http://localhost:5000${post.image}`} alt={post.title} className="post-image" />
            )}
            <div className="post-card-content">
              <h2>{post.title}</h2>
              <p>{post.content.substring(0, 150)}...</p>
              <div className="post-meta">
                <span className="post-author">By {post.author.username}</span>
                <span className="post-date">{new Date(post.createdAt).toLocaleDateString()}</span>
              </div>
              <Link to={`/post/${post._id}`} className="read-more">Read More →</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home; 