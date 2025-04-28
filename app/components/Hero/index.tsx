"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useLang } from "../../context/LangContext";

// List of technologies to display
const technologies = [
  "Next.js",
  "React.js",
  "TypeScript",
  "Tailwind CSS",
  "Zustand",
  "React Hook Form",
  "Axios",
  "Shadcn/UI",
  "HTML",
  "CSS",
  "JavaScript",
  "Git",
];

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [typedText, setTypedText] = useState("");
  const { t } = useLang();

  useEffect(() => {
    setIsLoaded(true);

    const fullText = t("role");
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [t]);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center px-6 py-12 section-container relative"
    >
      {/* Arka plan dekoratif elemanları */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-secondary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-accent/5 rounded-full filter blur-3xl"></div>
      </div>

      <div
        className={`mx-auto max-w-4xl w-full ${
          isLoaded ? "animate-fade-in" : "opacity-0"
        }`}
      >
        <div className="mb-8">
          <div
            className={`mb-6 ${isLoaded ? "animate-slide-up" : "opacity-0"}`}
            style={{ animationDelay: "0.1s" }}
          >
            <span className="inline-block py-1.5 px-4 rounded-full text-xs bg-primary/10 text-primary mb-6 border border-primary/20 backdrop-blur-sm">
              {t("hello")}
            </span>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight relative">
              <span className="text-foreground">Eren</span>
              <span className="text-primary ml-3 relative">
                İridere
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent rounded-full"></span>
              </span>
            </h1>

            <div className="h-0.5 w-16 bg-primary/50 rounded-full my-8"></div>

            <h2 className="text-xl font-mono h-8 text-foreground/90 flex items-center">
              <span className="text-primary mr-2">&gt;</span>
              {typedText}
              <span className="animate-pulse ml-0.5 text-primary">_</span>
            </h2>
          </div>

          <p
            className={`text-lg text-foreground/70 max-w-2xl mb-10 ${
              isLoaded ? "animate-slide-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.3s" }}
          >
            <span className="font-bold">{t("about-me-short")}</span>
          </p>

          <div
            className={`flex flex-wrap gap-3 mb-10 ${
              isLoaded ? "animate-slide-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.4s" }}
          >
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="py-1.5 px-3 rounded-md text-sm bg-[#1e1e2f]/70 border border-primary/5 text-foreground/80 hover:text-primary hover:border-primary/20 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div
          className={`flex flex-col sm:flex-row gap-4 ${
            isLoaded ? "animate-slide-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.5s" }}
        >
          <Link
            href="#about"
            className="px-6 py-3 bg-primary/90 hover:bg-primary text-white rounded-md inline-block transition-all duration-300 border border-primary/20 backdrop-blur-sm shadow-sm shadow-primary/20"
          >
            {t("about")}
          </Link>
          <Link
            href="#projects"
            className="px-6 py-3 bg-[#1e1e2f]/60 border border-primary/10 rounded-md inline-block hover:border-primary/30 hover:bg-[#1e1e2f]/80 transition-all duration-300 backdrop-blur-sm"
          >
            {t("projects")}
          </Link>
          <Link
            href="#contact"
            className="px-6 py-3 bg-[#1e1e2f]/60 border border-primary/10 rounded-md inline-block hover:border-primary/30 hover:bg-[#1e1e2f]/80 transition-all duration-300 backdrop-blur-sm"
          >
            {t("contact")}
          </Link>
        </div>

        <div
          className={`mt-16 border-t border-primary/10 pt-8 grid grid-cols-2 sm:grid-cols-4 gap-8 ${
            isLoaded ? "animate-slide-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.6s" }}
        >
          <div className="text-center p-4 bg-[#1e1e2f]/30 rounded-md border border-primary/5">
            <div className="text-2xl font-bold text-primary">3+</div>
            <div className="text-sm text-foreground/60">
              {t("experience-years")}
            </div>
          </div>
          <div className="text-center p-4 bg-[#1e1e2f]/30 rounded-md border border-primary/5">
            <div className="text-2xl font-bold text-primary">10+</div>
            <div className="text-sm text-foreground/60">
              {t("projects-count")}
            </div>
          </div>
          <div className="text-center p-4 bg-[#1e1e2f]/30 rounded-md border border-primary/5">
            <div className="text-2xl font-bold text-primary">3.73</div>
            <div className="text-sm text-foreground/60">GPA</div>
          </div>
          <div className="text-center p-4 bg-[#1e1e2f]/30 rounded-md border border-primary/5">
            <div className="text-2xl font-bold text-primary">5+</div>
            <div className="text-sm text-foreground/60">
              {t("certificates")}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 ${
          isLoaded ? "animate-bounce" : "opacity-0"
        }`}
        style={{ animationDelay: "1s" }}
      >
        <Link
          href="#about"
          aria-label="Scroll to about section"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1e1e2f]/60 border border-primary/10 hover:border-primary/30 transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary"
          >
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
