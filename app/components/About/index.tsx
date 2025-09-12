"use client";
import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useLang } from "../../context/LangContext";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLang();
 
  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  return (
    <section id="about" className="py-20 px-6 section-container" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <h2
          className={`section-title ${
            isVisible ? "animate-slide-up" : "opacity-0"
          }`}
        >
          {t("about-title")}
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div
              className={`prose text-foreground/80 space-y-6 ${
                isVisible ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: "0.2s" }}
            >
              <p>{t("about-text-1")}</p>
              <p>{t("about-text-2")}</p>
              <p>{t("about-text-3")}</p>
            </div>
          </div>

          <div>
            <div
              className={`glass p-6 ${
                isVisible ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: "0.3s" }}
            >
              <h3 className="text-xl font-bold mb-4 text-primary">
                {t("career-goal")}
              </h3>
              <p className="text-foreground/80 mb-6">{t("career-goal-text")}</p>

              <h3 className="text-xl font-bold mb-4 text-primary">
                {t("education")}
              </h3>
              <div className="mb-6">
                <p className="font-bold">{t("university")}</p>
                <p className="text-sm text-foreground/70">
                  {t("university-location")}
                </p>
                <p className="text-sm mt-2">{t("gpa")}</p>
              </div>

              <h3 className="text-xl font-bold mb-4 text-primary">
                {t("learning-desire")}
              </h3>
              <div className="relative h-3 w-full bg-muted rounded-full overflow-hidden mb-2">
                <div className="absolute h-full bg-gradient-to-r from-primary to-secondary w-full"></div>
              </div>
              <p className="text-right text-sm">100%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
