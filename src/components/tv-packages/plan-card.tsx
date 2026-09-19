import Image from "next/image";
import { ArrowUpRightIcon } from "@/components/icons";
import type { TvPlan } from "@/data/tv-plans";

type PlanCardProps = {
  plan: TvPlan;
  onChoose: (id: string) => void;
  onShowDetails: (id: string) => void;
};

export function PlanCard({ plan, onChoose, onShowDetails }: PlanCardProps) {
  return (
    <article className={`tv-plan tv-plan-${plan.id}`}>
      <div className="tv-plan-top">
        <span className="tv-plan-icon" aria-hidden="true">
          {plan.icon}
        </span>
        <span className="tv-plan-badge">{plan.badge}</span>
      </div>
      {plan.name === "Yıldız Dolu" && (
        <div className="tv-plan-cover">
          <Image
            src="/paket_card.webp"
            alt="Trendyol Süper Lig, Avrupa ligleri ve Formula 1"
            width={800}
            height={450}
            sizes="(max-width: 850px) 80vw, 30vw"
          />
        </div>
      )}
      <div className="tv-plan-name">
        <span>{plan.subtitle}</span>
        <h3>{plan.name}</h3>
      </div>
      <div className="tv-plan-price">
        <strong>{plan.price}</strong>
        <span>
          TL<small>/ ay</small>
        </span>
      </div>
      <p className="tv-payment">Kredi kartına 12 taksitle</p>
      <ul>
        {plan.features.map((feature) => (
          <li key={feature}>
            <span aria-hidden="true">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="tv-plan-actions">
        <button type="button" className="tv-plan-detail" onClick={() => onShowDetails(plan.id)}>
          Paketi incele <ArrowUpRightIcon />
        </button>
        <button type="button" className="tv-primary" onClick={() => onChoose(plan.id)}>
          Bu paketi seç <span aria-hidden="true">→</span>
        </button>
      </div>
    </article>
  );
}
