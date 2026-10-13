/**
 * MUSTAFA SAİD KARAKAŞ - PORTFOLIO & CV INTERACTION LOGIC
 * Features: Typewriter, TR/EN Translation, Dark/Light Mode, Print CV, Email Copy, Smooth Nav
 */

// --- 1. TRANSLATION DICTIONARY (TR / EN) ---
const translations = {
  tr: {
    nav: {
      about: "Hakkımda",
      skills: "Yetenekler",
      projects: "Projeler",
      interests: "İlgi Alanları",
      education: "Eğitim",
      contact: "İletişim"
    },
    hero: {
      status: "Samsun Üniversitesi • Backend Yazılım Geliştirici",
      greeting: "Merhaba, ben",
      desc: "Teknolojiye ve donanıma karşı bitmek bilmez bir tutkuya sahip Arka Uç (Backend) geliştiricisiyim. Python, modern mimariler ve IoT çözümleriyle verimli, güvenli ve ölçeklenebilir sistemler inşa ediyorum.",
      btnProjects: "Projeleri İncele",
      btnContact: "İletişime Geç",
      downloadCv: "CV İndir / Yazdır"
    },
    about: {
      tag: "Tanışalım",
      title: "Hakkımda",
      subtitle: "Teknolojiye olan merakım ve yazılım geliştirme yolculuğum",
      cardHeading: "Mustafa Said Karakaş Kimdir?",
      p1: "Merhaba, ben Mustafa Said Karakaş. Teknolojiye ve donanıma karşı bitmek bilmez bir merakı olan bir yazılım geliştirici adayıyım.",
      p2: "Yazılım dünyasına profesyonel anlamda 2025 yılında adım attım. Şu anda Samsun Üniversitesi’nde Arka Uç (Backend) Yazılım Geliştirme üzerine eğitimime aktif olarak devam ediyorum.",
      p3: "Bu süreçte özellikle Python diline ve backend mimarilerine odaklanarak kendimi teknik anlamda geliştirdim. Yazılımın yanı sıra mikrodenetleyiciler (ESP32), siber güvenlik testleri ve donanım manipülasyonu gibi derinlikli alanlarda deneysel çalışmalar yürütüyorum.",
      stat1: "Kariyer Başlangıcı",
      stat2: "Temel Odak Dili",
      stat3: "Proje Alanları",
      stat4: "Backend Eğitimi",
      quickTitle: "Özet Profil",
      qEdu: "Eğitim:",
      qProg: "Bölüm:",
      qLocation: "Konum:",
      qDomain: "Alan Adı:",
      qStatus: "Durum:",
      qAvailable: "Staj & Proje Fırsatlarına Açık",
      focusTitle: "Mühendislik Yaklaşımım",
      focusDesc: "Kod yazmayı sadece bir iş değil; donanım, ağ güvenliği ve backend servislerinin kusursuz ahenkle çalıştığı bir mekanizma olarak görüyorum."
    },
    skills: {
      tag: "Teknoloji & Araçlar",
      title: "Yazılım Dilleri & Mimariler",
      subtitle: "Geliştirme süreçlerimde kullandığım teknolojiler ve teknik yetkinlikler",
      catBackend: "Arka Uç & Programlama Dilleri",
      catArch: "Mimariler & Tasarım Desenleri",
      catIot: "Donanım, IoT & Güvenlik",
      primaryLevel: "Birincil Odak",
      advancedLevel: "Aktif Geliştirme"
    },
    projects: {
      tag: "Portfolyo & Çalışmalar",
      title: "Deneyim & Projeler",
      subtitle: "Gerçekleştirdiğim sistem geliştirmeleri, SaaS mimarileri ve donanım testleri",
      p1: {
        title: "AI Destekli QR Menü & Yönetim Sistemi",
        desc: "İşletmelerin dijital menü süreçlerini yöneten, dinamik sipariş altyapısına sahip ve yapay zeka tabanlı kredi/maliyet optimizasyon modülü içeren ölçeklenebilir bir SaaS platformu. API entegrasyonları ve veritabanı yönetimini backend mimarisiyle kurguladım.",
        f1: "Dinamik sipariş ve menü yönetim mekanizması",
        f2: "Yapay zeka tabanlı kredi ve maliyet optimizasyon modülü",
        f3: "Ölçeklenebilir RESTful API ve ilişkisel veritabanı kurgusu"
      },
      p2: {
        title: "ESP32 ile iCloud Bypass & Güvenlik Testleri",
        desc: "ESP32 mikrodenetleyicisi kullanarak iOS cihazlardaki aktivasyon kilitlerinin atlanması süreçleri üzerine ağ manipülasyonu ve DNS yönlendirme teknikleri ile donanım tabanlı güvenlik testleri gerçekleştirdim.",
        f1: "ESP32 mikrodenetleyici tabanlı otonom donanım testi",
        f2: "Captive portal ve DNS yönlendirme manipülasyonu",
        f3: "Ağ trafiği analizi ve güvenlik açıklarının tespiti"
      },
      p3: {
        title: "Dinamik İşletme Web Çözümleri & Yönetim Paneli",
        desc: "Farklı sektörlerdeki işletmelerin ürün ve hizmetlerini dijital ortamda sergileyebilmesi için kullanıcı dostu arayüzler ve yönetilebilir backend sistemleri entegre edilmiş dinamik web projeleri geliştirdim.",
        f1: "Kolay yönetilebilir dinamik CMS ve içerik altyapısı",
        f2: "Kullanıcı dostu, modern ve responsive ön yüz mimarisi",
        f3: "Güvenli form yönetimi ve veri saklama süreçleri"
      }
    },
    interests: {
      tag: "Tutkular & Meraklar",
      title: "İlgi Alanları",
      subtitle: "Yazılımın ötesinde donanım, finans ve sistem optimizasyonuna olan ilgim",
      i1: {
        title: "PC / Mobil Donanım Onarımı",
        desc: "Elektronik kart seviyesinde hata tespiti, komponent değişimi, anakart onarımı ve mobil/bilgisayar donanımlarının kapsamlı bakım süreçleri."
      },
      i2: {
        title: "Borsa Analizi",
        desc: "Finansal piyasaların takibi, teknik ve temel grafik analizi, algoritmik modelleme ve veri odaklı piyasa trend incelemeleri."
      },
      i3: {
        title: "Otomotiv Elektroniği",
        desc: "Araç beyinleri (ECU), sensör ağları, CAN-bus haberleşme protokolleri ve yeni nesil araç teknolojilerinin elektronik alt sistemleri."
      },
      i4: {
        title: "Oyun Optimizasyonu",
        desc: "Grafik kartı ve işlemci parametrelerinin ince ayarı, frame-time kararlılığı, işletim sistemi düzeyinde gecikme (latency) azaltma çalışmaları."
      }
    },
    edu: {
      tag: "Akademik Geçmiş",
      title: "Eğitim",
      subtitle: "Yazılım ve arka yüz mimarileri üzerine üniversite eğitimim",
      school: "Samsun Üniversitesi",
      program: "Arka Yüz (Backend) Yazılım Geliştirme",
      badge: "Önlisans • Aktif Öğrenci",
      desc: "Arka uç servisleri, veri yapıları, ilişkisel veritabanları, API tasarımı ve kurumsal yazılım mimarileri üzerine odaklı örgün eğitim süreci devam etmektedir."
    },
    contact: {
      tag: "Hemen Ulaşın",
      title: "İletişime Geçin",
      subtitle: "Projeleriniz, iş birliği veya staj fırsatları için dilediğiniz zaman yazabilirsiniz",
      channelsTitle: "İletişim Bilgileri",
      channelsDesc: "Yeni fikirler üretmek, projeler geliştirmek ve teknoloji üzerine sohbet etmek için bana aşağıdaki kanallardan ulaşabilirsiniz.",
      emailLabel: "E-Posta",
      formTitle: "Hızlı Mesaj Gönder",
      formName: "Adınız Soyadınız",
      formSubject: "Konu",
      formMessage: "Mesajınız",
      sendBtn: "Mesajı İlet"
    },
    footer: {
      rights: "Tüm hakları saklıdır.",
      top: "Başa Dön"
    }
  },
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      interests: "Interests",
      education: "Education",
      contact: "Contact"
    },
    hero: {
      status: "Samsun University • Backend Developer",
      greeting: "Hello, I am",
      desc: "A passionate Backend Software Developer with an unceasing curiosity for hardware and technology. I build efficient, secure, and scalable solutions using Python, modern backend architectures, and IoT.",
      btnProjects: "View Projects",
      btnContact: "Get in Touch",
      downloadCv: "Download / Print CV"
    },
    about: {
      tag: "Get to Know Me",
      title: "About Me",
      subtitle: "My passion for technology and journey in software development",
      cardHeading: "Who is Mustafa Said Karakaş?",
      p1: "Hello, I am Mustafa Said Karakaş. A passionate software developer with an endless curiosity for hardware and electronics.",
      p2: "I stepped into software professionally in 2025. Currently, I am actively pursuing my studies in Backend Software Development at Samsun University.",
      p3: "Throughout this journey, I have honed my skills focusing on Python and scalable backend architectures. Beyond software, I engage in experimental projects involving microcontrollers (ESP32), cybersecurity tests, and hardware manipulation.",
      stat1: "Career Start",
      stat2: "Primary Focus",
      stat3: "Project Domains",
      stat4: "Backend Degree",
      quickTitle: "Quick Overview",
      qEdu: "Education:",
      qProg: "Major:",
      qLocation: "Location:",
      qDomain: "Domain:",
      qStatus: "Status:",
      qAvailable: "Open for Internships & Projects",
      focusTitle: "Engineering Philosophy",
      focusDesc: "I view software not merely as code, but as a harmonious ecosystem connecting hardware, network security, and robust backend services."
    },
    skills: {
      tag: "Tech & Tools",
      title: "Languages & Architectures",
      subtitle: "Technologies and core competencies utilized across my development workflows",
      catBackend: "Backend & Programming Languages",
      catArch: "Architectures & Design Patterns",
      catIot: "Hardware, IoT & Security",
      primaryLevel: "Primary Focus",
      advancedLevel: "Active Development"
    },
    projects: {
      tag: "Portfolio & Works",
      title: "Experience & Projects",
      subtitle: "Engineered platforms, SaaS architectures, and hardware-level security tests",
      p1: {
        title: "AI-Powered QR Menu & Management SaaS",
        desc: "A scalable SaaS platform managing digital menu lifecycles for businesses, equipped with dynamic ordering infrastructure and an AI credit/cost optimization module. Implemented API integrations and database management with robust backend architecture.",
        f1: "Dynamic ordering and menu management engine",
        f2: "AI-driven credit & operational cost optimizer",
        f3: "Scalable RESTful APIs and relational schema"
      },
      p2: {
        title: "iCloud Bypass & Security Testing with ESP32",
        desc: "Conducted hardware-based security testing and network manipulation using the ESP32 microcontroller, implementing DNS redirection and captive portal spoofing for iOS activation lock mechanisms.",
        f1: "Autonomous hardware tests using ESP32 microcontroller",
        f2: "Captive portal and DNS diversion manipulation",
        f3: "Network packet inspection and vulnerability discovery"
      },
      p3: {
        title: "Dynamic Business Web Solutions & CMS",
        desc: "Developed end-to-end full-stack web applications featuring user-friendly interfaces and manageable backend systems, enabling businesses across sectors to showcase products and services digitally.",
        f1: "Easily manageable dynamic CMS and content system",
        f2: "User-friendly, modern, responsive frontend architecture",
        f3: "Secure form processing and robust data storage"
      }
    },
    interests: {
      tag: "Passions & Interests",
      title: "Areas of Interest",
      subtitle: "My enthusiasm beyond standard code: hardware, financial markets, and optimization",
      i1: {
        title: "PC / Mobile Hardware Repair",
        desc: "Component-level fault diagnosis, SMD soldering, logic board repairs, and comprehensive hardware maintenance."
      },
      i2: {
        title: "Stock Market Analysis",
        desc: "Financial market tracking, technical & fundamental chart evaluation, algorithmic modeling, and trend forecasting."
      },
      i3: {
        title: "Automotive Electronics",
        desc: "Engine Control Units (ECUs), sensor networks, CAN-bus automotive protocols, and next-generation vehicle electronics."
      },
      i4: {
        title: "Game & OS Optimization",
        desc: "GPU/CPU parameters fine-tuning, frame-time consistency, and operating system latency reduction."
      }
    },
    edu: {
      tag: "Academic Background",
      title: "Education",
      subtitle: "My formal university studies in software and backend architectures",
      school: "Samsun University",
      program: "Backend Software Development",
      badge: "Associate Degree • Active Student",
      desc: "Continuing comprehensive formal education focusing on backend services, algorithms, relational databases, API design, and enterprise software engineering."
    },
    contact: {
      tag: "Reach Out",
      title: "Contact Me",
      subtitle: "Feel free to reach out for project collaboration, internships, or technical discussions",
      channelsTitle: "Contact Information",
      channelsDesc: "You can reach out through any of the channels below to exchange ideas, collaborate on projects, or discuss software & tech.",
      emailLabel: "Email",
      formTitle: "Send a Direct Message",
      formName: "Full Name",
      formSubject: "Subject",
      formMessage: "Your Message",
      sendBtn: "Send Message"
    },
    footer: {
      rights: "All rights reserved.",
      top: "Back to Top"
    }
  }
};

