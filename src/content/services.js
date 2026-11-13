// Services page copy (/hizmetler/, /en/services/). No prices, no response-time promise.
// `items` also feed the OfferCatalog JSON-LD (each card has id="service-<key>").

const services = {
  tr: {
    heading: "Hizmetler",
    intro: "İşletmeler ve ajanslar için yazılım.",
    items: [
      { key: "web", title: "Web uygulaması ve e-ticaret", text: "Yönetim paneli, kurumsal site, mağaza." },
      { key: "integration", title: "Entegrasyon", text: "Ödeme, e-fatura, kargo, pazaryeri, ERP." },
      { key: "ai", title: "Yapay zekâ özellikleri", text: "Asistan, içerik ve rapor üretimi." },
    ],
    stepsTitle: "Nasıl çalışırım",
    steps: ["Ücretsiz ön görüşme.", "Kapsama göre sabit, yazılı teklif.", "Teslim, yayın ve destek."],
    proof: "Son işler",
    cta: { title: "Projenizi anlatın", text: "Kısa bir mesaj yeter.", button: "İletişim" },
  },
  en: {
    heading: "Services",
    intro: "Software for businesses and agencies.",
    items: [
      { key: "web", title: "Web apps and e-commerce", text: "Admin panels, company sites, stores." },
      { key: "integration", title: "Integrations", text: "Payment, e-invoice, shipping, marketplaces, ERP." },
      { key: "ai", title: "AI features", text: "Assistants, content and report generation." },
    ],
    stepsTitle: "How I work",
    steps: ["Free intro call.", "Fixed written quote based on scope.", "Delivery, launch and support."],
    proof: "Recent work",
    cta: { title: "Tell me about your project", text: "A short message is enough.", button: "Contact" },
  },
};

// Case studies listed under "Recent work".
export const SERVICE_PROOF_SLUGS = ["darkpost", "olser-bilisim"];

export default services;
