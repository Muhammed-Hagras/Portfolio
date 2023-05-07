import { useEffect, useState } from "react";

export default function useOutsideAlerter({ menuRef, setMenuOpen }) {
  const viewport_width = document.documentElement.clientWidth;
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        if (viewport_width <= 640) {
          setMenuOpen(false);
        }
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);
}
