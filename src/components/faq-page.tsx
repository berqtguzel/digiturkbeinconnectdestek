"use client";

import { useMemo, useState } from "react";
import { ArrowUpRightIcon } from "@/components/icons";
import { faqCategories } from "@/data/faq-data";

export function FaqPage() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState("basvuru-0");
  const normalized = query.trim().toLocaleLowerCase("tr");
  const categories = useMemo(
    () =>
      faqCategories
        .map((category) => ({
          ...category,
          items: category.items.filter(
            (item) =>
              !normalized || `${item.q} ${item.a}`.toLocaleLowerCase("tr").includes(normalized),
          ),
        }))
        .filter((category) => category.items.length),
    [normalized],
  );

  return (
    <div className="faq-page">
      <section className="faq-page-hero">
        <span className="section-eyebrow">YARDIM MERKEZİ</span>
        <h1>
          Sorunuz varsa,
          <br />
          <span>cevabı burada.</span>
        </h1>
        <p>
          Başvuru, paketler, NEO, kurulum ve internet hakkında merak ettikleriniz. Mevcut
          aboneliğinizle ilgili işlemler için Digiturk resmi müşteri hizmetlerini kullanın.
        </p>
        <label>
          <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" />
            <path d="m16 16 4 4" stroke="currentColor" />
          </svg>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Sorularda ara..."
          />
          <span>{faqCategories.reduce((sum, item) => sum + item.items.length, 0)} cevap</span>
        </label>
      </section>
      <nav className="faq-page-tabs" aria-label="SSS kategorileri">
        {faqCategories.map((category) => (
          <a key={category.id} href={`#sss-${category.id}`}>
            {category.title}
          </a>
        ))}
      </nav>
      <div className="faq-page-layout">
        <aside>
          <span>İÇİNDEKİLER</span>
          {faqCategories.map((category, index) => (
            <a key={category.id} href={`#sss-${category.id}`}>
              <small>0{index + 1}</small>
              {category.title}
              <span>→</span>
            </a>
          ))}
        </aside>
        <div className="faq-page-groups">
          {categories.map((category, categoryIndex) => (
            <section id={`sss-${category.id}`} key={category.id}>
              <div className="faq-group-heading">
                <span>0{categoryIndex + 1}</span>
                <div>
                  <h2>{category.title}</h2>
                  <p>{category.items.length} soru</p>
                </div>
              </div>
              <div>
                {category.items.map((item, index) => {
                  const id = `${category.id}-${index}`;
                  const expanded = open === id;
                  return (
                    <article className={expanded ? "is-open" : ""} key={item.q}>
                      <h3>
                        <button
                          type="button"
                          aria-expanded={expanded}
                          onClick={() => setOpen(expanded ? "" : id)}
                        >
                          <span>{String(index + 1).padStart(2, "0")}</span>
                          {item.q}
                          <b aria-hidden="true">{expanded ? "−" : "+"}</b>
                        </button>
                      </h3>
                      <div hidden={!expanded}>
                        <p>{item.a}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
      {categories.length === 0 && (
        <p className="faq-no-results">Aramanızla eşleşen bir soru bulunamadı.</p>
      )}
      <section className="faq-page-contact">
        <div>
          <span className="section-eyebrow">CEVABI BULAMADINIZ MI?</span>
          <h2>Birlikte çözelim.</h2>
          <p>Yeni abonelik ve paket seçimi için başvuru hattından destek alın.</p>
        </div>
        <a href="/iletisim#iletisim-basvuru">
          Hemen başvur <ArrowUpRightIcon />
        </a>
        <a href="tel:08503467373">
          <small>Başvuru hattı</small>0850 346 73 73
        </a>
      </section>
    </div>
  );
}
