import type { RefObject } from "react";
import type { TvPlan } from "@/data/tv-plans";
import { regions } from "@/data/tv-packages";

type PackageDialogProps = {
  dialogRef: RefObject<HTMLDialogElement | null>;
  plan: TvPlan;
  onChoose: (id: string) => void;
};

export function PackageDialog({ dialogRef, plan, onChoose }: PackageDialogProps) {
  return (
    <dialog
      ref={dialogRef}
      className="tv-detail-dialog"
      aria-labelledby="tv-detail-title"
      onClick={(event) => {
        if (event.target === event.currentTarget) dialogRef.current?.close();
      }}
    >
      <button
        type="button"
        className="tv-dialog-close"
        onClick={() => dialogRef.current?.close()}
        aria-label="Paket detayını kapat"
      >
        ×
      </button>
      <span className="section-eyebrow">{plan.subtitle}</span>
      <h2 id="tv-detail-title">{plan.name}</h2>
      <div className="tv-plan-price">
        <strong>{plan.price}</strong>
        <span>
          TL<small>/ ay</small>
        </span>
      </div>
      <p>Kredi kartına 12 taksit seçeneği.</p>
      <ul>
        {plan.features.map((feature) => (
          <li key={feature}>✓ {feature}</li>
        ))}
      </ul>
      <p>
        Uydu alıcısı ve uygun anten altyapısı gerekir. Kurulum bedelleri, taahhüt ve varsa hediye
        süresinin sonundaki koşulları başvuru sırasında inceleyin.
      </p>
      {plan.region && (
        <p>
          <strong>Geçerli iller:</strong>{" "}
          {regions.find((region) => region.id === plan.region)?.cities.join(", ")}
        </p>
      )}
      <button className="tv-primary" type="button" onClick={() => onChoose(plan.id)}>
        Bu paketle devam et <span aria-hidden="true">→</span>
      </button>
    </dialog>
  );
}
