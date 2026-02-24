import styles from "./Chats.module.css";

const imgLara =
  "https://www.figma.com/api/mcp/asset/6c9d0dbe-626a-418c-b1eb-2ce985422743";
const imgSend =
  "https://www.figma.com/api/mcp/asset/16db48ad-143e-4666-9320-4e55755f6484";

function LaraAvatarSvg({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="46"
      height="47"
      viewBox="0 0 46 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-hidden
    >
      <rect
        x="1"
        y="1"
        width="44"
        height="45"
        rx="19"
        fill="url(#pattern0_135_2217_chats)"
        stroke="#FFF28E"
        strokeWidth={2}
      />
      <defs>
        <pattern
          id="pattern0_135_2217_chats"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_135_2217_chats"
            transform="matrix(0.0017057 0 0 0.00166908 -0.461295 -0.150401)"
          />
        </pattern>
        <image
          id="image0_135_2217_chats"
          width="1080"
          height="1325"
          preserveAspectRatio="none"
          href={imgLara}
        />
      </defs>
    </svg>
  );
}

function SendFabSvg({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-hidden
    >
      <g clipPath="url(#clip0_135_2053_fab)">
        <rect width="72" height="72" rx="36" fill="#2A2D35" />
        <rect
          x="21.5"
          y="21.5"
          width="29"
          height="29"
          fill="url(#pattern0_135_2053_fab)"
        />
      </g>
      <defs>
        <pattern
          id="pattern0_135_2053_fab"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_135_2053_fab"
            transform="scale(0.00195312)"
          />
        </pattern>
        <clipPath id="clip0_135_2053_fab">
          <rect width="72" height="72" rx="36" fill="white" />
        </clipPath>
        <image
          id="image0_135_2053_fab"
          width="512"
          height="512"
          preserveAspectRatio="none"
          href={imgSend}
        />
      </defs>
    </svg>
  );
}

const imgSearch =
  "https://www.figma.com/api/mcp/asset/4f310b9c-b82c-4210-a17b-1bf0b2a1ddb6";

const CHAT_TABS = ["DMs", "Threads", "Events", "Side-quests"] as const;

interface ChatsProps {
  onChatRowClick?: (contactName: string) => void;
}

export function Chats({ onChatRowClick }: ChatsProps) {
  return (
    <div className={styles.screen} data-name="Check chats">
      <div className={styles.statusBarWrapper}>
        <img
          src="/status-bar.png"
          alt=""
          className={styles.statusBar}
          role="presentation"
        />
        <div className={styles.dynamicIslandMask} aria-hidden="true" />
      </div>

      <div className={styles.content}>
        <header className={styles.header}>
          <h1 className={styles.title}>My chats</h1>
          <button
            type="button"
            className={styles.searchButton}
            aria-label="Search chats"
          >
            <img src={imgSearch} alt="" className={styles.searchIcon} aria-hidden />
          </button>
        </header>

        <div className={styles.chatTabs}>
          {CHAT_TABS.map((label) => (
            <button
              key={label}
              type="button"
              className={
                label === "DMs"
                  ? `${styles.chatTab} ${styles.chatTabActive}`
                  : styles.chatTab
              }
            >
              {label}
            </button>
          ))}
        </div>

        <div className={styles.chatList}>
          <button
            type="button"
            className={styles.chatRow}
            onClick={() => onChatRowClick?.("Lara Raj")}
          >
            <div className={styles.chatAvatar}>
              <LaraAvatarSvg />
            </div>
            <div className={styles.chatMeta}>
              <span className={styles.chatName}>Lara Raj</span>
              <span className={styles.chatPreview}>
                Lara: Heyy! <span className={styles.chatDot}>∙</span> 2h
              </span>
            </div>
          </button>
        </div>

        <div className={styles.fabWrap}>
          <button
            type="button"
            className={styles.fab}
            aria-label="New message"
          >
            <SendFabSvg />
          </button>
        </div>
      </div>
    </div>
  );
}
