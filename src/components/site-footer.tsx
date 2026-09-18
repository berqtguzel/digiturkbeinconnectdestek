import Image from "next/image";
import Link from "next/link";

const base = "https://ligtv-beinconnect.com.tr";
const columns = [
  {
    title: "KEŞFEDİN",
    links: [
      ["Uydu paketleri", "/digiturk-tv-paketleri"],
      ["NEO paketleri", "/neo-paketleri"],
      ["TV + İnternet", "/tv-internet-paketleri"],
      ["Maç takvimi", "/#mac-takvimi"],
    ],
  },
  {
    title: "YANINIZDAYIZ",
    links: [
      ["Sıkça sorulan sorular", "/sikca-sorulan-sorular"],
      ["Başvuru yapın", `${base}/basvuru`],
      ["İletişim", "/iletisim"],
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand-watermark" aria-hidden="true" />
      <div className="footer-inner">
        <div className="footer-invitation">
          <div>
            <span className="section-eyebrow">GÜZEL BİR ŞEY BAŞLIYOR</span>
            <h2>
              Bir paket seçin.
              <br />
              <span>Binlerce ana ortak olun.</span>
            </h2>
            <p>Sporun heyecanı, sinemanın büyüsü, evinizin konforunda.</p>
          </div>
          <div className="footer-invitation-actions">
            <a className="footer-apply" href={`${base}/basvuru`}>
              Size uygun paketi bulalım<span aria-hidden="true">↗</span>
            </a>
            <a className="footer-call" href="tel:08503467373">
              <span>Başvuru hattı</span>
              <strong>0850 346 73 73</strong>
            </a>
          </div>
          <span className="footer-orbit" aria-hidden="true" />
        </div>
        <div className="footer-navigation">
          <div className="footer-brand">
            <Link href="/" aria-label="Digiturk anasayfa">
              <Image
                src="/digiturk-logo.png"
                alt="Digiturk"
                width={140}
                height={50}
                className="brand-logo"
              />
            </Link>
            <p>
              Sevdiğiniz her şey,
              <br />
              aynı ekranda buluşsun.
            </p>
            <span className="footer-brand-note">TV · İNTERNET · EĞLENCE</span>
          </div>
          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3>{column.title}</h3>
              <ul>
                {column.links.map(([label, href]) => (
                  <li key={label}>
                    <a href={href}>{label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
          <div className="footer-contact">
            <h3>İLK ADIMI BİRLİKTE ATALIM</h3>
            <p>Paketler ve başvuru süreci hakkında bilgi alın.</p>
            <a href="tel:08503467373">
              0850 346 73 73<span aria-hidden="true">↗</span>
            </a>
            <a className="footer-top" href="#main-content">
              Sayfanın başına dön<span aria-hidden="true">↑</span>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            Bu site Digiturk’ün resmi web sitesi değildir. Marka ve logolar ilgili hak sahiplerine
            aittir. Paket kapsamı ve ücretler kampanya koşullarına göre değişebilir.
          </p>
          <span>© {new Date().getFullYear()} · Tüm hakları saklıdır.</span>
        </div>
      </div>
    </footer>
  );
}
