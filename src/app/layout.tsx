import type { Metadata } from "next";
import { CookieNotice } from "@/components/cookie-notice";
import { FloatingMatchCard } from "@/components/floating-match-card";
import { absoluteUrl, serializeJsonLd, siteConfig } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: siteConfig.origin,
  title: {
    default: "Digiturk | TV ve İnternet Paketleri",
    template: "%s | Digiturk Paketleri",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  creator: siteConfig.name,
  alternates: { canonical: "/" },
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: siteConfig.name,
    title: "Digiturk TV ve İnternet Paketleri",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary",
    title: "Digiturk TV ve İnternet Paketleri",
    description: siteConfig.description,
  },
  icons: {
    icon: { url: "/brand/digiturk-symbol.png", type: "image/png" },
    apple: "/brand/digiturk-symbol.png",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": absoluteUrl("/#organization"),
      name: siteConfig.legalName,
      alternateName: siteConfig.name,
      url: absoluteUrl("/"),
      logo: absoluteUrl("/brand/digiturk-logo.png"),
      telephone: siteConfig.phone,
      identifier: {
        "@type": "PropertyValue",
        name: "MERSİS",
        value: siteConfig.mersis,
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Kale Mahallesi, Emin Erişingil Bulvarı, Üçler Apartmanı No:2/D",
        addressLocality: "Merkez",
        addressRegion: "Niğde",
        addressCountry: "TR",
      },
      areaServed: { "@type": "Country", name: "Türkiye" },
      description:
        "Digiturk yeni abonelik işlemleri sunan yetkili bayi ve alternatif satış kanalıdır; Digiturk A.Ş.'nin resmi web sitesi değildir.",
    },
    {
      "@type": "WebSite",
      "@id": absoluteUrl("/#website"),
      url: absoluteUrl("/"),
      name: siteConfig.name,
      description: siteConfig.description,
      inLanguage: "tr-TR",
      publisher: { "@id": absoluteUrl("/#organization") },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr" className="h-full antialiased">
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(organizationJsonLd) }}
        />
        {children}
        <FloatingMatchCard />
        <CookieNotice />
      </body>
    </html>
  );
}
