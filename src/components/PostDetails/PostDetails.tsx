import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetPostByIdQuery } from '../api/api.ts';
import styles from './PostDetails.module.css';
import Button from '../../ui/button/Button.tsx';
import Loader from '../Loader/Loader.tsx';

const PostDetails: React.FC = () => {
  const navigate = useNavigate();
  const { id: postId } = useParams();
  const { data: post } = useGetPostByIdQuery(postId);

  if (!post) {
   return <Loader text='Загрузка данных...' />
  }

  const handleButtonClick = () => {
    navigate(-1);
  }

  return (
    <div className={styles.post}>
      <h2 className={styles.title}>{post.title}</h2>
      <p className={styles.text}>{post.body}</p>
      <Button onClick={handleButtonClick}>Назад</Button>
    </div>
  );
};

export default PostDetails;