// --- 2. GLOBAL STATE ---
let currentLang = localStorage.getItem("preferred_lang") || "tr";
let currentTheme = localStorage.getItem("preferred_theme") || "dark";

// --- 3. DOM ELEMENTS ---
const langToggleBtn = document.getElementById("langToggleBtn");
const langLabel = document.getElementById("langLabel");
const themeToggleBtn = document.getElementById("themeToggleBtn");
const themeIcon = document.getElementById("themeIcon");
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navLinks = document.getElementById("navLinks");
const printCvBtn = document.getElementById("printCvBtn");
const heroPrintCvBtn = document.getElementById("heroPrintCvBtn");
const heroCopyEmailBtn = document.getElementById("heroCopyEmailBtn");
const heroCopyBadge = document.getElementById("heroCopyBadge");
const typewriterElem = document.getElementById("typewriterText");
const contactForm = document.getElementById("contactForm");
const currentYearElem = document.getElementById("currentYear");

// Update copyright year
if (currentYearElem) {
  currentYearElem.textContent = new Date().getFullYear();
}

// --- 4. TYPEWRITER EFFECT ---
const typewriterPhrases = {
  tr: [
    "Backend Yazılım Geliştirici",
    "Python & Django Mimarisi",
    "IoT & Donanım Tutkunu (ESP32)",
    "SaaS & RESTful API Çözümleri",
    "Samsun Üniversitesi Öğrencisi"
  ],
  en: [
    "Backend Software Developer",
    "Python & Django Specialist",
    "IoT & Hardware Enthusiast (ESP32)",
    "SaaS & RESTful API Solutions",
    "Samsun University Student"
  ]
};

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typewriterTimeout = null;

