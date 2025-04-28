"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { useLang } from "../../context/LangContext";

// Eğitim tipi
type EducationItem = {
  id: number;
  period: string;
  schoolNameKey: string;
  departmentKey: string;
  descriptionKey: string;
  gradeKey: string;
  icon: string;
  color: string;
  year: number;
  type: "education";
};

// Staj/deneyim tipi
type ExperienceItem = {
  id: number;
  period: string;
  titleKey: string;
  organizationKey: string;
  descriptionKey: string;
  icon: string;
  color: string;
  year: number;
  type: "experience";
};

// Birleşik tip
type TimelineItem = EducationItem | ExperienceItem;

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLang();

  // Kronolojik sıralama - en yeniden en eskiye
  const educationItems: EducationItem[] = [
    {
      id: 1,
      period: "2022-2026",
      schoolNameKey: "university-name",
      departmentKey: "university-department",
      descriptionKey: "university-description",
      gradeKey: "university-grade",
      icon: "🎓",
      color: "from-primary/20 to-secondary/20",
      year: 2022,
      type: "education",
    },
    {
      id: 2,
      period: "2017-2021",
      schoolNameKey: "highschool-name",
      departmentKey: "highschool-department",
      descriptionKey: "highschool-description",
      gradeKey: "highschool-grade",
      icon: "🏫",
      color: "from-secondary/20 to-accent/20",
      year: 2017,
      type: "education",
    },
  ];

  // Staj bilgileri
  const experienceItems: ExperienceItem[] = [];

  // Tüm eğitim ve deneyimleri birleştir ve sırala
  const allItems: TimelineItem[] = [...educationItems, ...experienceItems].sort(
    (a, b) => b.year - a.year
  );

  return (
    <section id="education" className="py-20 px-6 section-container" ref={ref}>
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
            {t("education-title")}
          </h2>
          <div
            className={`h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4 ${
              isInView ? "animate-slide-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.1s" }}
          ></div>
        </div>

        {/* Kronolojik zaman çizelgesi */}
        <div className="relative md:pl-0">
          {/* Dikey çizgi */}
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block md:left-1/2 md:-translate-x-1/2"></div>

          {allItems.map((item, index) => (
            <div
              key={item.id}
              className={`mb-16 relative ${
                isInView ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.2 + index * 0.2}s` }}
            >
              {/* Zaman çizelgesi noktası - sadece orta ve büyük ekranlarda */}
              <div className="absolute left-1/2 top-10 -translate-x-1/2 w-9 h-9 rounded-full hidden md:flex items-center justify-center z-10">
                <div className="w-7 h-7 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white">
                  {item.icon}
                </div>
              </div>

              <div
                className={`md:w-[46%] ${
                  index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                } transition-all`}
              >
                <div className="glass transition-all hover:translate-y-[-5px] rounded-lg shadow-lg hover:shadow-xl border border-glass-border">
                  {/* Renkli üst kısım */}
                  <div
                    className={`h-2 w-full bg-gradient-to-r ${item.color} rounded-t-lg`}
                  ></div>

                  <div className="p-6">
                    {/* İkon - sadece mobil ekranlarda */}
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`h-12 w-12 rounded-full bg-gradient-to-br ${item.color} flex md:hidden items-center justify-center text-xl`}
                      >
                        {item.icon}
                      </div>

                      {/* Başlık ve tarih */}
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-primary">
                          {item.type === "education"
                            ? t(item.schoolNameKey)
                            : t(item.titleKey)}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                            {item.period}
                          </span>
                          <span className="text-sm text-foreground/70">
                            {item.type === "education"
                              ? t(item.departmentKey)
                              : t(item.organizationKey)}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Açıklama */}
                    <div className="text-foreground/80 mb-4 text-sm leading-relaxed">
                      {t(item.descriptionKey)}
                    </div>

                    {/* Not - sadece eğitimler için */}
                    {item.type === "education" && (
                      <div className="flex items-center gap-2 bg-glass-bg p-2 rounded-md inline-flex">
                        <span className="text-lg">🏆</span>
                        <span>{t(item.gradeKey)}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Küçük ok işareti - sadece orta ve büyük ekranlarda */}
                <div
                  className={`hidden md:block absolute top-10 h-4 w-4 ${
                    index % 2 === 0
                      ? "left-0 -translate-x-1/2 rotate-45"
                      : "right-0 translate-x-1/2 rotate-45"
                  } bg-glass-bg border-t border-l border-glass-border`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
