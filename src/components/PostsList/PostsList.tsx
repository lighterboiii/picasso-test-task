import React from 'react';
import { useGetPostsQuery } from '../api/api.ts';
import { Link } from 'react-router-dom';
import styles from './PostsList.module.css';

const PostsList: React.FC = () => {
  const { data: posts } = useGetPostsQuery('postsApi');
  console.log(posts);
  if (!posts) {
    return <div>Загрузка постов...</div>
  }

  return (
    <div>
      <h1 className={styles.title}>Picasso Test Task</h1>
      <ul className={styles.postsList}>
        {posts?.map((post) =>
          <li className={styles.post} key={post.id}>
            <h2 className={styles.postTitle}>{post.title}</h2>
            <div className={styles.postBody}>
              <p className={styles.number}>{post.id}</p>
              <div className={styles.text}>
                {post.body.slice(0, 100)}...
                <Link to={`/post/${post.id}`}>Просмотр</Link>
              </div>
            </div>
          </li>
        )}
      </ul>
    </div>

  );
};

export default PostsList;
