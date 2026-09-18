"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Swiper as SwiperInstance } from "swiper";
import { A11y, Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
  {
    image: "/slides/banner-1.png",
    title: "Fiber hız, çok net",
    category: "İNTERNET + EĞLENCE",
    description: "Digiturk internet paketleriyle hız ve eğlence bir arada.",
    alt: "Digiturk internet: Fiber hız çok net. İlk 3 ay 349 TL’den başlayan fiyatlarla.",
    href: "https://ligtv-beinconnect.com.tr/internetpaketleri",
  },
  {
    image: "/slides/banner-2.png",
    title: "Oyunun ritmini yakala",
    category: "OYUNCULARA ÖZEL",
    description: "Oyun keyfine eşlik edecek internet paketlerini keşfet.",
    alt: "Oyunculara özel Digiturk internet kampanyası. İlk 3 ay 349 TL’den başlayan fiyatlarla, 1000 Mbps’e kadar internet.",
    href: "https://ligtv-beinconnect.com.tr/internetpaketleri",
  },
  {
    image: "/slides/banner-3.png",
    title: "Fiberde yeni nesil hız",
    category: "FİBER İNTERNET",
    description: "Evinin bağlantısını yeni nesil fiberle buluştur.",
    alt: "Digiturk internet: Fiberde yeni nesil hız. İlk 3 ay 499 TL’den başlayan fiyatlarla. Kampanya koşulları için detayları inceleyin.",
    href: "https://ligtv-beinconnect.com.tr/internetpaketleri",
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
  const slider = useRef<SwiperInstance | null>(null);
  const progress = useRef<HTMLSpanElement>(null);
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreference = () => {
      const instance = slider.current;
      if (!instance) return;
      instance.params.speed = preference.matches ? 0 : 650;
      if (preference.matches) instance.autoplay.stop();
      else instance.autoplay.start();
    };
    syncPreference();
    preference.addEventListener("change", syncPreference);
    return () => preference.removeEventListener("change", syncPreference);
  }, []);

  function stopAutoplay() {
    slider.current?.autoplay.stop();
  }

  return (
    <section
      className="hero-section"
      aria-label="Digiturk kampanyaları"
      aria-roledescription="slayt gösterisi"
      onFocusCapture={(event) => {
        if (!(event.target as HTMLElement).closest(".pause-button")) stopAutoplay();
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
        <Swiper
          modules={[A11y, Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={650}
          rewind
          autoplay={{
            enabled: false,
            delay: 6000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          a11y={{
            containerMessage: "Digiturk kampanyaları",
            itemRoleDescriptionMessage: "kampanya",
            slideLabelMessage: "{{index}} / {{slidesLength}}",
          }}
          onSwiper={(instance) => {
            slider.current = instance;
          }}
          onSlideChange={(instance) => {
            setActive(instance.realIndex);
          }}
          onAutoplayStart={() => setPlaying(true)}
          onAutoplayStop={() => {
            setPlaying(false);
            if (progress.current) progress.current.style.transform = "scaleX(0)";
          }}
          onAutoplayTimeLeft={(_, __, remaining) => {
            if (progress.current) progress.current.style.transform = `scaleX(${1 - remaining})`;
          }}
          className="campaign-swiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.image}>
              <div className="campaign-slide" inert={active !== index}>
                <a
                  className="campaign-art"
                  href={slide.href}
                  tabIndex={active === index ? 0 : -1}
                  aria-label={`${slide.title}: kampanyayı incele`}
                >
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1440px) 94vw, 1344px"
                    preload={index === 0}
                    className="campaign-image"
                  />
                </a>
                <div className="campaign-caption">
                  <div>
                    <span className="campaign-category">{slide.category}</span>
                    <h2>{slide.title}</h2>
                    <p>{slide.description}</p>
                  </div>
                  <a
                    className="campaign-cta"
                    href={slide.href}
                    tabIndex={active === index ? 0 : -1}
                  >
                    Kampanyayı incele
                    <Chevron />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="hero-controls">
          <div className="campaign-selectors" aria-label="Kampanya seçimi">
            {slides.map((slide, index) => (
              <button
                key={slide.title}
                className={`campaign-selector${active === index ? " selected" : ""}`}
                aria-label={`${index + 1}. kampanya: ${slide.title}`}
                aria-current={active === index ? "true" : undefined}
                onClick={() => {
                  stopAutoplay();
                  slider.current?.slideTo(index);
                }}
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
                if (playing) stopAutoplay();
                else slider.current?.autoplay.start();
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
              onClick={() => {
                stopAutoplay();
                slider.current?.slidePrev();
              }}
            >
              <Chevron back />
            </button>
            <button
              className="slider-button"
              aria-label="Sonraki kampanya"
              onClick={() => {
                stopAutoplay();
                slider.current?.slideNext();
              }}
            >
              <Chevron />
            </button>
          </div>
        </div>
        <div className="slide-progress" aria-hidden="true">
          <span ref={progress} />
        </div>
      </div>
      <p className="campaign-footnote">
        Kampanya koşulları ve güncel fiyatlar için kampanya detaylarını inceleyin.
      </p>
    </section>
  );
}
