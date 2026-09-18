import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { TvPackages } from "@/components/tv-packages";
import { tvPlans } from "@/data/tv-plans";
import { absoluteUrl, serializeJsonLd } from "@/lib/site";

const title = "Uydulu Digiturk TV Paketleri";
const description =
  "Yıldız Dolu, Taraftar ve eğlence paketlerini karşılaştırın. İlinizi seçerek KOİ ve Süper KOİ kampanyalarını keşfedin.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/digiturk-tv-paketleri",
  },
  openGraph: {
    title,
    description,
    url: "/digiturk-tv-paketleri",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": absoluteUrl("/digiturk-tv-paketleri#webpage"),
      url: absoluteUrl("/digiturk-tv-paketleri"),
      name: title,
      description,
      inLanguage: "tr-TR",
      breadcrumb: { "@id": absoluteUrl("/digiturk-tv-paketleri#breadcrumb") },
      mainEntity: { "@id": absoluteUrl("/digiturk-tv-paketleri#packages") },
    },
    {
      "@type": "BreadcrumbList",
      "@id": absoluteUrl("/digiturk-tv-paketleri#breadcrumb"),
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Anasayfa",
          item: absoluteUrl("/"),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "TV Paketleri",
          item: absoluteUrl("/digiturk-tv-paketleri"),
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": absoluteUrl("/digiturk-tv-paketleri#packages"),
      name: "Uydulu Digiturk TV paketleri",
      numberOfItems: tvPlans.length,
      itemListElement: tvPlans.map((plan, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Service",
          name: `${plan.name} ${plan.subtitle}`,
          description: plan.features.join(", "),
          offers: {
            "@type": "Offer",
            price: plan.price,
            priceCurrency: "TRY",
            url: absoluteUrl("/digiturk-tv-paketleri#tv-basvuru"),
            availability: "https://schema.org/InStock",
          },
        },
      })),
    },
  ],
};

export default function TvPackagesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(structuredData) }}
      />
      <SiteHeader />
      <main id="main-content" className="page-canvas">
        <TvPackages />
      </main>
      <SiteFooter />
    </>
  );
}
