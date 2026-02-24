import { useState, useRef } from "react";
import styles from "./DiscoverFeed.module.css";

const imgWaveIcon =
  "https://www.figma.com/api/mcp/asset/5912b5b3-c84a-4c3c-99bf-3d765666e90b";
const waveHandIconSrc = "/wave-hand-icon.png";

const imgBackground =
  "https://www.figma.com/api/mcp/asset/01b88bfe-f44c-47a0-81ee-0989bdac0b0d";
const imgBackground1 =
  "https://www.figma.com/api/mcp/asset/f437c9f9-b8f0-4ffd-8e1c-d780f40d25fa";
const imgLara =
  "https://www.figma.com/api/mcp/asset/576ea1f2-153f-492b-ac63-962a5cad90cf";
const imgImage3 =
  "https://www.figma.com/api/mcp/asset/8a50a9fa-9915-4b8f-ab98-7e0b19774516";

const DEFAULT_BIO =
  "I love meeting new people and am always open to trying new things. In a very transitional phase of my life an...";
const DEFAULT_INTERESTS = ["Art", "Concerts", "Yoga", "Coffee", "Traveling"];

const DEFAULT_PROFILE: {
  imageUrl: string;
  name: string;
  ageLocation: string;
  bio?: string;
  interests?: string[];
} = {
  imageUrl: imgLara,
  name: "Lara Raj",
  ageLocation: "20 • Stamford, CT",
};

interface DiscoverFeedProps {
  profile?: {
    imageUrl: string;
    name: string;
    ageLocation: string;
    bio?: string;
    interests?: string[];
  };
  animateScrollIntoView?: boolean;
  onScrollAnimationComplete?: () => void;
  onWaveClick?: () => void;
}

export function DiscoverFeed({
  profile: profileProp,
  animateScrollIntoView,
  onScrollAnimationComplete,
  onWaveClick,
}: DiscoverFeedProps) {
  const profile = profileProp ?? DEFAULT_PROFILE;
  const bio = profile.bio ?? DEFAULT_BIO;
  const interests = profile.interests ?? DEFAULT_INTERESTS;
  const [isWaving, setIsWaving] = useState(false);
  const cardWrapRef = useRef<HTMLDivElement>(null);

  const handleWaveClick = () => {
    if (isWaving) return;
    setIsWaving(true);
  };

  const handleWaveAnimationEnd = () => {
    onWaveClick?.();
  };

  return (
    <div className={styles.screen} data-name="Discover Feed">
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
        <div
          ref={cardWrapRef}
          className={`${styles.profileCardWrap} ${animateScrollIntoView ? styles.profileCardWrapScrolling : ""}`}
          onAnimationEnd={(e) => {
            if (e.target === cardWrapRef.current && animateScrollIntoView) {
              onScrollAnimationComplete?.();
            }
          }}
        >
        <div className={styles.profileCard}>
          <img
            src={profile.imageUrl}
            alt=""
            className={styles.profileImage}
            role="presentation"
          />
          <div className={styles.profileOverlay}>
            <div className={styles.nameAge}>
              <h2 className={styles.name}>{profile.name}</h2>
              <p className={styles.ageLocation}>{profile.ageLocation}</p>
            </div>
            <div className={styles.contentBlock}>
              <div className={styles.bioRow}>
                <p className={styles.bio}>{bio}</p>
              <button
                type="button"
                className={`${styles.waveButton} ${isWaving ? styles.waveButtonWaving : ""}`}
                aria-label="Wave"
                onClick={handleWaveClick}
              >
                <img src={imgBackground1} alt="" className={styles.waveButtonBg} aria-hidden />
                <span
                  className={styles.waveButtonIconWrap}
                  onAnimationEnd={handleWaveAnimationEnd}
                >
                  <img
                  src={waveHandIconSrc}
                  alt=""
                  className={styles.waveButtonIcon}
                  aria-hidden
                />
                </span>
              </button>
            </div>
            <div className={styles.interests}>
              {interests.map((label: string) => (
                <span key={label} className={styles.interestPill}>
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
}
