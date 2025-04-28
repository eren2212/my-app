"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { useLang } from "../../context/LangContext";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLang();

  const contactInfo = [
    {
      id: 1,
      titleKey: "phone",
      descriptionKey: "phone-description",
      value: "+90 544 337 66 17",
      icon: "📞",
      link: "tel:+905443376617",
      color: "from-primary/30 to-secondary/30",
    },
    {
      id: 2,
      titleKey: "email",
      descriptionKey: "email-description",
      value: "ereniridere1247@gmail.com",
      icon: "✉️",
      link: "mailto:ereniridere1247@gmail.com?subject=İletişim%20Talebi",
      color: "from-secondary/30 to-accent/30",
    },
    {
      id: 3,
      titleKey: "location",
      descriptionKey: "location-description",
      value: "Eskişehir, Türkiye",
      icon: "📍",
      link: "https://maps.google.com/?q=Eskişehir,Türkiye",
      color: "from-accent/30 to-primary/30",
    },
  ];

  const handleEmailClick = () => {
    window.location.href =
      "mailto:ereniridere1247@gmail.com?subject=İletişim%20Talebi&body=Merhaba%20Eren,%0A%0A";
  };

  return (
    <section id="contact" className="py-20 px-6 section-container" ref={ref}>
      <div className="max-w-4xl mx-auto relative">
        {/* Gradient background decoration */}
        <div className="absolute inset-0 blur-3xl opacity-30 -z-10">
          <div className="absolute top-0 right-0 w-72 h-72 bg-primary/30 rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/30 rounded-full"></div>
        </div>

        <div className="text-center mb-12">
          <h2
            className={`section-title ${
              isInView ? "animate-slide-up" : "opacity-0"
            }`}
          >
            {t("contact-title")}
          </h2>
          <div
            className={`h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4 ${
              isInView ? "animate-slide-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.1s" }}
          ></div>
          <p
            className={`text-foreground/70 max-w-2xl mx-auto mt-6 ${
              isInView ? "animate-slide-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            {t("contact-description")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((item, index) => (
            <a
              href={item.link}
              key={item.id}
              className={`glass p-6 text-center transition-all hover:translate-y-[-5px] cursor-pointer ${
                isInView ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              target={item.id === 3 ? "_blank" : undefined}
              rel={item.id === 3 ? "noopener noreferrer" : undefined}
            >
              <div
                className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-4 text-2xl`}
              >
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{t(item.titleKey)}</h3>
              <p className="text-sm text-foreground/70 mb-2">
                {t(item.descriptionKey)}
              </p>
              <p className="font-medium">{item.value}</p>
            </a>
          ))}
        </div>

        <div
          className={`glass overflow-hidden ${
            isInView ? "animate-slide-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.6s" }}
        >
          <div className="h-2 w-full bg-gradient-to-r from-primary to-secondary"></div>
          <div className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-primary mb-2">
                {t("send-message")}
              </h3>
              <p className="text-foreground/70 text-sm">
                {t("contact-description")}
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
              <button
                onClick={handleEmailClick}
                className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-md inline-flex items-center gap-2 hover:opacity-90 transition-all"
              >
                <span className="text-xl">✉️</span>
                {t("email-open-outlook")}
              </button>

              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/eren-iridere-"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary/10 transition-all"
                >
                  <span className="text-xl">👔</span>
                </a>
                <a
                  href="https://github.com/eren2212"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary/10 transition-all"
                >
                  <span className="text-xl">🐱</span>
                </a>
                <a
                  href="https://twitter.com/ereniridere"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary/10 transition-all"
                >
                  <span className="text-xl">🐦</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
