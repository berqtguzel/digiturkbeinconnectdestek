import type { Metadata } from "next";
import { DigitalPackagesPage } from "@/components/digital-packages-page";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { internetPlans } from "@/data/digital-plans";

export const metadata: Metadata = {
  title: "TV + İnternet Paketleri",
  description: "Digiturk uydu ve NEO internet paketlerini karşılaştırın.",
  alternates: { canonical: "/tv-internet-paketleri" },
};
export default function TvInternetPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <DigitalPackagesPage mode="internet" plans={internetPlans} />
      </main>
      <SiteFooter />
    </>
  );
}
