"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { matches, type Match } from "@/data/matches";

const dayFormat = new Intl.DateTimeFormat("tr-TR", {
  day: "numeric",
  month: "long",
  weekday: "long",
  timeZone: "Europe/Istanbul",
});
const timeFormat = new Intl.DateTimeFormat("tr-TR", {
  hour: "2-digit",
  minute: "2-digit",
  timeZone: "Europe/Istanbul",
});

function Icon({ kind }: { kind: "arrow" | "calendar" | "play" | "screen" }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {kind === "arrow" ? (
        <path d="M4 12h16m-6-6 6 6-6 6" />
      ) : kind === "calendar" ? (
        <>
          <rect x="4" y="5" width="16" height="16" rx="3" />
          <path d="M8 3v4m8-4v4M4 11h16m-12 5h3" />
        </>
      ) : kind === "screen" ? (
        <>
          <rect x="3" y="4" width="18" height="13" rx="2" />
          <path d="M8 21h8m-4-4v4" />
        </>
      ) : (
        <path d="m9 5 10 7-10 7V5Z" fill="currentColor" stroke="none" />
      )}
    </svg>
  );
}

function Team({ team }: { team: Match["home"] }) {
  return (
    <div className="match-team">
      <div className="team-logo">
        <Image
          src={team.logo}
          alt={`${team.name} arması`}
          width={100}
          height={110}
          sizes="(max-width: 600px) 70px, 100px"
        />
      </div>
      <strong>{team.name}</strong>
    </div>
  );
}

function Countdown({ kickoff }: { kickoff: string }) {
  const [remaining, setRemaining] = useState<number | null>(null);
  useEffect(() => {
    const update = () =>
      setRemaining(Math.max(0, Math.floor((Date.parse(kickoff) - Date.now()) / 1000)));
    update();
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, [kickoff]);
  if (remaining === 0)
    return (
      <p className="match-started" role="status">
        Planlanan başlangıç saati geçti.
      </p>
    );
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
    <div
      className="match-countdown"
      role="timer"
      aria-label="Maçın planlanan başlangıcına kalan süre"
      aria-live="off"
    >
      {values.map((value, index) => (
        <div key={index}>
          <strong>{value === null ? "––" : String(value).padStart(2, "0")}</strong>
          <span>{["GÜN", "SAAT", "DAKİKA", "SANİYE"][index]}</span>
        </div>
      ))}
    </div>
  );
}

export function MatchSchedule() {
  const featured = matches[0];
  return (
    <section id="mac-takvimi" className="matches-section" aria-labelledby="matches-title">
      <div className="matches-heading">
        <div>
          <span className="section-eyebrow">
            <Icon kind="calendar" /> MAÇ TAKVİMİ
          </span>
          <h2 id="matches-title">
            Bazı anlar <span>kaçırılmaz.</span>
          </h2>
          <p>Tribünün heyecanını evine taşı. Büyük karşılaşmalara yerini ayır.</p>
        </div>
        <a className="fixture-link" href="/iletisim#iletisim-basvuru">
          Paket danışmanına ulaş
          <Icon kind="arrow" />
        </a>
      </div>
      <div className="match-board">
        <article
          className="featured-match"
          aria-label={`${featured.home.name} – ${featured.away.name}`}
        >
          <div className="stadium-lines" aria-hidden="true" />
          <div className="featured-match-top">
            <span className="spotlight-label">
              <span /> HAFTANIN BÜYÜK BULUŞMASI
            </span>
            <span className="league-label">SÜPER LİG</span>
          </div>
          <div className="featured-match-date">
            <time dateTime={featured.kickoff}>{dayFormat.format(new Date(featured.kickoff))}</time>
            <span>•</span>
            <strong>{timeFormat.format(new Date(featured.kickoff))}</strong>
          </div>
          <div className="featured-teams">
            <Team team={featured.home} />
            <div className="versus">
              <span>VS</span>
              <small>SAHNE SİZİN.</small>
            </div>
            <Team team={featured.away} />
          </div>
          <div className="countdown-area">
            <span className="countdown-caption">İLK DÜDÜĞE DOĞRU</span>
            <Countdown kickoff={featured.kickoff} />
          </div>
          <div className="featured-match-actions">
            <a className="match-watch" href="/iletisim#iletisim-basvuru">
              <Icon kind="play" />
              İzleme paketlerini keşfet
              <Icon kind="arrow" />
            </a>
          </div>
          <div className="featured-match-bottom">
            <Icon kind="screen" />
            <span>Telefon, tablet ve Smart TV’de maç keyfi</span>
          </div>
        </article>
        <div className="upcoming-matches">
          <div className="upcoming-heading">
            <span>HEYECAN DEVAM EDİYOR</span>
            <span>02 MAÇ</span>
          </div>
          {matches.slice(1).map((match) => (
            <article
              className="upcoming-match"
              key={match.id}
              aria-label={`${match.home.name} – ${match.away.name}`}
            >
              <div className="upcoming-match-top">
                <span>Süper Lig</span>
                <time dateTime={match.kickoff}>{dayFormat.format(new Date(match.kickoff))}</time>
              </div>
              <div className="upcoming-teams">
                <Team team={match.home} />
                <div className="upcoming-time">
                  <strong>{timeFormat.format(new Date(match.kickoff))}</strong>
                  <span>TSİ</span>
                </div>
                <Team team={match.away} />
              </div>
              <div className="upcoming-match-bottom">
                <a href="/iletisim#iletisim-basvuru">
                  İzleme paketleri
                  <Icon kind="arrow" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
