import type { Metadata } from "next";
import { DigitalPackagesPage } from "@/components/digital-packages-page";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { neoPlans } from "@/data/digital-plans";

export const metadata: Metadata = {
  title: "NEO Paketleri – Kutusuz Digiturk",
  description:
    "Kurulumsuz NEO paketlerini karşılaştırın ve internet üzerinden hemen izlemeye başlayın.",
  alternates: { canonical: "/neo-paketleri" },
};
export default function NeoPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <DigitalPackagesPage mode="neo" plans={neoPlans} />
      </main>
      <SiteFooter />
    </>
  );
}
