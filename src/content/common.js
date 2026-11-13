// Shared copy for every page: identity, navigation, buttons, 404 and contact data.

export const CONTACT = {
  email: "erdemsurentr@gmail.com",
  // The phone number is never rendered as text; it lives only inside this WhatsApp link (Contact and Services).
  whatsapp: "https://wa.me/905532641100",
  linkedin: "https://www.linkedin.com/in/erdemsurentr/",
  github: "https://github.com/erdestre",
  location: "İstanbul, Türkiye",
};

export const PERSON = {
  name: "Erdem Süren",
  alternateName: "Erdem Suren",
};

// Each language's name in that language (the TR/EN toggle's sr-only text).
export const LANG_NAMES = {
  tr: "Türkçe",
  en: "English",
};

const common = {
  tr: {
    name: "Erdem Süren",
    title: "Full-Stack Yazılım Mühendisi · .NET & React/Next.js",
    shortTitle: "Full-Stack Yazılım Mühendisi",
    descriptor: "Yapay zekâ ile uçtan uca",
    availability: "İşe ve freelance projelere açığım.",
    location: CONTACT.location,
    a11y: {
      skipToContent: "İçeriğe geç",
      mainNav: "Ana menü",
      mobileNav: "Mobil menü",
      homeLink: "Erdem Süren – Ana sayfa",
      newTab: "(yeni sekmede açılır)",
      breadcrumb: "Sayfa konumu",
      openMenu: "Menüyü aç",
      closeMenu: "Menüyü kapat",
      langGroup: "Dil seçimi",
      currentLang: "Seçili dil:",
      portrait: "Erdem Süren'in portresi",
    },
    nav: {
      home: "Ana sayfa",
      projects: "Projeler",
      services: "Hizmetler",
      cv: "CV",
      contact: "İletişim",
      privacy: "Gizlilik",
    },
    cta: {
      contact: "İletişim",
      projects: "Projeler",
      allProjects: "Tüm projeler",
      cv: "CV",
      email: "E-posta",
      linkedin: "LinkedIn",
      whatsapp: "WhatsApp",
      next: "Sonraki proje",
    },
    contactLabels: {
      email: "E-posta",
      whatsapp: "WhatsApp",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    notFound: {
      eyebrow: "404",
      heading: "Sayfa bulunamadı",
      text: "Bu sayfa yok ya da taşındı.",
    },
  },
  en: {
    name: "Erdem Süren",
    title: "Full-Stack Software Engineer · .NET & React/Next.js",
    shortTitle: "Full-Stack Software Engineer",
    descriptor: "AI-native, end to end",
    availability: "Open to roles and freelance projects.",
    location: "Istanbul, Türkiye",
    a11y: {
      skipToContent: "Skip to content",
      mainNav: "Main menu",
      mobileNav: "Mobile menu",
      homeLink: "Erdem Süren – Home",
      newTab: "(opens in a new tab)",
      breadcrumb: "Breadcrumb",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      langGroup: "Language",
      currentLang: "Current language:",
      portrait: "Portrait of Erdem Süren",
    },
    nav: {
      home: "Home",
      projects: "Projects",
      services: "Services",
      cv: "CV",
      contact: "Contact",
      privacy: "Privacy",
    },
    cta: {
      contact: "Contact",
      projects: "Projects",
      allProjects: "All projects",
      cv: "CV",
      email: "Email",
      linkedin: "LinkedIn",
      whatsapp: "WhatsApp",
      next: "Next project",
    },
    contactLabels: {
      email: "Email",
      whatsapp: "WhatsApp",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    notFound: {
      eyebrow: "404",
      heading: "Page not found",
      text: "This page does not exist or has moved.",
    },
  },
};

export default common;
