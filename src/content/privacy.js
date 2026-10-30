// Privacy notice (/gizlilik/, /en/privacy/): KVKK aydınlatma metni for the contact form (master plan §F.8).
// Facts only, taken from the code:
// - the form fields and their purpose: src/components/ContactForm.jsx (name, e-mail, topic, message; company and
//   role for jobs; project type and timeline for projects);
// - delivery through EmailJS (api.emailjs.com), only when the form is sent; no EmailJS rate-limit storage is used;
// - the language toggle stores the chosen language in localStorage under "lang" and never sends or reads it
//   (src/components/layout/LanguageToggle.jsx).
// Controller: Erdem Süren as an individual (owner decision). Nothing beyond these facts and the owner's decisions is
// stated.
// Rights: KVKK (Law No. 6698) Art. 11 (1) (a)–(ğ).
//
// Shape: { eyebrow, heading, intro, updatedLabel, updated, sections: [{ id, title, blocks }] }
// A block is { p: string } (paragraph), { list: string[] } or { email: string, after?: string } (lead text + the
// e-mail link + optional text right after the link, e.g. the closing full stop).

export const PRIVACY_UPDATED = "2026-10-29";

const privacy = {
  tr: {
    eyebrow: "Gizlilik",
    heading: "KVKK aydınlatma metni",
    intro:
      "Bu metin, erdemsuren.com'daki iletişim formuyla paylaştığınız kişisel verilerin 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında nasıl işlendiğini açıklar.",
    updatedLabel: "Son güncelleme",
    updated: "29 Ekim 2026",
    sections: [
      {
        id: "controller",
        title: "Veri sorumlusu",
        blocks: [
          {
            p: "İletişim formuyla paylaştığınız kişisel verilerin veri sorumlusu, gerçek kişi olarak Erdem Süren'dir (İstanbul, Türkiye).",
          },
          { email: "E-posta:" },
        ],
      },
      {
        id: "data",
        title: "Hangi verileri işliyorum?",
        blocks: [
          { p: "Formu gönderdiğinizde şu bilgiler bana ulaşır:" },
          {
            list: [
              "Adınız ve soyadınız",
              "E-posta adresiniz",
              "Seçtiğiniz konu ve mesajınız",
              "Doldurduysanız, konuya göre şirket adı, pozisyon veya ilan bağlantısı, proje türü ve zamanlama",
            ],
          },
          {
            p: "Bu bilgiler, formu gönderdiğinizde elektronik ortamda toplanır. Bana doğrudan e-posta gönderirseniz e-postanızdaki bilgiler de aynı amaçla işlenir. WhatsApp, LinkedIn veya GitHub üzerinden yazdığınızda bu platformların kendi gizlilik koşulları da geçerlidir.",
          },
        ],
      },
      {
        id: "purpose",
        title: "Hangi amaçla kullanıyorum?",
        blocks: [
          {
            p: "Bu bilgileri yalnızca mesajınıza dönüş yapmak ve sizin başlattığınız iş ya da proje görüşmesini yürütmek için kullanırım. Başka bir amaçla kullanmam ve size pazarlama e-postası göndermem.",
          },
        ],
      },
      {
        id: "transfer",
        title: "EmailJS ve yurt dışına aktarım",
        blocks: [
          {
            p: "Form, mesajınızı bana e-posta olarak iletmek için EmailJS hizmetini kullanır. Formu gönderdiğinizde bilgileriniz tarayıcınızdan EmailJS'e gönderilir ve oradan e-posta adresime iletilir. Formu göndermediğiniz sürece EmailJS'e hiçbir bilgi gitmez.",
          },
          {
            p: "EmailJS bu bilgileri Türkiye dışındaki sunucularda işleyebilir; bu nedenle verileriniz yurt dışına aktarılabilir.",
          },
        ],
      },
      {
        id: "retention",
        title: "Saklama süresi",
        blocks: [
          {
            p: "Mesajınızı ve sonraki yazışmalarımızı e-posta hesabımda, görüşmemiz için gerekli olduğu sürece saklarım. Silinmesini istediğinizde, saklamamı gerektiren yasal bir yükümlülük yoksa silerim.",
          },
        ],
      },
      {
        id: "rights",
        title: "Haklarınız",
        blocks: [
          { p: "KVKK'nın 11. maddesine göre şu haklara sahipsiniz:" },
          {
            list: [
              "Kişisel verilerinizin işlenip işlenmediğini öğrenme",
              "İşlenmişse buna ilişkin bilgi talep etme",
              "İşlenme amacını ve verilerin bu amaca uygun kullanılıp kullanılmadığını öğrenme",
              "Verilerinizin yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme",
              "Eksik veya yanlış işlenmişse düzeltilmesini isteme",
              "KVKK'nın 7. maddesindeki şartlar çerçevesinde silinmesini veya yok edilmesini isteme",
              "Düzeltme, silme veya yok etme işlemlerinin, verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme",
              "Verilerinizin yalnızca otomatik sistemlerle analiz edilmesi sonucunda aleyhinize bir sonuç çıkmasına itiraz etme",
              "Kanuna aykırı işleme nedeniyle zarara uğramanız hâlinde zararın giderilmesini talep etme",
            ],
          },
          { email: "Bu haklarınızı kullanmak için bana e-posta gönderebilirsiniz:" },
        ],
      },
      {
        id: "browser",
        title: "Tarayıcınızda tutulanlar",
        blocks: [
          {
            p: "Dili değiştirdiğinizde seçiminiz tarayıcınızın yerel depolama alanında (localStorage) tutulur. Bu bilgi bana ya da başka bir yere gönderilmez.",
          },
        ],
      },
    ],
  },
  en: {
    eyebrow: "Privacy",
    heading: "Privacy notice",
    intro:
      "This notice explains how the personal data you share through the contact form on erdemsuren.com is processed under Türkiye's Personal Data Protection Law No. 6698 (KVKK).",
    updatedLabel: "Last updated",
    updated: "29 October 2026",
    sections: [
      {
        id: "controller",
        title: "Data controller",
        blocks: [
          {
            p: "The data controller for the personal data you share through the contact form is Erdem Süren, as an individual, based in Istanbul, Türkiye.",
          },
          { email: "Email:" },
        ],
      },
      {
        id: "data",
        title: "What I process",
        blocks: [
          { p: "When you send the form, I receive:" },
          {
            list: [
              "Your full name",
              "Your email address",
              "The topic you chose and your message",
              "Depending on the topic, if you filled them in: your company, the role or job-post link, the project type and the timeline",
            ],
          },
          {
            p: "This data is collected electronically when you send the form. If you email me directly, the details in your email are used for the same purpose. If you write to me on WhatsApp, LinkedIn or GitHub, that platform's own privacy terms also apply.",
          },
        ],
      },
      {
        id: "purpose",
        title: "Why I use it",
        blocks: [
          {
            p: "I use this data only to reply to your message and to continue the conversation about a role or a project that you started. I do not use it for anything else, and I do not send you marketing emails.",
          },
        ],
      },
      {
        id: "transfer",
        title: "EmailJS and transfer abroad",
        blocks: [
          {
            p: "The form uses the EmailJS service to deliver your message to me by email. When you send the form, your browser sends the data to EmailJS, which forwards it to my email address. Nothing is sent to EmailJS unless you send the form.",
          },
          {
            p: "EmailJS may process the data on servers outside Türkiye, so your data may be transferred abroad.",
          },
        ],
      },
      {
        id: "retention",
        title: "How long I keep it",
        blocks: [
          {
            p: "I keep your message and our follow-up emails in my mailbox for as long as our conversation needs them. If you ask me to delete them, I will, unless a legal obligation requires me to keep them.",
          },
        ],
      },
      {
        id: "rights",
        title: "Your rights",
        blocks: [
          { p: "Under Article 11 of the KVKK, you have the right to:" },
          {
            list: [
              "learn whether your personal data is processed",
              "request information about the processing if it is",
              "learn why your data is processed and whether it is used for that purpose",
              "know the third parties in Türkiye or abroad to whom your data is transferred",
              "ask for incomplete or inaccurate data to be corrected",
              "ask for your data to be deleted or destroyed under the conditions in Article 7 of the KVKK",
              "ask for these corrections, deletions or destruction to be passed on to the third parties who received your data",
              "object to a result against you that arises solely from the automated analysis of your data",
              "claim compensation if you suffer damage because your data was processed unlawfully",
            ],
          },
          { email: "To use any of these rights, write to me at", after: "." },
        ],
      },
      {
        id: "browser",
        title: "What your browser keeps",
        blocks: [
          {
            p: "When you switch the language, your choice is saved in your browser's local storage (localStorage). It is not sent to me or anywhere else.",
          },
        ],
      },
    ],
  },
};

export default privacy;
