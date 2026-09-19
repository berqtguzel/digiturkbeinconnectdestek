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
  const [planId, setPlanId] = useState(
    defaultPlanId && plans.some((item) => item.id === defaultPlanId) ? defaultPlanId : plans[0].id,
  );
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
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
          İletişim bilgilerinizi, ilinizi ve ilgilendiğiniz paketi paylaşın. Başvuru ekibimiz paket
          uygunluğu ve güncel kampanya detayları için sizinle iletişime geçsin.
        </p>
        <ul>
          <li>
            <span>✓</span> Bir dakikadan kısa paket seçimi
          </li>
          <li>
            <span>✓</span> İlinize uygun kampanya kontrolü
          </li>
          <li>
            <span>✓</span> Size uygun paket için geri dönüş
          </li>
        </ul>
        <a href="tel:08503467373">
          <small>Konuşarak karar vermek isterseniz</small>0850 346 73 73
        </a>
      </div>
      <form
        className="shared-application-form"
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitted(true);
        }}
      >
        <div className="application-form-top">
          <span>İLETİŞİM FORMU</span>
          <small>YENİ ABONELİK</small>
        </div>
        <div className="application-fields">
          <div>
            <label htmlFor={`${id}-name`}>Ad soyad</label>
            <input
              id={`${id}-name`}
              autoComplete="name"
              required
              placeholder="Adınız ve soyadınız"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor={`${id}-phone`}>Telefon</label>
            <input
              id={`${id}-phone`}
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              required
              placeholder="05__ ___ __ __"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </div>
          <div>
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
          </div>
          <div>
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
          </div>
        </div>
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
          İletişim talebi oluştur <span>→</span>
        </button>
        {submitted ? (
          <p className="application-success" role="status">
            Demo talebiniz hazırlandı. Bu form herhangi bir sunucuya veri göndermez.
          </p>
        ) : (
          <p>Bilgileriniz yalnızca yeni abonelik talebiniz için kullanılır.</p>
        )}
      </form>
    </section>
  );
}
