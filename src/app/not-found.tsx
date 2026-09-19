import type { Metadata } from "next";
import Link from "next/link";
import { WifiOff } from "lucide-react";
import { ArrowUpRightIcon } from "@/components/icons";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "../styles/not-found.css";

export const metadata: Metadata = {
  title: "Sayfa Bulunamadı",
  description: "Aradığınız sayfa bulunamadı. Digiturk TV, NEO ve internet paketlerini inceleyin.",
  alternates: { canonical: null },
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="not-found-page">
        <section className="not-found-hero" aria-labelledby="not-found-title">
          <div className="not-found-visual" aria-hidden="true">
            <span className="not-found-orbit not-found-orbit-one" />
            <span className="not-found-orbit not-found-orbit-two" />
            <div className="not-found-code">
              <span>4</span>
              <span className="not-found-signal">
                <WifiOff aria-hidden="true" strokeWidth={1.8} />
              </span>
              <span>4</span>
            </div>
          </div>

          <div className="not-found-content">
            <span className="not-found-eyebrow"><i /> YAYIN AKIŞINDA YOK</span>
            <h1 id="not-found-title">
              Bu sayfayı<br /><span>bulamadık.</span>
            </h1>
            <p>
              Aradığınız bağlantı taşınmış veya artık yayında olmayabilir. Ana sayfaya dönebilir
              ya da paketleri incelemeye devam edebilirsiniz.
            </p>
            <div className="not-found-actions">
              <Link className="not-found-primary" href="/">
                Ana sayfaya dön <ArrowUpRightIcon />
              </Link>
              <Link className="not-found-secondary" href="/iletisim#iletisim-basvuru">
                Yardım alın
              </Link>
            </div>
          </div>
        </section>

        <nav className="not-found-routes" aria-label="Popüler sayfalar">
          <span>KEŞFETMEYE DEVAM EDİN</span>
          <div>
            <Link href="/digiturk-tv-paketleri">
              <small>01</small><strong>TV Paketleri</strong><ArrowUpRightIcon />
            </Link>
            <Link href="/neo-paketleri">
              <small>02</small><strong>NEO Paketleri</strong><ArrowUpRightIcon />
            </Link>
            <Link href="/tv-internet-paketleri">
              <small>03</small><strong>TV + İnternet</strong><ArrowUpRightIcon />
            </Link>
          </div>
        </nav>
      </main>
      <SiteFooter />
    </>
  );
}
