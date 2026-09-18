const fallbackOrigin = "http://localhost:3000";

export const siteConfig = {
  name: "Digiturk Paketleri",
  description:
    "Digiturk TV ve internet paketlerini karşılaştırın, ilinize uygun kampanyayı keşfedin.",
  origin: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? fallbackOrigin),
  phone: "0850 346 73 73",
  phoneHref: "tel:08503467373",
} as const;

export function absoluteUrl(pathname: string) {
  return new URL(pathname, siteConfig.origin).toString();
}

export function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
