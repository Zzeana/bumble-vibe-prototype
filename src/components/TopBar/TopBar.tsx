import type { ReactNode } from "react";
import styles from "./TopBar.module.css";

interface TopBarProps {
  title: string;
  onClose?: () => void;
  /** Optional custom close icon/element */
  closeIcon?: ReactNode;
}

export function TopBar({ title, onClose, closeIcon }: TopBarProps) {
  return (
    <header className={styles.topBar}>
      <button
        type="button"
        className={styles.closeButton}
        onClick={onClose}
        aria-label="Close"
      >
        {closeIcon ?? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
          >
            <path
              d="M18 6L6 18M6 6l12 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
      <h1 className={styles.title}>{title}</h1>
      {/* Spacer for visual balance */}
      <div className={styles.spacer} />
    </header>
  );
}
