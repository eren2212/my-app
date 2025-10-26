"use client";
import { createContext, useState, useContext, ReactNode } from "react";

type Language = "tr" | "en";

interface LangContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LangContext = createContext<LangContextType | undefined>(undefined);

// Çeviriler
const translations = {
  tr: {
    // Genel
    "switch-language": "English",
    "switch-to-light": "Açık temaya geç",
    "switch-to-dark": "Koyu temaya geç",

    // Hero bölümü
    hello: "Merhaba, ben",
    role: "Full Stack Developer & Bilgisayar Mühendisliği Öğrencisi",
    "about-me-short":
      "Kullanıcı deneyimini ön planda tutan, modern ve ölçeklenebilir web/mobil uygulamaları geliştirmeye odaklı bir bilgisayar mühendisliği öğrencisiyim. Frontend alanında uzmanlaşarak full-stack geliştirici olmayı hedefliyorum.",
    about: "Hakkımda",
    projects: "Projelerim",
    contact: "İletişim",
    "experience-years": "Yıl Deneyim",
    "projects-count": "Projeler",
    certificates: "Sertifikalar",

    // About bölümü
    "about-title": "Hakkımda",
    "about-text-1":
      "Bilgisayar Mühendisliği 4. sınıf öğrencisiyim. Şu an mobil uygulamalar üzerine kendimi geliştirmekteyim .",
    "about-text-2":
      "Aynı zamanda bitirme projemi React Native ve dahası  ile geliştiriyorum. Henüz herhangi bir iş deneyimim olmasa da, İstanbul Ziraat Katılım Bankasında staj deneyimim oldu. Kodlamaya olan tutkum ve kendimi sürekli geliştirme isteğimle bilgisayar mühendisliği alanında yeni başarılar elde etmeye hevesliyim.",
    "about-text-3":
      "Yaratıcı problem çözme becerilerim ve hızlı öğrenme yeteneğimle, bilgisayar dünyasındaki yeniliklere açık, donanımlı bir bireyim. Sektördeki fırsatları keşfetmek için heyecanlıyım.",
    "career-goal": "🎯 Kariyer Hedefi",
    "career-goal-text":
      "Kullanıcı deneyimini ön planda tutan, modern ve ölçeklenebilir web/mobil uygulamaları geliştirmeye odaklı bir bilgisayar mühendisliği öğrencisiyim. Frontend alanında uzmanlaşarak full-stack geliştirici olmayı hedefliyorum. Takım çalışmalarına yatkınım ve sürekli öğrenmeyi ilke ediniyorum.",
    education: "🎓 Eğitim",
    university:
      "Konya Teknik Üniversitesi – Bilgisayar Mühendisliği (4. Sınıf)",
    "university-location": "Konya, Türkiye | 2021 – 2026 (Beklenen mezuniyet)",
    "learning-desire": "📈 Öğrenme İsteği",
    gpa: "GPA: 3.75/4.00",

    // Skills bölümü
    "technical-skills": "Teknik Beceriler",
    frontend: "Frontend",
    mobile: "Mobile",
    backend: "Backend",
    other: "Diğer",
    language: "Dil",
    turkish: "Türkçe",
    english: "İngilizce",
    native: "Anadil",
    intermediate: "Orta Seviye",

    // Proje başlıkları ve açıklamaları
    "project-tribda-title": "Tribda - Frontend Chapter Lead",
    "project-tribda-desc":
      "Bir ekip içerisinde frontend bölüm liderliği yapıyorum. Agile sistemin kurulumu ve takıma entegrasyonu konusunda öncü rol üstlendim. Geliştirme sürecinde UI kararları, görev dağılımı ve teknik rehberlik sağlıyorum.",
    "project-tribda-period": "2025 - Devam ediyor",

    "project-sportlink-title":
      "SportLink - Spor Etkinlik Takip ve Koordinasyon",
    "project-sportlink-desc":
      "Kullanıcıların spor etkinliklerini görüntüleyip katılabileceği bir uygulama geliştirdim. Hem mobil hem web platformları için çalıştım. Harita entegrasyonu, bildirimler ve zengin UI bileşenleri kullandım.",
    "project-sportlink-period": "2025",

    "project-pharmacy-title": "Eczane Takviyesi - Bitirme Projesi",
    "project-pharmacy-desc":
      "Eczanelere özel QR kod ile çalışan test tabanlı takviye öneri sistemi. Kullanıcılar testi doldurduktan sonra eczaneye özel 3 takviye önerisi alıyor. Admin ve kullanıcı panelleri, ürün ve sipariş yönetimi, test skorlama sistemi oluşturdum.",
    "project-pharmacy-period": "2025",

    "project-website-title": "Kişisel Web Sitesi",
    "project-website-desc":
      "HTML, CSS ve JavaScript kullanılarak geliştirilen, modern bir tasarıma sahip kişisel bir web sitesi.",

    "project-blog-title": "Next.js Blog Uygulaması",
    "project-blog-desc":
      "Modern web ve performans odaklı bu çalışma, kullanıcı dostu arayüzler oluşturmak için React ve Next.js teknolojilerini kullanır.",

    // Projects bölümü
    "projects-experience": "Projeler & Deneyim",
    all: "Tümü",
    project: "Proje",
    experience: "Deneyim",
    continuing: "Devam ediyor",

    // Diğer
    "100-percent": "100%",

    // Education bölümü
    "education-title": "Eğitim",
    "university-name": "Konya Teknik Üniversitesi",
    "university-department": "Bilgisayar Mühendisliği",
    "university-description":
      "Lisans eğitimim boyunca kendimi kodlama, ingilizce gibi alanlarda geliştirmeye çalıştım ve halen devam etmekteyim.",
    "university-grade": "G.A.O: 3.73/4.00",

    "highschool-name": "Kumral Abdal Anadolu Lisesi",
    "highschool-department": "Lise Eğitimi",
    "highschool-description":
      "Lise eğitimim boyunca temel derslerde ve çeşitli alanlarda kendimi geliştirdim ve mezun oldum.",
    "highschool-grade": "92/100",

    // Contact bölümü
    "contact-title": "İletişime Geç",
    "contact-description":
      "Sorularınız veya iş birliği fırsatları için benimle iletişime geçebilirsiniz. En kısa sürede dönüş yapılacaktır.",
    phone: "Telefon",
    "phone-description": "7/24 hizmetinizdeyiz",
    email: "E-posta",
    "email-description": "Her zaman dönüş yapılır",
    location: "Konum",
    "location-description": "Ofisimize bekleriz",
    "send-message": "Mesaj Gönder",
    "your-name": "Adınız",
    "your-email": "E-posta Adresiniz",
    "your-message": "Mesajınız",
    send: "Gönder",
    "email-open-outlook": "E-posta Gönder",

    // Staj içeriği
    "internship-title": "Online Yazılım Stajı",
    "internship-organization": "QNB Finansbank",
    "internship-description":
      "QNB Finansbank'ta online yazılım stajı yaptım. Front-end geliştirme alanında çalışarak modern web uygulamaları geliştirdim. Bankacılık sektöründe yazılım geliştirme süreçlerini öğrenerek gerçek projelerde deneyim kazandım.",

    // QNB staj içeriği
    "qnb-internship-title": "Online Yazılım Stajı",
    "qnb-internship-organization": "QNB Finansbank",
    "qnb-internship-period": "Ocak - Şubat 2024",
    "qnb-internship-description":
      "QNB Finansbank'ta online yazılım stajı programına katıldım. Front-end geliştirme ekibinde çalışarak modern bankacılık uygulamaları için arayüzler tasarladım. React ve modern JavaScript kütüphaneleri kullanarak kullanıcı dostu finansal uygulamalar geliştirme konusunda deneyim kazandım.",
  },
  en: {
    // General
    "switch-language": "Türkçe",
    "switch-to-light": "Switch to light mode",
    "switch-to-dark": "Switch to dark mode",

    // Hero section
    hello: "Hello, I'm",
    role: "Full Stack Developer & Computer Engineering Student",
    "about-me-short":
      "I'm a computer engineering student focused on developing modern and scalable web/mobile applications with a user experience priority. I aim to become a full-stack developer with expertise in frontend.",
    about: "About Me",
    projects: "My Projects",
    contact: "Contact",
    "experience-years": "Years Experience",
    "projects-count": "Projects",
    certificates: "Certificates",

    // About section
    "about-title": "About Me",
    "about-text-1":
      "I'm a 4 year Computer Engineering student. I'm currently working as a Tribda Frontend Chapter Lead in a company in Konya, on a project where we're trying to implement the Agile system.",
    "about-text-2":
      "I'm also developing my term project with Next.js. Although I don't have any professional experience yet, I'm eager to achieve new successes in the field of computer engineering with my passion for coding and desire to continuously improve myself.",
    "about-text-3":
      "With my creative problem-solving skills and fast learning ability, I'm a well-equipped individual open to innovations in the computer world. I'm excited to explore opportunities in the industry.",
    "career-goal": "🎯 Career Goal",
    "career-goal-text":
      "I'm a computer engineering student focused on developing modern and scalable web/mobile applications with a user experience priority. I aim to become a full-stack developer with expertise in frontend. I'm inclined to teamwork and embrace continuous learning as a principle.",
    education: "🎓 Education",
    university: "Konya Technical University – Computer Engineering (3rd Year)",
    "university-location": "Konya, Turkey | 2021 – 2026 (Expected graduation)",
    "learning-desire": "📈 Learning Desire",
    gpa: "GPA: 3.75/4.00",

    // Skills section
    "technical-skills": "Technical Skills",
    frontend: "Frontend",
    mobile: "Mobile",
    backend: "Backend",
    other: "Other",
    language: "Language",
    turkish: "Turkish",
    english: "English",
    native: "Native",
    intermediate: "Intermediate",

    // Project titles and descriptions
    "project-tribda-title": "Tribda - Frontend Chapter Lead",
    "project-tribda-desc":
      "I lead the frontend team in a collaborative environment. I played a pioneering role in setting up and integrating the Agile system into the team. I provide UI decisions, task distribution, and technical guidance during the development process.",
    "project-tribda-period": "2025 - Ongoing",

    "project-sportlink-title":
      "SportLink - Sports Event Tracking and Coordination",
    "project-sportlink-desc":
      "I developed an application where users can view and participate in sports events. I worked for both mobile and web platforms. I implemented map integration, notifications, and rich UI components.",
    "project-sportlink-period": "2025",

    "project-pharmacy-title": "Pharmacy Supplement - Graduation Project",
    "project-pharmacy-desc":
      "A test-based supplement recommendation system that works with QR codes specifically for pharmacies. Users receive 3 pharmacy-specific supplement recommendations after completing the test. I created admin and user panels, product and order management, and a test scoring system.",
    "project-pharmacy-period": "2025",

    "project-website-title": "Personal Website",
    "project-website-desc":
      "A personal website with a modern design developed using HTML, CSS, and JavaScript.",

    "project-blog-title": "Next.js Blog Application",
    "project-blog-desc":
      "This modern web and performance-focused work uses React and Next.js technologies to create user-friendly interfaces.",

    // Projects section
    "projects-experience": "Projects & Experience",
    all: "All",
    project: "Project",
    experience: "Experience",
    continuing: "Ongoing",

    // Other
    "100-percent": "100%",

    // Education section
    "education-title": "Education",
    "university-name": "Konya Technical University",
    "university-department": "Computer Engineering",
    "university-description":
      "Throughout my undergraduate education, I have strived to improve myself in areas such as coding and English, and I continue to do so.",
    "university-grade": "GPA: 3.75/4.00",

    "highschool-name": "Kumral Abdal Anatolian High School",
    "highschool-department": "High School Education",
    "highschool-description":
      "During my high school education, I developed myself in core courses and various fields and graduated successfully.",
    "highschool-grade": "92/100",

    // Contact section
    "contact-title": "Get in Touch",
    "contact-description":
      "You can contact me for your questions or collaboration opportunities. I will get back to you as soon as possible.",
    phone: "Phone",
    "phone-description": "Available 24/7",
    email: "Email",
    "email-description": "Always get a response",
    location: "Location",
    "location-description": "Visit our office",
    "send-message": "Send Message",
    "your-name": "Your Name",
    "your-email": "Your Email",
    "your-message": "Your Message",
    send: "Send",
    "email-open-outlook": "Send Email",

    // Staj içeriği
    "internship-title": "Online Software Internship",
    "internship-organization": "QNB Finansbank",
    "internship-description":
      "I completed an online software internship at QNB Finansbank. I developed modern web applications focusing on front-end development. I gained experience working on real projects while learning software development processes in the banking sector.",

    // QNB internship content
    "qnb-internship-title": "Online Software Internship",
    "qnb-internship-organization": "QNB Finansbank",
    "qnb-internship-period": "January - February 2024",
    "qnb-internship-description":
      "I participated in the online software internship program at QNB Finansbank. Working in the front-end development team, I designed interfaces for modern banking applications. I gained experience in developing user-friendly financial applications using React and modern JavaScript libraries.",
  },
};

export function LangProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("tr");

  const t = (key: string): string => {
    return (
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ] || key
    );
  };

  return (
    <LangContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const context = useContext(LangContext);
  if (context === undefined) {
    throw new Error("useLang must be used within a LangProvider");
  }
  return context;
}
