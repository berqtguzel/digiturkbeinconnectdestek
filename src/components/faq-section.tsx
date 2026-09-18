"use client";

import { useState } from "react";

const questions = [
  {
    id: "application",
    category: "Başvuru",
    question: "Başvuru süreci nasıl ilerliyor?",
    answer:
      "Size uygun paketi seçerek başvuru sayfasına geçebilirsiniz. İletişim bilgileriniz üzerinden paket, adres uygunluğu ve kurulum seçenekleri değerlendirilir. Ücret ve taahhüt koşullarını inceleyip onayladıktan sonra abonelik süreci tamamlanır.",
  },
  {
    id: "difference",
    category: "Paketler",
    question: "Uydulu paket ile kutusuz paket arasındaki fark nedir?",
    answer:
      "Uydulu pakette yayınlar uydu alıcısı üzerinden televizyonunuza ulaşır. Kutusuz pakette ise desteklenen cihazlardan internet bağlantısıyla izlersiniz. Cihaz desteği, eş zamanlı izleme ve içerik kapsamı seçtiğiniz pakete göre değişebilir.",
  },
  {
    id: "region",
    category: "Paketler",
    question: "İlime uygun kampanyayı nasıl bulabilirim?",
    answer:
      "Uydu paketleri bölümündeki haritalar ve açılır il listeleriyle bölgenizi kontrol edebilirsiniz. Aynı paketin fiyatı kampanya bölgesine göre değişebilir; başvurmadan önce ilinizin seçtiğiniz kampanyaya dahil olduğundan emin olun.",
  },
  {
    id: "installation",
    category: "Kurulum",
    question: "Kutusuz paket için teknik kurulum gerekiyor mu?",
    answer:
      "Kutusuz izleme için uydu anteni veya uydu alıcısı kurulumu gerekmez. Uyumlu bir cihaz, internet bağlantısı ve aktif abonelik gerekir. İzleyeceğiniz cihazın desteklenip desteklenmediğini paket koşullarından kontrol edebilirsiniz.",
  },
  {
    id: "content",
    category: "Paketler",
    question: "Seçtiğim pakette hangi maçları izleyebilirim?",
    answer:
      "İzleyebileceğiniz ligler, karşılaşmalar ve kanallar paketinizin içeriğine ve yayın haklarına bağlıdır. Satın almadan önce ilgilendiğiniz ligin veya takımın karşılaşmalarının paket kapsamında olduğunu kontrol edin.",
  },
  {
    id: "payment",
    category: "Başvuru",
    question: "Taksitli ve faturalı ödeme seçenekleri var mı?",
    answer:
      "Sunulan kampanyalarda kredi kartına taksitli veya aylık faturalı ödeme seçenekleri bulunabilir. Kart uygunluğu, taksit sayısı ve toplam tutar kampanyaya göre değişir. Seçenekleri paket kartlarından karşılaştırabilirsiniz.",
  },
  {
    id: "equipment",
    category: "Kurulum",
    question: "Kurulum veya ek cihaz ücreti öder miyim?",
    answer:
      "Kurulum ihtiyacı; adresinizdeki uydu altyapısına, mevcut ekipmana ve seçilen pakete bağlıdır. Ek cihaz veya dış kurulum bedeli varsa başvuru sırasında netleştirilmelidir. Kampanya koşullarındaki kurulum kapsamını inceleyin.",
  },
  {
    id: "official",
    category: "Başvuru",
    question: "Bu site Digiturk’ün resmi web sitesi mi?",
    answer:
      "Bu site Digiturk’ün resmi web sitesi değildir. Paketleri incelerken başvuru bağlantısının yönlendirdiği işletmenin bilgilerini ve kampanya koşullarını kontrol edebilirsiniz. Marka ve logolar ilgili hak sahiplerine aittir.",
  },
];
const categories = ["Tümü", "Paketler", "Başvuru", "Kurulum"];

export function FaqSection() {
  const [category, setCategory] = useState("Tümü");
  const [opened, setOpened] = useState<string | null>("application");
  const visible = questions.filter((item) => category === "Tümü" || item.category === category);

  return (
    <section id="faq" className="faq-section" aria-labelledby="faq-title">
      <aside className="faq-intro">
        <span className="section-eyebrow">AKLINIZDA SORU KALMASIN</span>
        <h2 id="faq-title">
          İyi bir başlangıç,
          <br />
          <span>net cevaplar.</span>
        </h2>
        <p>Paket seçiminden kuruluma, merak ettiklerinizi bir araya getirdik.</p>
        <div className="faq-help">
          <span className="faq-help-icon" aria-hidden="true">
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M4 13v-2a8 8 0 0 1 16 0v6a4 4 0 0 1-4 4h-3" />
              <rect x="2" y="10" width="4" height="8" rx="2" />
              <rect x="18" y="10" width="4" height="8" rx="2" />
            </svg>
          </span>
          <h3>Birlikte netleştirelim.</h3>
          <p>Size uygun paketi seçmek için başvuru hattını arayabilirsiniz.</p>
          <a href="tel:08503467373">
            0850 346 73 73<span aria-hidden="true">↗</span>
          </a>
          <span className="faq-help-caption">Paket ve yeni abonelik başvuruları</span>
        </div>
      </aside>
      <div className="faq-content">
        <div className="faq-content-top">
          <h3>Sıkça sorulan sorular</h3>
          <span>{String(questions.length).padStart(2, "0")} cevap</span>
        </div>
        <div className="faq-filters" role="group" aria-label="Soru kategorisi">
          {categories.map((item) => (
            <button
              type="button"
              key={item}
              aria-pressed={category === item}
              onClick={() => {
                setCategory(item);
                setOpened(null);
              }}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="faq-list">
          {visible.map((item) => {
            const expanded = opened === item.id;
            return (
              <article className={`faq-item${expanded ? " is-open" : ""}`} key={item.id}>
                <h4>
                  <button
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={`faq-answer-${item.id}`}
                    id={`faq-question-${item.id}`}
                    onClick={() => setOpened(expanded ? null : item.id)}
                  >
                    <span className="faq-number">
                      {String(questions.indexOf(item) + 1).padStart(2, "0")}
                    </span>
                    <span>{item.question}</span>
                    <span className="faq-toggle" aria-hidden="true">
                      {expanded ? "−" : "+"}
                    </span>
                  </button>
                </h4>
                <div
                  id={`faq-answer-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-question-${item.id}`}
                  hidden={!expanded}
                >
                  <p>{item.answer}</p>
                </div>
              </article>
            );
          })}
        </div>
        <p className="faq-bottom-note">
          Başvurmadan önce seçtiğiniz paketin güncel kampanya koşullarını inceleyin.
        </p>
      </div>
    </section>
  );
}
