import styles from "./MatchMadeChat.module.css";

const imgLara =
  "https://www.figma.com/api/mcp/asset/a96e44cb-3c6b-4aa8-aa0f-e90421f1f233";
const imgBack =
  "https://www.figma.com/api/mcp/asset/943717b8-2da6-4cbe-a1fe-eb00b3c1a537";
const imgMore =
  "https://www.figma.com/api/mcp/asset/bb4f516e-74c3-4c74-ba92-7e3a759ec702";
const imgAdd =
  "https://www.figma.com/api/mcp/asset/f8bc590a-4c02-46ee-ba96-bcad45d62097";
const imgInputIcon =
  "https://www.figma.com/api/mcp/asset/3201edc9-dfb4-4e20-be97-fadf7c0d6040";
const imgGif =
  "https://www.figma.com/api/mcp/asset/83d18e5c-5d42-425a-9eda-3bf9d85c6eb7";

interface MatchMadeChatProps {
  contactName?: string;
  onBack?: () => void;
}

export function MatchMadeChat({
  contactName = "Lara Raj",
  onBack,
}: MatchMadeChatProps) {
  return (
    <div className={styles.screen} data-name="Match Made Chat">
      <div className={styles.statusBarWrapper}>
        <img
          src="/status-bar.png"
          alt=""
          className={styles.statusBar}
          role="presentation"
        />
        <div className={styles.dynamicIslandMask} aria-hidden="true" />
      </div>

      <nav className={styles.chatNav}>
        <button
          type="button"
          className={styles.backButton}
          onClick={onBack}
          aria-label="Back to chats"
        >
          <img src={imgBack} alt="" className={styles.backIcon} aria-hidden />
        </button>
        <div className={styles.chatInfo}>
          <span className={styles.contactName}>{contactName}</span>
          <span className={styles.status}>
            <span className={styles.statusDot} aria-hidden>•</span>
            Offline
          </span>
        </div>
        <button
          type="button"
          className={styles.moreButton}
          aria-label="More options"
        >
          <img src={imgMore} alt="" className={styles.moreIcon} aria-hidden />
        </button>
      </nav>

      <div className={styles.main}>
        <div className={styles.heroImageWrap}>
          <img
            src={imgLara}
            alt=""
            className={styles.heroImage}
            role="presentation"
          />
        </div>
        <p className={styles.historyNote}>
          This is the beginning of your chat history with {contactName}
        </p>

        <div className={styles.messageRow}>
          <div className={styles.messageAvatar}>
            <img src={imgLara} alt="" aria-hidden />
          </div>
          <div className={styles.messageMeta}>
            <span className={styles.messageSender}>{contactName}</span>
            <span className={styles.messageText}>Heyy!!</span>
          </div>
          <span className={styles.messageTime}>8h</span>
        </div>

        <button type="button" className={styles.sidequestButton}>
          Create Side-quest
        </button>
      </div>

      <div className={styles.inputBar}>
        <button
          type="button"
          className={styles.addButton}
          aria-label="Add attachment"
        >
          <img src={imgAdd} alt="" className={styles.addIcon} aria-hidden />
        </button>
        <div className={styles.inputWrap}>
          <span className={styles.inputPlaceholder}>Send a message</span>
          <img
            src={imgInputIcon}
            alt=""
            className={styles.inputTrailingIcon}
            aria-hidden
          />
        </div>
        <button
          type="button"
          className={styles.gifButton}
          aria-label="Send GIF"
        >
          <img src={imgGif} alt="" className={styles.gifIcon} aria-hidden />
        </button>
      </div>
    </div>
  );
}