function runTypewriter() {
  const phrases = typewriterPhrases[currentLang];
  const currentPhrase = phrases[phraseIndex % phrases.length];

  if (isDeleting) {
    charIndex--;
    typewriterElem.textContent = currentPhrase.substring(0, charIndex);
  } else {
    charIndex++;
    typewriterElem.textContent = currentPhrase.substring(0, charIndex);
  }

  let delay = isDeleting ? 40 : 80;

  if (!isDeleting && charIndex === currentPhrase.length) {
    delay = 2000; // Pause at end of phrase
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex++;
    delay = 400; // Pause before typing next phrase
  }

  typewriterTimeout = setTimeout(runTypewriter, delay);
}

// Reset typewriter when language changes
function resetTypewriter() {
  clearTimeout(typewriterTimeout);
  charIndex = 0;
  isDeleting = false;
  runTypewriter();
}

// --- 5. LANGUAGE TOGGLE LOGIC ---
function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  localStorage.setItem("preferred_lang", lang);

  if (langLabel) {
    langLabel.textContent = lang === "tr" ? "EN" : "TR";
  }

  // Update all elements with data-i18n
  const translatableElements = document.querySelectorAll("[data-i18n]");
  translatableElements.forEach(elem => {
    const key = elem.getAttribute("data-i18n");
    const value = getNestedTranslation(translations[lang], key);
    if (value) {
      if (elem.tagName === "INPUT" || elem.tagName === "TEXTAREA") {
        elem.placeholder = value;
      } else {
        elem.textContent = value;
      }
    }
  });

  resetTypewriter();
}

