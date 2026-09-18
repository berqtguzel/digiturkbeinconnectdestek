"use client";

import { useState } from "react";
import Link from "next/link";
import { ApplicationSection } from "@/components/application-section";
import type { DigitalPlan } from "@/data/digital-plans";

type Props = { mode: "internet" | "neo"; plans: DigitalPlan[] };

export function DigitalPackagesPage({ mode, plans }: Props) {
  const [selected, setSelected] = useState(plans[0].id);
  const internet = mode === "internet";
  const groups = [...new Set(plans.map((plan) => plan.category))];
  const choose = (id: string) => {
    setSelected(id);
    document.getElementById(`${mode}-basvuru`)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`digital-page digital-page-${mode}`}>
      <nav className="digital-breadcrumb">
        <Link href="/">Anasayfa</Link>
        <span>/</span>
        <span>{internet ? "TV + İnternet" : "NEO Paketleri"}</span>
      </nav>
      <section className="digital-hero">
        <div>
          <span className="section-eyebrow">
            {internet ? "EVİNİZİN İKİ İHTİYACI, TEK PAKET" : "KUTUSUZ DİGİTURK DENEYİMİ"}
          </span>
          <h1>
            {internet ? (
              <>
                İnternetin hızı.
                <br />
                <span>Ekranın heyecanı.</span>
              </>
            ) : (
              <>
                Kutu yok. Beklemek yok.
                <br />
                <span>NEO ile hemen izle.</span>
              </>
            )}
          </h1>
          <p>
            {internet
              ? "Güçlü internet bağlantısını spor ve eğlenceyle bir araya getiren avantajlı paketleri keşfedin."
              : "Smart TV, web ve mobil cihazlarınızdan internet üzerinden izleyin. Kurulum beklemeden eğlenceye başlayın."}
          </p>
          <a href="#paketler">
            Paketleri keşfet <span>↓</span>
          </a>
        </div>
        <div className="digital-hero-visual" aria-hidden="true">
          <span>{internet ? "35" : "NEO"}</span>
          <small>{internet ? "Mbps" : "KUTUSUZ"}</small>
          <div>{internet ? "TV + INTERNET" : "HER EKRANDA"}</div>
        </div>
      </section>
      <section id="paketler" className="digital-catalog">
        <div className="digital-heading">
          <span className="section-eyebrow">SİZE UYGUN OLANI SEÇİN</span>
          <h2>{internet ? "Tek bağlantı, iki ayrı dünya." : "İzleme alışkanlığınıza uyan NEO."}</h2>
          <p>{plans.length} farklı paket seçeneği</p>
        </div>
        {groups.map((group) => (
          <div className="digital-group" key={group}>
            <div className="digital-group-title">
              <h3>{group}</h3>
              <span>{group.includes("Uydu") ? "Kurulumlu deneyim" : "Kutusuz deneyim"}</span>
            </div>
            <div className="digital-grid">
              {plans
                .filter((plan) => plan.category === group)
                .map((plan, index) => (
                  <article
                    className={`digital-card ${selected === plan.id ? "is-selected" : ""}`}
                    key={plan.id}
                  >
                    <div className="digital-card-index">0{index + 1}</div>
                    <div className="digital-card-tags">
                      <span>{plan.category}</span>
                      {plan.badge && <strong>{plan.badge}</strong>}
                    </div>
                    <h4>{plan.name}</h4>
                    <div className="digital-price">
                      <strong>{plan.price}</strong>
                      <span>
                        TL<small>/ay</small>
                      </span>
                    </div>
                    <p>{plan.note}</p>
                    <ul>
                      {plan.features.map((feature) => (
                        <li key={feature}>
                          <span>✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="digital-actions">
                      <button onClick={() => setSelected(plan.id)}>Paketi incele</button>
                      <button onClick={() => choose(plan.id)}>
                        Hemen başvur <span>→</span>
                      </button>
                    </div>
                  </article>
                ))}
            </div>
          </div>
        ))}
      </section>
      <section className="digital-compare">
        <div>
          <span className="section-eyebrow">KARAR REHBERİ</span>
          <h2>{internet ? "Uydulu mu, kutusuz mu?" : "Uydu mu, NEO mu?"}</h2>
          <p>İçerikler benzer; yayınların evinize ulaşma biçimi farklı.</p>
        </div>
        <div className="compare-grid">
          <article>
            <span>✦</span>
            <h3>Uydulu Digiturk</h3>
            <p>Çanak anten ve uydu alıcısıyla televizyonda kesintisiz yayın deneyimi.</p>
            <Link href="/digiturk-tv-paketleri">Uydu paketleri →</Link>
          </article>
          <article>
            <span>▣</span>
            <h3>NEO · Kutusuz</h3>
            <p>Kurulum olmadan internet üzerinden Smart TV, web ve mobilde izleme.</p>
            <Link href="/neo-paketleri">NEO paketleri →</Link>
          </article>
        </div>
      </section>
      <ApplicationSection
        key={selected}
        plans={plans}
        defaultPlanId={selected}
        id={`${mode}-basvuru`}
      />
    </div>
  );
}
