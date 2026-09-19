"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowUpRightIcon } from "@/components/icons";
import { useRef, useState } from "react";
import { PackageDialog } from "@/components/tv-packages/package-dialog";
import { PlanCard } from "@/components/tv-packages/plan-card";
import { RegionCard } from "@/components/tv-packages/region-card";
import { planFilters, tvPlans } from "@/data/tv-plans";
import { regions } from "@/data/tv-packages";

const cities = regions.flatMap((region) => region.cities).sort((a, b) => a.localeCompare(b, "tr"));

export function TvPackages() {
  const router = useRouter();
  const [filter, setFilter] = useState("Tümü");
  const [city, setCity] = useState("");
  const [selected, setSelected] = useState("super");
  const dialog = useRef<HTMLDialogElement>(null);
  const [detailId, setDetailId] = useState("super");
  const detail = tvPlans.find((plan) => plan.id === detailId)!;
  const plan = tvPlans.find((item) => item.id === selected)!;
  const region = regions.find((item) => item.cities.includes(city));
  const recommended = tvPlans.find((item) => item.region === region?.id);
  const mismatch = Boolean(city && plan.region && plan.region !== region?.id);
  const visible = tvPlans.filter((item) => filter === "Tümü" || item.group === filter);

  function changeCity(value: string) {
    setCity(value);
    const nextRegion = regions.find((item) => item.cities.includes(value));
    if (nextRegion) setSelected(tvPlans.find((item) => item.region === nextRegion.id)!.id);
  }
  function choose(id: string) {
    dialog.current?.close();
    router.push(`/iletisim?plan=${encodeURIComponent(id)}#iletisim-basvuru`);
  }

  return (
    <div className="tv-page">
      <nav className="tv-breadcrumb" aria-label="Sayfa yolu">
        <Link href="/">Anasayfa</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">TV Paketleri</span>
      </nav>
      <section className="tv-hero" aria-labelledby="tv-title">
        <div className="tv-hero-copy">
          <span className="section-eyebrow">UYDULU DIGITURK DÜNYASI</span>
          <h1 id="tv-title">
            Kumanda sizde.
            <br />
            <span>Heyecan evinizde.</span>
          </h1>
          <p>
            Son dakika golünden favori filminizin ilk sahnesine.
            <br />
            Sevdiğiniz her şey için bir Digiturk TV paketi var.
          </p>
          <a className="tv-primary" href="#tv-paketler">
            Paketinizi keşfedin <span aria-hidden="true">↓</span>
          </a>
          <div className="tv-hero-tags">
            <span>Uydu üzerinden yayın</span>
            <span>12 taksit seçeneği</span>
          </div>
        </div>
        <div className="tv-hero-art" aria-hidden="true">
          <div className="tv-screen">
            <div className="tv-screen-top">
              <span>EVİNİZİN EN GÜZEL KÖŞESİ</span>
              <span>✦</span>
            </div>
            <div className="tv-screen-title">
              Bir ekran.
              <br />
              <span>Binlerce hikâye.</span>
            </div>
            <div className="tv-screen-categories">
              <span>SPOR</span>
              <span>SİNEMA</span>
              <span>DİZİ</span>
            </div>
            <Image
              src="/digiturk-symbol.png"
              alt=""
              width={250}
              height={250}
              className="tv-screen-symbol"
            />
          </div>
          <div className="tv-screen-stand" />
          <div className="tv-floating-label">
            <span>✦</span>
            <div>
              Yıldızlarla dolu<strong>İzlemeye değer bir dünya.</strong>
            </div>
          </div>
        </div>
      </section>

      <section id="tv-paketler" className="tv-catalog" aria-labelledby="tv-catalog-title">
        <div className="tv-section-heading">
          <div>
            <span className="section-eyebrow">SEÇİM SİZİN</span>
            <h2 id="tv-catalog-title">Sizin ekranınız, sizin paketiniz.</h2>
          </div>
          <span className="tv-result-count">{visible.length} paket</span>
        </div>
        <div className="tv-catalog-tools">
          <div className="tv-filters" role="group" aria-label="Paket kategorisi">
            {planFilters.map((item) => (
              <button
                type="button"
                key={item}
                aria-pressed={filter === item}
                onClick={() => setFilter(item)}
              >
                {item}
              </button>
            ))}
          </div>
          <a href="#tv-bolgeler">
            İlinize özel fiyatı bulun <ArrowUpRightIcon />
          </a>
        </div>
        <div className="tv-plan-grid">
          {visible.map((item) => (
            <PlanCard
              key={item.id}
              plan={item}
              onChoose={choose}
              onShowDetails={(id) => {
                setDetailId(id);
                dialog.current?.showModal();
              }}
            />
          ))}
        </div>
        <p className="tv-fineprint">
          Fiyatlar paylaşılan kampanya görseline göre hazırlanmıştır. Güncel ücret, yayın kapsamı ve
          hediye koşulları başvuru sırasında doğrulanır.
        </p>
      </section>

      <section id="tv-bolgeler" className="tv-regions" aria-labelledby="tv-region-title">
        <div className="tv-region-intro">
          <div>
            <span className="section-eyebrow">AYNI HEYECAN, İLİNİZE ÖZEL AVANTAJ</span>
            <h2 id="tv-region-title">
              Yaşadığınız şehir,
              <br />
              <span>fiyatınızı değiştirebilir.</span>
            </h2>
            <p>Yıldız Dolu paketinin KOİ, Süper KOİ ve ulusal seçeneklerini karşılaştırın.</p>
          </div>
          <div className="tv-city-box">
            <label htmlFor="tv-city">Hangi ilde yaşıyorsunuz?</label>
            <select id="tv-city" value={city} onChange={(event) => changeCity(event.target.value)}>
              <option value="">İlinizi seçin</option>
              {cities.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
            <p role="status">
              {recommended
                ? `${city} için ${recommended.subtitle}: ${recommended.price} TL/ay`
                : "İlinizi seçin, size uygun bölgeyi birlikte bulalım."}
            </p>
          </div>
        </div>
        <div className="tv-region-grid">
          {regions.map((item) => {
            const regionalPlan = tvPlans.find((plan) => plan.region === item.id)!;
            return (
              <RegionCard
                key={item.id}
                region={item}
                plan={regionalPlan}
                recommended={region?.id === item.id}
                onChoose={choose}
              />
            );
          })}
        </div>
      </section>

      <section className="tv-explainer" aria-label="İzleme seçenekleri">
        <article>
          <span className="section-eyebrow">01 / UYDULU İZLEME</span>
          <h2>
            Televizyonunuzun
            <br />
            yeni favorisi.
          </h2>
          <p>
            Yayınlar çanak anten ve uydu alıcısıyla televizyonunuza ulaşır. Kurulum ihtiyacı ve
            varsa ek ekipman bedelleri, adresinizin altyapısına ve kampanya koşullarına göre
            belirlenir.
          </p>
          <a href="#tv-basvuru">
            Uydu paketimi seçeyim <span aria-hidden="true">→</span>
          </a>
        </article>
        <article>
          <span className="section-eyebrow">02 / KUTUSUZ İZLEME</span>
          <h2>
            Eğlence sizinle
            <br />
            gelsin mi?
          </h2>
          <p>
            İnternet üzerinden, desteklenen telefon, tablet veya Smart TV’nizde izlemeyi tercih
            ediyorsanız kutusuz paketleri inceleyebilirsiniz. Cihaz ve içerik kapsamı pakete göre
            değişir.
          </p>
          <a href="/neo-paketleri">
            Kutusuz seçenekleri keşfedin <ArrowUpRightIcon />
          </a>
        </article>
      </section>

      <section id="tv-basvuru" className="tv-application" aria-labelledby="tv-application-title">
        <div>
          <span className="section-eyebrow">BİR SONRAKİ ADIM</span>
          <h2 id="tv-application-title">
            Güzel bir başlangıç
            <br />
            <span>yapalım.</span>
          </h2>
          <p>
            İlinizi ve paketinizi seçin. Başvuru sayfasında iletişim bilgilerinizi paylaşarak devam
            edin.
          </p>
          <ol>
            <li>
              <span>01</span>Paketinizi belirleyin
            </li>
            <li>
              <span>02</span>Güncel koşulları inceleyin
            </li>
            <li>
              <span>03</span>Başvurunuzu tamamlayın
            </li>
          </ol>
          <a href="tel:08503467373" className="tv-application-phone">
            <small>Konuşarak karar vermek isterseniz</small>0850 346 73 73
          </a>
        </div>
        <form
          className="tv-application-form"
          onSubmit={(event) => {
            event.preventDefault();
            if (!mismatch)
              router.push(`/iletisim?plan=${encodeURIComponent(plan.id)}#iletisim-basvuru`);
          }}
        >
          <span className="section-eyebrow">PAKET SEÇİMİNİZ</span>
          <label htmlFor="application-city">Kurulum yapılacak il</label>
          <select
            id="application-city"
            required
            value={city}
            onChange={(event) => changeCity(event.target.value)}
          >
            <option value="">İlinizi seçin</option>
            {cities.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
          <label htmlFor="application-plan">Tercih ettiğiniz paket</label>
          <select
            id="application-plan"
            value={selected}
            onChange={(event) => setSelected(event.target.value)}
          >
            {tvPlans.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name} — {item.region ? item.subtitle : "Uydu"}
              </option>
            ))}
          </select>
          <div className="tv-selection-summary">
            <span>
              {plan.name}
              <small>{plan.subtitle}</small>
            </span>
            <strong>
              {plan.price}
              <small> TL/ay</small>
            </strong>
          </div>
          {mismatch && (
            <p role="alert" className="tv-form-error">
              Bu bölgesel paket {city} için uygun değil. {recommended?.subtitle} seçeneğini tercih
              edebilirsiniz.
            </p>
          )}
          <button type="submit" className="tv-primary" disabled={mismatch}>
            İletişim formuna devam et <span aria-hidden="true">→</span>
          </button>
          <p className="tv-form-note">
            Seçiminiz iletişim formuna aktarılır; başka bir siteye yönlendirilmezsiniz.
          </p>
        </form>
      </section>

      <PackageDialog dialogRef={dialog} plan={detail} onChoose={choose} />
    </div>
  );
}
