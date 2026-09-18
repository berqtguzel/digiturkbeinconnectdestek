export type TvPlan = {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  badge: string;
  group: "Bölgesel" | "Spor" | "Eğlence";
  region: number | null;
  code: string | null;
  icon: string;
  features: string[];
};

export const planFilters = ["Tümü", "Bölgesel", "Spor", "Eğlence"] as const;

export const tvPlans: TvPlan[] = [
  {
    id: "super",
    name: "Yıldız Dolu",
    subtitle: "Süper KOİ Paketi",
    price: 499,
    badge: "İlinize özel",
    group: "Bölgesel",
    region: 3,
    code: "GDE",
    icon: "✦",
    features: [
      "Süper KOİ kapsamındaki 31 ile özel",
      "Trendyol Süper Lig",
      "Avrupa ligleri ve Formula 1",
      "Film, dizi ve çocuk kanalları",
    ],
  },
  {
    id: "koi",
    name: "Yıldız Dolu",
    subtitle: "KOİ Paketi",
    price: 549,
    badge: "37 ilde avantaj",
    group: "Bölgesel",
    region: 2,
    code: "SBN",
    icon: "✧",
    features: [
      "KOİ kapsamındaki 37 ile özel",
      "Trendyol Süper Lig",
      "Avrupa ligleri ve Formula 1",
      "Film, dizi ve çocuk kanalları",
    ],
  },
  {
    id: "national",
    name: "Yıldız Dolu",
    subtitle: "Ulusal Paket",
    price: 749,
    badge: "Spor + eğlence",
    group: "Spor",
    region: 1,
    code: "SED",
    icon: "★",
    features: [
      "Trendyol Süper Lig",
      "Avrupa ligleri",
      "Formula 1",
      "Dizi, film ve çok daha fazlası",
    ],
  },
  {
    id: "entertainment",
    name: "Eğlencenin ve Avrupa’nın Yıldızı",
    subtitle: "Ekranda keşfedecek çok şey var",
    price: 399,
    badge: "1 ay Taraftar Paketi hediye",
    group: "Eğlence",
    region: null,
    code: null,
    icon: "▷",
    features: [
      "Avrupa ligleri",
      "Formula 1",
      "Ödüllü dizi ve filmler",
      "1 ay Taraftar Paketi hediye",
    ],
  },
  {
    id: "fan",
    name: "Taraftar Paketi",
    subtitle: "Renklerine gönül verenlere",
    price: 599,
    badge: "1 ay Yıldız Dolu hediye",
    group: "Spor",
    region: null,
    code: null,
    icon: "⚑",
    features: [
      "Takımınızın Trendyol Süper Lig maçları",
      "Uydu alıcısıyla televizyonunuzda izleme",
      "1 ay Yıldız Dolu Paketi hediye",
    ],
  },
];
