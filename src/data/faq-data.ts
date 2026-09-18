export type FaqCategory = { id: string; title: string; items: { q: string; a: string }[] };

export const faqCategories: FaqCategory[] = [
  {
    id: "basvuru",
    title: "Başvuru",
    items: [
      {
        q: "Başvuru için hangi bilgiler gerekiyor?",
        a: "Hızlı başvuru için adınız, cep telefonunuz, iliniz ve ilgilendiğiniz paket yeterlidir. Başvuru sayfasında gerekli kimlik ve iletişim bilgileriyle işleminizi tamamlayabilirsiniz.",
      },
      {
        q: "Başvuru yapmak ücretli mi?",
        a: "Hayır. Başvuru formunu doldurmak ücretsizdir; ödeme, seçtiğiniz paketin kampanya koşullarına göre abonelik sırasında yapılır.",
      },
      {
        q: "Bu site Digiturk'ün resmi sitesi mi?",
        a: "Hayır. Bu site Digiturk'ün resmi web sitesi değildir ve yalnızca yeni abonelik başvurularına yönlendirme sağlar. Mevcut abonelik işlemleri için Digiturk resmi müşteri hizmetleri kanallarını kullanın.",
      },
    ],
  },
  {
    id: "genel",
    title: "Genel",
    items: [
      { q: "Fiyatlara KDV dahil mi?", a: "Evet, sitede gösterilen fiyatlara KDV dahildir." },
      {
        q: "Faturamı nasıl ödeyebilirim?",
        a: "Faturanızı Digiturk resmi ödeme kanalları, mobil uygulama veya otomatik ödeme talimatıyla ödeyebilirsiniz. Kullanılabilir yöntemleri resmi kanallardan doğrulayın.",
      },
      {
        q: "Fatura tutarımı nasıl öğrenebilirim?",
        a: "Fatura tutarınızı Digiturk resmi müşteri hizmetlerinden, mobil uygulamadan veya gönderilen faturadan öğrenebilirsiniz.",
      },
      {
        q: "Otomatik ödeme talimatı nasıl veririm?",
        a: "Digiturk resmi kanallarından kredi kartı veya banka hesabınız için otomatik ödeme talimatı oluşturabilirsiniz.",
      },
      {
        q: "Fatura ne zaman kesilir?",
        a: "Fatura kesim dönemi aboneliğinize göre belirlenir. Güncel tarihinizi resmi müşteri hizmetlerinden öğrenebilirsiniz.",
      },
      {
        q: "e-Fatura nasıl alınır?",
        a: "Kayıtlı e-posta adresinizi resmi müşteri hizmetleri üzerinden güncelleyerek faturalarınızı elektronik ortamda alabilirsiniz.",
      },
      {
        q: "Faturamda beklenmedik bir tutar var, ne yapmalıyım?",
        a: "Fatura itirazınızı Digiturk resmi müşteri hizmetleri kanallarına iletin. İnceleme ve dönüş süresi başvurunun niteliğine göre değişebilir.",
      },
      {
        q: "Paket değişikliğinde fatura nasıl hesaplanır?",
        a: "Ücretlendirme değişiklik tarihine ve paket koşullarına göre hesaplanır. Kesin tutarı değişiklikten önce resmi kanallardan teyit edin.",
      },
      {
        q: "Üyeliğimi nasıl iptal edebilirim?",
        a: "İptal işlemleri için Digiturk resmi müşteri hizmetleri veya yetkili hizmet noktalarını kullanın. Taahhütlü üyeliklerde ek bedel oluşabilir.",
      },
      {
        q: "Paket nasıl değiştirilir?",
        a: "Paket değişikliği için Digiturk resmi müşteri hizmetlerine başvurabilirsiniz. Geçerlilik zamanı paket koşullarına göre bildirilir.",
      },
      {
        q: "Üyeliğimi nasıl dondurabilirim?",
        a: "Dondurma süresi ve uygunluk koşulları pakete göre değişir. Talebinizi resmi müşteri hizmetlerine iletin.",
      },
      {
        q: "Hangi ödeme yöntemleri kabul edilir?",
        a: "Kullanılabilen kredi kartı, banka kartı, banka ödeme ve taksit seçenekleri kampanyaya göre değişebilir.",
      },
      {
        q: "Satın aldığım paketi nasıl iptal ederim?",
        a: "Paket iptali için Digiturk resmi müşteri hizmetleri kanallarını kullanın.",
      },
      {
        q: "Digiturk üyeliği nasıl iptal edilir?",
        a: "Gerekli kimlik doğrulaması ve başvuru yöntemi üyelik türüne göre değişebilir. Güncel iptal adımlarını Digiturk resmi kanallarından öğrenin.",
      },
    ],
  },
  {
    id: "digiturk",
    title: "Digiturk",
    items: [
      {
        q: "Uydulu Digiturk ile NEO arasındaki fark nedir?",
        a: "Uydulu Digiturk yayınları çanak anten ve uydu alıcısıyla televizyonunuza ulaştırır. NEO paketlerinde kutu ve kurulum gerekmez; internet üzerinden Smart TV, web ve mobil cihazlardan izlersiniz.",
      },
      {
        q: "KOİ ve Süper KOİ kampanyası nedir?",
        a: "KOİ ve Süper KOİ kapsamındaki illerde Yıldız Dolu Paketi için özel fiyat uygulanabilir. Uygunluk kurulum adresine göre belirlenir.",
      },
      {
        q: "Uydulu paketlerde taahhüt var mı?",
        a: "Uydulu kampanyalarda çoğunlukla 12 aylık kullanım sözü bulunur. Erken ayrılma ve paket düşürme koşullarını başvuru öncesinde inceleyin.",
      },
      {
        q: "Engelli indirimi nasıl alırım?",
        a: "%40 ve üzeri engel oranına sahip kişiler için dönemsel fırsatlar sunulabilir. Gerekli belge ve güncel koşulları resmi müşteri hizmetlerinden doğrulayın.",
      },
      {
        q: "Digiturk'ün bana sunduğu içerikler nelerdir?",
        a: "Paket kapsamında film, dizi, spor kanalları ve dijital içerikler bulunabilir. İçerik kapsamı seçilen pakete ve yayın haklarına göre değişir.",
      },
      {
        q: "Digiturk'le hangi maçları izleyebilirim?",
        a: "İzlenebilen ligler ve organizasyonlar paket kapsamına ve güncel yayın haklarına bağlıdır. Satın almadan önce paket detayını kontrol edin.",
      },
    ],
  },
  {
    id: "neo",
    title: "NEO",
    items: [
      {
        q: "NEO (kutusuz) paket için kurulum gerekir mi?",
        a: "Hayır. Uyumlu cihaz ve yeterli internet bağlantısıyla onay sonrasında izlemeye başlayabilirsiniz.",
      },
      {
        q: "NEO paketlerinde taahhüt var mı?",
        a: "NEO paketlerinin taahhüt koşulları seçilen kampanyaya göre değişebilir. Paket kartındaki güncel koşulları inceleyin.",
      },
      {
        q: "Öğrenci kampanyasından kimler yararlanabilir?",
        a: "Öğrenci kampanyasında edu.tr uzantılı öğrenci e-posta adresi ve uygunluk doğrulaması istenebilir. Ekran sayısı ve kullanım koşulları kampanyada belirtilir.",
      },
      {
        q: "beIN CONNECT uygulamasını nasıl indiririm?",
        a: "Uyumlu Smart TV, telefon ve tabletlerin uygulama mağazasında beIN CONNECT araması yaparak indirebilirsiniz.",
      },
      {
        q: "Smart TV'de giriş yapamıyorum.",
        a: "Kullanıcı bilgilerinizi ve büyük-küçük harf kullanımını kontrol edin. Şifre yenileme için resmi destek kanallarını kullanın.",
      },
      {
        q: "Kaç cihazdan eş zamanlı izleyebilirim?",
        a: "Cihaz ve eş zamanlı izleme sınırı pakete göre değişir. Güncel sınırı paket koşullarında kontrol edin.",
      },
      {
        q: "Uygulama sürekli hata veriyor.",
        a: "Uygulamayı yeniden başlatın, güncelleyin veya tekrar kurun. İnternet bağlantınızı kontrol edin; sorun sürerse resmi teknik desteğe başvurun.",
      },
    ],
  },
  {
    id: "internet",
    title: "İnternet",
    items: [
      {
        q: "Hangi internet hızını alabilirim?",
        a: "TV + İnternet paketleri 35 Mbps seçeneği içerebilir. Adresinizde alınabilecek gerçek hız altyapı kontrolünden sonra belirlenir.",
      },
      {
        q: "İnternet hızımı nasıl artırabilirim?",
        a: "Altyapınız destekliyorsa daha yüksek hızlı pakete geçebilirsiniz. Uygun seçenekleri hizmet sağlayıcınızdan öğrenin.",
      },
      {
        q: "İnternet kesintisini nasıl bildiririm?",
        a: "Kesintileri Digiturk resmi teknik destek kanallarına bildirerek bölgesel durum ve arıza kaydı hakkında bilgi alın.",
      },
      {
        q: "İnternet bağlantım çok yavaş.",
        a: "Modeminizi yeniden başlatın ve diğer cihazların kullanımını kontrol edin. Sorun devam ederse teknik destek isteyin.",
      },
      {
        q: "Wi-Fi şifremi nasıl değiştirebilirim?",
        a: "Şifreyi modem arayüzünden değiştirebilirsiniz. Adres ve giriş bilgileri modem modeline göre değişir.",
      },
    ],
  },
  {
    id: "kurulum",
    title: "Kurulum ve Teknik",
    items: [
      {
        q: "Uydulu Digiturk kurulum ücreti ne kadar?",
        a: "İç ve dış kurulum, çanak, LNB ve ek cihaz ücretleri kampanyaya ve adrese göre değişebilir. Güncel toplam bedeli başvuru sırasında yazılı olarak doğrulayın.",
      },
      {
        q: "PIN kodumu unuttum, ne yapmalıyım?",
        a: "Kimlik doğrulamasının ardından PIN sıfırlamak için Digiturk resmi müşteri hizmetlerini kullanın.",
      },
      {
        q: "Ebeveyn kontrolü PIN'ini nasıl değiştirebilirim?",
        a: "Alıcı menüsündeki Ayarlar ve Ebeveyn Kontrolü bölümünden değiştirebilirsiniz.",
      },
      {
        q: "Yayın gelmiyor, ne yapmalıyım?",
        a: "Alıcıyı kapatıp 30 saniye sonra açın; anten ve kablo bağlantılarını kontrol edin. Sorun sürerse teknik destek alın.",
      },
      {
        q: "Ekranda 'Sinyal Yok' uyarısı görüyorum.",
        a: "Kablo bağlantılarını kontrol edin. Anten yönü ve hava koşulları sinyali etkileyebilir; gerekirse teknik servis isteyin.",
      },
      {
        q: "Görüntü donuyor veya takılıyor.",
        a: "Uydu sinyalini veya internet bağlantısını kontrol edin. Düşük sinyal devam ederse teknik destek alın.",
      },
      {
        q: "Alıcım açılmıyor.",
        a: "Güç kablosunu çıkarıp bir dakika bekleyin ve yeniden takın. Sorun sürerse resmi müşteri hizmetlerine başvurun.",
      },
      {
        q: "Uzaktan kumanda çalışmıyor.",
        a: "Pilleri değiştirin ve alıcıyla kumanda arasında engel bulunmadığını kontrol edin. Gerekirse yeniden eşleştirme desteği alın.",
      },
      {
        q: "Görüntülü çağrı merkezine nasıl bağlanabilirim?",
        a: "İşitme engelli kullanıcılar için sunulan görüntülü destek hizmetinin güncel bağlantı ve çalışma saatlerini Digiturk resmi kanallarından kontrol edin.",
      },
    ],
  },
];
