import styles from "./BottomNav.module.css";

const imgLogo =
  "https://www.figma.com/api/mcp/asset/d958660e-0b7b-40d8-9b54-563fba3116e2";
const imgGroupsIcon =
  "https://www.figma.com/api/mcp/asset/a1373fcb-434c-4492-9d89-250733e274cc";
const imgMessageIcon =
  "https://www.figma.com/api/mcp/asset/f4379286-2780-45bc-918a-58e237f67ccd";
const imgBellIcon =
  "https://www.figma.com/api/mcp/asset/6a0ac5db-2df6-45ab-9778-ea3d25e19c25";
const imgProfilePic =
  "https://www.figma.com/api/mcp/asset/e5b8ad1f-4ed1-4857-8d4e-bdf26bed14ad";

function GroupsIconSvg({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="39"
      height="39"
      viewBox="0 0 39 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-hidden
    >
      <rect width="39" height="39" fill="url(#pattern0_287_878)" />
      <defs>
        <pattern
          id="pattern0_287_878"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_287_878"
            transform="scale(0.000457038)"
          />
        </pattern>
        <image
          id="image0_287_878"
          width="2188"
          height="2188"
          preserveAspectRatio="none"
          href={imgGroupsIcon}
        />
      </defs>
    </svg>
  );
}

function ActivityIconSvg({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-hidden
    >
      <rect width="24" height="25" fill="url(#pattern0_287_885)" />
      <defs>
        <pattern
          id="pattern0_287_885"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_287_885"
            transform="matrix(0.0138889 0 0 0.0133333 -10.9583 -31.6)"
          />
        </pattern>
        <image
          id="image0_287_885"
          width="1206"
          height="2622"
          preserveAspectRatio="none"
          href={imgBellIcon}
        />
      </defs>
    </svg>
  );
}

interface BottomNavProps {
  activeTab?: "discover" | "chats";
  showChatsNotification?: boolean;
  onDiscoverClick?: () => void;
  onChatsClick?: () => void;
}

export function BottomNav({
  activeTab = "discover",
  showChatsNotification,
  onDiscoverClick,
  onChatsClick,
}: BottomNavProps) {
  const isDiscoverActive = activeTab === "discover";
  const isChatsActive = activeTab === "chats";

  return (
    <div className={styles.bottomNav} role="navigation" aria-label="Main">
      <button
        type="button"
        className={isDiscoverActive ? styles.navItem : `${styles.navItem} ${styles.navItemInactive}`}
        aria-current={isDiscoverActive ? "page" : undefined}
        onClick={onDiscoverClick}
      >
        <img src={imgLogo} alt="" className={styles.navIconLogo} aria-hidden />
        <span className={styles.navLabel}>Discover</span>
      </button>
      <button type="button" className={`${styles.navItem} ${styles.navItemInactive}`}>
        <GroupsIconSvg className={styles.navIconSvg} />
        <span className={styles.navLabel}>Groups</span>
      </button>
      <button
        type="button"
        className={isChatsActive ? styles.navItem : `${styles.navItem} ${styles.navItemInactive}`}
        aria-current={isChatsActive ? "page" : undefined}
        aria-label={showChatsNotification ? "Chats (1 new)" : "Chats"}
        onClick={onChatsClick}
      >
        <span className={styles.chatsIconWrap}>
          <img src={imgMessageIcon} alt="" className={styles.navIcon} aria-hidden />
          {showChatsNotification && (
            <span className={styles.chatsNotificationBadge} aria-hidden>
              1
            </span>
          )}
        </span>
        <span className={styles.navLabel}>Chats</span>
      </button>
      <button type="button" className={`${styles.navItem} ${styles.navItemInactive}`}>
        <ActivityIconSvg className={styles.navIconSvg} />
        <span className={styles.navLabel}>Activity</span>
      </button>
      <button type="button" className={`${styles.navItem} ${styles.navItemInactive}`}>
        <div className={styles.navItemProfile}>
          <img
            src={imgProfilePic}
            alt=""
            className={styles.navItemProfileImg}
            aria-hidden
          />
        </div>
        <span className={styles.navLabel}>Me</span>
      </button>
    </div>
  );
}
