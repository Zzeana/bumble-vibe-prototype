import { TopBar } from "@/components/TopBar/TopBar";
import { Button } from "@/components/Button/Button";
import { LocationIllustration } from "@/components/LocationIllustration/LocationIllustration";
import styles from "./EnableLocation.module.css";

interface EnableLocationProps {
  onClose?: () => void;
  onAllow?: () => void;
}

export function EnableLocation({ onClose, onAllow }: EnableLocationProps) {
  return (
    <article className={styles.screen}>
      <img
        src="/status-bar.png"
        alt=""
        className={styles.statusBar}
        role="presentation"
      />

      <TopBar title="Enable Location" onClose={onClose} />

      <div className={styles.content}>
        <LocationIllustration />

        <h2 className={styles.headline}>
          We need your location to show what places are nearby.
        </h2>

        <p className={styles.body}>
          You will need to grant Bumble access to use your location to suggest
          nearby places and confirm visits. Your precise location is never
          shared with matches.
        </p>
      </div>

      <footer className={styles.footer}>
        <Button fullWidth variant="accent" onClick={onAllow}>
          Allow Location Access
        </Button>
      </footer>
    </article>
  );
}