function getNestedTranslation(obj, path) {
  return path.split(".").reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : null), obj);
}

if (langToggleBtn) {
  langToggleBtn.addEventListener("click", () => {
    applyLanguage(currentLang === "tr" ? "en" : "tr");
  });
}

// --- 6. THEME TOGGLE LOGIC ---
function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("preferred_theme", theme);

  if (themeIcon) {
    themeIcon.textContent = theme === "dark" ? "🌙" : "☀️";
  }
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", () => {
    applyTheme(currentTheme === "dark" ? "light" : "dark");
  });
}

// --- 7. COPY EMAIL TO CLIPBOARD ---
if (heroCopyEmailBtn) {
  heroCopyEmailBtn.addEventListener("click", () => {
    const email = "mustafasaidkaraka@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      heroCopyBadge.textContent = currentLang === "tr" ? "Kopyalandı! ✓" : "Copied! ✓";
      heroCopyBadge.style.background = "rgba(16, 185, 129, 0.25)";
      heroCopyBadge.style.color = "#10b981";

      setTimeout(() => {
        heroCopyBadge.textContent = currentLang === "tr" ? "Kopyala" : "Copy";
        heroCopyBadge.style.background = "";
        heroCopyBadge.style.color = "";
      }, 2500);
    }).catch(() => {
      // Fallback
      alert(email);
    });
  });
}

