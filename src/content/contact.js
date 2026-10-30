// Contact page copy (/iletisim/, /en/contact/). Contact data itself lives in src/content/common.js (CONTACT).
// Sources: master plan §B.2, §B.5, §F.7 and owner decisions 4 (free intro call, "fixed written quote based on
// scope"; no prices, no response-time promise), 5 (e-mail, WhatsApp, LinkedIn, GitHub) and 7 (availability, which
// comes from common.availability).

// Topic keys (display order) and the query strings that preselect one live in src/routes.js (CONTACT_TOPICS,
// CONTACT_TOPIC_QUERY, contactPath), so every page builds the same links. The form sends the label of the chosen
// topic, never the key.

const contact = {
  tr: {
    heading: "İletişim",
    intro: "Bir pozisyon ya da proje için aşağıdaki formu doldurabilir veya bana doğrudan yazabilirsiniz.",
    channels: {
      heading: "Doğrudan ulaşın",
      timezone: "UTC+3",
    },
    form: {
      heading: "Mesaj gönderin",
      topicLegend: "Konu",
      topics: { job: "İş fırsatı", project: "Freelance proje", other: "Diğer" },
      optional: "isteğe bağlı",
      select: "Seçin",
      fields: {
        name: "Adınız soyadınız",
        email: "E-posta adresiniz",
        company: "Şirket",
        role: "Pozisyon veya ilan bağlantısı",
        projectType: "Proje türü",
        timeline: "Zamanlama",
        message: "Mesajınız",
      },
      projectTypes: [
        "Kurumsal web sitesi",
        "Web uygulaması",
        "E-ticaret",
        "Yönetim paneli veya otomasyon",
        "Entegrasyon",
        "Yapay zekâ özelliği",
        "Bakım ve destek",
        "Diğer",
      ],
      timelines: ["Mümkün olan en kısa sürede", "1–3 ay içinde", "3 aydan sonra", "Henüz belli değil"],
      // Owner decision 4: exactly these two phrases, no prices.
      projectNote: ["Ücretsiz ön görüşme", "Kapsama göre sabit, yazılı teklif"],
      messageHints: {
        job: "Pozisyonu, ekibi ve çalışma şeklini (ofis, hibrit veya uzaktan) birkaç cümleyle anlatabilirsiniz.",
        project: "Ne yapmak istediğinizi, varsa kullandığınız sistemleri ve hedefinizi birkaç cümleyle anlatın.",
        other: "Birkaç cümle yeterli.",
      },
      honeypot: "Bu alanı boş bırakın",
      privacy: {
        before:
          "Bilgilerinizi yalnızca mesajınıza dönüş yapmak için kullanırım. Form, mesajınızı EmailJS üzerinden iletir. Ayrıntılar: ",
        link: "KVKK aydınlatma metni",
        after: ".",
      },
      errors: {
        topic: "Lütfen bir konu seçin.",
        name: "Lütfen adınızı ve soyadınızı yazın.",
        emailMissing: "Lütfen e-posta adresinizi yazın.",
        emailInvalid: "Geçerli bir e-posta adresi girin (ör. ad@ornek.com).",
        messageMissing: "Lütfen mesajınızı yazın.",
        messageShort: "Lütfen biraz daha ayrıntı verin (en az 20 karakter).",
      },
      submit: "Gönder",
      sending: "Gönderiliyor…",
      success: "Teşekkürler, mesajınız gönderildi. Size e-postayla dönüş yapacağım.",
      error: "Mesajınız gönderilemedi. Lütfen tekrar deneyin ya da doğrudan e-posta gönderin:",
      rateLimited: "Az önce bir mesaj gönderdiniz. Yeni bir mesaj için lütfen bir dakika bekleyin.",
      // Labels of the details block appended to the e-mail (the message I receive), in the page language.
      mail: {
        topic: "Konu",
        company: "Şirket",
        role: "Pozisyon / ilan",
        projectType: "Proje türü",
        timeline: "Zamanlama",
      },
    },
  },
  en: {
    heading: "Contact",
    intro: "Write to me about a role or a project, using the form below or one of the direct channels.",
    channels: {
      heading: "Reach me directly",
      timezone: "UTC+3",
    },
    form: {
      heading: "Send a message",
      topicLegend: "Topic",
      topics: { job: "Job opportunity", project: "Freelance project", other: "Other" },
      optional: "optional",
      select: "Select…",
      fields: {
        name: "Full name",
        email: "Email address",
        company: "Company",
        role: "Role or job-post link",
        projectType: "Project type",
        timeline: "Timeline",
        message: "Message",
      },
      projectTypes: [
        "Company website",
        "Web app",
        "E-commerce",
        "Admin panel or automation",
        "Integration",
        "AI feature",
        "Maintenance and support",
        "Other",
      ],
      timelines: ["As soon as possible", "Within 1–3 months", "In more than 3 months", "Not sure yet"],
      projectNote: ["Free intro call", "Fixed written quote based on scope"],
      messageHints: {
        job: "Tell me about the role, the team and the setup (on-site, hybrid or remote) in a few sentences.",
        project: "Describe what you want to build, the systems you already use and your goal in a few sentences.",
        other: "A few sentences are enough.",
      },
      honeypot: "Leave this field empty",
      privacy: {
        before: "I use these details only to reply to your message. The form sends it through EmailJS; see the ",
        link: "privacy notice",
        after: ".",
      },
      errors: {
        topic: "Please choose a topic.",
        name: "Please enter your full name.",
        emailMissing: "Please enter your email address.",
        emailInvalid: "Enter a valid email address (e.g. name@example.com).",
        messageMissing: "Please write your message.",
        messageShort: "Please add a little more detail (at least 20 characters).",
      },
      submit: "Send",
      sending: "Sending…",
      success: "Thank you, your message has been sent. I'll reply by email.",
      error: "Your message could not be sent. Please try again or email me directly:",
      rateLimited: "You have just sent a message. Please wait a minute before sending another one.",
      mail: {
        topic: "Topic",
        company: "Company",
        role: "Role / job post",
        projectType: "Project type",
        timeline: "Timeline",
      },
    },
  },
};

export default contact;
