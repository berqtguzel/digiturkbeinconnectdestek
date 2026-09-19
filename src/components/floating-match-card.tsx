"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { matches } from "@/data/matches";

const labels = ["GÜN", "SAAT", "DK", "SN"];
const visibilityKey = "digiturk-floating-match-open";

function getRemaining(kickoff: string) {
  return Math.max(0, Math.floor((Date.parse(kickoff) - Date.now()) / 1000));
}

export function FloatingMatchCard() {
  const match = matches[0];
  const [remaining, setRemaining] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(true);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let revealFrame = 0;
    const stateFrame = window.requestAnimationFrame(() => {
      setIsOpen(window.localStorage.getItem(visibilityKey) !== "false");
      revealFrame = window.requestAnimationFrame(() => setIsReady(true));
    });
    return () => {
      window.cancelAnimationFrame(stateFrame);
      window.cancelAnimationFrame(revealFrame);
    };
  }, []);

  useEffect(() => {
    const update = () => setRemaining(getRemaining(match.kickoff));
    update();

    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, [match.kickoff]);

  const values =
    remaining === null
      ? [null, null, null, null]
      : [
          Math.floor(remaining / 86400),
          Math.floor(remaining / 3600) % 24,
          Math.floor(remaining / 60) % 60,
          remaining % 60,
        ];

  return (
    <aside
      className={`floating-match${isOpen ? "" : " is-collapsed"}${isReady ? "" : " is-pending"}`}
      style={{ visibility: isReady ? "visible" : "hidden" }}
      aria-label="Yaklaşan büyük maç"
    >
      <button
        className="floating-match-toggle"
        type="button"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Maç kartını kapat" : "Maç kartını aç"}
        onClick={() => {
          setIsOpen((current) => {
            const next = !current;
            window.localStorage.setItem(visibilityKey, String(next));
            return next;
          });
        }}
      >
        <span aria-hidden="true">{isOpen ? "×" : "MAÇ"}</span>
      </button>
      <span className="floating-match-glow" aria-hidden="true" />
      <div className="floating-match-heading">
        <span className="floating-live-dot" aria-hidden="true" />
        <span>HAFTANIN MAÇI</span>
        <small>SÜPER LİG</small>
      </div>

      <div className="floating-match-content">
        <div className="floating-team">
          <Image src={match.home.logo} alt="" width={46} height={52} sizes="46px" />
          <strong>{match.home.name}</strong>
        </div>

        <div className="floating-countdown" role="timer" aria-label="Maça kalan süre">
          {remaining === 0 ? (
            <span className="floating-match-started">MAÇ SAATİ</span>
          ) : (
            values.map((value, index) => (
              <span key={labels[index]}>
                <strong>{value === null ? "--" : String(value).padStart(2, "0")}</strong>
                <small>{labels[index]}</small>
              </span>
            ))
          )}
        </div>

        <div className="floating-team">
          <Image src={match.away.logo} alt="" width={46} height={52} sizes="46px" />
          <strong>{match.away.name}</strong>
        </div>
      </div>

      <a className="floating-match-button" href="/iletisim#iletisim-basvuru">
        <svg width="13" height="13" viewBox="0 0 24 24" aria-hidden="true">
          <path d="m8 5 11 7-11 7V5Z" fill="currentColor" />
        </svg>
        Hemen izle
        <span aria-hidden="true">→</span>
      </a>
    </aside>
  );
}
