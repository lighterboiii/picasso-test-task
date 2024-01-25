import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useGetPostByIdQuery } from '../api/api.ts';
import styles from './PostDetails.module.css';

const PostDetail: React.FC = () => {
  const { id: postId } = useParams();
  const { data: post } = useGetPostByIdQuery(postId);

  if (!post) {
    return <div>Загрузка данных...</div>;
  }

  return (
    <div className={styles.post}>
      <h2 className={styles.title}>{post.title}</h2>
      <p className={styles.text}>{post.body}</p>
      <Link className={styles.link} to="/">Назад</Link>
    </div>
  );
};

export default PostDetail;
