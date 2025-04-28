"use client";
import { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext";

// Hydration hatalarını önlemek için önceden tanımlanmış değerler
const dots = [
  {
    size: 3,
    top: "5%",
    left: "38%",
    delay: "0.1s",
    duration: "18s",
    color: "bg-primary/20",
  },
  {
    size: 3,
    top: "89%",
    left: "76%",
    delay: "1.1s",
    duration: "16s",
    color: "bg-secondary/20",
  },
  {
    size: 2,
    top: "81%",
    left: "42%",
    delay: "2.1s",
    duration: "13s",
    color: "bg-accent/20",
  },
  {
    size: 3,
    top: "45%",
    left: "34%",
    delay: "1.4s",
    duration: "11s",
    color: "bg-primary/20",
  },
  {
    size: 3,
    top: "52%",
    left: "49%",
    delay: "3.0s",
    duration: "17s",
    color: "bg-secondary/20",
  },
  {
    size: 2,
    top: "68%",
    left: "80%",
    delay: "1.2s",
    duration: "18s",
    color: "bg-accent/20",
  },
  {
    size: 3,
    top: "40%",
    left: "91%",
    delay: "3.4s",
    duration: "12s",
    color: "bg-primary/20",
  },
  {
    size: 2,
    top: "16%",
    left: "7%",
    delay: "4.9s",
    duration: "18s",
    color: "bg-secondary/20",
  },
  {
    size: 2,
    top: "29%",
    left: "50%",
    delay: "4.2s",
    duration: "16s",
    color: "bg-accent/20",
  },
  {
    size: 4,
    top: "6%",
    left: "2%",
    delay: "3.0s",
    duration: "11s",
    color: "bg-primary/20",
  },
  {
    size: 2,
    top: "2%",
    left: "14%",
    delay: "4.7s",
    duration: "15s",
    color: "bg-secondary/20",
  },
  {
    size: 4,
    top: "88%",
    left: "16%",
    delay: "2.7s",
    duration: "19s",
    color: "bg-accent/20",
  },
];

// Yıldız efekti için noktalar
const stars = Array.from({ length: 30 }, () => ({
  size: Math.random() * 1.5 + 0.5,
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  opacity: Math.random() * 0.5 + 0.1,
  animationDuration: `${Math.random() * 3 + 2}s`,
  animationDelay: `${Math.random() * 2}s`,
}));

export default function Scene() {
  const [isClient, setIsClient] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      {/* Arka plan rengi - temalara uygun */}
      <div className="absolute inset-0 bg-[var(--background)] transition-colors duration-300"></div>

      {/* Grid background - tema değişimiyle uyumlu */}
      <div
        className={`absolute inset-0 grid-bg opacity-50 transition-opacity duration-300 ${
          theme === "light" ? "opacity-30" : "opacity-50"
        }`}
      ></div>

      {/* Yıldız efekti - sadece koyu temada görünecek */}
      {isClient && theme === "dark" && (
        <div className="absolute inset-0 transition-opacity duration-300">
          {stars.map((star, i) => (
            <div
              key={`star-${i}`}
              className="absolute rounded-full bg-white animate-pulse-slow"
              style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
                top: star.top,
                left: star.left,
                opacity: star.opacity,
                animationDuration: star.animationDuration,
                animationDelay: star.animationDelay,
              }}
            />
          ))}
        </div>
      )}

      {/* Asimetrik gradyan efektleri */}
      <div className="absolute inset-0 transition-opacity duration-300">
        <div
          className={`absolute top-0 left-0 w-full h-2/3 bg-gradient-to-b from-primary/5 to-transparent ${
            theme === "light" ? "opacity-20" : "opacity-30"
          }`}
        ></div>
        <div
          className={`absolute bottom-0 right-0 w-2/3 h-1/2 bg-gradient-to-t from-secondary/5 to-transparent ${
            theme === "light" ? "opacity-10" : "opacity-20"
          }`}
        ></div>
        <div
          className={`absolute bottom-1/4 left-0 w-1/2 h-1/3 bg-gradient-to-r from-accent/5 to-transparent ${
            theme === "light" ? "opacity-10" : "opacity-15"
          }`}
        ></div>
      </div>

      {/* Hareketli noktalar */}
      {isClient && (
        <div
          className={`relative w-full h-full transition-all duration-1000 ${
            theme === "light" ? "opacity-50" : "opacity-80"
          }`}
        >
          {dots.map((dot, i) => (
            <div
              key={i}
              className={`absolute rounded-full ${dot.color} animate-float ${
                theme === "light" ? "" : "blur-sm"
              }`}
              style={{
                width: `${dot.size}px`,
                height: `${dot.size}px`,
                top: dot.top,
                left: dot.left,
                animationDelay: dot.delay,
                animationDuration: dot.duration,
              }}
            />
          ))}
        </div>
      )}

      {/* İnce gölge efekti - sadece koyu temada */}
      {theme === "dark" && (
        <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.7)] transition-all duration-300"></div>
      )}
    </div>
  );
}
