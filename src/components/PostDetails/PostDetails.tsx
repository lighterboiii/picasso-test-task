import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useGetPostByIdQuery } from '../api/api.ts';
import styles from './PostDetails.module.css';

const PostDetail: React.FC = () => {
  const { id: postId } = useParams();
  const { data: post } = useGetPostByIdQuery(postId);
  console.log(post);
  if (!post) {
    return <div>Загрузка данных...</div>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link to="/">Назад</Link>
    </div>
  );
};

export default PostDetail;
