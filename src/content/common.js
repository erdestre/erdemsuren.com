// Shared copy for every page: identity, navigation, buttons, footer, language toggle, 404 and contact data.
// Identity and contact follow the owner decisions (scratchpad/foundation-notes/CONTRACTS.md §1).

export const CONTACT = {
  email: "erdemsurentr@gmail.com",
  // Owner decision 5: the phone number is never rendered as text. It lives only inside this WhatsApp link, and the
  // link appears on the Contact and Services pages only.
  whatsapp: "https://wa.me/905532641100",
  linkedin: "https://www.linkedin.com/in/erdemsurentr/",
  github: "https://github.com/erdestre",
  location: "İstanbul, Türkiye",
};

// English copy writes the city without the Turkish dotted capital (master plan §F.0).
const LOCATION_EN = "Istanbul, Türkiye";

export const PERSON = {
  name: "Erdem Süren",
  alternateName: "Erdem Suren",
};

// Each language's name in that language. The toggle link reads "EN" + sr-only " – English", so its accessible
// name starts with the visible label (WCAG 2.5.3) and is spoken in the target language (the link carries lang).
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
    role: "Eribitech Kurucusu",
    availability: "Tam zamanlı pozisyonlara ve seçili freelance projelere açığım.",
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
      about: "Hakkımda",
      cv: "CV",
      contact: "İletişim",
      privacy: "Gizlilik",
    },
    cta: {
      workWithMe: "Birlikte çalışalım",
      contact: "İletişime geçin",
      projects: "Projeleri inceleyin",
      allProjects: "Tüm projeler",
      services: "Hizmetleri inceleyin",
      allServices: "Tüm hizmetler",
      cv: "CV'yi görüntüleyin",
      about: "Hakkımda",
      email: "E-posta gönderin",
      contactForm: "İletişim formu",
      linkedin: "LinkedIn",
      whatsapp: "WhatsApp'tan yazın",
      details: "Projeyi inceleyin",
      visitSite: "Siteyi ziyaret edin",
      backToProjects: "Tüm projelere dön",
    },
    contactLabels: {
      email: "E-posta",
      whatsapp: "WhatsApp",
      linkedin: "LinkedIn",
      github: "GitHub",
      location: "Konum",
    },
    footer: {
      pagesHeading: "Sayfalar",
      elsewhereHeading: "Bağlantılar",
      contactHeading: "İletişim",
    },
    notFound: {
      eyebrow: "Hata 404",
      heading: "Aradığınız sayfa bulunamadı",
      text: "Sayfa taşınmış ya da kaldırılmış olabilir. Aşağıdaki bağlantılardan devam edebilirsiniz.",
    },
  },
  en: {
    name: "Erdem Süren",
    title: "Full-Stack Software Engineer · .NET & React/Next.js",
    shortTitle: "Full-Stack Software Engineer",
    descriptor: "AI-native, end to end",
    role: "Founder, Eribitech",
    availability: "Open to full-time roles and selected freelance projects.",
    location: LOCATION_EN,
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
      about: "About",
      cv: "CV",
      contact: "Contact",
      privacy: "Privacy",
    },
    cta: {
      workWithMe: "Work with me",
      contact: "Get in touch",
      projects: "See my work",
      allProjects: "All projects",
      services: "View services",
      allServices: "All services",
      cv: "View CV",
      about: "About me",
      email: "Email me",
      contactForm: "Contact form",
      linkedin: "LinkedIn",
      whatsapp: "Message on WhatsApp",
      details: "View project",
      visitSite: "Visit the site",
      backToProjects: "Back to all projects",
    },
    contactLabels: {
      email: "Email",
      whatsapp: "WhatsApp",
      linkedin: "LinkedIn",
      github: "GitHub",
      location: "Location",
    },
    footer: {
      pagesHeading: "Pages",
      elsewhereHeading: "Elsewhere",
      contactHeading: "Contact",
    },
    notFound: {
      eyebrow: "Error 404",
      heading: "Page not found",
      text: "The page may have moved or no longer exists. You can continue from one of the links below.",
    },
  },
};

export default common;