// --- 8. PRINT / PDF CV TRIGGER ---
function handlePrintCv() {
  window.print();
}

if (printCvBtn) printCvBtn.addEventListener("click", handlePrintCv);
if (heroPrintCvBtn) heroPrintCvBtn.addEventListener("click", handlePrintCv);

// --- 9. MOBILE MENU TOGGLE ---
if (mobileMenuBtn && navLinks) {
  mobileMenuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("nav-open");
  });

  // Close nav when clicking a link
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("nav-open");
    });
  });
}

// --- 10. ACTIVE LINK ON SCROLL ---
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 100;
    const sectionId = current.getAttribute("id");

    const link = document.querySelector(`.nav-links a[href*="${sectionId}"]`);
    if (link) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    }
  });
});

// --- 11. CONTACT FORM HANDLER ---
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("senderName").value.trim();
    const subject = document.getElementById("senderSubject").value.trim();
    const message = document.getElementById("senderMessage").value.trim();

    const fullSubject = encodeURIComponent(`[saidkarakas.com İletişim] ${subject}`);
    const fullBody = encodeURIComponent(`Ad Soyad: ${name}\n\nMesaj:\n${message}\n\n---\nBu mesaj saidkarakas.com portfolyo sitesinden gönderildi.`);

    window.location.href = `mailto:mustafasaidkaraka@gmail.com?subject=${fullSubject}&body=${fullBody}`;
  });
}

// --- 12. INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  applyTheme(currentTheme);
  applyLanguage(currentLang);
});
