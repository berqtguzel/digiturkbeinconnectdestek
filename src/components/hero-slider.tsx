"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "/slides/banner-1.png",
    title: "Fiber hız, çok net",
    category: "İNTERNET + EĞLENCE",
    description: "Digiturk internet paketleriyle hız ve eğlence bir arada.",
    alt: "Digiturk internet: Fiber hız çok net. İlk 3 ay 349 TL’den başlayan fiyatlarla.",
    href: "/tv-internet-paketleri",
  },
  {
    image: "/slides/banner-2.png",
    title: "Oyunun ritmini yakala",
    category: "OYUNCULARA ÖZEL",
    description: "Oyun keyfine eşlik edecek internet paketlerini keşfet.",
    alt: "Oyunculara özel Digiturk internet kampanyası. İlk 3 ay 349 TL’den başlayan fiyatlarla, 1000 Mbps’e kadar internet.",
    href: "/tv-internet-paketleri",
  },
  {
    image: "/slides/banner-3.png",
    title: "Fiberde yeni nesil hız",
    category: "FİBER İNTERNET",
    description: "Evinin bağlantısını yeni nesil fiberle buluştur.",
    alt: "Digiturk internet: Fiberde yeni nesil hız. İlk 3 ay 499 TL’den başlayan fiyatlarla. Kampanya koşulları için detayları inceleyin.",
    href: "/tv-internet-paketleri",
  },
];

function Chevron({ back = false }: { back?: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      aria-hidden="true"
    >
      <path
        d={back ? "m14 6-6 6 6 6" : "m10 6 6 6-6 6"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HeroSlider() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const slide = slides[active];

  useEffect(() => {
    if (!playing || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, [playing]);

  function selectSlide(index: number) {
    setActive((index + slides.length) % slides.length);
  }

  return (
    <section
      className="hero-section"
      aria-label="Digiturk kampanyaları"
      aria-roledescription="slayt gösterisi"
      onFocusCapture={(event) => {
        if (!(event.target as HTMLElement).closest(".pause-button")) setPlaying(false);
      }}
    >
      <div className="hero-heading">
        <span className="hero-eyebrow">
          <span />
          DIGITURK DÜNYASINI KEŞFET
        </span>
        <span className="hero-heading-note">Daha fazla hız. Daha fazla eğlence.</span>
      </div>
      <div className="hero-frame">
        <h1 className="sr-only">Digiturk TV ve internet kampanyaları</h1>
        <div
          className="campaign-stage"
          role="group"
          aria-roledescription="kampanya"
          aria-label={`${active + 1} / ${slides.length}`}
        >
          <div className="campaign-slide" key={slide.image}>
            <a
              className="campaign-art"
              href={slide.href}
              aria-label={`${slide.title}: kampanyayı incele`}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                sizes="(max-width: 640px) calc(100vw - 32px), (max-width: 1199px) calc(100vw - 64px), 1344px"
                loading={active === 0 ? "eager" : "lazy"}
                fetchPriority={active === 0 ? "high" : "auto"}
                quality={70}
                className="campaign-image"
              />
            </a>
            <div className="campaign-caption">
              <div>
                <span className="campaign-category">{slide.category}</span>
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
              <a className="campaign-cta" href={slide.href}>
                Kampanyayı incele
                <Chevron />
              </a>
            </div>
          </div>
        </div>
        <div className="hero-controls">
          <div className="campaign-selectors" aria-label="Kampanya seçimi">
            {slides.map((slide, index) => (
              <button
                key={slide.title}
                className={`campaign-selector${active === index ? " selected" : ""}`}
                aria-label={`0${index + 1} ${slide.title}`}
                aria-current={active === index ? "true" : undefined}
                onClick={() => selectSlide(index)}
              >
                <span className="selector-index">0{index + 1}</span>
                <span className="selector-title">{slide.title}</span>
              </button>
            ))}
          </div>
          <div className="slider-buttons">
            <span className="slide-count">
              <strong>0{active + 1}</strong>
              <span>/ 0{slides.length}</span>
            </span>
            <button
              className="slider-button pause-button"
              aria-label={playing ? "Otomatik geçişi duraklat" : "Otomatik geçişi başlat"}
              onClick={() => {
                if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
                setPlaying((current) => !current);
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                {playing ? <path d="M5 4h3v12H5zm7 0h3v12h-3z" /> : <path d="m6 3 11 7-11 7z" />}
              </svg>
            </button>
            <button
              className="slider-button"
              aria-label="Önceki kampanya"
              onClick={() => selectSlide(active - 1)}
            >
              <Chevron back />
            </button>
            <button
              className="slider-button"
              aria-label="Sonraki kampanya"
              onClick={() => selectSlide(active + 1)}
            >
              <Chevron />
            </button>
          </div>
        </div>
        <div className={`slide-progress${playing ? " is-playing" : ""}`} aria-hidden="true">
          <span key={active} />
        </div>
      </div>
      <p className="campaign-footnote">
        Kampanya koşulları ve güncel fiyatlar için kampanya detaylarını inceleyin.
      </p>
    </section>
  );
}
