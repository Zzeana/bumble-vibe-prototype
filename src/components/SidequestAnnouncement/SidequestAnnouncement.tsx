import { TopBar } from "@/components/TopBar/TopBar";
import { BenefitItem } from "@/components/BenefitItem/BenefitItem";
import { Button } from "@/components/Button/Button";
import { SidequestIllustration } from "@/components/SidequestIllustration/SidequestIllustration";
import styles from "./SidequestAnnouncement.module.css";

const BENEFITS: { title: string; description: string }[] = [
  {
    title: "Complete challenges together.",
    description: "Visit places nearby and complete Sidequests with your matches.",
  },
  {
    title: "Discover shared experiences",
    description: "Suggested Sidequests are based on your interests and location.",
  },
  {
    title: "Stay in control of your privacy",
    description: "Your precise location is never shared, only confirmed visits count.",
  },
];

interface SidequestAnnouncementProps {
  onClose?: () => void;
  onEnable?: () => void;
}

export function SidequestAnnouncement({ onClose, onEnable }: SidequestAnnouncementProps) {
  return (
    <article className={styles.screen}>
      <img
        src="/status-bar.png"
        alt=""
        className={styles.statusBar}
        role="presentation"
      />

      <TopBar title="Side-quests" onClose={onClose} />

      <div className={styles.content}>
        <SidequestIllustration />

        <h2 className={styles.headline}>Bring your matches into the real world.</h2>

        <ul className={styles.benefitsList}>
          {BENEFITS.map((benefit, index) => (
            <li key={index}>
              <BenefitItem title={benefit.title} description={benefit.description} />
            </li>
          ))}
        </ul>
      </div>

      <footer className={styles.footer}>
        <Button fullWidth onClick={onEnable}>
          Enable Sidequests
        </Button>
      </footer>
    </article>
  );
}
