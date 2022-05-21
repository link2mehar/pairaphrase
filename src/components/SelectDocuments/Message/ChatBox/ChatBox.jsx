/* eslint-disable react/destructuring-assignment */
import styles from "./chatBox.module.scss";

export default function ChatBox(props) {
  return (
    <div className={` ${styles.chatBoxWrapper} ${styles[props.color]}`}>
      <div className={styles.msgWrap}>
        <div className={styles.nameDate}>
          <h4>{props.name}</h4>
          <span>{props.time}</span>
        </div>
        <div className={styles.message}>
          <p>{props.message}</p>
        </div>
      </div>
    </div>
  );
}
