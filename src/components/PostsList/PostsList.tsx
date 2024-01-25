import React, { useEffect, useState } from 'react';
import { useGetPostsQuery } from '../api/api.ts';
import { Link } from 'react-router-dom';
import styles from './PostsList.module.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from '../Loader/Loader.tsx';
import { TPost } from '../../utils/types/posts.ts';

const PostsList: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const { data: posts, refetch } = useGetPostsQuery('posts');

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  }

  useEffect(() => {
    refetch();
  }, [page, refetch]);

  if (!posts) {
    return <Loader text='Загрузка постов...' />
  }

  const renderedPosts = posts.slice(0, page * 2);

  return (
    <InfiniteScroll
      dataLength={renderedPosts.length}
      next={loadMore}
      hasMore={renderedPosts.length < posts.length}
      loader={<h4>Loading...</h4>}
    >
      <>
        <ul className={styles.postsList}>
          {renderedPosts?.map((post: TPost) =>
            <li className={styles.post} key={post.id}>
              <h2 className={styles.postTitle}>{post.title}</h2>
              <div className={styles.postBody}>
                <p className={styles.number}>{post.id}</p>
                <div className={styles.text}>
                  {post.body.slice(0, 100)}...
                  <Link className={styles.link} to={`/post/${post.id}`}>Просмотр</Link>
                </div>
              </div>
            </li>
          )}
        </ul>
      </>
    </InfiniteScroll>
  );
};

export default PostsList;
