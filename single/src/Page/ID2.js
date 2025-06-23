
import React, { useState}from 'react'

export default function ID2() {
  const [number, setNumber] = useState('');
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!number || isNaN(number)) {
      alert('Please enter a valid number.');
      return;
    }

    const url = `https://jsonplaceholder.typicode.com/posts/${number}`;
    

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Post not found');
      }
      const data = await response.json();
      setPost(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setPost(null);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Search Post by Number</h2>
      <input
        type="text"
        placeholder="Enter post number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <div style={{ marginTop: '20px' }}>
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        {post && (
          <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <p><strong>Post ID:</strong> {post.id}</p>
            <p><strong>User ID:</strong> {post.userId}</p>
          </div>
        )}
      </div>
    </div>
  );
}

