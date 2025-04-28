"use client";
import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Scene from "./components/3D/Scene";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Scene />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}
