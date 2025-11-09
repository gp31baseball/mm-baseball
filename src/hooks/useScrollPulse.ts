"use client";
import { useEffect } from "react";

export function useScrollPulse() {
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let pulseSpeed = 6; // base seconds per pulse

    const updatePulse = () => {
      const currentY = window.scrollY;
      const diff = Math.abs(currentY - lastScrollY);
      lastScrollY = currentY;

      // scroll speed factor (0–1 range)
      const factor = Math.min(diff / 150, 1);
      const newSpeed = 6 - factor * 3; // faster pulse while scrolling

      document.documentElement.style.setProperty(
        "--mesh-pulse-speed",
        `${newSpeed}s`
      );
    };

    window.addEventListener("scroll", updatePulse, { passive: true });
    return () => window.removeEventListener("scroll", updatePulse);
  }, []);
}
