import styles from "./MessageBox.module.css";
import botIcon from "../../assets/bot.png";
import personIcon from "../../assets/person.png";

function MessageBox({ isBot, message, history, messages }) {
  return (
    <div>
      {!history ? (
        <div className={styles.message}>
          <img className={styles.icon} src={isBot ? botIcon : personIcon} />
          <div>
            <span style={{ fontWeight: "bold" }}>
              {isBot ? "Soul AI" : "You"}
            </span>
            <p>{message}</p>
          </div>
        </div>
      ) : (
        <div className={styles.historyMessage}>
            {messages.map((ele)=> (
                <div style={{display: 'flex', alignItems: 'center'}}>
                <img className={styles.icon} src={ele.isBot ? botIcon : personIcon} />
                <div>
                  <span style={{ fontWeight: "bold" }}>
                    {ele.isBot ? "Soul AI" : "You"}
                  </span>
                  <p>{ele.message}</p>
                </div>
                </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default MessageBox;
