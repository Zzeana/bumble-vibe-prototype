import { useEffect } from "react";
import styles from "./MatchSent.module.css";

const imgImage1 =
  "https://www.figma.com/api/mcp/asset/0681d35a-a5ee-460a-bd6d-3209d76b5153";
const imgOverlay =
  "https://www.figma.com/api/mcp/asset/cf80f971-f09a-4060-a1c4-66941813e2e9";
const imgBackground1 =
  "https://www.figma.com/api/mcp/asset/0b67a197-54f5-4bf0-a339-495cee8a9c85";
const imgCheckIcon =
  "https://www.figma.com/api/mcp/asset/a6582bfe-962f-46f2-9047-df44efa4ec2a";
const imgArrow =
  "https://www.figma.com/api/mcp/asset/23c9c46b-6baa-4e80-8abb-ad535dd3371f";
const imgBackground =
  "https://www.figma.com/api/mcp/asset/1f5717b3-8fcb-4923-919a-1b6fc268637b";
const imgWaveIcon =
  "https://www.figma.com/api/mcp/asset/1e98ed5b-0598-4d1c-b8d7-e41396f85563";
const imgImage3 =
  "https://www.figma.com/api/mcp/asset/b89207fd-ffd7-4560-89a3-551255bc6aab";

const AUTO_ADVANCE_MS = 2000;

interface MatchSentProps {
  profileImageUrl?: string;
  onUndo?: () => void;
  onAutoContinue?: () => void;
}

export function MatchSent({ profileImageUrl, onUndo, onAutoContinue }: MatchSentProps) {
  const cardImageUrl = profileImageUrl ?? imgImage1;
  useEffect(() => {
    const t = setTimeout(() => {
      onAutoContinue?.();
    }, AUTO_ADVANCE_MS);
    return () => clearTimeout(t);
  }, [onAutoContinue]);

  return (
    <div className={styles.screen} data-name="Match Sent">
      <div className={styles.statusBarWrapper}>
        <img
          src="/status-bar.png"
          alt=""
          className={styles.statusBar}
          role="presentation"
        />
        <div className={styles.dynamicIslandMask} aria-hidden="true" />
      </div>

      <nav className={styles.topNav} aria-label="Discover tabs">
        <div className={styles.tabPeople}>
          <span className={styles.tabPeopleLabel}>People</span>
        </div>
        <button type="button" className={styles.iconButton} aria-label="Wave">
          <img src={imgBackground} alt="" className={styles.iconButtonBg} aria-hidden />
          <img
            src={imgWaveIcon}
            alt=""
            className={styles.iconButtonIcon}
            style={{ width: 66, height: 66 }}
            aria-hidden
          />
        </button>
        <button type="button" className={styles.iconButton} aria-label="Filters">
          <img src={imgBackground} alt="" className={styles.iconButtonBg} aria-hidden />
          <img
            src={imgImage3}
            alt=""
            className={styles.iconButtonIcon}
            style={{ width: 26, height: 26 }}
            aria-hidden
          />
        </button>
        <div className={styles.tabGroup}>
          <span className={styles.tabGroupLabel}>Group</span>
        </div>
      </nav>

      <div className={styles.cardStack}>
        <div className={styles.profileCard}>
          <img
            src={cardImageUrl}
            alt=""
            className={styles.profileImage}
            role="presentation"
          />
          <div className={styles.overlay}>
            <img
              src={imgOverlay}
              alt=""
              className={styles.overlayImage}
              aria-hidden
            />
          </div>
          <div className={styles.sentBlock}>
            <div className={styles.checkCircle}>
              <img
                src={imgBackground1}
                alt=""
                className={styles.checkCircleBg}
                aria-hidden
              />
              <img
                src={imgCheckIcon}
                alt=""
                className={styles.checkIcon}
                aria-hidden
              />
            </div>
            <p className={styles.sentLabel}>Sent</p>
          </div>
          <button
            type="button"
            className={styles.undoButton}
            onClick={() => onUndo?.()}
            aria-label="Undo"
          >
            <img
              src={imgArrow}
              alt=""
              className={styles.undoArrow}
              aria-hidden
            />
            <span className={styles.undoLabel}>undo</span>
          </button>
        </div>
      </div>
    </div>
  );
}
