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
          Paketi incele <span aria-hidden="true">↗</span>
        </button>
        <button type="button" className="tv-primary" onClick={() => onChoose(plan.id)}>
          Bu paketi seç <span aria-hidden="true">→</span>
        </button>
      </div>
    </article>
  );
}
