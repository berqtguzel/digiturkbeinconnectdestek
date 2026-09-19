import type { Metadata } from "next";
import { ApplicationSection } from "@/components/application-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { internetPlans, neoPlans } from "@/data/digital-plans";
import { tvPlans } from "@/data/tv-plans";
import "../../styles/contact.css";
import "../../styles/digital-packages.css";

export const metadata: Metadata = {
  title: "İletişim",
  description: "Yeni abonelik, paket seçimi ve başvuru süreci için iletişim bilgileri.",
  alternates: { canonical: "/iletisim" },
};

const contactPlans = [
  ...tvPlans.map((plan) => ({
    id: plan.id,
    name: `${plan.name} · ${plan.subtitle}`,
    category: `TV · ${plan.group}`,
    price: plan.price,
    note: "Uydu paketi",
    badge: plan.badge,
    features: plan.features,
  })),
  ...neoPlans,
  ...internetPlans,
];

export default async function ContactPage({ searchParams }: PageProps<"/iletisim">) {
  const params = await searchParams;
  const requestedPlan = typeof params.plan === "string" ? params.plan : undefined;

  return (
    <>
      <SiteHeader />
      <main id="main-content" className="contact-page">
        <section className="contact-hero">
          <div>
            <span className="section-eyebrow">İLETİŞİM</span>
            <h1>
              Size uygun paketi
              <br />
              <span>birlikte bulalım.</span>
            </h1>
            <p>
              Yeni abonelik, paket seçimi ve kampanya uygunluğu hakkında bilgi almak için bize
              ulaşın. Mevcut abonelik işlemleri için Digiturk resmi müşteri hizmetlerini kullanın.
            </p>
          </div>
          <a className="contact-phone" href="tel:08503467373">
            <span>BAŞVURU HATTI</span>
            <strong>0850 346 73 73</strong>
            <small>Pazartesi – Cumartesi · 09:00 – 18:00</small>
          </a>
        </section>
        <section className="contact-options" aria-label="İletişim seçenekleri">
          <article>
            <span>01</span>
            <h2>Yeni abonelik</h2>
            <p>Paketleri karşılaştırın, ilinizi seçin ve güvenli başvuru sayfasına geçin.</p>
            <a href="#iletisim-basvuru">Paket seçmeye başla →</a>
          </article>
          <article>
            <span>02</span>
            <h2>Sorularınız</h2>
            <p>
              Kurulum, NEO, internet ve ödeme hakkındaki yaygın soruların cevaplarını inceleyin.
            </p>
            <a href="/sikca-sorulan-sorular">Yardım merkezine git →</a>
          </article>
          <article>
            <span>03</span>
            <h2>Mevcut abonelik</h2>
            <p>Fatura, iptal ve teknik destek taleplerinizi Digiturk resmi kanallarına iletin.</p>
            <span className="contact-note">RESMİ DESTEK KANALI GEREKİR</span>
          </article>
        </section>
        <ApplicationSection
          plans={contactPlans}
          defaultPlanId={requestedPlan}
          id="iletisim-basvuru"
        />
      </main>
      <SiteFooter />
    </>
  );
}
