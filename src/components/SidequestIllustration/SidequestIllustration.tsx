import styles from "./SidequestIllustration.module.css";

/**
 * Illustration: abstract decorative graphic for Sidequests
 * Two organic yellow shapes representing connection / shared journey
 */
export function SidequestIllustration() {
  return (
    <div className={styles.wrapper} aria-hidden>
      <img
        src="/sidequest-illustration.png"
        alt=""
        className={styles.image}
      />
    </div>
  );
}
