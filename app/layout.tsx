import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LangProvider } from "./context/LangContext";
import { ThemeProvider } from "./context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eren İridere - Kişisel Website",
  description:
    "Eren İridere'nin kişisel web sitesi - Frontend Geliştirici, Bilgisayar Mühendisliği Öğrencisi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="scroll-smooth dark">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            // Yumuşak kaydırma işlevi
            document.addEventListener('DOMContentLoaded', function() {
              // Tüm anker bağlantıları seçin
              const anchors = document.querySelectorAll('a[href^="#"]');
              
              // Her anker bağlantısına bir tıklama olayı dinleyicisi ekleyin
              anchors.forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                  e.preventDefault();
                  
                  // Hedef elemanı alın
                  const targetId = this.getAttribute('href');
                  const targetElement = document.querySelector(targetId);
                  
                  if (targetElement) {
                    // Yumuşak kaydırma
                    targetElement.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start'
                    });
                    
                    // URL'e fragment ekleyin (isteğe bağlı)
                    history.pushState(null, null, targetId);
                  }
                });
              });
            });
          `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <LangProvider>{children}</LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
