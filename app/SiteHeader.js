"use client";

import { useEffect, useRef, useState } from "react";
import Brand from "./Brand";

export default function SiteHeader() {
  const [menu, setMenu] = useState(false);
  const trigger = useRef(null);
  const navigation = useRef(null);
  useEffect(() => {
    if (!menu) return;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setMenu(false);
        trigger.current?.focus();
      }
    };
    const closeOutside = (event) => {
      if (!navigation.current?.contains(event.target)) setMenu(false);
    };
    const desktop = window.matchMedia("(min-width: 801px)");
    const closeOnDesktop = (event) => {
      if (event.matches) setMenu(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOutside);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOutside);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [menu]);
  return (
    <header className="siteHeader">
      <nav
        ref={navigation}
        className="nav shell"
        aria-label="Primary navigation"
      >
        <Brand href="#top" />
        <button
          ref={trigger}
          className={`menuButton ${menu ? "active" : ""}`}
          onClick={() => setMenu((value) => !value)}
          aria-label={menu ? "Close menu" : "Open menu"}
          aria-expanded={menu}
          aria-controls="primary-links"
        >
          <span />
          <span />
          <span />
        </button>
        <div className={`links ${menu ? "open" : ""}`} id="primary-links">
          <a href="#subjects" onClick={() => setMenu(false)}>
            The subjects
          </a>
          <a href="#about" onClick={() => setMenu(false)}>
            About Quiznaire
          </a>
          <a href="#questions" onClick={() => setMenu(false)}>
            Questions
          </a>
          <a
            className="navPlay"
            href="#try-quiz"
            onClick={() => setMenu(false)}
          >
            Play a practice round <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
