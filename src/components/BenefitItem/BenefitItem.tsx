import styles from "./BenefitItem.module.css";

interface BenefitItemProps {
  title: string;
  description: string;
}

function CheckmarkIcon() {
  return (
    <span className={styles.checkmark} aria-hidden>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="12" fill="currentColor" />
        <path
          d="M7 12l3 3 7-7"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function BenefitItem({ title, description }: BenefitItemProps) {
  return (
    <div className={styles.benefitItem}>
      <CheckmarkIcon />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
