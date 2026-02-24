import { useState, useRef, useEffect, useCallback } from "react";
import { Button } from "@/components/Button/Button";
import styles from "./SidequestsAnnouncement.module.css";

const imgSideQuest =
  "https://www.figma.com/api/mcp/asset/717bd84f-565c-4305-83fe-1f73ed920ccd";

const DISMISS_THRESHOLD = 0.4; // dismiss if dragged past 40% of sheet height
const SLIDE_UP_DURATION_MS = 350;

interface SidequestsAnnouncementProps {
  onDismiss?: () => void;
}

export function SidequestsAnnouncement({ onDismiss }: SidequestsAnnouncementProps) {
  const sheetRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [dragY, setDragY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartY = useRef(0);
  const dragStartDragY = useRef(0);
  const currentDragY = useRef(0);

  // Slide up from bottom on mount
  useEffect(() => {
    const t = setTimeout(() => setIsMounted(true), 10);
    return () => clearTimeout(t);
  }, []);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    if (isClosing) return;
    e.preventDefault();
    setIsDragging(true);
    dragStartY.current = e.clientY;
    dragStartDragY.current = dragY;
    currentDragY.current = dragY;
  }, [isClosing, dragY]);

  useEffect(() => {
    if (!isDragging) return;

    const onMove = (e: PointerEvent) => {
      const deltaY = e.clientY - dragStartY.current;
      const next = Math.max(0, dragStartDragY.current + deltaY);
      currentDragY.current = next;
      setDragY(next);
    };
    const onUp = () => {
      setIsDragging(false);
      const sheetEl = sheetRef.current;
      const height = sheetEl ? sheetEl.offsetHeight : 0;
      const threshold = height * DISMISS_THRESHOLD;
      const atRelease = currentDragY.current;
      if (atRelease > threshold) {
        setIsClosing(true);
      } else {
        setDragY(0);
      }
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, [isDragging]);

  const handleTransitionEnd = useCallback((e: React.TransitionEvent) => {
    if (e.propertyName !== "transform" || !isClosing) return;
    onDismiss?.();
  }, [isClosing, onDismiss]);

  const getSheetTransform = () => {
    const y =
      isClosing || !isMounted
        ? "translateY(100%)"
        : `translateY(${dragY}px)`;
    return `translateX(-50%) ${y}`;
  };

  return (
    <div className={styles.screen} data-name="Sidequests Announcement">
      <div className={styles.statusBarWrapper}>
        <img
          src="/status-bar.png"
          alt=""
          className={styles.statusBar}
          role="presentation"
        />
        <div className={styles.dynamicIslandMask} aria-hidden="true" />
      </div>

      {/* Backdrop: visible behind the sheet */}
      <div className={styles.backdrop} aria-hidden="true" />

      {/* Bottom sheet: slides up on mount, draggable down to dismiss */}
      <div
        ref={sheetRef}
        className={styles.sheetPane}
        style={{
          transform: getSheetTransform(),
          transition: isDragging ? "none" : `transform ${SLIDE_UP_DURATION_MS}ms ease-out`,
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        <div
          className={styles.grabberStrip}
          onPointerDown={handlePointerDown}
          role="button"
          tabIndex={0}
          aria-label="Drag to dismiss"
        >
          <div className={styles.grabber} aria-hidden="true" />
        </div>

        <section className={styles.hero}>
          <img
            src={imgSideQuest}
            alt=""
            className={styles.heroImage}
            role="presentation"
          />
        </section>

        <div className={styles.sheet}>
          <div className={styles.content}>
            <h1 className={styles.headline}>New: Complete Side-Quests ✨</h1>
            <p className={styles.date}>February 27,2026</p>

            <h2 className={styles.subhead}>👀 Meet friends through Side-Quests</h2>
            <p className={styles.body}>
              Making new friends is easier when you have something to do together.
              Side-Quests help you turn matches into real-life friendships through
              shared experiences.
            </p>

            <p className={styles.sectionLabel}>You can now:</p>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <span className={styles.listIcon} aria-hidden>☕</span>
                <span>Complete Side-Quests together</span>
              </li>
              <li className={styles.listItem}>
                <span className={styles.listIcon} aria-hidden>📍</span>
                <span>Discover personalized challenges</span>
              </li>
            </ul>

            <div className={styles.cta}>
              <Button
                variant="primary"
                fullWidth
                className={styles.ctaButton}
                onClick={() => onDismiss?.()}
              >
                Take me to the app
              </Button>
            </div>

            <p className={styles.terms}>
              By tapping &lsquo;Take me to the app&rsquo;, you agree to our{" "}
              <a href="#" className={styles.termsLink}>
                Terms of Service and Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
