"use client";
import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import { useLang } from "../../context/LangContext";

// Proje verileri
const projectData = [
  {
    id: 1,
    titleKey: "project-tribda-title",
    periodKey: "project-tribda-period",
    descriptionKey: "project-tribda-desc",
    technologies: [
      "Next.js",
      "Zustand",
      "Tailwind CSS",
      "React Hook Form",
      "Axios",
    ],
    category: "experience",
  },
  {
    id: 2,
    titleKey: "project-sportlink-title",
    periodKey: "project-sportlink-period",
    descriptionKey: "project-sportlink-desc",
    technologies: [
      "React Native",
      "Expo",
      "Next.js",
      "GlueStack UI",
      "Shadcn/UI",
    ],
    category: "project",
  },
  {
    id: 3,
    titleKey: "project-pharmacy-title",
    periodKey: "project-pharmacy-period",
    descriptionKey: "project-pharmacy-desc",
    technologies: [
      "Next.js",
      "Tailwind",
      "Zustand",
      "MongoDB",
      "Prisma ORM",
      "NextAuth.js",
    ],
    category: "project",
  },
  {
    id: 4,
    titleKey: "project-website-title",
    descriptionKey: "project-website-desc",
    technologies: ["HTML", "CSS", "JavaScript"],
    icon: "🌐",
    category: "project",
  },
  {
    id: 5,
    titleKey: "project-blog-title",
    descriptionKey: "project-blog-desc",
    technologies: ["React", "Next.js", "TailwindCSS"],
    icon: "📱",
    category: "project",
  },
  {
    id: 6,
    titleKey: "qnb-internship-title",
    periodKey: "qnb-internship-period",
    descriptionKey: "qnb-internship-description",
    technologies: ["React", "JavaScript", "HTML", "CSS", "Banking Software"],
    category: "experience",
  },
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLang();

  const categories = ["all", ...new Set(projectData.map((p) => p.category))];

  const filteredProjects =
    selectedCategory === "all"
      ? projectData
      : projectData.filter((p) => p.category === selectedCategory);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        filteredProjects.forEach((project, index) => {
          setTimeout(() => {
            setVisibleProjects((prev) => [...prev, project.id]);
          }, index * 300);
        });
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isInView, filteredProjects]);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <section
      id="projects"
      className="py-20 px-6 section-container relative"
      ref={ref}
    >
      <div className="max-w-4xl mx-auto">
        <h2
          className={`section-title ${
            isInView ? "animate-slide-up" : "opacity-0"
          }`}
        >
          {t("projects-experience")}
        </h2>

        <div
          className={`flex flex-wrap gap-4 mb-10 ${
            isInView ? "animate-slide-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.2s" }}
        >
          {categories.map((cat, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-md text-sm transition-all ${
                selectedCategory === cat
                  ? "bg-primary text-white"
                  : "bg-muted hover:bg-primary/20"
              }`}
              onClick={() => handleCategoryClick(cat)}
            >
              {cat === "all" ? t("all") : t(cat)}
            </button>
          ))}
        </div>

        <div className="space-y-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`border-l-2 border-primary/30 pl-6 pb-8 relative transition-all ${
                visibleProjects.includes(project.id)
                  ? "animate-slide-up opacity-100"
                  : "opacity-0"
              }`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-primary"></div>

              <div className="flex items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold">{t(project.titleKey)}</h3>
                    {project.periodKey && (
                      <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                        {t(project.periodKey)}
                      </span>
                    )}
                    <span className="text-xs px-2 py-1 bg-secondary/10 text-secondary rounded-full">
                      {t(project.category)}
                    </span>
                  </div>

                  <p className="text-foreground/70 mb-4">
                    {t(project.descriptionKey)}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="skill-badge text-xs py-1 px-3">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
