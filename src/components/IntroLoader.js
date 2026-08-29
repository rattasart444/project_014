"use client";

/**
 * IntroLoader.js
 * -----------------------------------------------------------------------
 * Opening animation for Lunar Watch
 *
 * Sequence:
 * 1. Beige curtain covers the page
 * 2. "Lunar Watch" reveals letter-by-letter
 * 3. Gold accent line appears underneath
 * 4. Logo fades upward
 * 5. Curtain splits open to reveal the website
 *
 * Install:
 * npm install gsap
 */

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

// true = แสดง Intro แค่ครั้งเดียวต่อ Session
// false = แสดงทุกครั้งที่โหลดหน้าเว็บ
const PLAY_ONCE_PER_SESSION = false;

const SESSION_KEY = "lunarWatchIntroPlayed";

export default function IntroLoader({
  wordmark = "Lunar Watch",
}) {
  const panelTopRef = useRef(null);
  const panelBottomRef = useRef(null);
  const lettersWrapRef = useRef(null);
  const lineRef = useRef(null);

  const [shouldRender, setShouldRender] = useState(true);

  const letters = wordmark.split("");

  useEffect(() => {
    // ตรวจสอบว่าเคยแสดง Intro แล้วหรือยัง
    if (
      PLAY_ONCE_PER_SESSION &&
      typeof window !== "undefined" &&
      sessionStorage.getItem(SESSION_KEY)
    ) {
      setShouldRender(false);
      return;
    }

    // ป้องกันการ Scroll ขณะ Intro ทำงาน
    document.body.style.overflow = "hidden";

    const letterEls =
      lettersWrapRef.current?.querySelectorAll("span");

    if (!letterEls) return;

    const tl = gsap.timeline({
      defaults: {
        ease: "power3.out",
      },

      onComplete: () => {
        document.body.style.overflow = "";

        if (
          PLAY_ONCE_PER_SESSION &&
          typeof window !== "undefined"
        ) {
          sessionStorage.setItem(SESSION_KEY, "true");
        }

        setShouldRender(false);
      },
    });

    // Initial state
    tl.set(letterEls, {
      opacity: 0,
      y: 28,
      filter: "blur(6px)",
    });

    tl.set(lineRef.current, {
      scaleX: 0,
    });

    tl.set(
      [panelTopRef.current, panelBottomRef.current],
      {
        yPercent: 0,
      }
    );

    // --------------------------------------------------
    // 1. Lunar Watch letters reveal
    // --------------------------------------------------

    tl.to(letterEls, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 0.7,
      stagger: 0.06,
    });

    // --------------------------------------------------
    // 2. Gold accent line
    // --------------------------------------------------

    tl.to(
      lineRef.current,
      {
        scaleX: 1,
        duration: 0.7,
        ease: "power2.inOut",
      },
      "-=0.25"
    );

    // --------------------------------------------------
    // 3. Hold
    // --------------------------------------------------

    tl.to({}, {
      duration: 0.5,
    });

    // --------------------------------------------------
    // 4. Logo fade upward
    // --------------------------------------------------

    tl.to(
      [letterEls, lineRef.current],
      {
        opacity: 0,
        y: -18,
        duration: 0.5,
        ease: "power2.in",
      }
    );

    // --------------------------------------------------
    // 5. Curtain opens
    // --------------------------------------------------

    tl.to(
      panelTopRef.current,
      {
        yPercent: -100,
        duration: 1,
        ease: "expo.inOut",
      },
      "-=0.1"
    );

    tl.to(
      panelBottomRef.current,
      {
        yPercent: 100,
        duration: 1,
        ease: "expo.inOut",
      },
      "<"
    );

    // Cleanup
    return () => {
      tl.kill();
      document.body.style.overflow = "";
    };
  }, []);

  if (!shouldRender) {
    return null;
  }

  return (
    <div
      style={styles.container}
      aria-hidden="true"
    >
      {/* TOP CURTAIN */}
      <div
        ref={panelTopRef}
        style={{
          ...styles.panel,
          ...styles.panelTop,
        }}
      />

      {/* BOTTOM CURTAIN */}
      <div
        ref={panelBottomRef}
        style={{
          ...styles.panel,
          ...styles.panelBottom,
        }}
      />

      {/* LOGO CONTENT */}
      <div style={styles.content}>

        {/* LUNAR WATCH */}
        <div
          ref={lettersWrapRef}
          style={styles.wordmark}
        >
          {letters.map((char, i) => (
            <span
              key={i}
              style={styles.letter}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>

        {/* GOLD LINE */}
        <div
          ref={lineRef}
          style={styles.line}
        />

        {/* SUBTITLE */}
        <div style={styles.subtitle}>
          TIMELESS • ELEGANT • LUNAR
        </div>

      </div>
    </div>
  );
}

const styles = {
  container: {
    position: "fixed",
    inset: 0,
    zIndex: 9999,
    pointerEvents: "none",
  },

  panel: {
    position: "absolute",
    left: 0,
    width: "100%",
    height: "50%",

    // Lunar Watch Beige
    background: "#f2ebdf",
  },

  panelTop: {
    top: 0,

    boxShadow:
      "0 1px 0 rgba(0,0,0,0.04)",
  },

  panelBottom: {
    bottom: 0,
  },

  content: {
    position: "absolute",
    top: "50%",
    left: "50%",

    transform:
      "translate(-50%, -50%)",

    zIndex: 2,

    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    gap: "14px",

    whiteSpace: "nowrap",
  },

  wordmark: {
    display: "flex",

    fontFamily:
      "Georgia, 'Times New Roman', serif",

    fontSize:
      "clamp(34px, 7vw, 68px)",

    fontWeight: 500,

    letterSpacing:
      "0.04em",

    color: "#2c2925",

    textTransform: "uppercase",
  },

  letter: {
    display: "inline-block",

    willChange:
      "transform, opacity, filter",
  },

  line: {
    width: "90px",

    height: "2px",

    background:
      "#b08d57",

    transformOrigin:
      "center",

    boxShadow:
      "0 0 8px rgba(176, 141, 87, 0.25)",
  },

  subtitle: {
    marginTop: "2px",

    fontFamily:
      "Arial, sans-serif",

    fontSize:
      "clamp(8px, 1.5vw, 11px)",

    letterSpacing:
      "0.35em",

    color:
      "rgba(58, 49, 40, 0.55)",

    fontWeight: 400,
  },
};
