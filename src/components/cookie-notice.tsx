"use client";

import { Cookie } from "lucide-react";
import { useEffect, useState } from "react";

const consentKey = "digiturk-cookie-consent";

type ConsentChoice = "accepted" | "rejected";

export function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const revealFrame = window.requestAnimationFrame(() => {
      setVisible(window.localStorage.getItem(consentKey) === null);
    });

    return () => window.cancelAnimationFrame(revealFrame);
  }, []);

  function saveChoice(choice: ConsentChoice) {
    window.localStorage.setItem(consentKey, choice);
    window.dispatchEvent(new CustomEvent("cookie-consent-change", { detail: choice }));
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <aside
      className="cookie-notice"
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-notice-title"
      aria-describedby="cookie-notice-description"
    >
      <span className="cookie-notice-icon" aria-hidden="true">
        <Cookie strokeWidth={1.7} />
      </span>
      <div className="cookie-notice-copy">
        <strong id="cookie-notice-title">Çerez tercihiniz</strong>
        <p id="cookie-notice-description">
          Site tercihlerinizi hatırlamak için gerekli teknolojileri kullanıyoruz. İsteğe bağlı
          çerezlere izin verip vermemeyi seçebilirsiniz.
        </p>
      </div>
      <div className="cookie-notice-actions">
        <button type="button" className="cookie-reject" onClick={() => saveChoice("rejected")}>
          Reddet
        </button>
        <button type="button" className="cookie-accept" onClick={() => saveChoice("accepted")}>
          Kabul et
        </button>
      </div>
    </aside>
  );
}
