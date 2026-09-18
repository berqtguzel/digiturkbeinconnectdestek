import Image from "next/image";
import type { TvPlan } from "@/data/tv-plans";
import type { Region } from "@/data/tv-packages";

type RegionCardProps = {
  region: Region;
  plan: TvPlan;
  recommended: boolean;
  onChoose: (id: string) => void;
};

export function RegionCard({ region, plan, recommended, onChoose }: RegionCardProps) {
  return (
    <article className={`tv-region-card${recommended ? " is-recommended" : ""}`}>
      <div>
        <span>{region.name}</span>
        <strong>
          {plan.price}
          <small> TL/ay</small>
        </strong>
      </div>
      <h3>
        {plan.name} {region.name === "Ulusal" ? "Paketi" : plan.subtitle}
      </h3>
      <Image
        src={`/maps/region-${region.id}.png`}
        alt={`${region.name} kampanya bölgesinin haritası`}
        width={300}
        height={167}
      />
      <details>
        <summary>
          {region.cities.length} ili görüntüle <span aria-hidden="true">+</span>
        </summary>
        <p>{region.cities.join(", ")}</p>
      </details>
      <button type="button" onClick={() => onChoose(plan.id)}>
        {recommended ? "Size uygun paketi seçin" : "Paketi seçin"}
        <span aria-hidden="true">→</span>
      </button>
    </article>
  );
}
