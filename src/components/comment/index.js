import { useState } from "react";
import styles from "./styles.module.css";
import classNames from "classnames";
import { API } from "../../api";

const Comment = (props) => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const handleComment = async () => {
    try {
      setLoading(true);
      const body = {
        text,
        post_id: props.postId,
      };
      const result = await API.post("/comments", body);
      if (result) {
        console.log(result.data);
        setText('');
        props.addNewComment(result.data)
      }
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return (
    <div className={styles.comment}>
      <input
        className={styles.input}
        type={"text"}
        placeholder="Comentar agora"
        value={text}
        disabled={loading}
        onChange={(event) => setText(event.target.value)}
      />
      <button
        className={classNames(styles.button, styles.disable)}
        onClick={handleComment}
        disabled={loading}
      >
        Enviar
      </button>
    </div>
  );
};

export default Comment;
