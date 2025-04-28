"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useLang } from "../../context/LangContext";
import { useTheme } from "../../context/ThemeContext";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLang();
  const { theme, toggleTheme } = useTheme();
  const [activePage, setActivePage] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Scroll pozisyonuna göre aktif sayfayı belirle
      const sections = ["home", "about", "skills", "projects", "contact"];
      const current =
        sections.find((section) => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        }) || "home";

      setActivePage(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "tr" ? "en" : "tr");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 backdrop-blur-md bg-[var(--background)]/80 border-b border-[var(--muted)]/30 shadow-sm"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-lg font-semibold relative group">
            <span className="font-mono">{"<"}</span>
            <span>Eren</span>
            <span className="text-primary transition-all duration-300">
              {" "}
              İridere
            </span>
            <span className="font-mono">{">"}</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </Link>

          {/* Sosyal medya bağlantıları */}
          <div className="flex gap-3 ml-2">
            <a
              href="https://github.com/eren2212"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-[var(--muted)]/50 flex items-center justify-center hover:bg-primary/20 transition-all duration-300"
              title="GitHub"
            >
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-foreground"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/eren-iridere-"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-[var(--muted)]/50 flex items-center justify-center hover:bg-primary/20 transition-all duration-300"
              title="LinkedIn"
            >
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-foreground"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <nav className="hidden md:flex">
            <ul className="flex gap-8">
              <li>
                <Link
                  href="#about"
                  className={`hover:text-primary transition-colors relative ${
                    activePage === "about" ? "text-primary" : ""
                  }`}
                >
                  {t("about")}
                  {activePage === "about" && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"></span>
                  )}
                </Link>
              </li>
              <li>
                <Link
                  href="#skills"
                  className={`hover:text-primary transition-colors relative ${
                    activePage === "skills" ? "text-primary" : ""
                  }`}
                >
                  {t("technical-skills")}
                  {activePage === "skills" && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"></span>
                  )}
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className={`hover:text-primary transition-colors relative ${
                    activePage === "projects" ? "text-primary" : ""
                  }`}
                >
                  {t("projects")}
                  {activePage === "projects" && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"></span>
                  )}
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className={`hover:text-primary transition-colors relative ${
                    activePage === "contact" ? "text-primary" : ""
                  }`}
                >
                  {t("contact")}
                  {activePage === "contact" && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"></span>
                  )}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Tema değiştirici buton */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md bg-[var(--muted)]/60 border border-primary/10 hover:border-primary/30 transition-all duration-300 flex items-center justify-center"
            aria-label={
              theme === "dark" ? t("switch-to-light") : t("switch-to-dark")
            }
            title={
              theme === "dark" ? t("switch-to-light") : t("switch-to-dark")
            }
          >
            {theme === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-yellow-300"
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          <button
            onClick={toggleLanguage}
            className="px-3 py-1.5 bg-[var(--muted)]/60 border border-primary/10 rounded-md text-sm hover:border-primary/40 hover:bg-[var(--muted)] transition-all duration-300 flex items-center gap-1"
          >
            <span className="text-primary mr-1">
              {language === "tr" ? "EN" : "TR"}
            </span>
            {t("switch-language")}
          </button>
        </div>
      </div>
    </header>
  );
}
