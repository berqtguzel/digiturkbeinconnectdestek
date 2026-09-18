"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { matches } from "@/data/matches";

const labels = ["GÜN", "SAAT", "DK", "SN"];

function getRemaining(kickoff: string) {
  return Math.max(0, Math.floor((Date.parse(kickoff) - Date.now()) / 1000));
}

export function FloatingMatchCard() {
  const match = matches[0];
  const [remaining, setRemaining] = useState<number | null>(null);

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
    <aside className="floating-match" aria-label="Yaklaşan büyük maç">
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

      <a className="floating-match-button" href="https://ligtv-beinconnect.com.tr/paketlerimiz">
        <svg width="13" height="13" viewBox="0 0 24 24" aria-hidden="true">
          <path d="m8 5 11 7-11 7V5Z" fill="currentColor" />
        </svg>
        Hemen izle
        <span aria-hidden="true">→</span>
      </a>
    </aside>
  );
}
