import styles from './styles.module.css';
import classNames from 'classnames';


const Comment = () => {
  return (
    <div className={styles.comment}>
      <input className={styles.input} type={'text'} placeholder="Comentar agora" />
      <button className={classNames(styles.button, styles.disable)}>Enviar</button>
    </div>
  );
};

export default Comment;
