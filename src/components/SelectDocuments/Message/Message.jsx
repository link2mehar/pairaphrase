import { MdOutlineClose } from "react-icons/md";
import ChatBox from "./ChatBox/ChatBox";
import styles from "./message.module.scss";

const Chats = [
  {
    name: "M Humza Awan",
    time: "Apr 21, 2022 2:29 AM",
    message: "Hello",
    color: "orange"
  },
  {
    name: "Shahryar Asif",
    time: "Apr 21, 2022 2:29 AM",
    message: "Hello, how are you?",
    color: "blue"
  },
  {
    name: "John Wick",
    time: "Apr 21, 2022 2:29AM",
    message: "Hello, Where are you?",
    color: "blue"
  },
  {
    name: "Iron Man",
    time: "Apr 21, 2022 2:29 AM",
    message: "I am Iron man",
    color: "orange"
  },
  {
    name: "Thanos",
    time: "Apr 21, 2022 2:29 AM",
    message: "You Should Have Gone For The Head.",
    color: "blue"
  }
];

export default function Message({ messageToggleHandler }) {
  return (
    <div className={styles.messageWrapper}>
      <div className={styles.head}>
        <h4>Messages</h4>
        <MdOutlineClose onClick={() => messageToggleHandler()} />
      </div>
      <div style={{ width: "100%" }}>
        {Chats.map((chat) => (
          <ChatBox
            key={chat.id}
            name={chat.name}
            time={chat.time}
            message={chat.message}
            color={chat.color}
          />
        ))}

        <div className={styles.chatBoxInput}>
          <input type="text" placeholder="Type your message here" />
        </div>
      </div>
    </div>
  );
}
