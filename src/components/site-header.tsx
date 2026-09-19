"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const links = [
  ["Anasayfa", "/"],
  ["TV Paketleri", "/digiturk-tv-paketleri"],
  ["NEO Paketleri", "/neo-paketleri"],
  ["TV + İnternet", "/tv-internet-paketleri"],
  ["İletişim", "/iletisim"],
  ["SSS", "/sikca-sorulan-sorular"],
];
function Arrow() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M4 12h15m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function Phone() {
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
        d="m7 3 3 5-3 2a16 16 0 0 0 7 7l2-3 5 3v3a1 1 0 0 1-1 1C10.6 21 3 13.4 3 4a1 1 0 0 1 1-1h3Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const onPointer = (e: PointerEvent) => {
      if (!header.current?.contains(e.target as Node)) setOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 1200px)");
    const onResize = () => {
      if (desktop.matches) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    desktop.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);
  return (
    <header ref={header} className="site-header">
      <a href="#main-content" className="skip-link">
        İçeriğe geç
      </a>
      <div className="header-inner">
        <Link
          href="/"
          className="brand"
          aria-label="Digiturk anasayfa"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/brand/digiturk-logo.png"
            alt="Digiturk"
            width={128}
            height={45}
            preload
            className="brand-logo"
          />
        </Link>
        <nav className="desktop-nav" aria-label="Ana menü">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="nav-link"
              aria-current={href === pathname ? "page" : undefined}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a className="phone-link" href="tel:08503467373">
            <span className="phone-icon">
              <Phone />
            </span>
            <span className="phone-copy">
              <small>Başvuru hattı</small>
              <strong>0850 346 73 73</strong>
            </span>
          </a>
          <span className="action-divider" aria-hidden="true" />
          <a className="buy-button" href="/iletisim#iletisim-basvuru">
            Satın al ve izle
            <Arrow />
          </a>
          <button
            ref={toggle}
            type="button"
            className="menu-toggle"
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
          >
            <svg
              width="23"
              height="23"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              aria-hidden="true"
            >
              <path
                d={open ? "m6 6 12 12M6 18 18 6" : "M4 6h16M4 12h16M4 18h16"}
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div id="mobile-menu" className="mobile-menu" hidden={!open}>
        <nav aria-label="Mobil ana menü">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              aria-current={href === pathname ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              <span>{label}</span>
              <Arrow />
            </a>
          ))}
        </nav>
        <div className="mobile-menu-footer">
          <a className="mobile-phone" href="tel:08503467373">
            <Phone />
            <span>
              <small>Başvuru hattı</small>0850 346 73 73
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
