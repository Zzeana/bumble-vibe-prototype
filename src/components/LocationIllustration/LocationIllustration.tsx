import styles from "./LocationIllustration.module.css";

/**
 * Illustration for Enable Location: circular icon with location pins
 */
export function LocationIllustration() {
  return (
    <div className={styles.wrapper} aria-hidden>
      <img
        src="/location-icon.png"
        alt=""
        className={styles.image}
      />
    </div>
  );
}
