import Image from "next/image";

const packages = [
  {
    region: 3,
    price: 349,
    invoice: 399,
    code: "GDE",
    subtitle: "İlinize özel avantaj",
    cities:
      "Adana, Adıyaman, Ağrı, Ardahan, Batman, Bayburt, Bingöl, Bitlis, Çorum, Diyarbakır, Elazığ, Erzincan, Erzurum, Gaziantep, Gümüşhane, Hakkari, Hatay, Iğdır, Kahramanmaraş, Kars, Kilis, Malatya, Mardin, Mersin, Muş, Osmaniye, Siirt, Şanlıurfa, Şırnak, Tunceli, Van.",
  },
  {
    region: 2,
    price: 379,
    invoice: 439,
    code: "SBN",
    subtitle: "Eğlenceye yer açın",
    cities:
      "Afyonkarahisar, Aksaray, Amasya, Antalya, Artvin, Aydın, Balıkesir, Bartın, Bursa, Çankırı, Denizli, Düzce, Eskişehir, Giresun, Kastamonu, Kayseri, Kırıkkale, Kırşehir, Kocaeli, Konya, Kütahya, Manisa, Muğla, Nevşehir, Niğde, Ordu, Rize, Sakarya, Samsun, Sinop, Sivas, Tekirdağ, Tokat, Trabzon, Uşak, Yozgat, Zonguldak.",
  },
  {
    region: 1,
    price: 499,
    invoice: 579,
    code: "SED",
    subtitle: "Evinizin yıldızı",
    cities:
      "Ankara, Bilecik, Bolu, Burdur, Çanakkale, Edirne, Isparta, İstanbul, İzmir, Karabük, Karaman, Kırklareli, Yalova.",
  },
];

function Arrow() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      aria-hidden="true"
    >
      <path d="M4 12h16m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Star() {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden="true"
    >
      <path
        d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SatellitePackages() {
  return (
    <section id="uydu-paketleri" className="packages-section" aria-labelledby="packages-title">
      <div className="packages-heading">
        <div>
          <span className="section-eyebrow">TEK PAKET. YILDIZLARLA DOLU BİR DÜNYA.</span>
          <h2 id="packages-title">
            Eğlencenin en güzel hali,
            <br />
            <span>evinizde.</span>
          </h2>
          <p>
            Maçın heyecanı, filmin büyüsü, ailenin keyfi.
            <br className="desktop-break" /> İlinize özel uydu paketini seçin, Digiturk dünyasına
            katılın.
          </p>
        </div>
        <div className="packages-heading-side">
          <span className="package-type">
            <span /> UYDU PAKETLERİ
          </span>
          <span>3 bölge · Size özel fiyatlar</span>
        </div>
      </div>

      <div className="package-grid">
        {packages.map((pack) => (
          <article
            key={pack.code}
            className={`package-card region-${pack.region}`}
            aria-labelledby={`package-${pack.code}`}
          >
            <div className="package-card-top">
              <span className="region-badge">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
                  <circle cx="12" cy="10" r="2" />
                </svg>
                {pack.region}. BÖLGE
              </span>
              <span className="package-star">
                <Star />
              </span>
            </div>
            <div className="package-title">
              <p>{pack.subtitle}</p>
              <h3 id={`package-${pack.code}`}>
                Yıldız Dolu<span>Uydu + kutulu</span>
              </h3>
            </div>
            <div className="package-price">
              <span className="price-label">Kredi kartına 12 taksitle</span>
              <div>
                <strong>{pack.price}</strong>
                <span>
                  <b>TL</b>
                  <small>/ ay</small>
                </span>
              </div>
              <p>
                Faturalı tercih ederseniz <strong>{pack.invoice} TL / ay</strong>
              </p>
            </div>
            <ul className="package-features">
              <li>
                <span aria-hidden="true">✓</span>Tüm Süper Lig maçları
              </li>
              <li>
                <span aria-hidden="true">✓</span>Film, dizi ve çocuk kanalları
              </li>
              <li>
                <span aria-hidden="true">✓</span>Uydu üzerinden yayın keyfi
              </li>
            </ul>
            <figure className="package-map">
              <div className="map-label">
                <span>BÖLGENİZİ KEŞFEDİN</span>
                <span>{pack.region}. bölge</span>
              </div>
              <Image
                src={`/maps/region-${pack.region}.png`}
                alt={`${pack.region}. bölge kampanyasının geçerli olduğu iller mor renkle gösterilmiştir. İl listesi paket detaylarında yer alır.`}
                width={420}
                height={230}
                sizes="(max-width: 700px) 85vw, (max-width: 1100px) 40vw, 360px"
              />
              <figcaption>Mor ile işaretli illere özel fiyat.</figcaption>
            </figure>
            <details className="package-details">
              <summary>
                Paket ve bölge detayları
                <span className="details-plus" aria-hidden="true">
                  +
                </span>
              </summary>
              <div>
                <h4>Kampanyanın geçerli olduğu iller</h4>
                <p>{pack.cities}</p>
                <h4>Ödeme ve kurulum</h4>
                <p>
                  Kredi kartına 12 taksit veya 12 ay faturalı ödeme. Kurulum ve ek cihaz ücretleri
                  için kampanya koşullarını inceleyin.
                </p>
                <a
                  href={`/iletisim?plan=${pack.region === 3 ? "super" : pack.region === 2 ? "koi" : "national"}#iletisim-basvuru`}
                >
                  Kampanya için bilgi alın
                  <Arrow />
                </a>
              </div>
            </details>
            <div className="package-card-bottom">
              <a
                className="package-buy"
                href={`/iletisim?plan=${pack.region === 3 ? "super" : pack.region === 2 ? "koi" : "national"}#iletisim-basvuru`}
                aria-label={`${pack.region}. bölge Yıldız Dolu paketine başvur`}
              >
                Paketi seç, izlemeye başla
                <Arrow />
              </a>
              <span>12 ay boyunca eğlence sizinle</span>
            </div>
          </article>
        ))}
      </div>
      <div className="packages-footer">
        <p>
          Fiyatlar bölgenize göre değişir. Detaylardan ilinizin bulunduğu bölgeyi kontrol
          edebilirsiniz.
        </p>
        <a href="/iletisim#iletisim-basvuru">
          Tüm paketleri keşfet
          <Arrow />
        </a>
      </div>
    </section>
  );
}
