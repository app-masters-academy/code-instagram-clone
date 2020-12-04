import Post from '../post';
import styles from './styles.module.css';

const PostList = (props) => {
  return (
    <main className={styles.wrapper}>
      <div className={styles.list}>
        {props.posts.map((post) => (
          <Post
            userName={post.userName}
            imageUrl={post.imageUrl}
            imageDescription={post.imageDescription}
          />
        ))}
      </div>
    </main>
  );
};

export default PostList;
