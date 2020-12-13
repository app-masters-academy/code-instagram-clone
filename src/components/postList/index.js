import Post from "../post";
import styles from "./styles.module.css";

const PostList = (props) => {
  return (
    <main className={styles.wrapper}>
      <div className={styles.list}>
        {props.posts.map((item) => (
          <Post key={item.id} post={item}  />
        ))}
      </div>
    </main>
  );
};

export default PostList;
