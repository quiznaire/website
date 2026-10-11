"use client";

import { useState } from "react";
import Hero from "./Hero";
import SubjectExplorer from "./SubjectExplorer";

export default function PracticeExperience() {
  const [subject, setSubject] = useState("Physics");
  const [round, setRound] = useState(0);
  function startSubject(name) {
    setSubject(name);
    setRound((value) => value + 1);
    requestAnimationFrame(() =>
      document
        .getElementById("try-quiz")
        ?.scrollIntoView({
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
            .matches
            ? "instant"
            : "smooth",
          block: "center",
        }),
    );
  }
  return (
    <>
      <Hero subject={subject} round={round} />
      <SubjectExplorer onStart={startSubject} />
    </>
  );
}
