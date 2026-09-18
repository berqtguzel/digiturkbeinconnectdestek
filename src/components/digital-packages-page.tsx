"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ApplicationSection } from "@/components/application-section";
import type { DigitalPlan } from "@/data/digital-plans";

type Props = { mode: "internet" | "neo"; plans: DigitalPlan[] };

export function DigitalPackagesPage({ mode, plans }: Props) {
  const router = useRouter();
  const [selected, setSelected] = useState(plans[0].id);
  const [speed, setSpeed] = useState(0);
  const internet = mode === "internet";
  const groups = [...new Set(plans.map((plan) => plan.category))];
  const choose = (id: string) => {
    router.push(`/iletisim?plan=${encodeURIComponent(id)}#iletisim-basvuru`);
  };

  useEffect(() => {
    if (!internet) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      const reducedMotionFrame = requestAnimationFrame(() => setSpeed(971.6));
      return () => cancelAnimationFrame(reducedMotionFrame);
    }

    const duration = 2200;
    const startedAt = performance.now();
    let frame = 0;
    const update = (now: number) => {
      const progress = Math.min(1, (now - startedAt) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setSpeed(971.6 * eased);
      if (progress < 1) frame = requestAnimationFrame(update);
    };
    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, [internet]);

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
        {internet ? (
          <div
            className="speed-test-panel"
            aria-label={`Örnek hız göstergesi: ${speed.toFixed(2)} Mbps`}
          >
            <div className="speed-panel-top">
              <span className="speed-brand">
                <Image src="/digiturk-symbol.png" alt="" width={24} height={24} sizes="24px" />
                <span>DIGITURK NET</span>
              </span>
              <strong>BAĞLANTI İYİ</strong>
            </div>
            <div className="speed-meter">
              <svg viewBox="0 0 240 150" aria-hidden="true">
                <defs>
                  <linearGradient id="speed-gradient">
                    <stop stopColor="#7047ec" />
                    <stop offset=".55" stopColor="#a044f0" />
                    <stop offset="1" stopColor="#20d9ed" />
                  </linearGradient>
                </defs>
                <path className="speed-track" d="M30 125 A90 90 0 0 1 210 125" pathLength="100" />
                <path
                  className="speed-progress"
                  d="M30 125 A90 90 0 0 1 210 125"
                  pathLength="100"
                />
                <g className="speed-ticks">
                  <text x="25" y="143">
                    0
                  </text>
                  <text x="207" y="143">
                    1000
                  </text>
                </g>
                <line className="speed-needle" x1="120" y1="125" x2="120" y2="55" />
                <circle cx="120" cy="125" r="8" className="speed-hub" />
              </svg>
              <div className="speed-value">
                <strong>{speed.toFixed(2)}</strong>
                <span>Mbps</span>
              </div>
            </div>
            <div className="speed-stats">
              <span>
                <small>PING</small>
                <strong>6 ms</strong>
              </span>
              <span>
                <small>DOWNLOAD</small>
                <strong>971.60 Mbps</strong>
              </span>
              <span>
                <small>UPLOAD</small>
                <strong>18.42 Mbps</strong>
              </span>
            </div>
            <p>Gösterge tasarım amaçlıdır. Adresinizdeki hız altyapıya göre belirlenir.</p>
          </div>
        ) : (
          <div className="neo-device-stage" aria-hidden="true">
            <div className="neo-stage-glow" />
            <div className="neo-stage-topline">
              <span className="neo-stage-brand">
                <Image src="/digiturk-symbol.png" alt="" width={22} height={22} />
                DIGITURK NEO
              </span>
              <span className="neo-live-pill">● CANLI</span>
            </div>
            <div className="neo-float-tag neo-float-tag-one">KUTU YOK</div>
            <div className="neo-float-tag neo-float-tag-two">HER YERDE</div>
            <div className="neo-tv">
              <div className="neo-screen neo-screen-sport">
                <span>CANLI SPOR</span>
                <Image src="/digiturk-symbol.png" alt="" width={62} height={62} />
                <strong>Heyecan büyük ekranda</strong>
              </div>
              <i />
              <b />
            </div>
            <div className="neo-laptop">
              <div className="neo-screen neo-screen-film">
                <small>FİLM &amp; DİZİ</small>
                <strong>İstediğin zaman izle</strong>
                <span>▶</span>
              </div>
              <i />
            </div>
            <div className="neo-tablet">
              <div className="neo-screen neo-screen-live">
                <span>ŞİMDİ YAYINDA</span>
                <strong>CANLI TV</strong>
                <small>Tek dokunuşla</small>
              </div>
            </div>
            <div className="neo-phone">
              <span />
              <div className="neo-phone-screen">
                <Image src="/digiturk-symbol.png" alt="" width={34} height={34} />
                <strong>NEO</strong>
                <small>CEBİNDE</small>
              </div>
            </div>
            <div className="neo-stage-caption">
              <span>KUTUSUZ · KURULUMSUZ</span>
              <strong>Her ekran senin ekranın.</strong>
            </div>
          </div>
        )}
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
