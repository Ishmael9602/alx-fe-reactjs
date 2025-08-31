import React from 'react';
import { useQuery } from 'react-query';

const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) throw new Error('Network response was not ok');
  return res.json();
};

function PostsComponent() {
  const { data, error, isLoading } = useQuery('posts', fetchPosts);

  if (isLoading) return <div>Loading posts...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      {data.map(post => (
        <div key={post.id} className="p-4 border rounded shadow hover:shadow-lg transition">
          <h2 className="font-bold text-lg mb-2">{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default PostsComponent;
