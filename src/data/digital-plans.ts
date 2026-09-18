export type DigitalPlan = {
  id: string;
  name: string;
  category: string;
  price: number;
  note: string;
  badge?: string;
  features: string[];
};

export const internetPlans: DigitalPlan[] = [
  {
    id: "uydu-yildiz-net",
    name: "İnternetli Yıldız Dolu",
    category: "Uydu + İnternet",
    price: 1269,
    note: "35 Mbps · 12 ay",
    badge: "Tüm maçlar",
    features: [
      "35 Mbps limitsiz internet",
      "Trendyol Süper Lig",
      "Avrupa ligleri",
      "Formula 1 ve eğlence kanalları",
    ],
  },
  {
    id: "uydu-eglence-net",
    name: "İnternetli Eğlencenin Yıldızı",
    category: "Uydu + İnternet",
    price: 899,
    note: "35 Mbps · 12 ay",
    badge: "1 yıl Taraftar hediye",
    features: [
      "35 Mbps limitsiz internet",
      "Avrupa ligleri",
      "Film ve diziler",
      "1 yıl Taraftar Paketi",
    ],
  },
  {
    id: "neo-taraftar-net",
    name: "İnternetli Taraftar",
    category: "NEO + İnternet",
    price: 729,
    note: "35 Mbps · kutusuz",
    badge: "Kurulum yok",
    features: [
      "35 Mbps limitsiz internet",
      "Takımınızın lig maçları",
      "Uydu alıcısı gerekmez",
      "Telefon, tablet ve Smart TV",
    ],
  },
  {
    id: "neo-yildiz-net",
    name: "NEO İnternetli Yıldız Dolu",
    category: "NEO + İnternet",
    price: 1099,
    note: "35 Mbps · kutusuz",
    badge: "Online izle",
    features: [
      "35 Mbps limitsiz internet",
      "Trendyol Süper Lig",
      "Avrupa ligleri",
      "Formula 1 ve ödüllü yapımlar",
    ],
  },
];

export const neoPlans: DigitalPlan[] = [
  {
    id: "neo-yildiz",
    name: "NEO Yıldız Dolu",
    category: "NEO · Kutusuz",
    price: 599,
    note: "Aylık ödeme",
    badge: "Taahhütsüz",
    features: ["Kutu ve kurulum gerekmez", "Trendyol Süper Lig", "Avrupa ligleri", "Formula 1"],
  },
  {
    id: "neo-taraftar",
    name: "NEO Taraftar",
    category: "NEO · Kutusuz",
    price: 479,
    note: "Aylık ödeme",
    badge: "1 ay Yıldız Dolu",
    features: [
      "Takımınızın lig maçları",
      "Telefon, tablet ve TV",
      "Kurulum gerekmez",
      "1 ay Yıldız Dolu hediye",
    ],
  },
  {
    id: "neo-ogrenci",
    name: "Yıldız Dolu Öğrenci",
    category: "NEO · Kutusuz",
    price: 199,
    note: "Öğrencilere özel",
    badge: "Öğrenci fırsatı",
    features: [
      "Üniversite öğrencilerine özel",
      ".edu.tr e-posta ile başvuru",
      "Trendyol Süper Lig",
      "Mobil ve tablette izleme",
    ],
  },
];
