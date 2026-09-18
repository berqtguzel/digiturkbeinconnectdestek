import type { Metadata } from "next";
import { FaqPage } from "@/components/faq-page";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular",
  description: "Digiturk başvuru, paket, NEO, internet ve kurulum sorularının cevapları.",
  alternates: { canonical: "/sikca-sorulan-sorular" },
};
export default function FrequentlyAskedQuestionsPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <FaqPage />
      </main>
      <SiteFooter />
    </>
  );
}
