"use client";

import { useState } from "react";
import type { DigitalPlan } from "@/data/digital-plans";
import { regions } from "@/data/tv-packages";

const cities = regions.flatMap((region) => region.cities).sort((a, b) => a.localeCompare(b, "tr"));

type ApplicationSectionProps = {
  plans: DigitalPlan[];
  defaultPlanId?: string;
  id?: string;
};

export function ApplicationSection({
  plans,
  defaultPlanId,
  id = "basvuru",
}: ApplicationSectionProps) {
  const [city, setCity] = useState("");
  const [planId, setPlanId] = useState(defaultPlanId ?? plans[0].id);
  const plan = plans.find((item) => item.id === planId) ?? plans[0];

  return (
    <section id={id} className="shared-application" aria-labelledby={`${id}-title`}>
      <div className="shared-application-copy">
        <span className="section-eyebrow">ÜCRETSİZ BAŞVURU</span>
        <h2 id={`${id}-title`}>
          Paketinizi seçin,
          <br />
          <span>gerisini birlikte tamamlayalım.</span>
        </h2>
        <p>
          İlinizi ve paketinizi belirleyin. Güncel kampanya koşullarını incelemek ve iletişim
          bilgilerinizi güvenli başvuru sayfasında paylaşmak için devam edin.
        </p>
        <ul>
          <li>
            <span>✓</span> Bir dakikadan kısa paket seçimi
          </li>
          <li>
            <span>✓</span> İlinize uygun kampanya kontrolü
          </li>
          <li>
            <span>✓</span> Kişisel bilgiler bu sitede alınmaz
          </li>
        </ul>
        <a href="tel:08503467373">
          <small>Konuşarak karar vermek isterseniz</small>0850 346 73 73 <span>↗</span>
        </a>
      </div>
      <form
        className="shared-application-form"
        onSubmit={(event) => {
          event.preventDefault();
          window.location.assign("https://ligtv-beinconnect.com.tr/basvuru");
        }}
      >
        <div className="application-form-top">
          <span>PAKET SEÇİMİ</span>
          <small>01 / 02</small>
        </div>
        <label htmlFor={`${id}-city`}>İl</label>
        <select
          id={`${id}-city`}
          required
          value={city}
          onChange={(event) => setCity(event.target.value)}
        >
          <option value="">İlinizi seçin</option>
          {cities.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
        <label htmlFor={`${id}-plan`}>Paket</label>
        <select
          id={`${id}-plan`}
          value={planId}
          onChange={(event) => setPlanId(event.target.value)}
        >
          {plans.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name} — {item.price} TL/ay
            </option>
          ))}
        </select>
        <div className="application-selected">
          <span>
            <small>Seçiminiz</small>
            {plan.name}
          </span>
          <strong>
            {plan.price}
            <small> TL/ay</small>
          </strong>
        </div>
        <button type="submit">
          Başvuru sayfasına devam et <span>↗</span>
        </button>
        <p>Başvuru tamamlanmış sayılmaz; bilgileriniz yönlendirildiğiniz sayfada alınır.</p>
      </form>
    </section>
  );
}
