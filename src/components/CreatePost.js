import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // We'll add the API call to create post later
      navigate('/');
    } catch (err) {
      setError('Failed to create post');
    }
  };

  return (
    <div className="create-post">
      <h1>Create New Post</h1>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            rows="10"
          />
        </div>
        <button type="submit" className="submit-btn">Create Post</button>
      </form>
    </div>
  );
}

export default CreatePost; 