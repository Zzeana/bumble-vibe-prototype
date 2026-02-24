import styles from "./Splash.module.css";

const imgLogo =
  "https://www.figma.com/api/mcp/asset/cf130640-d4b5-45ac-b4e6-98dd6962c7a2";

export function Splash() {
  return (
    <div className={styles.screen}>
      <div className={styles.statusBarWrapper}>
        <img
          src="/status-bar.png"
          alt=""
          className={styles.statusBar}
          role="presentation"
        />
        <div className={styles.dynamicIslandMask} aria-hidden="true" />
      </div>
      <div className={styles.logoWrapper}>
        <img src={imgLogo} alt="Bumble" className={styles.logo} />
      </div>
    </div>
  );
}
