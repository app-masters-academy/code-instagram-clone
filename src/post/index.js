import Comment from "./../comment";
import styles from "./styles.module.css";

const Post = (props) => {
  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <img src={props.imageUrl} className={styles.avatar} />
        <strong>{props.userName}</strong>
      </header>
      <img src={props.imageUrl} className={styles.image} />
      <p>{props.imageTitle}</p>
      <small>{props.imageDescription}</small>
      <footer className={styles.footer}>
        <Comment />
      </footer>
    </article>
  );
};

export default Post;
