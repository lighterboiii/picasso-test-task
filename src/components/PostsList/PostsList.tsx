import React from 'react';
import { useGetPostsQuery } from '../api/api.ts';
import { Link } from 'react-router-dom';

const PostsList: React.FC = () => {
  const { data: posts } = useGetPostsQuery('postsApi');
  console.log(posts);
  if (!posts) {
    return <div>Загрузка постов...</div>
  }

  return (
    <ul>
      {posts?.map((post) =>
        <li key={post.id}>
          {post.id} {post.title} {post.body.slice(0, 30)}...
          <Link to={`/post/${post.id}`}>Просмотр</Link>
        </li>
      )}
    </ul>
  );
};

export default PostsList;
