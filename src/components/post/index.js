import { useState } from "react";
import Comment from "../comment";
import LikeButton from "../likeButton";
import styles from "./styles.module.css";

const Post = (props) => {
  const [comments, setComments] = useState(props.post.comments);
  const [commentQuantity, setCommentQuantity] = useState(5);

  const addNewComment = (comment) => {
    const commentList = [...comments];
    commentList.push(comment);
    setComments(commentList);
  };

  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <img
          src={props.post.user.avatar}
          className={styles.avatar}
          alt={"avatar-" + props.post.title}
        />
        <strong>{props.post.user.name}</strong>
      </header>
      <img
        src={props.post.imageUrl}
        className={styles.image}
        alt={"post-image-" + props.post.title}
      />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <p>{props.post.title} </p>
        <LikeButton postId={props.post.id} likeCount={props.post.like} />
      </div>

      <small>{props.post.description}</small>
      <div style={{ padding: "10px" }}>
        {comments.slice(0, commentQuantity).map((comment) => {
          return (
            <p
              key={comment.id}
              style={{
                color: "#565656",
                fontSize: "10px",
                borderTopColor: "#AAAAAA",
                borderTopWidth: "1px",
                borderTopStyle: "solid",
                textAlign: "left",
              }}
            >
              {comment.text}
            </p>
          );
        })}
        {commentQuantity < comments.length && (
          <>
            <button onClick={() => setCommentQuantity(commentQuantity + 5)}>
              Mostrar mais
            </button>
            <p>
              Ainda tem {comments.length - commentQuantity} comentários não
              vistos
            </p>
          </>
        )}
      </div>
      <footer className={styles.footer}>
        <Comment postId={props.post.id} addNewComment={addNewComment} />
      </footer>
    </article>
  );
};

export default Post;
