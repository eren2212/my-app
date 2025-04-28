"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { useLang } from "../../context/LangContext";

// Teknoloji grupları
const skillGroups = [
  {
    titleKey: "frontend",
    skills: [
      { name: "React.js", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "TypeScript", icon: "📘" },
      { name: "JavaScript", icon: "🟨" },
      { name: "HTML & CSS", icon: "🌐" },
      { name: "Tailwind CSS", icon: "🎨" },
    ],
  },
  {
    titleKey: "mobile",
    skills: [
      { name: "React Native", icon: "📱" },
      { name: "Expo", icon: "📲" },
      { name: "GlueStack UI", icon: "🧩" },
    ],
  },
  {
    titleKey: "backend",
    skills: [
      { name: "Node.js", icon: "🟢" },
      { name: "MongoDB", icon: "🍃" },
      { name: "Prisma", icon: "🔷" },
      { name: "Java", icon: "☕" },
    ],
  },
  {
    titleKey: "other",
    skills: [
      { name: "Git", icon: "🔄" },
      { name: "Problem Çözme", icon: "🧩" },
      { name: "Takım Çalışması", icon: "👥" },
      { name: "Agile / Scrum", icon: "🔄" },
    ],
  },
];

// Dil becerileri
const languages = [
  { nameKey: "turkish", levelKey: "native", icon: "🇹🇷" },
  { nameKey: "english", levelKey: "intermediate", icon: "🇬🇧" },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLang();

  return (
    <section
      id="skills"
      className="py-20 px-6 section-container relative"
      ref={ref}
    >
      <div className="max-w-4xl mx-auto">
        <h2
          className={`section-title ${
            isInView ? "animate-slide-up" : "opacity-0"
          }`}
        >
          {t("technical-skills")}
        </h2>

        <div className="space-y-12">
          {/* Teknoloji Grupları */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillGroups.map((group, groupIndex) => (
              <div
                key={groupIndex}
                className={`glass p-6 transition-all ${
                  isInView ? "animate-slide-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${0.2 + groupIndex * 0.1}s` }}
              >
                <h3 className="text-xl font-bold mb-4 text-primary flex items-center">
                  {t(group.titleKey)}
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  {group.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center gap-3 p-3 rounded-md bg-glass-bg hover:bg-primary/10 transition-all"
                    >
                      <span className="text-xl">{skill.icon}</span>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Dil Becerileri */}
          <div
            className={`glass p-6 ${
              isInView ? "animate-slide-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.6s" }}
          >
            <h3 className="text-xl font-bold mb-4 text-primary">
              {t("language")}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {languages.map((language, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-md bg-glass-bg"
                >
                  <span className="text-xl">{language.icon}</span>
                  <div>
                    <div className="font-medium">{t(language.nameKey)}</div>
                    <div className="text-sm text-foreground/70">
                      {t(language.levelKey)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
