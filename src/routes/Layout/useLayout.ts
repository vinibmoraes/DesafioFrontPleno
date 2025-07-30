// src/routes/Layout/useLayout.ts
import { useEffect, useRef, useState } from "react";

export const useLayout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(64);
  const headerRef = useRef<HTMLElement>(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    if (!headerRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.target === headerRef.current) {
          setHeaderHeight(entry.contentRect.height);
        }
      }
    });

    resizeObserver.observe(headerRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  return {
    menuOpen,
    headerHeight,
    headerRef,
    toggleMenu
  };
};