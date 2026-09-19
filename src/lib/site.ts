const fallbackOrigin = "https://digiturkbeinconnectdestek.vercel.app";

export const siteConfig = {
  name: "Digiturk Paketleri",
  description:
    "Digiturk TV ve internet paketlerini karşılaştırın, ilinize uygun kampanyayı keşfedin.",
  origin: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? fallbackOrigin),
  phone: "0850 346 73 73",
  phoneHref: "tel:08503467373",
  legalName:
    "DENGE CENTER TEKNOLOJİ İLETİŞİM BİLGİSAYAR GIDA İNŞAAT SANAYİ VE TİCARET LİMİTED ŞİRKETİ",
  mersis: "0291154456700001",
  address: "Kale Mahallesi, Emin Erişingil Bulvarı, Üçler Apartmanı No:2/D, Merkez / Niğde",
} as const;

export function absoluteUrl(pathname: string) {
  return new URL(pathname, siteConfig.origin).toString();
}

export function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
