// Privacy notice (/gizlilik/, /en/privacy/), KVKK (Law No. 6698). Facts from the code:
// - no form, no cookies, no analytics; the language toggle stores the chosen language in localStorage ("lang") and
//   never sends it (src/components/layout/LanguageToggle.jsx);
// - people reach Erdem directly (e-mail, WhatsApp, LinkedIn, GitHub).
// Controller: Erdem Süren as an individual. Rights: KVKK Art. 11.
// A block is { p }, { list } or { email, after? } (lead text + the e-mail link).

export const PRIVACY_UPDATED = "2026-11-13";

const privacy = {
  tr: {
    heading: "Gizlilik",
    intro: "Bu sitede form, çerez ve analiz aracı yok.",
    updatedLabel: "Güncelleme",
    updated: "13 Kasım 2026",
    sections: [
      {
        id: "controller",
        title: "Veri sorumlusu",
        blocks: [{ p: "Erdem Süren (gerçek kişi), İstanbul." }, { email: "E-posta:" }],
      },
      {
        id: "messages",
        title: "Bana yazarsanız",
        blocks: [
          {
            p: "E-posta, WhatsApp veya LinkedIn mesajınızı yalnızca dönüş için kullanırım. Pazarlama yok. Görüşme sürdükçe saklarım; isterseniz silerim, yasal zorunluluk varsa saklarım. Platformların kendi gizlilik koşulları da geçerlidir.",
          },
        ],
      },
      {
        id: "browser",
        title: "Tarayıcı",
        blocks: [{ p: "Dil seçiminiz tarayıcınızda (localStorage) tutulur. Hiçbir yere gönderilmez." }],
      },
      {
        id: "rights",
        title: "Haklarınız (KVKK md. 11)",
        blocks: [
          {
            list: [
              "İşlenip işlenmediğini öğrenme",
              "Bilgi talep etme",
              "Amacını ve amaca uygun kullanılıp kullanılmadığını öğrenme",
              "Aktarıldığı üçüncü kişileri bilme",
              "Düzeltilmesini isteme",
              "Silinmesini veya yok edilmesini isteme",
              "Bu işlemlerin üçüncü kişilere bildirilmesini isteme",
              "Yalnızca otomatik analizle çıkan aleyhe sonuca itiraz",
              "Zararın giderilmesini isteme",
            ],
          },
          { email: "Başvuru:" },
        ],
      },
    ],
  },
  en: {
    heading: "Privacy",
    intro: "No forms, no cookies and no analytics on this site.",
    updatedLabel: "Updated",
    updated: "13 November 2026",
    sections: [
      {
        id: "controller",
        title: "Data controller",
        blocks: [{ p: "Erdem Süren (individual), Istanbul." }, { email: "Email:" }],
      },
      {
        id: "messages",
        title: "If you write to me",
        blocks: [
          {
            p: "I use your email, WhatsApp or LinkedIn message only to reply. No marketing. Kept while we talk; ask and I delete it, unless the law requires keeping it. Each platform's own privacy terms also apply.",
          },
        ],
      },
      {
        id: "browser",
        title: "Your browser",
        blocks: [{ p: "Your language choice is kept in your browser (localStorage). It is never sent anywhere." }],
      },
      {
        id: "rights",
        title: "Your rights (KVKK Art. 11)",
        blocks: [
          {
            list: [
              "Learn whether your data is processed",
              "Request information about it",
              "Learn the purpose and whether it is used for it",
              "Know the third parties it is transferred to",
              "Ask for corrections",
              "Ask for deletion or destruction",
              "Have these passed on to third parties",
              "Object to a result based only on automated analysis",
              "Claim compensation for damage",
            ],
          },
          { email: "Requests:" },
        ],
      },
    ],
  },
};

export default privacy;
