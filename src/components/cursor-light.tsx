import { useEffect, useState } from "react";
import styles from "../styles/cursor-light.module.css";

export default function CursorLightComponent() {
  const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      const x = e.clientX - 15; // Décalage pour centrer "la lumière" sur le curseur
      const y = e.clientY - 15;
      setCursorXY({ x, y });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div>
      <div
        className={styles.cursorLight}
        style={{ left: `${cursorXY.x}px`, top: `${cursorXY.y}px` }}
      />
      <div
        className={styles.cursorLight2}
        style={{ left: `${cursorXY.x}px`, top: `${cursorXY.y}px` }}
      />
      <div
        className={styles.cursorLight3}
        style={{ left: `${cursorXY.x}px`, top: `${cursorXY.y}px` }}
      />
      <div
        className={styles.cursorLight4}
        style={{ left: `${cursorXY.x}px`, top: `${cursorXY.y}px` }}
      />
    </div>
  );
}
